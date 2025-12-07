"use client";

import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

export default function HomePage() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from("businesses")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        console.error("Error fetching businesses:", error);
      } else {
        setBusinesses(data);
      }
    }
    loadData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          BizHub.Kiwi
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Kiwi Businesses. Powered by Locals, for Locals.
        </p>
        <p className="text-gray-600 mb-6">{businesses.length}+ businesses already live</p>
        <a
          href="/join"
          className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
        >
          Claim Your Free Page
        </a>
      </section>

      {/* Business Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {businesses.length === 0 && <p className="col-span-full text-center">No businesses yet</p>}
        {businesses.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{b.name}</h2>
            {b.category && <p className="text-gray-600 mb-2">{b.category}</p>}
            {b.description && <p className="text-gray-700 flex-grow">{b.description}</p>}
            <a
              href={`/business/${b.id}`}
              className="mt-4 inline-block text-red-600 font-semibold hover:underline"
            >
              View Page
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
