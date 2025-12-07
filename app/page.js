// app/page.js — The stunning version with carousel
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";

export default function HomePage() {
  const [businessCount, setBusinessCount] = useState(47); // Fake for now

  useEffect(() => {
    if (typeof window === "undefined") return;
    supabase
      .from("businesses")
      .select("*", { count: "exact", head: true })
      .then(({ count }) => {
        if (count !== null) setBusinessCount(count);
      });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight mb-4">
            BizHub.<span className="text-sky-600">Kiwi</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 font-medium mb-8">
            Kiwi Businesses. Powered by Locals, for Locals.
          </p>
          <p className="text-2xl lg:text-3xl text-gray-800 mb-8">
            <span className="font-bold text-sky-600">{businessCount}+</span> local businesses already have their free online home
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/join"
              className="px-12 py-6 bg-sky-600 hover:bg-sky-700 text-white text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Claim Your Free Business Page
            </Link>
            <Link
              href="#examples"
              className="px-12 py-6 border-4 border-sky-600 text-sky-600 hover:bg-sky-50 text-xl font-bold rounded-full transition-all duration-200"
            >
              See Examples
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-600">
            <div className="flex flex-col items-center"><span className="text-3xl mb-2">✓</span> No credit card</div>
            <div className="flex flex-col items-center"><span className="text-3xl mb-2">✓</span> Live in 2 minutes</div>
            <div className="flex flex-col items-center"><span className="text-3xl mb-2">✓</span> You own your page</div>
            <div className="flex flex-col items-center"><span className="text-3xl mb-2">✓</span> Found on Google</div>
          </div>
        </div>
      </section>

      {/* FLOATING CAROUSEL SECTION */}
      <section id="examples" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [background-size:100px_100px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Your Page Will Look This Good
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {["Sarah's Café", "Kiwi Plumbing Ltd", "Aroha Beauty Studio"].map((name) => (
              <div key={name} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-sky-400 to-teal-500 h-48 flex items-center justify-center text-white text-3xl font-bold">
                  {name}
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-4">✓ About • Services • Gallery • Contact</p>
                  <p className="text-sm text-gray-500">bizhub.kiwi/business/{name.toLowerCase().replace(/\s/g, "-")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
