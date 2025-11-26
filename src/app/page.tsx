import { Navbar } from '@/components/custom/navbar';
import { HeroSection } from '@/components/custom/hero-section';
import { UrlInput } from '@/components/custom/url-input';
import { PricingCards } from '@/components/custom/pricing-cards';
import { Testimonials } from '@/components/custom/testimonials';
import { FaqSection } from '@/components/custom/faq-section';
import { AuthSection } from '@/components/custom/auth-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <UrlInput />
      <Testimonials />
      <FaqSection />
      <AuthSection />
      <PricingCards />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
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
                <li><a href="#" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Exemplos</a></li>
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
