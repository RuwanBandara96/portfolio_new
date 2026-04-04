'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Loan Management System',
    desc: 'Loan workflows, approvals, repayment tracking',
    image: '/images/project1.png',
  },
  {
    title: 'Pawning System',
    desc: 'Pawning and auction management with Inventory and approval workflows',
    image: '/images/project4.png',
  },
  {
    title: 'ERP Core Modules',
    desc: 'Core modules for enterprise resource planning',
    image: '/images/project5.png',
  },
  {
    title: 'Inventory Management System',
    desc: 'Stock tracking, operations, and supply management',
    image: '/images/project6.png',
  },
  {
    title: 'Goods Supply Management System',
    desc: 'Inventory management, stock tracking, operations',
    image: '/images/project2.png',
  },
  {
    title: 'Image Processing System',
    desc: 'Real-time image analysis and enhancement',
    image: '/images/project3.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass p-6 rounded-2xl transition"
          >
            {/* ✅ Image */}
            <div className="relative w-full h-80 mb-4 rounded-xl overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            {/* ✅ Content */}
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}