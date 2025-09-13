import { supabase } from "../config/supabaseClient.js";

export const getCampaigns = async (req, res) => {
  const { data, error } = await supabase.from("campaigns").select("*").eq("user_id", req.user.id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

export const createCampaign = async (req, res) => {
  const { name, message } = req.body;
  const { data, error } = await supabase.from("campaigns").insert([{ 
    name, 
    message, 
    user_id: req.user.id 
  }]);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};
