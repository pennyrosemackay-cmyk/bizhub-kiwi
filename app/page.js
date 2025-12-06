"use client"; // Required for interactive components

import { useState, useEffect } from "react";
import supabase from "../supabaseClient";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("businesses") // <-- replace with your table name
        .select("*")
        .ilike("name", `%${searchTerm}%`);

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setResults(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">BizHub Kiwi</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search businesses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-3 rounded w-full mb-6"
      />

      {/* Results */}
      {loading && <p>Loading...</p>}
      {!loading && results.length === 0 && searchTerm !== "" && (
        <p>No results found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((business) => (
          <div
            key={business.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-xl">{business.name}</h2>
            <p>{business.category}</p>
            <p>{business.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
