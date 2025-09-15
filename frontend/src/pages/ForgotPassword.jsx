import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password", // change to your deployed URL later
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Password reset email sent! Check your inbox.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-extrabold mb-4">Reset Your Password 🔑</h1>
        <p className="text-lg text-blue-100 text-center max-w-sm">
          Don’t worry, it happens! Enter your email and we’ll send you a reset
          link to get back into your account.
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Forgot Password?
          </h2>

          {message && (
            <p className="text-center text-sm text-gray-600 mb-4">{message}</p>
          )}

          <form onSubmit={handleReset} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to login */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Remembered your password?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
