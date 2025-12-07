"use client";

import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";

export default function HomePage() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from("businesses")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setBusinesses(data);
      }
    }
    loadData();
  }, []);

  return (
    <main className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-green-800">
          BizHub.Kiwi
        </h1>
        <p className="text-xl text-green-700">
          Kiwi Businesses. Powered by Locals, for Locals.
        </p>
        <p className="text-md text-green-600 mt-2">
          47+ businesses already live
        </p>
        <a
          href="/join"
          className="mt-6 inline-block px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Claim Your Free Page
        </a>
      </section>

      {/* Business Listings */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.length === 0 && (
          <p className="text-green-800">No businesses yet</p>
        )}
        {businesses.map((b) => (
          <div
            key={b.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{b.name}</h2>
            <p className="text-green-700 mb-1">{b.category}</p>
            <p className="text-green-600">{b.description}</p>
            <a
              href={`/business/${b.id}`}
              className="mt-2 inline-block text-green-800 hover:underline"
            >
              View Page →
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
