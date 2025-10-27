import { Phone } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=552126220754&text=Bem+vindos+%C3%A0+Maxi+Decora%C3%A7%C3%B5es&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 animate-[pulse_10s_ease-in-out_infinite] hover:animate-none hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-[#25D366]" />
      </div>
    </a>
  );
};
