export default function Work() {
  const logos = ['Stripe', 'Figma', 'Notion', 'Shopify', 'Webflow', 'HubSpot']

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Brands that trust us</h2>
          <p className="mt-3 text-gray-600">From seed-stage startups to global enterprises</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="h-14 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 font-semibold">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
