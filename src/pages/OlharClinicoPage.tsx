import { useEffect } from "react";
import { OlharClinico } from "@/components/OlharClinico";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OlharClinicoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen">
      <motion.div 
        className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Voltar ao início</span>
          </Link>
        </div>
      </motion.div>
      
      <OlharClinico />
      <Footer />
      <WhatsAppButton size="floating" />
    </main>
  );
};

export default OlharClinicoPage;
