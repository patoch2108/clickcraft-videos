'use client';

import { Button } from '@/components/ui/button';
import { Sparkles, Play } from 'lucide-react';

export function HeroSection() {
  const scrollToAuth = () => {
    const authSection = document.getElementById('auth');
    if (authSection) {
      authSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToUrlInput = () => {
    const urlSection = document.querySelector('.url-input-section');
    if (urlSection) {
      urlSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Gradiente azul/vermelho como na v6 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-black to-red-500/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-8">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="text-gray-300 font-semibold">IA de Última Geração</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-white">Transforme Vídeos em</span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Conteúdo Viral
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
          Nossa IA analisa, edita e otimiza seus vídeos automaticamente para máximo engajamento em TikTok, Instagram e YouTube Shorts
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToAuth}
            size="lg"
            className="h-14 px-8 bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-bold text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Começar Agora
          </Button>
          <Button
            onClick={scrollToUrlInput}
            size="lg"
            variant="outline"
            className="h-14 px-8 border-gray-700 text-white hover:bg-gray-900"
          >
            Testar Grátis
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">10K+</div>
            <div className="text-gray-400 text-sm">Vídeos Processados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">95%</div>
            <div className="text-gray-400 text-sm">Taxa de Sucesso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">5M+</div>
            <div className="text-gray-400 text-sm">Views Geradas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Suporte IA</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
