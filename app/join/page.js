// app/join/page.js — 100% working plain JavaScript version
"use client";

import { useState } from "react";
import Link from "next/link";
import supabase from "@/lib/supabaseClient";

export default function JoinPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.target));

    const { error } = await supabase.from("businesses").insert([formData]);

    if (!error) {
      setSuccess(true);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center p-6">
        <div className="text-center p-12 bg-white rounded-3xl shadow-2xl max-w-lg">
          <h1 className="text-4xl font-bold text-sky-600 mb-4">Welcome aboard!</h1>
          <p className="text-xl mb-8">Your BizHub.Kiwi page is live.</p>
          <Link href="/" className="inline-block px-8 py-4 bg-sky-600 text-white rounded-full font-bold">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-4">Claim Your Free Page</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          First month free — then just $29/month
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-10 space-y-6">
          <input name="name" placeholder="Business Name" required className="w-full px-6 py-4 border rounded-xl" />
          <input name="email" type="email" placeholder="Email" required className="w-full px-6 py-4 border rounded-xl" />
          <input name="phone" placeholder="Phone (optional)" className="w-full px-6 py-4 border rounded-xl" />
          <textarea name="about" placeholder="Tell us about your business" rows="4" className="w-full px-6 py-4 border rounded-xl" />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-6 bg-sky-600 hover:bg-sky-700 text-white text-xl font-bold rounded-xl disabled:opacity-50 transition"
          >
            {loading ? "Creating Your Page..." : "Get My Free Page →"}
          </button>
        </form>
      </div>
    </div>
  );
}
