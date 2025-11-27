'use client';

import { Navbar } from '@/components/custom/navbar';
import { Play, CheckCircle, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ExemplosPage() {
  const exemplos = [
    {
      id: 1,
      title: 'Como Viralizar no TikTok em 24h',
      duration: '8:45',
      views: '2.3M',
      thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop',
      topics: ['Estratégia', 'TikTok', 'Crescimento Rápido']
    },
    {
      id: 2,
      title: 'Segredos dos Reels Virais no Instagram',
      duration: '12:30',
      views: '1.8M',
      thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=450&fit=crop',
      topics: ['Instagram', 'Reels', 'Algoritmo']
    },
    {
      id: 3,
      title: 'Monetização: De 0 a $10k/mês',
      duration: '15:20',
      views: '3.1M',
      thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=450&fit=crop',
      topics: ['Monetização', 'Estratégia', 'Renda']
    },
    {
      id: 4,
      title: 'Edição que Prende a Atenção',
      duration: '10:15',
      views: '1.5M',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
      topics: ['Edição', 'Técnicas', 'Engajamento']
    }
  ];

  const beneficios = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Crescimento Garantido',
      description: 'Aprenda técnicas comprovadas para aumentar seu alcance'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Resultados Rápidos',
      description: 'Veja resultados em menos de 24 horas'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Método Validado',
      description: 'Usado por milhares de criadores de sucesso'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Play className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-semibold">Mini-Curso Gratuito</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Aprenda a <span className="text-blue-500">Viralizar</span> com <span className="text-red-500">IA</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Descubra os segredos por trás dos vídeos mais virais das plataformas. 
            Professor IA disponível 24/7 para você.
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2">
            <span className="text-yellow-400 text-sm font-semibold">🔒 Login obrigatório para acessar o conteúdo completo</span>
          </div>
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-full mb-4">
                {beneficio.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{beneficio.title}</h3>
              <p className="text-gray-400">{beneficio.description}</p>
            </div>
          ))}
        </div>

        {/* Vídeos de Exemplo */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">📚 Biblioteca de Exemplos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exemplos.map((exemplo) => (
              <div key={exemplo.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all group">
                <div className="relative aspect-video bg-gray-800">
                  <img src={exemplo.thumbnail} alt={exemplo.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="icon" className="bg-blue-500 hover:bg-blue-600 rounded-full w-16 h-16">
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                    {exemplo.duration}
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-xs text-white font-semibold">
                    {exemplo.views} views
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-3">{exemplo.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exemplo.topics.map((topic, index) => (
                      <span key={index} className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600">
                    Assistir Agora
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Viralizar?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Faça login agora e tenha acesso completo a todos os exemplos, 
            técnicas e estratégias para criar vídeos virais monetizáveis.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-lg px-8">
            Fazer Login e Começar
          </Button>
        </div>
      </div>
    </div>
  );
}
