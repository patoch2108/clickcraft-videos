'use client';

import { useState } from 'react';
import { Navbar } from '@/components/custom/navbar';
import { Video, Play, Download, Trash2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function BibliotecaPage() {
  const [activeTab, setActiveTab] = useState('meus');

  // Mock data
  const meusVideos = [
    { id: 1, title: 'Como Ganhar Dinheiro Online', views: '125K', date: '2024-01-15', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop' },
    { id: 2, title: 'Top 5 Apps de 2024', views: '89K', date: '2024-01-14', thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop' },
    { id: 3, title: 'Receita Fácil em 60 Segundos', views: '203K', date: '2024-01-13', thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=600&fit=crop' },
  ];

  const videosTest = [
    { id: 1, title: 'Teste Viral #1 - Motivação', views: '1.2M', available: true, thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop' },
    { id: 2, title: 'Teste Viral #2 - Humor', views: '890K', available: false, thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=600&fit=crop' },
  ];

  const topVip = [
    { id: 1, rank: 1, title: 'Segredo do Sucesso', creator: '@viral_master', views: '5.2M', thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop' },
    { id: 2, rank: 2, title: 'Transformação em 30 Dias', creator: '@fitness_pro', views: '4.8M', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop' },
    { id: 3, rank: 3, title: 'Hack de Produtividade', creator: '@tech_guru', views: '4.5M', thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-blue-500">Minha</span> <span className="text-red-500">Biblioteca</span>
          </h1>
          <p className="text-gray-400">Gerencie seus vídeos e acesse conteúdo exclusivo</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-gray-900 border border-green-500/20 mb-8">
            <TabsTrigger value="meus" className="data-[state=active]:bg-blue-500">
              Meus Vídeos
            </TabsTrigger>
            <TabsTrigger value="test" className="data-[state=active]:bg-blue-500">
              Vídeos Test
            </TabsTrigger>
            <TabsTrigger value="vip" className="data-[state=active]:bg-red-500">
              VIP Top 10
            </TabsTrigger>
          </TabsList>

          {/* Meus Vídeos */}
          <TabsContent value="meus">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meusVideos.map((video) => (
                <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all group">
                  <div className="relative aspect-[9/16] bg-gray-800">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="icon" className="bg-blue-500 hover:bg-blue-600 rounded-full w-16 h-16">
                        <Play className="w-8 h-8" />
                      </Button>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                      {video.views} views
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{video.date}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-500 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Vídeos Test */}
          <TabsContent value="test">
            <div className="bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/30 rounded-lg p-6 mb-6">
              <h3 className="text-white font-semibold text-lg mb-2">🎁 Vídeos Test Gratuitos</h3>
              <p className="text-gray-300">Teste nossos vídeos virais prontos! Disponível 1x por mês para usuários logados.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videosTest.map((video) => (
                <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="relative aspect-[9/16] bg-gray-800">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    {!video.available && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-white font-semibold mb-2">🔒 Já utilizado</p>
                          <p className="text-gray-400 text-sm">Próximo disponível em 15 dias</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{video.views} views médias</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-red-500"
                      disabled={!video.available}
                    >
                      {video.available ? 'Usar Agora' : 'Indisponível'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* VIP Top 10 */}
          <TabsContent value="vip">
            <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
              <h3 className="text-white font-semibold text-lg mb-2">👑 Ranking VIP</h3>
              <p className="text-gray-300">Top 10 vídeos mais virais da semana. Atualização toda segunda-feira.</p>
            </div>
            <div className="space-y-4">
              {topVip.map((video) => (
                <div key={video.id} className="bg-gray-900 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all p-4 flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">#{video.rank}</span>
                  </div>
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold mb-1 truncate">{video.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{video.creator}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-green-400 text-sm font-semibold">{video.views} views</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-500 to-red-500">
                    Ver Análise
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
