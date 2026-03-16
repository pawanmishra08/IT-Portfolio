import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;