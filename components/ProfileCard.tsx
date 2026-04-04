'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-center"
    >
      <div className="relative glass p-6 rounded-2xl text-center w-[280px]">

        {/* Glow */}
        <div className="absolute inset-0 blur-2xl bg-blue-500/20 rounded-2xl"></div>

        <Image
          src="/images/profile.jpg"
          alt="Ruwan"
          width={150}
          height={150}
          className="relative mx-auto rounded-full border border-white/10"
        />

        <h3 className="mt-4 font-semibold text-lg">
          Ruwan Bandara
        </h3>

        <p className="text-sm text-gray-400">
          Full Stack Engineer
        </p>

        <p className="text-xs text-gray-500 mt-2">
          📍 Sri Lanka • Open to work
        </p>

      </div>
    </motion.div>
  )
}