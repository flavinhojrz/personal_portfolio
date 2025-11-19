import { User, Briefcase, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col gap-8">
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              <span className="text-primary font-mono">//</span> Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">Quem sou eu</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Sou estudante de Ciência da Computação e estou em busca da
                    minha primeira oportunidade de estágio. Meu objetivo é
                    simples: quero aplicar a teoria da faculdade em problemas
                    reais e aprender com quem já está no mercado. Sou esforçado,
                    tenho boa base lógica e estou pronto para me dedicar e
                    evoluir dentro de uma equipe.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">Experiência</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Minha experiência prática vem dos projetos da graduação e do
                    estudo autodidata. Tenho focado em desenvolver aplicações
                    web e estudar análise de dados, usando tecnologias como
                    React, Node.js e Python. Uso o GitHub para organizar meus
                    códigos e tento sempre simular cenários reais nos meus
                    projetos pessoais para ganhar familiaridade com as
                    ferramentas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg shrink-0">
                  <Heart className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">Paixões</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Mais do que escrever código, sou movido pela curiosidade de
                    entender como as tecnologias funcionam "por baixo do capô".
                    Tenho grande interesse em Inteligência Artificial e
                    Desenvolvimento Web, estando sempre em busca de novos
                    cursos, documentações e desafios que me permitam expandir
                    meu conhecimento e contribuir com inovação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
