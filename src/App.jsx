import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Work />
        <Testimonials />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BlueFlame Marketing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="/test" className="hover:text-gray-900">System Check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
