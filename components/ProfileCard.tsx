'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center"
    >
      <div className="relative glass p-6 rounded-2xl text-center w-[280px] border border-white/10">

        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 blur-2xl bg-blue-500/20 rounded-2xl"></div>

        <Image
          src="/images/profile.jpg"
          alt="Ruwan Bandara"
          width={150}
          height={150}
          priority
          className="relative mx-auto rounded-full object-cover border-2 border-blue-400/30 shadow-lg"
        />

        <h3 className="relative mt-4 font-semibold text-lg text-white">
          Ruwan Bandara
        </h3>

        <p className="relative text-sm text-blue-400 font-medium mt-0.5">
          Software Team Lead
        </p>

        <p className="relative text-xs text-gray-400 mt-0.5">
          Full-Stack Engineer • System Architect
        </p>

        <div className="relative mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Colombo, Sri Lanka • Open to work</span>
        </div>

      </div>
    </motion.div>
  )
}