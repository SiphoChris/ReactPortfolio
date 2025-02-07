import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import About from './components/AboutSection';
import Timeline from './components/TimelineComp';
import Skills from './components/SkillsSection';
import Achievements from './components/Achievements';
import Contact from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Preloader';

import './App.css';


function App() {
  return (
    <div>
      <Loader />
      <Nav />
      <main>
        <HeroSection />
        <About />
        <Timeline />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
