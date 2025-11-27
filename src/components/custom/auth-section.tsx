'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { buildOAuthUrl } from '@/lib/api-config';

export function AuthSection() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleOAuth = (platform: 'tiktok' | 'instagram' | 'facebook') => {
    setIsLoading(platform);
    
    // Verificar se as variáveis de ambiente estão configuradas
    const clientId = platform === 'tiktok' 
      ? process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID
      : platform === 'instagram'
      ? process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID
      : process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;

    if (!clientId) {
      alert(`⚠️ Configuração OAuth não encontrada para ${platform}!\n\nPor favor, configure as variáveis de ambiente no arquivo .env.local\n\nConsulte o arquivo OAUTH_SETUP_GUIDE.md para instruções detalhadas.`);
      setIsLoading(null);
      return;
    }

    try {
      // Redirecionar para a URL de autorização OAuth
      const authUrl = buildOAuthUrl(platform);
      window.location.href = authUrl;
    } catch (error) {
      console.error(`Erro ao iniciar OAuth ${platform}:`, error);
      alert(`Erro ao conectar com ${platform}. Verifique as configurações.`);
      setIsLoading(null);
    }
  };

  const handleEmailAuth = () => {
    setIsLoading('email');
    
    // Simular autenticação por email (você pode implementar um formulário real)
    setTimeout(() => {
      const mockUser = {
        id: `user_${Date.now()}`,
        name: 'Usuário Demo',
        email: 'demo@clickcraft.app',
        platform: 'email',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=email',
        plan: 'criador',
        videosRemaining: 20,
      };
      
      localStorage.setItem('clickcraft_user', JSON.stringify(mockUser));
      localStorage.setItem('clickcraft_auth', 'true');
      
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <section id="auth" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comece <span className="text-blue-500">Agora</span>
          </h2>
          <p className="text-xl text-gray-400">
            Faça login para acessar todos os recursos
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid gap-4">
            {/* TikTok Login */}
            <Button
              onClick={() => handleOAuth('tiktok')}
              disabled={isLoading !== null}
              className="h-14 bg-black hover:bg-gray-900 border border-gray-700 text-white font-semibold text-lg group"
            >
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              {isLoading === 'tiktok' ? 'Conectando...' : 'Continuar com TikTok'}
            </Button>

            {/* Instagram Login */}
            <Button
              onClick={() => handleOAuth('instagram')}
              disabled={isLoading !== null}
              className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg"
            >
              <Instagram className="w-6 h-6 mr-3" />
              {isLoading === 'instagram' ? 'Conectando...' : 'Continuar com Instagram'}
            </Button>

            {/* Facebook Login */}
            <Button
              onClick={() => handleOAuth('facebook')}
              disabled={isLoading !== null}
              className="h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"
            >
              <Facebook className="w-6 h-6 mr-3" />
              {isLoading === 'facebook' ? 'Conectando...' : 'Continuar com Facebook'}
            </Button>

            {/* Email Login */}
            <Button
              onClick={handleEmailAuth}
              disabled={isLoading !== null}
              variant="outline"
              className="h-14 border-gray-700 text-white hover:bg-gray-900 font-semibold text-lg"
            >
              <Mail className="w-6 h-6 mr-3" />
              {isLoading === 'email' ? 'Conectando...' : 'Continuar com Email'}
            </Button>
          </div>

          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-blue-400 text-sm text-center">
              🎁 <strong>Bônus Exclusivo:</strong> Faça login agora e ganhe 3 vídeos grátis no seu primeiro mês!
            </p>
          </div>

          <div className="mt-6 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-400 text-xs text-center">
              ⚙️ <strong>Configuração OAuth:</strong> Para usar autenticação real, configure as variáveis de ambiente no arquivo .env.local (consulte OAUTH_SETUP_GUIDE.md)
            </p>
          </div>

          <p className="text-gray-500 text-xs text-center mt-6">
            Ao continuar, você concorda com nossos{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Termos de Serviço
            </a>{' '}
            e{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
