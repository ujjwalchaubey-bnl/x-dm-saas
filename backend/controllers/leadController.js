// backend/controllers/leadController.js
import { supabase } from "../config/supabaseClient.js";

// GET all leads for logged-in user
export const getLeads = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .eq("user_id", req.user.id);

    if (error) {
      console.error("Get Leads Error:", error);
      return res.status(400).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    console.error("Unexpected Error in getLeads:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ADD a new lead for logged-in user
export const addLead = async (req, res) => {
  const { name, email, company } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const { data, error } = await supabase.from("leads").insert([{
      name,
      email,
      company: company || null,
      user_id: req.user.id
    }]);

    if (error) {
      console.error("Add Lead Error:", error);
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    console.error("Unexpected Error in addLead:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
