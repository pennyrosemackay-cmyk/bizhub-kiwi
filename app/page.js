"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";

export default function HomePage() {
  const [businessCount, setBusinessCount] = useState(0);

  useEffect(() => {
    // Optional: show live count of joined businesses
    supabase.from("businesses").select("*", { count: "exact", head: true }).then(({ count }) => {
      if (count) setBusinessCount(count);
    });
  }, []);

  return (
    <>
      {/* HERO – Your new "impressive front door" */}
{/* Inside the hero section — replace the old CTA area */}
<div className="max-w-4xl mx-auto mt-16 bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-4 border-sky-100">
  <h2 className="text-4xl lg:text-5xl font-black text-center mb-8">
    First month <span className="text-sky-600">FREE</span> — then just $29/month
  </h2>
  <p className="text-xl text-center text-gray-700 mb-10">
    Cheaper than a coffee a day. Cancel anytime. No lock-in contracts.
  </p>

  <div className="grid md:grid-cols-3 gap-6 mb-10">
    <div className="text-center">
      <div className="text-5xl font-black text-red-600 line-through">$299</div>
      <div className="text-2xl font-bold">Typical NZ website</div>
    </div>
    <div className="text-6xl font-black text-sky-600">→</div>
    <div className="text-center">
      <div className="text-5xl font-black text-green-600">$29</div>
      <div className="text-2xl font-bold">Your BizHub page</div>
      <div className="text-lg text-gray-600">Save $270/month</div>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row gap-6 justify-center">
    <Link href="/join" className="px-12 py-6 bg-sky-600 hover:bg-sky-700 text-white text-2xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all">
      Start Free Trial → Live in 5 Minutes
    </Link>
    <Link href="/pro" className="px-12 py-6 border-4 border-orange-500 text-orange-600 hover:bg-orange-50 text-xl font-bold rounded-full">
      Or get Pro Setup for $149 (we build it for you)
    </Link>
  </div>

  <p className="text-center mt-8 text-gray-600">
    Powered by Locals, for Locals ❤️ 100% NZ owned
  </p>
</div>
          {/* Logo + Tagline */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-white">
                  <HandshakeIcon className="w-20 h-20 lg:w-28 lg:h-28 text-sky-600" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight">
              BizHub.<span className="text-sky-600">Kiwi</span>
            </h1>
            <p className="mt-4 text-xl lg:text-2xl text-gray-700 font-medium">
              Kiwi Businesses. Powered by Locals, for Locals.
            </p>
          </div>

          {/* Trust line */}
          <p className="text-2xl lg:text-3xl text-gray-800 mb-8">
            <span className="font-bold text-sky-600">{businessCount}+</span> local businesses already have their free online home
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
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

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2"><span className="text-2xl">✓</span> No credit card</div>
            <div className="flex items-center gap-2"><span className="text-2xl">✓</span> Live in 2 minutes</div>
            <div className="flex items-center gap-2"><span className="text-2xl">✓</span> You own your page</div>
            <div className="flex items-center gap-2"><span className="text-2xl">✓</span> Found on Google</div>
          </div>
        </div>
      </section>

      {/* EXAMPLE MINI-SITES (scroll trigger) */}
      <section id="examples" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Your Page Will Look This Good
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {["Sarah’s Café", "Kiwi Plumbing Ltd", "Aroha Beauty Studio"].map((name) => (
              <div key={name} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all">
                <div className="bg-gradient-to-r from-sky-400 to-teal-500 h-40 flex items-center justify-center text-white text-3xl font-bold">
                  {name}
                </div>
                <div className="p-8 space-y-4">
                  <p className="text-gray-700">✓ About • Services • Gallery • Contact</p>
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

// Beautiful handshake icon (inline SVG – no extra packages)
function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="currentColor">
      <path d="M100 20 C120 20, 140 40, 140 60 L140 80 L160 80 L160 100 L140 100 L140 120 C140 140, 120 160, 100 160 C80 160, 60 140, 60 120 L60 100 L40 100 L40 80 L60 80 L60 60 C60 40, 80 20, 100 20 Z" />
      <path d="M80 80 L120 120 M120 80 L80 120" stroke="white" strokeWidth="12" strokeLinecap="round"/>
      <circle cx="70" cy="70" r="12" fill="white"/>
      <circle cx="130" cy="130" r="12" fill="white"/>
    </svg>
  );
}
