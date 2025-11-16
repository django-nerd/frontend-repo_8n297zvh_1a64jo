export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
      <div className="mx-auto max-w-7xl px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">Ready to accelerate your growth?</h2>
        <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
          Tell us about your goals and we’ll prepare a free strategy outline for your next quarter.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl mx-auto">
          <input type="text" placeholder="Your name" className="col-span-3 sm:col-span-1 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60" required />
          <input type="email" placeholder="Work email" className="col-span-3 sm:col-span-1 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60" required />
          <input type="text" placeholder="Company" className="col-span-3 sm:col-span-1 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60" />
          <button className="col-span-3 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition-colors">
            Get my free strategy
          </button>
        </form>
        <p className="mt-3 text-sm text-blue-100">No spam. No pressure. Just value.</p>
      </div>
    </section>
  )
}
