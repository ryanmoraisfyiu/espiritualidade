import React from 'react';
import { Timer } from 'lucide-react';

export const TopBar: React.FC = () => {
  const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const today = new Date().toLocaleDateString('pt-BR', dateOptions);

  return (
    <div className="bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-mystic-900 py-2.5 px-4 text-center relative z-50 shadow-md border-b border-gold-300/50">
      <div className="flex items-center justify-center gap-2 font-sans font-bold text-xs md:text-sm uppercase tracking-wider">
        <Timer className="w-4 h-4" />
        <span>Oferta Válida Somente Hoje: {today}</span>
      </div>
    </div>
  );
};