"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight">
              BizHub.<span className="text-sky-600">Kiwi</span>
            </h1>
            <p className="mt-4 text-xl lg:text-2xl text-gray-700 font-medium">
              Kiwi Businesses. Powered by Locals, for Locals.
            </p>
          </div>

          <p className="text-2xl lg:text-3xl text-gray-800 mb-8">
            <span className="font-bold text-sky-600">47+</span> local businesses already have their free online home
          </p>

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

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2"><span className="text-2xl">✓</span> No credit card</div>
            <div className="flex items-center gap-2"><span className="text-2xl">✓</span> Live in 2 minutes</div>
            <div className="flex items-center gap-2"><span className="text-2xl">✓</span> You own your page</div>
            <div className="flex items-center gap-2"><span className="text-2xl">✓</span> Found on Google</div>
          </div>
        </div>
      </section>
    </>
  );
}
