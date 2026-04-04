'use client'

import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Microservices Architecture',
    desc: 'Designing scalable, modular backend systems',
  },
  {
    title: 'Enterprise Systems',
    desc: 'ERP, Loan, Inventory & Auction platforms',
  },
  {
    title: 'Full Stack Development',
    desc: 'Next.js + Node.js end-to-end solutions',
  },
  {
    title: 'REST APIs',
    desc: 'Secure, performant API development',
  },
  {
    title: 'Cloud & AWS',
    desc: 'Deploying scalable cloud-based systems',
  },
  {
    title: 'System Design',
    desc: 'Clean architecture & maintainable code',
  },
]

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-8"
      >
        About Me
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-gray-300 leading-7">
          I’m a <span className="text-blue-400 font-semibold">Full Stack Engineer </span> 
          passionate about building scalable, high-performance applications using modern technologies.
        </p>

        <p className="text-gray-400 mt-4 text-sm leading-6">
          I specialize in microservices architecture and enterprise systems including ERP,
          Loan Management, Inventory, and Auction platforms. I enjoy solving complex
          real-world problems and transforming them into clean, efficient, and maintainable solutions.
        </p>
      </motion.div>

      {/* HIGHLIGHT CARDS */}
      <div className="grid md:grid-cols-3 gap-5 mt-12">

        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-5 rounded-xl hover:scale-105 transition hover:shadow-xl hover:shadow-blue-500/10"
          >
            <h3 className="text-sm font-semibold text-white">
              {item.title}
            </h3>

            <p className="text-xs text-gray-400 mt-2 leading-5">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  )
}