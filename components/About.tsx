'use client'

import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Team Leadership & Delivery',
    desc: 'Leading cross-functional Agile squads, code reviews, and release quality',
  },
  {
    title: 'Fintech & ERP Systems',
    desc: 'Pawning, Loan Management, Inventory Batch Pricing & Core ERP modules',
  },
  {
    title: 'Full-Stack & Mobile',
    desc: 'Next.js, React, React Native, Node.js, TypeScript & TypeORM',
  },
  {
    title: 'AI & MCP Integration',
    desc: 'Model Context Protocol servers for real-time data & interest queries',
  },
  {
    title: 'Database & Query Tuning',
    desc: 'MySQL & MongoDB optimization, transactions, RBAC & audit integrity',
  },
  {
    title: 'System Architecture',
    desc: 'Scalable APIs, clean domain modeling & maintainable codebases',
  },
]

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl font-bold text-center mb-8"
      >
        About Me
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-gray-300 leading-7">
          I’m a <span className="text-blue-400 font-semibold">Software Team Lead &amp; Full-Stack Engineer</span> with 4+ years of experience building scalable, high-performance applications across web, mobile, and backend systems.
        </p>

        <p className="text-gray-400 mt-4 text-sm leading-6">
          I specialize in enterprise financial and operational platforms—including Pawning &amp; Re-Pawning, Loan &amp; Fund Management, Inventory Batch Pricing, and ERP Core Modules—alongside AI Model Context Protocol (MCP) integrations. I enjoy leading teams, solving complex business problems, and turning intricate requirements into clean, reliable software.
        </p>
      </motion.div>

      {/* HIGHLIGHT CARDS */}
      <div className="grid md:grid-cols-3 gap-5 mt-12">

        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
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