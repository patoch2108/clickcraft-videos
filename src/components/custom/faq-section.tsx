'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

export function FaqSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-semibold">Perguntas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dúvidas? Temos Respostas
          </h2>
          <p className="text-xl text-gray-400">
            Tudo que você precisa saber sobre o ClickCraft
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-900/50 border border-gray-800 rounded-xl px-6 hover:border-green-500/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-white hover:text-green-400 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Ainda tem dúvidas?</p>
          <a
            href="mailto:suporte@clickcraft.com"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Entre em contato com nosso suporte
          </a>
        </div>
      </div>
    </section>
  );
}
