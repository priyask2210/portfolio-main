import './App.css';
import Header from './components/header/Header';
import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Certificates from './components/certificates/Certificates';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Portfolio from './components/Portfolio/Portfolio';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Certificates />
        <Portfolio />

        
        <Contacts />
      </main>
        <Footer />
        <Scrollup />
        <Analytics />
        <SpeedInsights />
        
    </div>
  );
}

export default App;
