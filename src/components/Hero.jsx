import profileImg from "../assets/img.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-20 px-6 bg-slate-900 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="text-left">
          <span className="text-cyan-400 font-mono mb-4 block text-sm tracking-widest uppercase">
            Available for new projects
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Developer
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
            I build high-performance web applications with a focus on clean code and user experience. 
            Currently exploring the future of React and AI integration.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-lg font-bold transition-all transform hover:-translate-y-1">
              Hire Me
            </a>
            <button className="border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold transition-all">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Border/Ring */}
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-3xl rotate-6 scale-105" />

            {/* Main Image Container */}
            <div className="relative w-full h-full bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src={profileImg}
                alt="Developer Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* Floating Badge (Optional) */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">Full-Stack Expert</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}