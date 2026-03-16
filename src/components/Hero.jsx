export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 text-center bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Creative <span className="text-cyan-400">Developer</span>
        </h1>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          I build high-performance web applications with a focus on clean code and user experience. 
          Currently exploring the future of React and AI integration.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-lg font-bold transition">
            Hire Me
          </a>
          <button className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}