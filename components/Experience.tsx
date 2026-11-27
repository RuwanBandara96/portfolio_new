'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Team Lead',
    company: 'Evoke Labs',
    period: 'Apr 2026 - Present',
    highlights: [
      'Lead a cross-functional Agile squad across Pawning & Re-Pawning, Loan Management, Inventory, and ERP Core Modules',
      'Architected AI Model Context Protocol (MCP) server integration for natural-language loan, arrears, and interest lookups',
      'Enforce coding standards, conduct PR and architecture reviews, and oversee local/Postman validation gates',
      'Translate business requirements into technical specs, estimation schedules, and release plans',
    ],
    tech: ['TypeScript', 'Next.js', 'React', 'Node.js', 'TypeORM', 'MySQL', 'MCP'],
  },
  {
    role: 'Software Engineer',
    company: 'Evoke Labs',
    period: 'Oct 2024 - Apr 2026',
    highlights: [
      'Built Pawning Renewals, Loan Skips, Post-Dated Cheque (PDC) tracking, and Backdated Transaction workflows',
      'Engineered Inventory Batch-to-Price mapping and stock valuation features with strict audit integrity',
      'Developed full-stack web and mobile features across Next.js, React Native, and Node.js',
      'Optimized MySQL and MongoDB queries and implemented RBAC and authentication protocols',
    ],
    tech: ['Next.js', 'React Native', 'TypeScript', 'Node.js', 'TypeORM', 'MySQL', 'MongoDB'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Evoke Labs',
    period: 'Oct 2023 - Oct 2024',
    highlights: [
      'Developed modular backend services and responsive frontend interfaces for lending and ERP platforms',
      'Integrated RESTful APIs and third-party utilities while resolving production issues promptly',
      'Maintained technical specifications and system architecture documentation',
    ],
    tech: ['Next.js', 'Node.js', 'Express', 'MySQL', 'MongoDB'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'VISO Labs',
    period: 'Jun 2023 - Sep 2023',
    highlights: [
      'Built and tested modular full-stack features across mobile and web applications',
      'Collaborated on unit testing, debugging, and version control workflows',
    ],
    tech: ['React Native', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'SLT Digital Lab',
    period: 'Nov 2022 - May 2023',
    highlights: [
      'Developed an IoT-based platform using Next.js and Node.js',
      'Researched emerging technologies and assisted with internal R&D tools',
    ],
    tech: ['Next.js', 'Node.js', 'IoT', 'MongoDB'],
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-start gap-6"
            >

              {/* Timeline Dot */}
              <div className="w-3 h-3 mt-3 bg-blue-400 rounded-full shadow-lg shrink-0"></div>

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