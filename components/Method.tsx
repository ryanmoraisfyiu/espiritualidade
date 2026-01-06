import React from 'react';
import { Section } from './Section';
import { Moon, Sparkles, Sun } from 'lucide-react';

export const Method: React.FC = () => {
  return (
    <Section background="none" className="relative bg-gradient-to-b from-[#1A0B2E] via-mystic-900 to-mystic-800">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden border-2 border-gold-500/20 shadow-2xl shadow-purple-900/30">
            <img 
              src="https://i.imgur.com/ojZvqId.png" 
              alt="" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mystic-900 via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Um Método Guiado de <span className="text-gold-300">Renovação Espiritual</span>
          </h2>
          
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <div className="bg-mystic-800 p-2 rounded-lg text-gold-400 shrink-0 border border-gold-500/20">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-gold-200 text-lg">Sem Conhecimento Prévio</h4>
                <p className="text-slate-400 text-sm">Você não precisa ser especialista. O guia te leva pela mão.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-mystic-800 p-2 rounded-lg text-gold-400 shrink-0 border border-gold-500/20">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-gold-200 text-lg">Faça no Seu Tempo</h4>
                <p className="text-slate-400 text-sm">Práticas simples que podem ser feitas em casa, no seu ritmo.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-mystic-800 p-2 rounded-lg text-gold-400 shrink-0 border border-gold-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-gold-200 text-lg">Direcionamento Total</h4>
                <p className="text-slate-400 text-sm">Passo a passo detalhado para destravar todas as áreas.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};