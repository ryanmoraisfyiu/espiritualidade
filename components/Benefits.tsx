import React from 'react';
import { Section } from './Section';
import { Check } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    "Limpeza energética profunda e guiada",
    "Ativação da energia feminina de atração",
    "Práticas espirituais para destravar amor e prosperidade",
    "Proteção contra inveja, olho gordo e cargas negativas",
    "Conexão espiritual feminina fortalecida",
    "Um caminho prático de 7 dias para transformação real"
  ];

  return (
    <Section background="none" className="bg-gradient-to-b from-mystic-800 via-mystic-900 to-[#0F0518] border-t border-mystic-800/30">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">O Que Você Vai Encontrar</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full opacity-70"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-mystic-800/20 hover:bg-mystic-800/40 transition-colors border border-mystic-800/50 hover:border-gold-500/30">
            <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20">
              <Check className="w-4 h-4 text-gold-400" />
            </div>
            <span className="text-lg text-slate-200 font-sans">{benefit}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};