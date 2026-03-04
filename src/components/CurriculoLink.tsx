import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";

export const CurriculoLink = () => {
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
            to="/curriculo"
            className="block group"
          >
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Ícone à esquerda */}
                <div className="h-32 md:h-auto md:w-48 lg:w-56 flex-shrink-0 bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-primary/60 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-5">
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      Currículo Profissional
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Formação acadêmica, experiência profissional, publicações e demais 
                      qualificações que fundamentam minha prática clínica.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span className="hidden md:inline">Ver currículo</span>
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
