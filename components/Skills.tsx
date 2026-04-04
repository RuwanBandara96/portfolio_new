const skills = [
  'Next.js',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Docker',
  'AWS'
]

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-xl glass text-sm hover:scale-110 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}