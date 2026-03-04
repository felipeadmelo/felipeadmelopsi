import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Brushstroke decorative elements */}
      <svg className="absolute top-16 right-6 md:right-16 w-48 md:w-72 h-auto opacity-[0.07] animate-float" viewBox="0 0 200 60" fill="none">
        <path d="M5 35C20 20 45 15 80 25C115 35 140 18 165 22C175 24 190 30 195 28" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M10 45C30 38 60 30 95 38C120 43 150 32 180 36" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
      
      <svg className="absolute bottom-24 left-4 md:left-12 w-40 md:w-56 h-auto opacity-[0.06] animate-float" style={{ animationDelay: "2s" }} viewBox="0 0 160 50" fill="none">
        <path d="M5 25C25 10 55 18 85 15C110 12 135 22 155 18" stroke="hsl(var(--primary))" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M15 35C40 28 70 38 100 32C125 27 145 34 155 30" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="absolute top-1/3 left-1/4 w-32 md:w-44 h-auto opacity-[0.04] animate-float" style={{ animationDelay: "4s" }} viewBox="0 0 120 40" fill="none">
        <path d="M5 20C20 8 50 28 75 15C95 5 110 18 115 22" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <img 
          src={logo} 
          alt="Logo Felipe Melo - Psicólogo" 
          className="w-40 md:w-56 h-auto mx-auto mb-8 animate-fade-in"
        />
        
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Felipe Melo
        </h1>
        
        <p className="text-xl md:text-2xl font-sans text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Psicólogo | CRP 06/193310
        </p>
        
        <p className="text-lg md:text-xl font-sans text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Um espaço seguro para navegar em lugares muitas vezes esquecidos e descobrir novas formas de lidar com o que aflige.
        </p>
        
        <div className="flex flex-col gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <WhatsAppButton size="lg" />
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a 
              href="#processo" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              O Processo
            </a>
            <a 
              href="#sobre" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Sobre Mim
            </a>
            <a 
              href="#abordagem" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Abordagem
            </a>
            <a 
              href="/olhar-clinico" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Olhar Clínico
            </a>
            <a 
              href="#atendimento" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Como Atendo
            </a>
            <a 
              href="/curriculo" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Currículo
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};
