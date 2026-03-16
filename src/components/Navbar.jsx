export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          PAWAN MISHRA
        </span>
        <div className="flex gap-8 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}