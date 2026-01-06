import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Method } from './components/Method';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';
import { TopBar } from './components/TopBar';

function App() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-gold-500/30 selection:text-gold-100">
      <TopBar />
      <Hero onCtaClick={scrollToPricing} />
      <PainPoints />
      <Method />
      <Benefits />
      <Testimonials />
      <Pricing id="pricing" />
      <Guarantee />
      <Footer onCtaClick={scrollToPricing} />
    </main>
  );
}

export default App;