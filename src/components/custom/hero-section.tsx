'use client';

import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [binaryLines, setBinaryLines] = useState<string[]>([]);

  useEffect(() => {
    // Generate binary pattern only on client side to avoid hydration mismatch
    const lines = Array.from({ length: 50 }).map(() =>
      Array.from({ length: 100 })
        .map(() => Math.random() > 0.5 ? '1' : '0')
        .join(' ')
    );
    setBinaryLines(lines);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Binary Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-20">
          <div className="text-green-500 text-xs font-mono leading-tight whitespace-pre overflow-hidden">
            {binaryLines.map((line, i) => (
              <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Einstein Hacker Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop"
              alt="Einstein Hacker"
              className="relative rounded-2xl shadow-2xl border-2 border-green-500/30 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-3 rounded-lg shadow-xl font-bold">
              <Sparkles className="inline w-5 h-5 mr-2" />
              IA Powered
            </div>
          </div>

          {/* Right: Hero Text */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-blue-500">CLICK</span>
              <span className="text-red-500">CRAFT</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Crie Vídeos Virais
            </p>
            <p className="text-xl text-gray-400 mb-8">
              Automaticamente. Monetizáveis. Em Segundos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-3">
                <p className="text-green-400 font-semibold">✓ YouTube Shorts</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-3">
                <p className="text-green-400 font-semibold">✓ TikTok & Reels</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
