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
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              {/* Background image */}
              <div className="absolute inset-0">
                <img 
                  src={rogerSymbol} 
                  alt="" 
                  className="w-full h-full object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500 scale-110 group-hover:scale-100"
                />
              </div>
              
              {/* Content */}
              <div className="relative p-8 md:p-10 bg-gradient-to-r from-card/95 via-card/80 to-card/60">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
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
