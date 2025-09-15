import { chromium } from 'playwright';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function runWorker() {
  console.log('🚀 Starting DM worker...');

  try {
    // 1️⃣ Fetch pending jobs
    const { data: jobs, error } = await supabase
      .from('logs')
      .select('*')
      .eq('status', 'pending');

    if (error) throw error;

    if (!jobs || jobs.length === 0) {
      console.log('✅ No pending jobs. Exiting...');
      return;
    }

    console.log(`📩 Found ${jobs.length} pending jobs.`);

    // 2️⃣ Launch Chromium with persistent context (replace with your folder path)
    const browser = await chromium.launchPersistentContext(
      './playwright-session', // <-- This folder stores cookies/session
      {
        headless: false,        // Set true for headless mode
        viewport: { width: 1200, height: 800 },
      }
    );

    const page = await browser.newPage();

    for (const job of jobs) {
      try {
        console.log(`💬 Sending DM to: ${job.recipient_handle}`);

        // Go directly to DM page
        await page.goto(`https://x.com/messages/compose?recipient_id=${job.recipient_handle}`, { waitUntil: 'networkidle' });

        // Fill DM box
        const dmBox = await page.waitForSelector('div[role="textbox"]', { timeout: 30000 });
        await dmBox.fill(job.message || 'Hello!');

        // Press Enter to send
        await dmBox.press('Enter');

        // Wait random 1–3 seconds to mimic human behavior
        await page.waitForTimeout(Math.floor(Math.random() * 2000) + 1000);

        // Update Supabase log
        await supabase
          .from('logs')
          .update({ status: 'sent', 'sent at': new Date().toISOString() })
          .eq('campaign_id', job.campaign_id)
          .eq('recipient_handle', job.recipient_handle);

        console.log(`✅ DM sent to ${job.recipient_handle}`);

      } catch (err) {
        console.error(`❌ Failed to send DM to ${job.recipient_handle}:`, err.message);
      }
    }

    await browser.close();
    console.log('🚀 All jobs processed. Worker finished.');

  } catch (err) {
    console.error('❌ Worker failed:', err.message);
  }
}

// Run the worker
runWorker();
