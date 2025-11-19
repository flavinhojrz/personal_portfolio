import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import perfil from "@/assets/_LNO3708 (1).jpg";
import TextType from "./bits/texttype";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-8 py-12 sm:py-20">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-background">
              <img
                src={perfil}
                alt="Desenvolvedor Full-Stack"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center justify-center">
              <span className="text-sm sm:text-base font-mono text-primary border border-primary/30 bg-primary/10 px-4 py-2 rounded-full">
                {"{ Full-Stack Developer }"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Olá, eu sou{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                <TextType
                  text={"Flávio Júnior"}
                  loop={false}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter={"|"}
                 />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Transformo ideias em aplicações web modernas e escaláveis usando
              as melhores tecnologias do mercado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={scrollToContact}
              >
                <Mail className="w-4 h-4 mr-2" />
                Entre em Contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="#projects">
                  Ver Projetos
                  <ArrowDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="ghost"
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
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href="mailto:contato@exemplo.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Code Snippet Decoration */}
          <div className="mt-8 code-snippet max-w-md w-full text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <code className="text-xs sm:text-sm">
              <span className="text-accent">const</span>{" "}
              <span className="text-foreground">developer</span> ={" "}
              <span className="text-yellow-400">{"{"}</span>
              <br />
              <span className="ml-4 text-primary">name</span>:{" "}
              <span className="text-green-400">&apos;Flávio Júnior&apos;</span>,
              <br />
              <span className="ml-4 text-primary">skills</span>:{" "}
              <span className="text-yellow-400">[</span>
              <span className="text-green-400">&apos;React&apos;</span>,{" "}
              <span className="text-green-400">&apos;Node.js&apos;</span>
              <span className="text-yellow-400">]</span>,
              <br />
              <span className="ml-4 text-primary">passion</span>:{" "}
              <span className="text-green-400">
                &apos;Criar experiências incríveis&apos;
              </span>
              <br />
              <span className="text-yellow-400">{"}"}</span>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
