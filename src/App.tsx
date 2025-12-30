import './i18n';
import { ThemeProvider } from './context/ThemeContext';
import { BentoLayout } from './components/BentoGrid';
import DynamicBackground from './components/DynamicBackground';
import { FeedbackSystem } from './components/FeedbackSystem';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AISection from './components/AISection';
import MoreAbout from './components/MoreAbout';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <BentoLayout className="text-gray-900 dark:text-white transition-colors duration-300">
        <DynamicBackground />
        <FeedbackSystem />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <AISection />
          <MoreAbout />
          <Contact />
        </main>
      </BentoLayout>
    </ThemeProvider>
  );
}

export default App;