import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  size?: "default" | "lg" | "floating";
  className?: string;
}

const WHATSAPP_NUMBER = "5582999139694";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, Felipe! Gostaria de agendar uma consulta.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const WhatsAppButton = ({ size = "default", className }: WhatsAppButtonProps) => {
  if (size === "floating") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#2A7D6C] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
          className
        )}
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" fill="currentColor" />
      </a>
    );
  }

  return (
    <Button
      asChild
      size={size === "lg" ? "lg" : "default"}
      className={cn(
        "bg-[#2A7D6C] hover:bg-[#235F54] text-white gap-2 font-medium",
        size === "lg" && "text-lg px-8 py-6",
        className
      )}
    >
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <MessageCircle className={cn("fill-current", size === "lg" ? "w-6 h-6" : "w-5 h-5")} />
        Agendar consulta
      </a>
    </Button>
  );
};
