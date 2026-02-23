import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import rogerSymbol from "@/assets/roger_ii-2.png";

export const OlharClinicoLink = () => {
  return (
    <section className="py-10 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/olhar-clinico"
            className="block group"
          >
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Imagem à esquerda */}
                <div className="h-48 md:h-auto md:w-48 lg:w-56 flex-shrink-0 relative overflow-hidden rounded-2xl m-3">
                  <img 
                    src={rogerSymbol} 
                    alt="Olhar Clínico" 
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-5">
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      Olhar Clínico
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Reflexões sobre temas que atravessam a experiência humana: autenticidade, 
                      autocrítica, emoções contraditórias e outros assuntos que frequentemente 
                      aparecem no processo terapêutico.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span className="hidden md:inline">Explorar</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
