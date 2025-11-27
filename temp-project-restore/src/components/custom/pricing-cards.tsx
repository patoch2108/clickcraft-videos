'use client';

import { Check, Zap, Crown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PLANS } from '@/lib/constants';

export function PricingCards() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            Comece a viralizar hoje mesmo
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-full px-6 py-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">🎁 Bônus especial ao fazer login!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => {
            const Icon = index === 0 ? Zap : index === 1 ? Star : Crown;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 ${
                  isPopular
                    ? 'bg-gradient-to-b from-blue-900/50 to-red-900/50 border-2 border-blue-500 shadow-2xl scale-105'
                    : 'bg-gray-900/50 border border-gray-800'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${
                    isPopular ? 'text-blue-400' : 'text-gray-400'
                  }`} />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">
                      R$ {plan.price.toFixed(2)}
                    </span>
                    <span className="text-gray-400">/mês</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 text-lg font-bold ${
                    isPopular
                      ? 'bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  {isPopular ? 'Começar Agora' : 'Selecionar Plano'}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Pagamento seguro e garantia de 7 dias</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            <div className="text-gray-500 font-semibold">🔒 SSL Seguro</div>
            <div className="text-gray-500 font-semibold">💳 Todas as Formas</div>
            <div className="text-gray-500 font-semibold">✓ Sem Taxas Ocultas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
