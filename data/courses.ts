import type { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'course-1',
    title: 'Engenharia de Prompt',
    description: 'Domine a arte de criar prompts eficazes para extrair o máximo de modelos de IA.',
    thumbnail: 'https://fernandorank.com/wp-content/uploads/2025/09/engenharia-de-prompt-1-scaled.jpg',
    modules: [
      {
        id: 'module-1-1',
        title: 'Fundamentos da Engenharia de Prompt',
        lessons: [
          {
            id: 'lesson-1-1-1',
            title: 'O que é um Prompt?',
            duration: '12:35',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Esta lição aborda os conceitos fundamentais dos prompts e como eles interagem com os modelos de linguagem. Exploraremos a estrutura de um prompt e como ele orienta a IA para gerar a saída desejada.'
          },
          {
            id: 'lesson-1-1-2',
            title: 'Técnicas de Zero-shot e Few-shot',
            duration: '15:10',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Aprenda a fornecer exemplos dentro do seu prompt (few-shot) para melhorar drasticamente a qualidade e a relevância das respostas da IA, em comparação com prompts diretos (zero-shot).'
          },
          {
            id: 'lesson-1-1-3',
            title: 'Instruções Claras e Contexto',
            duration: '18:42',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'A clareza é fundamental. Discutiremos como formular instruções inequívocas e fornecer contexto suficiente para que o modelo entenda exatamente o que você precisa.'
          }
        ]
      },
      {
        id: 'module-1-2',
        title: 'Prompts Avançados',
        lessons: [
          {
            id: 'lesson-1-2-1',
            title: 'Cadeia de Pensamento (Chain of Thought)',
            duration: '22:05',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Incentive o modelo a "pensar em voz alta" e detalhar seu raciocínio passo a passo. Essa técnica melhora a performance em tarefas complexas de lógica e matemática.'
          },
          {
            id: 'lesson-1-2-2',
            title: 'Criando Personas para a IA',
            duration: '25:30',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Atribua um papel ou persona à IA (por exemplo, "Aja como um especialista em marketing") para obter respostas com um tom, estilo e conhecimento específicos.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    title: 'Imagens com IA',
    description: 'Gere e manipule imagens incríveis utilizando inteligência artificial.',
    thumbnail: 'https://fernandorank.com/wp-content/uploads/2025/09/imagens-com-ia-1.jpg',
    modules: [
      {
        id: 'module-2-1',
        title: 'Introdução à Geração de Imagens',
        lessons: [
          {
            id: 'lesson-2-1-1',
            title: 'Como funcionam os Modelos de Difusão',
            duration: '14:50',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Entenda a tecnologia por trás de geradores de imagem como Midjourney e DALL-E. Vamos desmistificar o processo de difusão, que transforma ruído aleatório em imagens coerentes a partir de um prompt de texto.'
          },
          {
            id: 'lesson-2-1-2',
            title: 'Escrevendo Prompts Visuais Eficazes',
            duration: '19:45',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Aprenda a estrutura de um bom prompt para imagens: sujeito, estilo, composição, iluminação e parâmetros técnicos. Veremos como cada elemento influencia o resultado final.'
          }
        ]
      },
      {
        id: 'module-2-2',
        title: 'Técnicas e Estilos',
        lessons: [
          {
            id: 'lesson-2-2-1',
            title: 'Controlando Composição e Câmera',
            duration: '24:00',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Vá além do básico. Aprenda a usar termos técnicos de fotografia e cinema para ditar o ângulo da câmera, a profundidade de campo e a composição da sua imagem.'
          },
          {
            id: 'lesson-2-2-2',
            title: 'Explorando Estilos Artísticos',
            duration: '26:18',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'De "arte digital" a "fotografia cinematográfica", de "lápis de cor" a "vaporwave". Explore uma vasta gama de estilos para dar uma identidade única às suas criações.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    title: 'Vídeos com IA',
    description: 'Produza vídeos dinâmicos e animações a partir de texto e imagens.',
    thumbnail: 'https://fernandorank.com/wp-content/uploads/2025/09/videos-com-ia-1.jpg',
    modules: [
      {
        id: 'module-3-1',
        title: 'Fundamentos da Geração de Vídeo',
        lessons: [
          {
            id: 'lesson-3-1-1',
            title: 'O que são Modelos de Vídeo Generativos?',
            duration: '11:40',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Uma introdução aos modelos de IA que podem gerar clipes de vídeo. Abordaremos as principais ferramentas do mercado, como Sora, Runway e Pika Labs.'
          },
          {
            id: 'lesson-3-1-2',
            title: 'Prompts para Movimento',
            duration: '16:25',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Aprenda a descrever ações e movimentos em seus prompts para criar cenas dinâmicas. Veremos como controlar a direção, a velocidade e o tipo de movimento.'
          }
        ]
      },
      {
        id: 'module-3-2',
        title: 'Animação e Edição com IA',
        lessons: [
          {
            id: 'lesson-3-2-1',
            title: 'Animando Imagens Estáticas',
            duration: '18:10',
            videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
            content: 'Dê vida às suas imagens geradas por IA. Aprenda a usar ferramentas para adicionar movimentos sutis de câmera, animações de elementos e criar clipes curtos a partir de uma única imagem.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    title: 'Biblioteca de Prompts',
    description: 'Construa sua própria coleção de prompts para otimizar seu fluxo de trabalho.',
    thumbnail: 'https://fernandorank.com/wp-content/uploads/2025/09/biblioteca-1-scaled.jpg',
    modules: []
  }
];