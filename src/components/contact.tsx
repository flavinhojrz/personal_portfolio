"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá, me chamo *${formData.name}*.\n\nMeu email é: ${formData.email}\n\n*Mensagem:* ${formData.message}`;
    const phoneNumber = "5584992211692";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    toast.success("Redirecionando para o WhatsApp!", {
      description:
        "Finalize o envio da mensagem pelo app do WhatsApp ou Web WhatsApp.",
      duration: 5000,
      style: { minWidth: "300px", color: "green" },
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col gap-8">
          {/* Section Header */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              <span className="text-primary font-mono">//</span> Entre em
              Contato
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Tem um projeto em mente ou quer conversar sobre tecnologia?
              Ficarei feliz em responder!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <User className="w-4 h-4 text-primary" />
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="flex flex-col gap-6">
              {/* Direct Contact */}
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-4">Contato Direto</h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:flavinhoosjr@outlook.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-mono text-sm">
                      flavinhoosjr@outlook.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="justify-start" asChild>
                    <a
                      href="https://github.com/flavinhojrz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-3" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <a
                      href="https://www.linkedin.com/in/flavinhojr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <a
                      href="https://instagram.com/flaviojrzz_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 mr-3" />
                      <span>Instagram</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Disponível para novos projetos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Responderei em até 24 horas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
