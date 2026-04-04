'use client'

import { Mail, Phone } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-4 py-24 text-center"
    >
      <h2 className="text-3xl font-bold">Let’s Work Together</h2>

      <p className="text-gray-400 mt-4">
        Feel free to reach out for collaborations or opportunities 🚀
      </p>

      {/* CONTACT CARDS */}
      <div className="grid md:grid-cols-2 gap-4 mt-10">

        {/* EMAIL */}
        <a
          href="mailto:bandararuwan419@gmail.com"
          className="glass p-4 rounded-xl flex items-center gap-3 hover:scale-105 transition"
        >
          <Mail className="text-blue-400" />
          <div className="text-left">
            <p className="text-sm font-medium">Email</p>
            <p className="text-xs text-gray-400">
              bandararuwan419@gmail.com
            </p>
          </div>
        </a>

        {/* PHONE */}
        <a
          href="tel:+94719778508"
          className="glass p-4 rounded-xl flex items-center gap-3 hover:scale-105 transition"
        >
          <Phone className="text-green-400" />
          <div className="text-left">
            <p className="text-sm font-medium">Phone</p>
            <p className="text-xs text-gray-400">
              +94 71 977 8508
            </p>
          </div>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/ruwan-bandara-9749291b9/"
          target="_blank"
          className="glass p-4 rounded-xl flex items-center gap-3 hover:scale-105 transition"
        >
          <FaLinkedin className="text-blue-500 text-lg" />
          <div className="text-left">
            <p className="text-sm font-medium">LinkedIn</p>
            <p className="text-xs text-gray-400">
              linkedin.com/in/ruwan-bandara
            </p>
          </div>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/RuwanBandara96"
          target="_blank"
          className="glass p-4 rounded-xl flex items-center gap-3 hover:scale-105 transition"
        >
          <FaGithub className="text-gray-300 text-lg" />
          <div className="text-left">
            <p className="text-sm font-medium">GitHub</p>
            <p className="text-xs text-gray-400">
              github.com/RuwanBandara96
            </p>
          </div>
        </a>

      </div>

      {/* BUTTON */}
      <a
        href="mailto:bandararuwan419@gmail.com"
        className="inline-block mt-10 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
      >
        Send Email
      </a>
    </section>
  )
}