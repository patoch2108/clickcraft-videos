'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Video, 
  TrendingUp, 
  Clock, 
  Upload, 
  LogOut,
  BarChart3,
  Settings,
  Sparkles
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  platform: string;
  avatar: string;
  plan: string;
  videosRemaining: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar autenticação
    const authStatus = localStorage.getItem('clickcraft_auth');
    const userData = localStorage.getItem('clickcraft_user');

    if (!authStatus || !userData) {
      router.push('/#auth');
      return;
    }

    setUser(JSON.parse(userData));
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('clickcraft_auth');
    localStorage.removeItem('clickcraft_user');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500/10 via-black to-red-500/10 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500/10 via-black to-red-500/10">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">
                <span className="text-blue-500">CLICK</span>
                <span className="text-red-500">CRAFT</span>
              </h1>
              <span className="text-gray-400 text-sm">Dashboard</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-blue-500"
                />
                <div className="hidden md:block">
                  <p className="text-white font-semibold text-sm">{user.name}</p>
                  <p className="text-gray-400 text-xs capitalize">Plano {user.plan}</p>
                </div>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:bg-gray-900"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Video className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">{user.videosRemaining}</span>
            </div>
            <p className="text-gray-400 text-sm">Vídeos Restantes</p>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-white">0</span>
            </div>
            <p className="text-gray-400 text-sm">Vídeos Processados</p>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">0</span>
            </div>
            <p className="text-gray-400 text-sm">Em Processamento</p>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold text-white">0</span>
            </div>
            <p className="text-gray-400 text-sm">Total de Views</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Ações Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex flex-col items-center justify-center gap-2">
              <Upload className="w-8 h-8" />
              <span className="font-semibold">Novo Vídeo</span>
            </Button>

            <Button className="h-24 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white flex flex-col items-center justify-center gap-2">
              <Sparkles className="w-8 h-8" />
              <span className="font-semibold">IA Automática</span>
            </Button>

            <Button className="h-24 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white flex flex-col items-center justify-center gap-2">
              <Settings className="w-8 h-8" />
              <span className="font-semibold">Configurações</span>
            </Button>
          </div>
        </div>

        {/* Recent Videos */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Vídeos Recentes</h2>
          <div className="text-center py-12">
            <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">Nenhum vídeo processado ainda</p>
            <p className="text-gray-500 text-sm mb-6">
              Comece fazendo upload do seu primeiro vídeo para criar clips virais!
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <Upload className="w-4 h-4 mr-2" />
              Fazer Upload
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
