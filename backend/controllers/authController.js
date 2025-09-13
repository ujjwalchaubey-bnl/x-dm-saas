// controllers/authController.js
import { supabase } from "../config/supabaseClient.js";

/**
 * SIGNUP
 */
export const signup = async (req, res) => {
  const { email, password } = req.body;

  // ✅ Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters." });
  }

  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      // Send Supabase error clearly
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({
      message: "Signup successful! Please check your email for confirmation.",
      user: data.user,
      session: data.session,
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error during signup." });
  }
};

/**
 * LOGIN
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  // ✅ Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({
      message: "Login successful!",
      access_token: data.session.access_token,
      user: data.user,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error during login." });
  }
};

/**
 * GET PROFILE
 */
export const getProfile = async (req, res) => {
  try {
    const user = req.user; // populated by authMiddleware
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json({ user });
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ error: "Internal server error while fetching profile." });
  }
};
