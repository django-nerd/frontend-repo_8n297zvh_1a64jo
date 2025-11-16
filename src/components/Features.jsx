import { BarChart3, Target, Palette, LineChart } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Paid Media',
    desc: 'Full-funnel campaigns across Google, Meta, LinkedIn, and TikTok with relentless optimization.',
  },
  {
    icon: Target,
    title: 'SEO & Content',
    desc: 'Technical SEO, content engines, and digital PR to build durable organic growth.',
  },
  {
    icon: Palette,
    title: 'Brand & Creative',
    desc: 'Identity systems, landing pages, and performance creatives that convert.',
  },
  {
    icon: LineChart,
    title: 'CRO & Analytics',
    desc: 'Experimentation programs, tracking, and dashboards that reveal what works.',
  },
]

export default function Features() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Proven growth programs tailored to your stage, goals, and audience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
