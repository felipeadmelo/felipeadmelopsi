import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 blob-shape animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 blob-shape animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <img 
          src={logo} 
          alt="Logo Felipe Melo - Psicólogo" 
          className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 animate-fade-in"
        />
        
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Felipe Melo
        </h1>
        
        <p className="text-xl md:text-2xl font-sans text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Psicólogo | CRP 06/XXXXX
        </p>
        
        <p className="text-lg md:text-xl font-sans text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Um espaço seguro para navegar em lugares muitas vezes esquecidos e descobrir novas formas de lidar com o que aflige.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <WhatsAppButton size="lg" />
          <a 
            href="#processo" 
            className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
          >
            Saiba mais sobre a terapia
          </a>
        </div>
      </div>
    </section>
  );
};
