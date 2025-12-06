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
