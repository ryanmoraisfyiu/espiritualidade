import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Mariana S.',
      location: 'São Paulo, SP',
      text: "Eu estava me sentindo travada há anos. Depois de poucos dias aplicando o método, senti uma leveza absurda e as coisas começaram a fluir."
    },
    {
      id: '2',
      name: 'Renata L.',
      location: 'Belo Horizonte, MG',
      text: "Nunca fui muito espiritualizada, mas esse guia me surpreendeu. É simples, direto e funciona. Me sinto outra mulher."
    },
    {
      id: '3',
      name: 'Carla F.',
      location: 'Rio de Janeiro, RJ',
      text: "Foi como se algo tivesse sido desbloqueado dentro de mim. Me senti mais confiante, protegida e próspera financeiramente."
    }
  ];

  return (
    <Section 
      background="none"
      className="relative bg-gradient-to-b from-[#0F0518] via-[#130720] to-black"
    >
      {/* Elemento decorativo de luz (Glow) atrás do título */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-purple-900/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative">
        <h2 className="font-serif text-3xl md:text-4xl text-white drop-shadow-lg">Histórias de Transformação</h2>
        <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4 opacity-70"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="relative p-8 rounded-2xl bg-mystic-900/40 border border-mystic-800/60 shadow-xl backdrop-blur-sm hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-500/20 rotate-180" />
            <div className="mb-6">
              <div className="flex text-gold-400 mb-2 gap-0.5">
                {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-300 italic leading-relaxed font-serif">"{t.text}"</p>
            </div>
            <div className="border-t border-mystic-800/50 pt-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-gold-200">{t.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{t.location}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-xs font-serif text-gold-400">
                {t.name.charAt(0)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};