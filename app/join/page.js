"use client";
import supabase from "supabaseClient.js";
import { useState } from "react";

export default function JoinPage() {
  const supabase = createClient();

  const [form, setForm] = useState({
    name: "",
    category: "",
    email: "",
    phone: "",
    description: ""
  });

  async function submitForm(e) {
    e.preventDefault();

    const { error } = await supabase.from("businesses").insert([form]);

    if (error) {
      alert("Error adding business");
    } else {
      alert("Business added!");
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">List Your Business</h1>

      <form onSubmit={submitForm}>
        <input className="border p-2 w-full mb-3" placeholder="Business Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="border p-2 w-full mb-3" placeholder="Category"
          onChange={(e) => setForm({ ...form, category: e.target.value })} />

        <textarea className="border p-2 w-full mb-3" placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })} />

        <button className="px-4 py-2 text-white rounded-lg"
          style={{ background: "var(--brand-red)" }}>
          Submit
        </button>
      </form>
    </main>
  );
}
