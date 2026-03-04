import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Pinceladas decorativas inspiradas na logo */}
      <svg className="absolute top-16 right-6 md:right-16 w-48 md:w-72 h-24 md:h-36 opacity-[0.07] text-primary" viewBox="0 0 300 80" fill="none">
        <path d="M10 45 Q60 10, 140 35 Q200 55, 290 25" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 65 Q100 30, 180 55 Q240 70, 280 50" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-24 left-4 md:left-14 w-40 md:w-56 h-20 md:h-28 opacity-[0.06] text-accent" viewBox="0 0 250 70" fill="none">
        <path d="M5 40 Q50 5, 120 30 Q180 55, 245 20" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="absolute top-1/3 left-6 md:left-20 w-28 md:w-40 h-12 md:h-16 opacity-[0.05] text-primary rotate-[-15deg]" viewBox="0 0 200 40" fill="none">
        <path d="M5 25 Q60 5, 120 20 Q160 30, 195 15" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
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
