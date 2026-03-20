import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiTailwindcss,
  SiPython, SiDjango, SiPostgresql,
  SiUbuntu, SiFigma, SiNodedotjs,
  SiOpenai, SiDocker, SiFramer
} from 'react-icons/si';

const skills = [
  {
    name: "Frontend Architecture",
    icon: <SiReact className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    description: "Architecting modern, scalable UIs with React and TypeScript. I prioritize component reusability, performance, and type-safe development.",
    tags: ["React", "TS", "Framer Motion"]
  },
  {
    name: "Backend Development",
    icon: <SiDjango className="text-emerald-500" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    description: "Building robust server-side logic and secure RESTful APIs using Django and Node.js. Experienced in handling complex business workflows.",
    tags: ["Django", "Python", "Node.js"]
  },
  {
    name: "Database Systems",
    icon: <SiPostgresql className="text-blue-400" />,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
    description: "Designing optimized relational schemas and managing data integrity. Proficient in complex querying and database performance tuning.",
    tags: ["PostgreSQL", "NoSQL", "Redis"]
  },
  {
    name: "DevOps & Cloud",
    icon: <SiUbuntu className="text-orange-600" />,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
    description: "Managing Linux-based environments and deploying via CI/CD pipelines. Skilled in system administration and cloud-native hosting.",
    tags: ["Ubuntu", "Docker", "Git"]
  },
  {
    name: "Product Design",
    icon: <SiFigma className="text-purple-500" />,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800",
    description: "Bridging the gap between design and code. Creating high-fidelity prototypes that focus on user psychology and conversion.",
    tags: ["Figma", "UI/UX", "Prototyping"]
  },
  {
    name: "AI & Innovation",
    icon: <SiOpenai className="text-white" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "Integrating Large Language Models and AI automation into web workflows to build next-generation intelligent applications.",
    tags: ["OpenAI", "Prompt Eng", "Automation"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm font-mono text-cyan-500 mb-2 tracking-[0.3em] uppercase"
          >
            Core Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Technical Expertise
          </motion.h3>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex flex-col h-full bg-slate-800/10 border border-slate-800 rounded-3xl overflow-hidden hover:bg-slate-800/30 hover:border-cyan-500/40 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.2)] transition-all duration-500"
            >
              {/* Skill Image Section */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {/* Floating Glass Icon */}
                <div className="absolute bottom-6 left-6 text-3xl p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl group-hover:border-cyan-500/50 transition-colors">
                  {skill.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 pt-4 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
                  {skill.name}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {skill.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50">
                  {skill.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-900/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}