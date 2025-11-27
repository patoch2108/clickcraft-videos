'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Rocket, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export function UrlInput() {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setStatus('error');
      setMessage('Por favor, insira uma URL válida');
      return;
    }

    setIsProcessing(true);
    setStatus('processing');
    setMessage('Processando seu vídeo...');

    try {
      // Detect platform from URL
      const platform = detectPlatform(url);
      
      // Simulate processing (replace with actual API call when ready)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('success');
      setMessage(`✅ Vídeo detectado! Plataforma: ${platform.toUpperCase()}. Faça login para processar.`);
      
      // Reset after 4 seconds
      setTimeout(() => {
        setUrl('');
        setStatus('idle');
        setMessage('');
      }, 4000);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Erro ao processar vídeo');
    } finally {
      setIsProcessing(false);
    }
  };

  const detectPlatform = (url: string): 'youtube' | 'tiktok' | 'instagram' | 'other' => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('tiktok.com')) return 'tiktok';
    if (url.includes('instagram.com')) return 'instagram';
    return 'other';
  };

  return (
    <section className="url-input-section py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-lg">
            Cole a URL do seu vídeo e deixe a IA fazer a mágica
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isProcessing}
                className="h-14 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
              {status === 'success' && (
                <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              )}
              {status === 'error' && (
                <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
              )}
            </div>
            <Button
              type="submit"
              disabled={isProcessing}
              className="h-14 px-8 bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-bold text-lg"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
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

          {message && (
            <div
              className={`p-4 rounded-lg border ${
                status === 'success'
                  ? 'bg-green-500/10 border-green-500/30 text-green-400'
                  : status === 'error'
                  ? 'bg-red-500/10 border-red-500/30 text-red-400'
                  : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
              }`}
            >
              <p className="text-sm font-medium">{message}</p>
            </div>
          )}
        </form>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-500 mb-1">YouTube</div>
            <p className="text-xs text-gray-400">Suportado</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-500 mb-1">TikTok</div>
            <p className="text-xs text-gray-400">Suportado</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-500 mb-1">Instagram</div>
            <p className="text-xs text-gray-400">Suportado</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-500 mb-1">Outros</div>
            <p className="text-xs text-gray-400">URL Direta</p>
          </div>
        </div>
      </div>
    </section>
  );
}
