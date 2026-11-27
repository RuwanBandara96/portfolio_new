import Navbar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-10 space-y-1">
        <Hero />
        <section className="px-4">
          <About />
        </section>
        <section className="px-4">
          <Experience />
        </section>
        <section className="px-4">
          <Projects />
        </section>
        <section className="px-4 pb-1">
          <Contact />
        </section>
      </div>

    </main>
  )
}