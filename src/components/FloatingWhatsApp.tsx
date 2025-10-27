import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stores = [
  {
    name: "Loja Miguel de Frias",
    location: "Icaraí, Niterói",
    phone: "2622-0754",
  },
  {
    name: "Loja José Clemente 73",
    location: "Centro, Niterói",
    phone: "2717-6636",
  },
  {
    name: "Loja Conceição",
    location: "Centro, Niterói",
    phone: "2620-2118",
  },
  {
    name: "Loja São Gonçalo",
    location: "Centro, São Gonçalo",
    phone: "2604-3099",
  },
  {
    name: "Loja Tijuca",
    location: "Tijuca, Rio de Janeiro",
    phone: "2571-0887",
  },
  {
    name: "Loja José Clemente 58",
    location: "Centro, Niterói",
    phone: "2622-9124",
  },
];

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStoreClick = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    window.open(
      `https://api.whatsapp.com/send/?phone=5521${cleanPhone}&text=Olá! Gostaria de mais informações.`,
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6C] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300 animate-[pulse_10s_ease-in-out_infinite] hover:animate-none hover:scale-110 group"
        aria-label="Abrir menu WhatsApp"
      >
        <div className="relative">
          {isOpen ? (
            <X className="w-7 h-7 transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full ring-2 ring-white animate-pulse" />
            </>
          )}
        </div>
      </button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 shadow-2xl animate-in slide-in-from-bottom-2 duration-300">
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1 text-foreground">
              Escolha uma loja
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Selecione a unidade mais próxima
            </p>
            <div className="space-y-2">
              {stores.map((store, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto py-3 px-4 hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all group"
                  onClick={() => handleStoreClick(store.phone)}
                >
                  <div className="flex items-start gap-3 w-full">
                    <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="flex-1 text-left">
                      <p className="font-medium text-sm text-foreground">
                        {store.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {store.location}
                      </p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
