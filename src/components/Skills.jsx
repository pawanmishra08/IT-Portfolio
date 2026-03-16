export default function Skills() {
  const skills = ["React", "Tailwind", "Node.js", "TypeScript", "Python", "PostgreSQL", "Figma", "Docker"];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Toolbox</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-400 transition-colors group">
              <p className="text-slate-300 group-hover:text-white font-medium text-center">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}