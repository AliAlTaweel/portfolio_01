import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './styles/main.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default App;
