'use client'

import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard'
import StatsCards from './StatsCards'

const techStack = [
  'Next.js',
  'TypeScript',
  'Node.js',
  'Java',
  'MySQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Redis',
]

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I’m{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ruwan Bandara
            </span>
          </motion.h1>

          <p className="mt-4 text-gray-300 text-lg">
            Full Stack Engineer • Building scalable systems
          </p>

          <p className="mt-3 text-gray-400 text-sm max-w-xl">
            Specialized in microservices, ERP systems, and enterprise applications.
          </p>

          {/* CTA */}
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl glass hover:scale-105 transition"
            >
              Contact Me
            </a>
            <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border hover:scale-105 transition"
        >
            View CV
            </a>
          </div>

          {/* TECH STACK */}
          <div className="mt-8">
            <p className="text-sm text-gray-400 mb-3">Technologies</p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 hover:bg-blue-500/20 hover:border-blue-400 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <ProfileCard />
          <StatsCards />
        </div>

      </div>

    </section>
  )
}