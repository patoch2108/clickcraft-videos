'use client';

import { Navbar } from '@/components/custom/navbar';
import { Trophy, TrendingUp, Star, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FavoritosPage() {
  const contasVirais = [
    {
      id: 1,
      username: '@viral_master',
      name: 'Carlos Silva',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      followers: '2.5M',
      totalViews: '125M',
      platform: 'TikTok',
      viralDate: '2024-01-10',
      topVideo: {
        title: 'Segredo do Sucesso Revelado',
        views: '8.2M',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop'
      }
    },
    {
      id: 2,
      username: '@fitness_queen',
      name: 'Ana Costa',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      followers: '1.8M',
      totalViews: '95M',
      platform: 'Instagram',
      viralDate: '2024-01-08',
      topVideo: {
        title: 'Transformação em 30 Dias',
        views: '6.5M',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop'
      }
    },
    {
      id: 3,
      username: '@tech_guru',
      name: 'Pedro Santos',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      followers: '3.2M',
      totalViews: '150M',
      platform: 'YouTube',
      viralDate: '2024-01-05',
      topVideo: {
        title: 'Hack de Produtividade',
        views: '12.1M',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop'
      }
    },
    {
      id: 4,
      username: '@food_magic',
      name: 'Julia Oliveira',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      followers: '1.5M',
      totalViews: '78M',
      platform: 'TikTok',
      viralDate: '2024-01-03',
      topVideo: {
        title: 'Receita em 60 Segundos',
        views: '5.8M',
        thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=600&fit=crop'
      }
    },
    {
      id: 5,
      username: '@motivation_pro',
      name: 'Ricardo Almeida',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      followers: '2.1M',
      totalViews: '110M',
      platform: 'Instagram',
      viralDate: '2024-01-01',
      topVideo: {
        title: 'Mude Sua Vida Hoje',
        views: '9.3M',
        thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop'
      }
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'TikTok': return 'text-pink-500';
      case 'Instagram': return 'text-purple-500';
      case 'YouTube': return 'text-red-500';
      default: return 'text-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300 font-semibold">Hall da Fama</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-yellow-500">Contas</span> que <span className="text-red-500">Viralizaram</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Criadores que alcançaram o sucesso usando o ClickCraft
          </p>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
            <Calendar className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">Atualização Semanal - Toda Segunda-feira</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">Contas Viralizadas</div>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">2.5B+</div>
            <div className="text-gray-400">Views Totais</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-gray-400">Taxa de Sucesso</div>
          </div>
        </div>

        {/* Contas Virais */}
        <div className="space-y-6">
          {contasVirais.map((conta, index) => (
            <div key={conta.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-yellow-500/50 transition-all">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Ranking Badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">#{index + 1}</span>
                </div>

                {/* Profile Info */}
                <div className="flex items-center gap-4 flex-1">
                  <img 
                    src={conta.avatar} 
                    alt={conta.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-800"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-xl mb-1">{conta.name}</h3>
                    <p className={`font-semibold mb-2 ${getPlatformColor(conta.platform)}`}>
                      {conta.username} • {conta.platform}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400">{conta.followers} seguidores</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-400">{conta.totalViews} views totais</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Video */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="relative aspect-[9/16]">
                      <img 
                        src={conta.topVideo.thumbnail} 
                        alt={conta.topVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                        <div className="w-full">
                          <p className="text-white text-sm font-semibold mb-1 line-clamp-2">
                            {conta.topVideo.title}
                          </p>
                          <p className="text-green-400 text-xs font-bold">
                            {conta.topVideo.views} views
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center">
                  <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600">
                    Ver Perfil
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/30 rounded-2xl p-8 text-center">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Seja o Próximo da Lista!
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Junte-se aos criadores de sucesso que viralizaram usando o ClickCraft. 
            Comece agora e veja seu nome aqui em breve!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-lg px-8">
            Começar Agora
          </Button>
        </div>
      </div>
    </div>
  );
}
