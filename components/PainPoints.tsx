import React from 'react';
import { Section } from './Section';
import { AlertCircle, CloudRain, Lock } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <Section background="none" className="bg-gradient-to-b from-mystic-900 via-[#140620] to-[#1A0B2E]">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 rounded-2xl bg-mystic-800/40 border border-mystic-700/50 text-center hover:border-gold-700/50 transition-colors backdrop-blur-sm">
          <div className="w-12 h-12 mx-auto bg-mystic-700 rounded-full flex items-center justify-center mb-4 text-gold-400 shadow-lg shadow-purple-900/20">
            <Lock className="w-6 h-6" />
          </div>
          <p className="font-serif text-xl text-slate-200 italic">"Você sente que, por mais que tente, sua vida não anda?"</p>
        </div>
        
        <div className="p-6 rounded-2xl bg-mystic-800/40 border border-mystic-700/50 text-center hover:border-gold-700/50 transition-colors backdrop-blur-sm">
          <div className="w-12 h-12 mx-auto bg-mystic-700 rounded-full flex items-center justify-center mb-4 text-gold-400 shadow-lg shadow-purple-900/20">
            <CloudRain className="w-6 h-6" />
          </div>
          <p className="font-serif text-xl text-slate-200 italic">"O amor não flui, o dinheiro entra e some?"</p>
        </div>

        <div className="p-6 rounded-2xl bg-mystic-800/40 border border-mystic-700/50 text-center hover:border-gold-700/50 transition-colors backdrop-blur-sm">
          <div className="w-12 h-12 mx-auto bg-mystic-700 rounded-full flex items-center justify-center mb-4 text-gold-400 shadow-lg shadow-purple-900/20">
            <AlertCircle className="w-6 h-6" />
          </div>
          <p className="font-serif text-xl text-slate-200 italic">"Uma sensação de peso, cansaço e repetição de problemas?"</p>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto border-t border-gold-900/30 pt-10">
        <p className="font-sans text-2xl md:text-3xl text-gold-200 font-light">
          Isso não é azar. <br />
          <span className="font-serif font-bold text-white block mt-2 drop-shadow-md">São bloqueios energéticos — e eles podem ser removidos.</span>
        </p>
      </div>
    </Section>
  );
};