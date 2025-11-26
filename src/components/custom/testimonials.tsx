'use client';

import { Star, Play } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-400">
            Milhares de criadores já viralizaram com ClickCraft
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover:scale-105"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-green-500/30"
                />
                <div className="flex-1">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">Criador de Conteúdo</p>
                </div>
                {testimonial.videoUrl && (
                  <button className="bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-full p-2 transition-colors">
                    <Play className="w-5 h-5 text-green-400" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">10K+</p>
            <p className="text-gray-400">Criadores Ativos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-red-400 mb-2">500M+</p>
            <p className="text-gray-400">Views Geradas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-400 mb-2">95%</p>
            <p className="text-gray-400">Taxa de Viralização</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</p>
            <p className="text-gray-400">Avaliação Média</p>
          </div>
        </div>
      </div>
    </section>
  );
}
