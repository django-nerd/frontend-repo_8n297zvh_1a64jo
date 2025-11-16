import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 bg-gradient-to-b from-white to-blue-50">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Growth-focused marketing that makes brands shine
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-lg text-gray-600 max-w-xl">
              We help ambitious companies acquire customers, increase revenue, and build memorable brands through data-driven strategy and standout creative.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                Get a free strategy call
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50">
                Explore services
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-3 text-gray-600">
              <Sparkles size={18} className="text-blue-600" />
              <p className="text-sm">Trusted by 120+ startups and enterprises</p>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white ring-1 ring-gray-200 shadow-xl overflow-hidden">
              <div className="p-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Paid Media', desc: 'ROI-optimized ads across Google, Meta, TikTok', color: 'from-blue-500 to-indigo-500' },
                  { title: 'SEO & Content', desc: 'Compounding organic growth that lasts', color: 'from-emerald-500 to-teal-500' },
                  { title: 'Brand & Creative', desc: 'Design that tells your story and converts', color: 'from-fuchsia-500 to-pink-500' },
                  { title: 'CRO & Analytics', desc: 'Experimentation, testing, and insights', color: 'from-amber-500 to-orange-500' },
                ].map((c) => (
                  <div key={c.title} className="rounded-xl border border-gray-200 p-4">
                    <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${c.color} mb-3`} />
                    <h3 className="font-semibold text-gray-900">{c.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
