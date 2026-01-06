import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { PricingPlan } from '../types';
import { CheckCircle2, Star } from 'lucide-react';

interface PricingProps {
  id?: string;
}

export const Pricing: React.FC<PricingProps> = ({ id }) => {
  const plans: PricingPlan[] = [
    {
      id: 'basic',
      title: 'Plano Essencial',
      price: '3,99',
      description: 'Ideal para quem quer experimentar o método e iniciar sua limpeza energética.',
      features: [
        { text: 'Guia inicial de desbloqueio energético' },
        { text: 'Prática de abertura de caminhos' },
        { text: 'Ritual simbólico de prosperidade' },
        { text: 'Acesso imediato' }
      ],
      isFeatured: false,
      ctaText: 'Quero Começar Agora'
    },
    {
      id: 'complete',
      title: 'Plano Completo',
      price: '10,00',
      description: 'Para quem deseja uma transformação profunda, completa e acelerada.',
      features: [
        { text: 'Tudo do Plano Essencial' },
        { text: '+10 práticas espirituais exclusivas', highlight: true },
        { text: '+5 rituais completos de atração e prosperidade', highlight: true },
        { text: 'Banhos energéticos guiados (proteção, amor e dinheiro)' },
        { text: 'Ritual especial da Rosa Vermelha (Bônus)' },
        { text: 'Mapa de 7 dias passo a passo' },
        { text: 'Áudio-guia de ativação espiritual' },
        { text: 'E-book visual ilustrado' }
      ],
      isFeatured: true,
      ctaText: 'Quero a Transformação Completa'
    }
  ];

  return (
    <Section id={id} background="none" className="py-20 bg-gradient-to-b from-black via-[#1a0b2e] to-mystic-900">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Escolha Seu Caminho</h2>
        <p className="text-slate-400">Comece sua jornada de desbloqueio hoje mesmo.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative rounded-3xl p-8 transition-all duration-300 ${
              plan.isFeatured 
                ? 'bg-mystic-800/80 border-2 border-gold-500 shadow-2xl shadow-gold-900/20 transform md:-translate-y-4' 
                : 'bg-mystic-900/50 border border-mystic-700 hover:border-mystic-600'
            }`}
          >
            {plan.isFeatured && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 fill-current" />
                MAIS ESCOLHIDO
              </div>
            )}

            <h3 className={`font-serif text-2xl mb-2 ${plan.isFeatured ? 'text-gold-200' : 'text-slate-200'}`}>
              {plan.title}
            </h3>
            <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>

            <div className="mb-8">
              <span className="text-sm text-slate-500">R$</span>
              <span className={`text-5xl font-bold font-serif ${plan.isFeatured ? 'text-white' : 'text-slate-200'}`}>
                {plan.price}
              </span>
            </div>

            <Button 
              fullWidth 
              variant={plan.isFeatured ? 'primary' : 'outline'}
              className="mb-8"
              onClick={() => alert(`Você escolheu o plano: ${plan.title}`)}
            >
              {plan.ctaText}
            </Button>

            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 shrink-0 ${feature.highlight ? 'text-gold-400' : 'text-slate-600'}`} />
                  <span className={`text-sm ${feature.highlight ? 'text-slate-200 font-medium' : 'text-slate-400'}`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};