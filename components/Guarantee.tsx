import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Section } from './Section';

export const Guarantee: React.FC = () => {
  return (
    <Section background="none" className="bg-gradient-to-b from-mystic-900 to-black">
      <div className="max-w-3xl mx-auto text-center border border-gold-900/30 rounded-3xl p-8 md:p-12 bg-gradient-to-b from-[#1a0b2e] to-black shadow-2xl">
        <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-500/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <ShieldCheck className="w-8 h-8 text-gold-400" />
        </div>
        <h3 className="font-serif text-2xl text-white mb-4">Garantia Incondicional de 7 Dias</h3>
        <p className="text-slate-400 mb-6">
          Se você não sentir que esse guia é para você, basta solicitar o reembolso. Sem perguntas, sem burocracia. O risco é todo nosso.
        </p>
      </div>
    </Section>
  );
};