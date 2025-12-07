"use client";

import supabase from '@/lib/supabaseClient';
import { useState } from "react";

export default function JoinPage() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("businesses").insert({ name });
    if (!error) alert("Success! Your page is ready.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Join BizHub.Kiwi</h1>
        <input
          type="text"
          placeholder="Your business name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-sky-600 text-white py-3 rounded font-bold">
          Create My Free Page
        </button>
      </form>
    </div>
  );
}
