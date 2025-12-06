import { createClient } from "../supabaseClient";

export default async function BusinessPage({ params }) {
  const supabase = createClient();

  const { data: business } = await supabase
    .from("businesses")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!business) {
    return <p>Business not found.</p>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{business.name}</h1>
      <p className="text-lg mb-4">{business.description}</p>
      <p className="text-md mb-4"><strong>Category:</strong> {business.category}</p>

      {/* Gallery */}
      <section className="grid grid-cols-2 gap-4">
        {business.gallery?.map((img, idx) => (
          <img key={idx} src={img} className="rounded-lg" />
        ))}
      </section>

      {/* Contact */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>{business.phone}</p>
        <p>{business.email}</p>
        <p>{business.website}</p>
      </section>
    </main>
  );
}
