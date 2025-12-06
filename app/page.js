import { supabase } from '../supabaseClient'

export default async function Home() {
  const { data: businesses, error } = await supabase
    .from('businesses')
    .select('*')
    .limit(10)

  console.log(error)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>BizHub Kiwi MVP</h1>
      <div>
        {businesses?.length === 0
          ? 'No businesses yet'
          : businesses.map(b => (
              <div key={b.id} style={{ marginBottom: '1rem' }}>
                <h2>{b.name}</h2>
                <p>{b.category} - {b.region}</p>
              </div>
            ))}
      </div>
    </div>
  )
}
