export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string | null; 
}
import yt_sm from "@/assets/yt_sum.png"
import gmlife from "@/assets/gmlife.png"
import bcr from "@/assets/bcr.png"
import sloc from "@/assets/sloc.png"
import fc from "@/assets/fc24.png"
import todo_flask from "@/assets/todo_flask.png"

export const projects: Project[] = [
  {
    id: 1,
    title: "YouTube Summarizer",
    description:
      "Ferramenta CLI que utiliza a API do Google Gemini para extrair transcrições de vídeos e gerar resumos automáticos com IA.",
    image: yt_sm,
    tags: ["Python", "Google Gemini", "AI", "Automation"],
    github: "https://github.com/flavinhojrz/youtube_summarizer",
    demo: null,
  },
  {
    id: 2,
    title: "Conway's Game of Life",
    description:
      "Simulação de autômato celular desenvolvida em C++. Gera visualizações quadro a quadro da evolução das células com configurações personalizáveis de renderização.",
    image: gmlife,
    tags: ["C++", "CMake", "Simulation", "Algorithms"],
    github: "https://github.com/flavinhojrz/game_life_cpp",
    demo: "https://drive.google.com/file/d/1zVBMVr-plzRabv6NrAZzD0TzZsohwXlb/view?usp=sharing",
  },
  {
    id: 3,
    title: "Bar Chart Race",
    description:
      'Aplicação CLI de visualização de dados que gera animações de "corrida de barras" a partir de arquivos CSV. Implementa ordenação dinâmica em tempo real e renderização customizável no terminal.',
    image: bcr,
    tags: ["C++", "Data Visualization", "Terminal UI", "Algorithms"],
    github: "https://github.com/flavinhojrz/bcr_cpp",
    demo: null,
  },
  {
    id: 4,
    title: "SLOC Counter",
    description:
      "Analisador estático de código que contabiliza linhas físicas (SLOC), comentários e espaços em branco. Suporta varredura recursiva de diretórios e gera relatórios estatísticos detalhados.",
    image: sloc,
    tags: ["C++", "Filesystem", "Parsing", "CLI"],
    github: "https://github.com/flavinhojrz/sloc_cpp",
    demo: null,
  },
  {
    id: 5,
    title: "FIFA 24 Market Predictor",
    description:
      "Projeto de Data Science que analisa estatísticas de jogadores e utiliza Machine Learning (Random Forest) para prever valores de mercado com precisão de 96%.",
    image: fc, 
    tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    github: "https://github.com/flavinhojrz/FIFA-Analysis-with-Data-Science",
    demo: null,
  },
  {
    id: 6,
    title: "Flask Task Manager",
    description:
      "Aplicação Web Fullstack para gerenciamento de tarefas. Implementa arquitetura MVC com Flask e SQLAlchemy, incluindo CRUD completo, sistema de busca, validação de formulários e deploy em produção.",
    image: todo_flask, 
    tags: ["Python", "Flask", "SQLAlchemy", "Fullstack"],
    github: "https://github.com/flavinhojrz/todo_list_flask", 
    demo: "https://flavinhojrz.pythonanywhere.com/",
  },
];
