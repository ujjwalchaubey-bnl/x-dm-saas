import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { user_id } = req.query;

    if (!user_id) {
      return res.status(400).json({ error: "Missing user_id" });
    }

    const { data, error } = await supabase
      .from("credits")
      .select("balance")
      .eq("user_id", user_id)
      .single();

    if (error) throw error;

    return res.status(200).json({ balance: data.balance });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
