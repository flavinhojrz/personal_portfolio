import {
  Code2,
  Database,
  Globe,
  Wrench,
  Server,
  Smartphone,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "Python", "C++"],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "MacOS"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    skills: [
      "React Native",
      "Expo",
      "PWA",
      "Responsive Design",
      "Mobile-First",
      "iOS/Android",
    ],
  },
  {
    title: "Outros",
    icon: Code2,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    skills: [
      "Clean Code",
      "TDD",
      "Agile",
      "UI/UX",
      "Acessibilidade",
      "Performance",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8">
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              <span className="text-primary font-mono">//</span> Habilidades
              Técnicas
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-muted-foreground text-pretty max-w-2xl">
              Tecnologias e ferramentas que domino para criar soluções completas
              e eficientes.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
                >
                  <div className="flex flex-col gap-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 ${category.bgColor} rounded-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-3 py-1.5 bg-secondary border border-border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-6 bg-card border border-border rounded-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg shrink-0">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Aprendizado Contínuo</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Estou sempre explorando novas tecnologias e aprimorando minhas
                  habilidades. Atualmente estudando
                  Machine Learning e inteligência artificial aplicada
                  ao desenvolvimento web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
