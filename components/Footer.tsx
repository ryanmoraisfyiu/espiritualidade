import React from 'react';
import { Button } from './Button';

interface FooterProps {
  onCtaClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-mystic-900 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-purple-900/20 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
          A transformação começa com uma decisão.
        </h2>
        <p className="text-xl text-slate-300 mb-10 font-light">
          Você pode continuar vivendo travada… ou pode dar o primeiro passo agora.
        </p>
        
        <Button onClick={onCtaClick} className="text-xl px-12 py-6 mb-12 shadow-gold-500/20 shadow-2xl">
          Quero Desbloquear Minha Vida Agora
        </Button>

        <div className="text-slate-600 text-sm mt-12 flex flex-col gap-2">
          <p>© {new Date().getFullYear()} Lumina. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gold-400 transition-colors">Termos de Uso</a>
            <span className="text-slate-800">•</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};