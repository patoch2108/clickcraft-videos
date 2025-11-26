// Constants for ClickCraft App
import { Plan, Testimonial, FAQ, Language } from './types';

export const PLANS: Plan[] = [
  {
    id: 'iniciante',
    name: 'Iniciante',
    price: 29.90,
    features: [
      '5 vídeos por mês',
      'Até 15 clips por vídeo',
      'Qualidade 720p',
      'Publicação manual',
      'Suporte por email',
      'Tempo de craft padrão'
    ]
  },
  {
    id: 'criador',
    name: 'Criador',
    price: 79.90,
    popular: true,
    features: [
      '20 vídeos por mês',
      'Clips ilimitados',
      'Qualidade 1080p',
      'Publicação automática geral',
      'Tabela de análise',
      'Exportação em marca branca',
      'Tempo de craft prioritário'
    ]
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 149.90,
    features: [
      '50 vídeos por mês',
      'Clips ilimitados',
      'Qualidade 4K',
      'Exportação em marca branca',
      'Gestão multi-canal',
      'Imagem de marca personalizada',
      'Análise avançada',
      'Tempo de craft 2.0'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'ClickCraft revolucionou meu canal! Consegui 1M de views em 2 semanas.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    name: 'João Santos',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Ferramenta incrível! Meus shorts viralizaram em todas as plataformas.'
  },
  {
    id: '3',
    name: 'Ana Costa',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Automatização perfeita. Economizo 10 horas por semana!'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'Como funciona a criação automática de vídeos?',
    answer: 'Cole o link do vídeo original, nosso sistema analisa o conteúdo, identifica os momentos virais e cria clips otimizados automaticamente.'
  },
  {
    question: 'Posso usar em qualquer plataforma?',
    answer: 'Sim! ClickCraft cria vídeos monetizáveis para YouTube Shorts, TikTok, Instagram Reels e Facebook.'
  },
  {
    question: 'Quanto tempo leva para processar um vídeo?',
    answer: 'Depende do seu plano: Padrão (5-10 min), Prioritário (2-5 min), VIP 2.0 (1-3 min).'
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, sem taxas de cancelamento. Você mantém acesso até o fim do período pago.'
  },
  {
    question: 'Os vídeos são realmente monetizáveis?',
    answer: 'Sim! Nosso sistema garante que todos os clips atendam aos requisitos de monetização de cada plataforma.'
  }
];

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export const VIRAL_ACCOUNTS = [
  {
    id: '1',
    username: '@viral_creator1',
    platform: 'TikTok',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    views: 15000000,
    rank: 1
  },
  {
    id: '2',
    username: '@mega_shorts',
    platform: 'YouTube',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    views: 12000000,
    rank: 2
  },
  {
    id: '3',
    username: '@reels_master',
    platform: 'Instagram',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    views: 10000000,
    rank: 3
  }
];
