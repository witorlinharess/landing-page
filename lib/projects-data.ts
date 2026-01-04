export type ProjectDetail = {
  slug: string
  title: string
  client: string
  year: string
  description: string
  image: string
  url: string
  problem: string
  solution: string
  technologies: string[]
  challenges: string[]
  results: string[]
  gallery: string[]
}

export const PROJECTS_DETAIL: ProjectDetail[] = [
  {
    slug: 'wefronti',
    title: 'Site Wefronti',
    client: 'Wefronti',
    year: '2025',
    description: 'Site institucional desenvolvido para a Wefronti, empresa brasileira de tecnologia especializada em soluções digitais.',
    image: '/projects/projeto-wefronti.png',
    url: 'https://wefronti.com',
    problem: 'A Wefronti precisava de uma presença digital moderna que comunicasse seus serviços de forma clara e profissional, com foco em conversão e experiência do usuário.',
    solution: 'Desenvolvemos um site institucional responsivo com design minimalista, focado em performance e SEO. A arquitetura prioriza clareza na comunicação dos serviços e facilita o contato com potenciais clientes.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    challenges: [
      'Criar uma identidade visual que transmitisse profissionalismo e inovação',
      'Otimizar performance para carregamento instantâneo',
      'Implementar estrutura escalável para futuras expansões',
      'Garantir excelente SEO desde o lançamento'
    ],
    results: [
      'Site com carregamento em menos de 1 segundo',
      'Score de 95+ no Lighthouse (Performance, SEO, Accessibility)',
      'Aumento significativo no engajamento de visitantes',
      'Estrutura modular permitindo fácil manutenção'
    ],
    gallery: ['/projects/projeto-wefronti.png']
  },
  {
    slug: 'checkpay',
    title: 'Página de Checkout CheckPay',
    client: 'CheckPay',
    year: '2024',
    description: 'Interface de checkout otimizada desenvolvida para a CheckPay, focada em maximizar conversão e proporcionar uma experiência de pagamento fluida e segura.',
    image: '/projects/projeto-wefronti.png',
    url: '#',
    problem: 'A CheckPay precisava de uma página de checkout que reduzisse o abandono de carrinho e aumentasse a taxa de conversão, mantendo altos padrões de segurança e usabilidade.',
    solution: 'Criamos uma interface de checkout simplificada com processo em etapas claras, validação em tempo real, múltiplas opções de pagamento e design responsivo que funciona perfeitamente em todos os dispositivos.',
    technologies: ['React', 'Next.js', 'Stripe', 'TypeScript'],
    challenges: [
      'Implementar sistema de pagamento seguro e confiável',
      'Reduzir etapas do checkout sem perder informações essenciais',
      'Criar experiência consistente entre desktop e mobile',
      'Integrar múltiplos métodos de pagamento'
    ],
    results: [
      'Redução de 35% na taxa de abandono de carrinho',
      'Aumento de 28% na conversão de vendas',
      'Tempo médio de checkout reduzido em 40%',
      'Score de 98 em usabilidade móvel'
    ],
    gallery: ['/projects/projeto-wefronti.png']
  }
]
