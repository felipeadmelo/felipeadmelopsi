import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import rogersSymbol from "@/assets/rogers-symbol.png";

export const AbordagemCentrada = () => {
  return (
    <section id="abordagem" className="py-14 px-4 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-20 h-20 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={rogersSymbol} alt="Símbolo da Abordagem Centrada na Pessoa" className="w-full h-auto" />
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Abordagem Centrada na Pessoa
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl shadow-sm border border-border p-8"
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Desenvolvida pelo teórico norte-americano Carl R. Rogers (1902-1987) no século XX, 
              a Abordagem Centrada na Pessoa contribuiu com a consolidação da perspectiva humanista 
              na psicologia.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              A partir de seus estudos, Rogers percebeu no ser humano a capacidade inerente de 
              direcionar-se ao crescimento, desde que haja uma atmosfera facilitadora dessa 
              potencialidade. Essa capacidade foi nomeada de <strong className="text-foreground">Tendência Atualizante</strong> e 
              se tornou a noção chave da Abordagem Centrada na Pessoa (ACP).
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              O atendimento psicoterápico centrado na pessoa considera as potencialidades de quem 
              procura ajuda como as principais protagonistas para a compreensão do que está 
              acontecendo no aqui e no agora. O terapeuta nessa abordagem funciona como o 
              facilitador dessa atmosfera.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
          >
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground italic text-lg leading-relaxed mb-4">
                  "(...) existe em todo organismo, em qualquer nível, um fluxo subjacente de 
                  movimento para uma realização construtiva de suas possibilidades intrínsecas."
                </p>
                <p className="text-muted-foreground text-sm">
                  — Carl Rogers, 1977
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
