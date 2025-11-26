'use client';

import { useState } from 'react';
import { Rocket, Link2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function UrlInput() {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('🚀 Vídeo em processamento! Você receberá uma notificação quando estiver pronto.');
    }, 2000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-semibold">Configure ele para viralizar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cole o Link do Vídeo
          </h2>
          <p className="text-xl text-gray-400">
            YouTube, TikTok, Instagram ou qualquer plataforma
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            
            {/* Input Container */}
            <div className="relative bg-gray-900 rounded-2xl border-2 border-gray-800 p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Link2 className="w-5 h-5 text-gray-500" />
                <Input
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-transparent border-none text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isProcessing}
                className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    <Rocket className="w-5 h-5 mr-2" />
                    Viralizar Agora
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-4 text-center">
              <p className="text-green-400 font-semibold text-lg">⚡ Rápido</p>
              <p className="text-gray-400 text-sm mt-1">Processamento em minutos</p>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-4 text-center">
              <p className="text-blue-400 font-semibold text-lg">🎯 Preciso</p>
              <p className="text-gray-400 text-sm mt-1">IA identifica momentos virais</p>
            </div>
            <div className="bg-gray-900/50 border border-red-500/20 rounded-lg p-4 text-center">
              <p className="text-red-400 font-semibold text-lg">💰 Monetizável</p>
              <p className="text-gray-400 text-sm mt-1">100% aprovado pelas plataformas</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
