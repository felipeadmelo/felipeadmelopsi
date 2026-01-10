import { Hero } from "@/components/Hero";
import { ProcessoTerapeutico } from "@/components/ProcessoTerapeutico";
import { SobreMim } from "@/components/SobreMim";
import { AbordagemCentrada } from "@/components/AbordagemCentrada";
import { OlharClinicoLink } from "@/components/OlharClinicoLink";
import { ComoAtendo } from "@/components/ComoAtendo";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProcessoTerapeutico />
      <SobreMim />
      <AbordagemCentrada />
      <OlharClinicoLink />
      <ComoAtendo />
      <Footer />
      <WhatsAppButton size="floating" />
    </main>
  );
};

export default Index;
