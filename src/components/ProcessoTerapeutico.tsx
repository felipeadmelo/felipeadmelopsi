import magritteImg from "@/assets/magritte-therapist.jpg";

export const ProcessoTerapeutico = () => {
  return (
    <section id="processo" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagem do Magritte */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-primary/5 blob-shape" />
            <img
              src={magritteImg}
              alt="O Terapeuta - René Magritte, 1937"
              className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
            <p className="text-sm text-muted-foreground text-center mt-4 italic">
              "O Terapeuta" — René Magritte, 1937
            </p>
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-8">
              O Processo Terapêutico
            </h2>

            <div className="space-y-6 text-foreground/85 leading-relaxed">
              <p>
                Iniciar um processo terapêutico pode ser uma orientação psiquiátrica para manejo de quadros agudos, 
                mas também uma <strong className="text-primary">decisão de prestar mais atenção</strong> aos detalhes 
                das próprias dinâmicas e repetições que causam danos emocionais muitas vezes naturalizados no dia a dia.
              </p>

              <p>
                Nesse caso, a terapia assume um caráter de <strong className="text-primary">autocuidado</strong>.
              </p>

              <p>
                É um espaço para navegar com segurança em lugares muitas vezes esquecidos — 
                e que de diversas formas chamam nossa atenção: seja por angústia, esquecimentos, 
                estranhamentos nas relações...
              </p>

              <p className="text-lg font-serif italic text-primary/90 border-l-4 border-primary/30 pl-6 py-2">
                É lançar um olhar para a possibilidade de se permitir afetar pelo que aflige, 
                descobrir outras formas de lidar com o que não muda e construir com o que ficou.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
