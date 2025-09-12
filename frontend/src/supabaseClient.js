import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pthwijtcyluddgmchfcv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0aHdpanRjeWx1ZGRnbWNoZmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1ODAwNzUsImV4cCI6MjA3MzE1NjA3NX0.TElIGmYHYAsOOeGsFQZFSKfSPmswU1n42pVy7a2-u5o"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
