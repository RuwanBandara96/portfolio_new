'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
  role: 'Software Engineer',
  company: 'Evoke Labs',
  period: '2024 - Present',
  highlights: [
    'Developed a full Auction Management System with approval workflows',
    'Built Inventory Management Module for stock tracking and operations',
    'Designed scalable backend APIs for enterprise-level applications',
    'Implemented role-based workflows and data validation logic',
  ],
  tech: ['Next.js', 'Node.js', 'MySQL', 'AWS', 'AWS Lambda', 'Redis'],
},
  {
    role: 'Associate Software Engineer',
    company: 'Evoke Labs',
    period: '2023 - 2024',
    highlights: [
      'Built loan management system features',
      'Handled REST API development',
      'Improved system performance',
    ],
    tech: ['Next.js','Java','Node.js', 'MySQL', 'AWS'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'VISO Labs',
    period: '2023',
    highlights: [
      'Worked on full-stack applications',
      'Integrated frontend with backend services',
    ],
    tech: ['React Native','Node.js', 'Express', 'MongoDB'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'SLT Digital Lab',
    period: '2022 - 2023',
    highlights: [
      'Developed IoT-based platform',
      'Assisted in backend development',
    ],
    tech: ['Node.js', 'IoT', 'Next.js', 'MongoDB', 'Firebase'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto py-12 px-4">

      <h2 className="text-3xl font-bold mb-10">
        Experience
      </h2>

      <div className="relative">

        {/* Vertical Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10"></div>

        <div className="space-y-8">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-start gap-6"
            >

              {/* Timeline Dot */}
              <div className="w-3 h-3 mt-3 bg-blue-400 rounded-full shadow-lg"></div>

              {/* Card */}
              <div className="glass p-6 rounded-xl w-full hover:scale-[1.02] transition flex flex-col md:flex-row justify-between gap-6">

                {/* LEFT SIDE */}
                <div className="min-w-[220px]">
                  <h3 className="text-lg font-semibold">
                    {exp.role}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {exp.company}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {exp.period}
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1">

                  {/* Highlights */}
                  <ul className="text-sm text-gray-300 space-y-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>• {h}</li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}