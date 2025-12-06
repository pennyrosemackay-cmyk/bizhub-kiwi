import Link from "next/link";
import { createClient } from "@/utils/supabaseClient";

export default async function Home() {
  const supabase = createClient();
  const { data: businesses } = await supabase
    .from("businesses")
    .select("*");

  return (
    <main className="max-w-6xl mx-auto p-6">

      {/* HERO SECTION */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--brand-charcoal)" }}>
          BizHub.Kiwi
        </h1>

        <p className="text-xl mb-8" style={{ color: "var(--brand-red)" }}>
          Connecting Kiwi Businesses
        </p>

        <input
          type="text"
          placeholder="Search businesses…"
          className="w-full max-w-md p-4 rounded-lg border"
          style={{ borderColor: "var(--neutral-divider)" }}
        />
      </section>

      {/* CATEGORY GRID */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Trades", "Food", "Beauty", "Health", "Tech", "Retail", "Auto", "Services"].map((cat) => (
            <div
              key={cat}
              className="p-6 rounded-xl text-center cursor-pointer"
              style={{
                background: "var(--neutral-light)",
                border: "1px solid var(--neutral-divider)"
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS DIRECTORY */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Local Businesses</h2>

        {(!businesses || businesses.length === 0) && (
          <p>No businesses yet.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businesses?.map((b) => (
            <Link
              key={b.id}
              href={`/business/${b.id}`}
              className="p-6 rounded-xl shadow-md"
              style={{ background: "var(--brand-white)" }}
            >
              <h3 className="text-xl font-bold mb-2">{b.name}</h3>
              <p>{b.category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <Link
          href="/join"
          className="px-6 py-3 text-white rounded-lg"
          style={{ background: "var(--brand-red)" }}
        >
          List Your Business
        </Link>
      </section>

    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import supabase from "../supabaseClient";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch businesses whenever searchTerm changes
  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("businesses") // <-- replace with your table name
        .select("*")
        .ilike("name", `%${searchTerm}%`); // case-insensitive search

      if (error) {
        console.error(error);
      } else {
        setResults(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">BizHub Kiwi</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search businesses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-6"
      />

      {/* Results */}
      {loading && <p>Loading...</p>}
      {!loading && results.length === 0 && searchTerm !== "" && (
        <p>No results found.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((business) => (
          <div key={business.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold text-xl">{business.name}</h2>
            <p>{business.category}</p>
            <p>{business.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
