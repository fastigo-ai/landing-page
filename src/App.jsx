import React, { useEffect } from 'react';
import logo from './assets/Logo-removebg-preview.png';
import heroTechnician from './assets/hero_technician-removebg-preview.png';

import partnerHandshake from './assets/partner_handshake.png';

// Component Imports
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Partner from './components/Partner';

const App = () => {
  useEffect(() => {
    // Scroll Reveal Logic
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Hero Section */}
      <Hero logo={logo} heroTechnician={heroTechnician} />

      {/* Services Section */}
      <div className="reveal">
        <Services />
      </div>

      {/* Why Choose Us Section */}
      <div className="reveal">
        <WhyChooseUs />
      </div>

      {/* Testimonials Section */}
      <div className="reveal">
        <Testimonials />
      </div>

      {/* Partner Section */}
      <div className="reveal">
        <Partner partnerHandshake={partnerHandshake} />
      </div>

      {/* Minimal Sleek Footer */}
      

      {/* Floating Action Button (FAB) */}
     
      
    </div>
  );
};

export default App;
