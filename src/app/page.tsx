import { Navbar } from '@/components/custom/navbar';
import { HeroSection } from '@/components/custom/hero-section';
import { UrlInput } from '@/components/custom/url-input';
import { PricingCards } from '@/components/custom/pricing-cards';
import { Testimonials } from '@/components/custom/testimonials';
import { FaqSection } from '@/components/custom/faq-section';
import { AuthSection } from '@/components/custom/auth-section';
import { Zap, Target, Sparkles, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500/10 via-black to-red-500/10">
      <Navbar />
      <HeroSection />
      <UrlInput />
      
      {/* Funcionamento Section */}
      <section id="funcionamento" className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 font-semibold">Como Funciona</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simples, Rápido e <span className="text-blue-500">Eficiente</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nossa IA analisa, edita e otimiza seus vídeos para máximo engajamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Iniciante */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-500">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plano Iniciante</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>5 vídeos por mês processados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Até 15 clips por vídeo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Qualidade 720p</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Publicação manual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Suporte por email</span>
                </li>
              </ul>
            </div>

            {/* Criador */}
            <div className="bg-gradient-to-br from-blue-500/10 to-red-500/10 border-2 border-blue-500/50 rounded-lg p-8 relative hover:border-blue-500 transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-red-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                POPULAR
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-500">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plano Criador</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>20 vídeos por mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Clips ilimitados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Qualidade 1080p</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Publicação automática geral</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Tabela de análise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Exportação em marca branca</span>
                </li>
              </ul>
            </div>

            {/* VIP */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-yellow-500/50 rounded-lg p-8 hover:border-yellow-500 transition-all">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-yellow-500">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plano VIP</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>50 vídeos por mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Clips ilimitados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Qualidade 4K</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Gestão multi-canal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Análise avançada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Tempo de craft 2.0 (prioridade máxima)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Língua Section */}
      <section id="lingua" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 font-semibold">Idiomas Disponíveis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Disponível em <span className="text-blue-500">Múltiplos</span> Idiomas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Crie conteúdo viral no seu idioma preferido
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Français', flag: '🇫🇷', priority: true },
              { name: 'English', flag: '🇬🇧' },
              { name: 'Português', flag: '🇧🇷' },
              { name: 'Español', flag: '🇪🇸' },
              { name: 'Deutsch', flag: '🇩🇪' },
              { name: 'Italiano', flag: '🇮🇹' },
              { name: '中文', flag: '🇨🇳' },
              { name: '日本語', flag: '🇯🇵' },
              { name: '한국어', flag: '🇰🇷' },
              { name: 'العربية', flag: '🇸🇦' },
              { name: 'Русский', flag: '🇷🇺' },
              { name: 'हिन्दी', flag: '🇮🇳' },
            ].map((lang) => (
              <div
                key={lang.name}
                className={`bg-gray-800/80 backdrop-blur-sm border ${
                  lang.priority ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-gray-700'
                } rounded-lg p-4 text-center hover:border-blue-500/50 transition-all cursor-pointer group`}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {lang.flag}
                </div>
                <p className="text-white font-semibold text-sm">{lang.name}</p>
                {lang.priority && (
                  <span className="inline-block mt-1 text-xs text-blue-400 font-semibold">
                    Prioritário
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Não encontrou seu idioma? <a href="#" className="text-blue-500 hover:text-blue-400">Entre em contato</a> e vamos adicionar!
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      <FaqSection />
      <AuthSection />
      <PricingCards />
      
      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-blue-500">CLICK</span>
                <span className="text-red-500">CRAFT</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Crie vídeos virais automaticamente com inteligência artificial.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#funcionamento" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="/exemplos" className="hover:text-white">Exemplos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 ClickCraft. Todos os direitos reservados. | Criado por patoch2108</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
