import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;