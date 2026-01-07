import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src={logo} 
          alt="Logo Felipe Melo" 
          className="w-16 h-16 mx-auto mb-6 opacity-80"
        />
        
        <p className="text-secondary-foreground/80 mb-2">
          Felipe Melo — Psicólogo
        </p>
        
        <p className="text-sm text-secondary-foreground/60 mb-6">
          CRP 06/XXXXX
        </p>
        
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-secondary-foreground/70 mb-8">
          <a href="#processo" className="hover:text-secondary-foreground transition-colors">
            O Processo
          </a>
          <a href="#sobre" className="hover:text-secondary-foreground transition-colors">
            Sobre Mim
          </a>
          <a href="#atendimento" className="hover:text-secondary-foreground transition-colors">
            Como Atendo
          </a>
        </nav>
        
        <p className="text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} Felipe Melo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
