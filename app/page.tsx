import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
