import { Monitor, MapPin, Clock, Calendar, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clinica1 from "@/assets/clinica-1.jpg";
import clinica2 from "@/assets/clinica-2.jpg";

const clinicaSlides = [
  { type: "map" as const },
  { type: "image" as const, src: clinica1, alt: "Sala de atendimento - ambiente acolhedor" },
  { type: "image" as const, src: clinica2, alt: "Consultório - espaço de trabalho" },
];

export const ComoAtendo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clinicaSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % clinicaSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + clinicaSlides.length) % clinicaSlides.length);

  return (
    <section id="atendimento" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6">
          Como Atendo
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Ofereço atendimento presencial em São Paulo e online para qualquer lugar do Brasil.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Presencial com carrossel */}
          <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-muted">
              <AnimatePresence mode="wait">
                {clinicaSlides[currentSlide].type === "map" ? (
                  <motion.iframe
                    key="map"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5!2d-46.6934!3d-23.5673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579c3f5f3d7d%3A0x4b4b4b4b4b4b4b4b!2sRua%20Paes%20Leme%2C%20136%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005424-150!5e0!3m2!1spt-BR!2sbr!4v1704067200000"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <motion.img
                    key={clinicaSlides[currentSlide].src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={clinicaSlides[currentSlide].src}
                    alt={clinicaSlides[currentSlide].alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {clinicaSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentSlide ? "bg-primary" : "bg-background/60"
                    }`}
                    aria-label={`Ir para slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-serif text-foreground mb-3">Presencial</h3>
            <p className="text-muted-foreground mb-4">
              Espaço Marke • São Paulo
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://share.google/PqCx0THOS2G81PuHw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="underline underline-offset-4">Ver no mapa</span>
              </a>
              <a
                href="https://www.instagram.com/espacomarke/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="underline underline-offset-4">@espacomarke</span>
              </a>
            </div>
          </div>

          {/* Online */}
          <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-serif text-foreground mb-4">Online</h3>
            <p className="text-muted-foreground">
              Atendimento por videochamada para todo o Brasil, com a mesma qualidade e acolhimento.
            </p>
          </div>
        </div>

        {/* Info adicional */}
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground mb-12">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Sessões de 50 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Horários flexíveis</span>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            Pronto para começar?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Entre em contato para agendar uma primeira conversa. Estou aqui para te ouvir.
          </p>
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
};
