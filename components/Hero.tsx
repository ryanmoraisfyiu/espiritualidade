import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533276166547-5a894a821734?q=80&w=2070&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-900/80 via-mystic-900/60 to-mystic-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20 pb-12">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-400 drop-shadow-sm">
          Destrave Seus Caminhos Amorosos, Financeiros e Energéticos em Apenas 7 Dias
        </h1>

        <p className="font-sans text-lg md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
          Um guia espiritual feminino, <span className="text-gold-300 font-normal">simples e poderoso</span>, criado para limpar bloqueios invisíveis, fortalecer sua energia e atrair amor, prosperidade e proteção para sua vida.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button onClick={onCtaClick} className="text-lg px-10 py-5">
            Quero Desbloquear Meus Caminhos Agora
          </Button>
        </div>
      </div>
    </div>
  );
};