import logo from "@/assets/logo.png";
import brushstrokes from "@/assets/brushstrokes.png";
import { WhatsAppButton } from "./WhatsAppButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Brushstroke decorative elements */}
      <img 
        src={brushstrokes} 
        alt="" 
        className="absolute top-16 right-6 md:right-16 w-48 md:w-72 h-auto opacity-[0.15] animate-float pointer-events-none"
      />
      
      <img 
        src={brushstrokes} 
        alt="" 
        className="absolute bottom-24 left-4 md:left-12 w-40 md:w-56 h-auto opacity-[0.12] animate-float-slow pointer-events-none rotate-180"
      />

      <img 
        src={brushstrokes} 
        alt="" 
        className="absolute top-1/3 left-1/4 w-32 md:w-44 h-auto opacity-[0.08] animate-float-slow pointer-events-none -rotate-12"
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <img 
          src={logo} 
          alt="Logo Felipe Melo - Psicólogo" 
          className="w-40 md:w-56 h-auto mx-auto mb-8"
        />
        
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-4">
          Felipe Melo
        </h1>
        
        <p className="text-xl md:text-2xl font-sans text-muted-foreground mb-8">
          Psicólogo | CRP 06/193310
        </p>
        
        <p className="text-lg md:text-xl font-sans text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
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
              href="#atendimento" 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Como Atendo
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};
