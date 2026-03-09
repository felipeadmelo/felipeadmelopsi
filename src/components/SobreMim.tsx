import perfilImg from "@/assets/perfil.jpg";
import ufpbLogo from "@/assets/ufpb.png";
import uspLogo from "@/assets/usp.png";
import proaluLogo from "@/assets/proalu.png";
import socialIcon from "@/assets/social-icon.png";
import brushstrokes from "@/assets/brushstrokes.png";

export const SobreMim = () => {
  const experiencias = [
    {
      logo: ufpbLogo,
      titulo: "Formação",
      descricao: "Graduado em Psicologia pela Universidade Federal da Paraíba (UFPB), com aprofundamento em psicologia comunitária e clínica. Monitor da disciplina Teoria e Terapia Centrada na Pessoa e estágio supervisionado de base rogeriana na Clínica Escola.",
    },
    {
      logo: socialIcon,
      titulo: "Assistência Social",
      descricao: "Atuação em São Paulo com imigrantes e refugiados, idosos e público egresso do sistema prisional, desenvolvendo escuta qualificada e acolhimento de diversas vivências.",
    },
    {
      logo: uspLogo,
      titulo: "Especialização",
      descricao: "Estudos e Atendimento a Famílias Incestuosas — Faculdade de Medicina da USP (2025–2026). Capacitação em saúde mental com famílias encaminhadas pelas varas da infância e da família.",
    },
    {
      logo: proaluLogo,
      titulo: "Acolhimento ao Luto",
      descricao: "Voluntário no Programa de Acolhimento ao Luto (PROALU) da UNIFESP, participando de formações e supervisões semanais ligadas ao manejo de casos de luto.",
    },
  ];

  return (
    <section id="sobre" className="py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Foto e nome */}
          <div className="md:col-span-4 text-center md:sticky md:top-24">
            <div className="relative inline-block">
              <div className="absolute -inset-3 bg-accent/10 rounded-full" />
              {/* Brushstroke decorations */}
              <img 
                src={brushstrokes} 
                alt="" 
                className="absolute -top-8 -right-12 w-32 h-auto opacity-20 rotate-12 pointer-events-none animate-float"
              />
              <img 
                src={brushstrokes} 
                alt="" 
                className="absolute -bottom-6 -left-10 w-28 h-auto opacity-15 -rotate-45 pointer-events-none animate-float"
                style={{ animationDelay: "1.5s" }}
              />
              <img
                src={perfilImg}
                alt="Felipe Melo - Psicólogo"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl mx-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mt-8 mb-2">
              Felipe Melo
            </h2>
            <p className="text-muted-foreground">
              Psicólogo Clínico
            </p>
          </div>

          {/* Trajetória */}
          <div className="md:col-span-8">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              Minha Trajetória
            </h3>

            <p className="text-foreground/85 leading-relaxed mb-10">
              Natural de Alagoas, me mudei para a Paraíba para cursar Psicologia na UFPB, 
              e depois para São Paulo, onde continuo construindo uma trajetória marcada pela escuta sensível 
              e pelo interesse genuíno nas histórias de vida. Minha formação rogeriana me ensinou 
              que cada pessoa possui recursos internos para seu próprio desenvolvimento — 
              e meu papel é facilitar esse caminho.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {experiencias.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <img src={exp.logo} alt={exp.titulo} className="h-14 w-auto mb-4 object-contain" />
                  <h4 className="font-serif text-xl text-foreground mb-2">{exp.titulo}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
