import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Pinceladas decorativas inspiradas na logo */}
      <svg className="absolute top-12 right-4 md:right-12 w-56 md:w-80 h-28 md:h-40 opacity-[0.12] text-primary" viewBox="0 0 320 100" fill="none">
        <path d="M8 55 Q40 15, 100 40 Q160 65, 220 30 Q270 10, 310 35" stroke="currentColor" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 80 Q80 45, 150 65 Q210 80, 270 55 Q300 45, 310 60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-20 left-2 md:left-10 w-52 md:w-64 h-24 md:h-32 opacity-[0.10] text-accent" viewBox="0 0 280 80" fill="none">
        <path d="M5 45 Q45 8, 130 35 Q200 58, 275 22" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 65 Q90 40, 160 58 Q220 70, 260 50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      </svg>
      <svg className="absolute top-[28%] left-4 md:left-16 w-36 md:w-48 h-14 md:h-20 opacity-[0.08] text-primary rotate-[-12deg]" viewBox="0 0 220 50" fill="none">
        <path d="M5 30 Q55 5, 110 25 Q165 42, 215 18" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
      </svg>
      <svg className="absolute top-[60%] right-8 md:right-24 w-32 md:w-44 h-12 md:h-16 opacity-[0.06] text-accent rotate-[8deg]" viewBox="0 0 200 40" fill="none">
        <path d="M5 20 Q50 5, 100 22 Q150 35, 195 15" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
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
