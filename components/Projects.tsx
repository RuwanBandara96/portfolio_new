'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Pawning & Re-Pawning Management System',
    role: 'Team Lead & System Architect • Evoke Labs',
    desc: 'Multi-module enterprise pawning platform covering gold valuation, ticket issuance, pawning renewals, re-pawning workflows, and automated interest/arrears engines with an integrated AI MCP chatbot.',
    highlights: [
      'AI Chatbot via Model Context Protocol (MCP) for natural-language loan & arrears queries',
      'Automated interest, renewal, re-pawning, and auction approval workflows',
    ],
    tech: ['TypeScript', 'Next.js', 'React', 'Node.js', 'TypeORM', 'MySQL', 'MCP'],
    image: '/images/project4.png',
  },
  {
    title: 'Loan & Fund Management System',
    role: 'Team Lead & Full-Stack Engineer • Evoke Labs',
    desc: 'End-to-end lending solution featuring credit scoring, multi-tier approval workflows, Loan Skip processing, Post-Dated Cheque (PDC) management, and mobile field-collection support.',
    highlights: [
      'Loan Skip processing, PDC lifecycle tracking & automated repayment schedules',
      'Centralized web admin portal paired with React Native field-collection app',
    ],
    tech: ['Next.js', 'React Native', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'MongoDB'],
    image: '/images/project1.png',
  },
  {
    title: 'Inventory & Batch Pricing Management System',
    role: 'Team Lead & Full-Stack Engineer • Evoke Labs',
    desc: 'Real-time inventory control platform supporting multi-location stock tracking, Inventory Batch-to-Price mapping, supplier procurement, and automated stock valuation.',
    highlights: [
      'Dynamic batch-to-price mapping and multi-branch stock transfers',
      'Real-time stock valuation and procurement audit trails',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'TypeORM', 'MySQL'],
    image: '/images/project6.png',
  },
  {
    title: 'ERP Core Modules',
    role: 'Team Lead & Full-Stack Engineer • Evoke Labs',
    desc: 'Foundational enterprise modules including Backdated Transaction engines, centralized ledger accounting, granular role-based access control (RBAC), and cross-module audit logging.',
    highlights: [
      'Backdated transaction engine with strict financial reconciliation & audit logs',
      'Granular RBAC permissions unifying finance and operations',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'MySQL'],
    image: '/images/project5.png',
  },
  {
    title: 'Goods Supply Management System (Govi Saviya)',
    role: 'Full-Stack Developer • University Final Year Project',
    desc: 'Cross-platform mobile app and web admin dashboard facilitating agricultural supply chain trading, live auctions, stock tracking, and real-time buyer-seller messaging.',
    highlights: [
      'Live produce auctioning and real-time buyer-seller chat',
      'Mobile marketplace with web admin stock & order management',
    ],
    tech: ['React Native', 'React', 'Node.js', 'MongoDB'],
    image: '/images/project2.png',
  },
  {
    title: 'Image Processing System',
    role: 'Computer Vision & Systems Project',
    desc: 'Real-time image analysis and enhancement pipeline built for automated visual inspection, filtering, and feature extraction.',
    highlights: [
      'Real-time frame filtering, edge detection, and contrast enhancement',
      'Low-latency processing pipeline for visual data analysis',
    ],
    tech: ['Python', 'OpenCV', 'Image Processing'],
    image: '/images/project3.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: (i % 2) * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass p-6 rounded-2xl transition flex flex-col justify-between border border-white/10"
          >
            <div>
              {/* Project Preview Image */}
              <div className="relative w-full h-64 mb-5 rounded-xl overflow-hidden bg-slate-900/60 border border-white/10">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Role Badge */}
              <p className="text-xs font-medium text-blue-400 mb-1">
                {p.role}
              </p>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-white">
                {p.title}
              </h3>

              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                {p.desc}
              </p>

              {/* Key Highlights */}
              <ul className="mt-3 space-y-1 text-xs text-gray-400">
                {p.highlights.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}