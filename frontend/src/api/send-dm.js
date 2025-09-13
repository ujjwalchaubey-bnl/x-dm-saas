import { createClient } from "@supabase/supabase-js";

// Create Supabase client (server-side, use service_role key later)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { user_id, campaign_id, message, recipient } = req.body;

    if (!user_id || !campaign_id || !message || !recipient) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // ✅ Check credits
    const { data: creditsData, error: creditsError } = await supabase
      .from("credits")
      .select("balance")
      .eq("user_id", user_id)
      .single();

    if (creditsError) throw creditsError;

    if (!creditsData || creditsData.balance <= 0) {
      return res.status(400).json({ error: "Not enough credits" });
    }

    // ✅ Insert into logs (job queue)
    const { error: logError } = await supabase.from("logs").insert([
      {
        user_id,
        campaign_id,
        message,
        recipient,
        status: "pending",
      },
    ]);

    if (logError) throw logError;

    // ✅ Deduct 1 credit
    const { error: updateError } = await supabase
      .from("credits")
      .update({ balance: creditsData.balance - 1 })
      .eq("user_id", user_id);

    if (updateError) throw updateError;

    return res.status(200).json({ success: true, message: "Job queued!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
