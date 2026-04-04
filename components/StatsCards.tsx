'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: '4+',
    title: 'Years Experience',
    desc: 'Building scalable full-stack systems',
    color: 'text-blue-400',
  },
  {
    value: '10+',
    title: 'Projects Delivered',
    desc: 'ERP, Loan & Inventory systems',
    color: 'text-purple-400',
  },
  {
    value: '10+',
    title: 'Technologies',
    desc: 'Modern backend & frontend stack',
    color: 'text-green-400',
  },
  {
    value: '40+',
    title: 'Collaborations',
    desc: 'Worked across teams & domains',
    color: 'text-yellow-400',
  },
]

export default function StatsCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 gap-4"
    >
      {stats.map((item, i) => (
        <div
          key={i}
          className="glass p-4 rounded-xl hover:scale-105 transition hover:shadow-lg hover:shadow-blue-500/10"
        >
          <p className={`text-2xl font-bold ${item.color}`}>
            {item.value}
          </p>

          <p className="text-sm font-medium text-gray-200 mt-1">
            {item.title}
          </p>

          <p className="text-xs text-gray-400 mt-1 leading-5">
            {item.desc}
          </p>
        </div>
      ))}
    </motion.div>
  )
}