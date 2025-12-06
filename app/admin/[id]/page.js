"use client";
import supabase from '@/lib/supabaseClient';
import { useState, useEffect } from "react";

export default function AdminBusiness({ params }) {
  
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    supabase
      .from("businesses")
      .select("*")
      .eq("id", params.id)
      .single()
      .then(({ data }) => setBusiness(data));
  }, []);

  async function updateBusiness() {
    await supabase
      .from("businesses")
      .update(business)
      .eq("id", params.id);

    alert("Business updated!");
  }

  if (!business) return <p>Loading…</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Business</h1>

      <input
        className="border p-2 w-full mb-2"
        value={business.name || ""}
        onChange={(e) => setBusiness({ ...business, name: e.target.value })}
      />

      <textarea
        className="border p-2 w-full mb-2"
        value={business.description || ""}
        onChange={(e) => setBusiness({ ...business, description: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-2"
        value={business.phone || ""}
        onChange={(e) => setBusiness({ ...business, phone: e.target.value })}
      />

      <button
        className="px-4 py-2 text-white rounded-lg"
        style={{ background: "var(--brand-red)" }}
        onClick={updateBusiness}
      >
        Save
      </button>
    </div>
  );
}
