import { Heart, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">{"<Dev />"}</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty max-w-xs">
              Desenvolvedor em formação, ansioso pela primeira oportunidade de
              estágio para aprender, colaborar e aplicar meus conhecimentos em
              projetos de verdade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#hero"
                className="text-sm hover:text-primary transition-colors"
              >
                Início
              </a>
              <a
                href="#about"
                className="text-sm hover:text-primary transition-colors"
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="text-sm hover:text-primary transition-colors"
              >
                Projetos
              </a>
              <a
                href="#skills"
                className="text-sm hover:text-primary transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-primary transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Conecte-se
            </h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://github.com/flavinhojrz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/flavinhojr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href="mailto:flavinhoosjr@outlook.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <div className="mt-2 code-snippet text-xs">
              <code>
                <span className="text-accent">function</span>{" "}
                <span className="text-primary">letsWork</span>
                <span className="text-yellow-400">{"() {"}</span>
                <br />
                <span className="ml-2 text-muted-foreground">
                  {"// Sempre aberto a novos desafios"}
                </span>
                <br />
                <span className="ml-2 text-accent">return</span>{" "}
                <span className="text-green-400">
                  &apos;flavinhoosjr@outlook.com&apos;
                </span>
                <br />
                <span className="text-yellow-400">{"}"}</span>
              </code>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Flávio Júnior. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              Feito com{" "}
              <Heart className="w-4 h-4 text-destructive fill-destructive" /> e
              muito café
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
