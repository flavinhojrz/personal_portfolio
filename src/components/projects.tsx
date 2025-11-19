import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { projects, type Project } from "@/types/Projects";
import plch from "@/assets/plch.png"

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            <span className="text-primary font-mono">//</span> Projetos em
            Destaque
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground text-pretty max-w-2xl">
            Alguns dos projetos que desenvolvi recentemente, demonstrando minhas
            habilidades técnicas e criatividade.
          </p>
        </div>

        <div className="md:hidden relative">
          <ProjectCard project={projects[currentIndex]} />

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all group h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image || plch}
          alt={project.title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-pretty line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 mt-auto">
        {project.demo && (
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Projeto
            </a>
          </Button>
        )}

        <Button variant="outline" size="sm" className="flex-1" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Ver Código
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
