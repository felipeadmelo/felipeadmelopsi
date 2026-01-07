import { Hero } from "@/components/Hero";
import { ProcessoTerapeutico } from "@/components/ProcessoTerapeutico";
import { SobreMim } from "@/components/SobreMim";
import { ComoAtendo } from "@/components/ComoAtendo";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProcessoTerapeutico />
      <SobreMim />
      <ComoAtendo />
      <Footer />
      <WhatsAppButton size="floating" />
    </main>
  );
};

export default Index;
