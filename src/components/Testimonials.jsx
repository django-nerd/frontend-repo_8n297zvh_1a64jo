import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The team unlocked a 3.2x ROAS within 90 days and built a content engine that keeps compounding. They feel like an in-house team.',
    author: 'Amelia Chen',
    role: 'VP Growth, Nimbus',
  },
  {
    quote:
      'Our new brand identity and product positioning clarified our story and lifted conversions by 41% in the first month.',
    author: 'Marcus Hill',
    role: 'CEO, Altura Labs',
  },
  {
    quote:
      'They run experimentation like a science. Clear hypotheses, rapid testing, and real business results.',
    author: 'Priya Singh',
    role: 'Head of Marketing, Loops',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="relative rounded-2xl border border-gray-200 p-6 shadow-sm">
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-blue-200" />
              <blockquote className="text-gray-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-500">
                <span className="font-semibold text-gray-900">{t.author}</span>
                <span className="ml-2">— {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
