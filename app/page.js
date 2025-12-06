"use client";

import { useEffect, useState } from "react";
import supabase from "import supabase from "../supabaseClient";
";

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
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">BizHub Kiwi MVP</h1>

      {businesses.length === 0 && <p>No businesses yet</p>}

      <ul>
        {businesses.map((b) => (
          <li key={b.id}>{b.name}</li>
        ))}
      </ul>
    </main>
  );
}
