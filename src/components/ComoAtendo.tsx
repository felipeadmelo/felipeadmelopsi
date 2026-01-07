import { Monitor, MapPin, Clock, Calendar } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export const ComoAtendo = () => {
  return (
    <section id="atendimento" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6">
          Como Atendo
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Ofereço atendimento presencial em São Paulo e online para qualquer lugar do Brasil.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {/* Presencial */}
          <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif text-foreground mb-4">Presencial</h3>
            <p className="text-muted-foreground mb-4">
              Consultório em São Paulo
            </p>
            <a
              href="https://share.google/PqCx0THOS2G81PuHw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              Ver localização no mapa
            </a>
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
