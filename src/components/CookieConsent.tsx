import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-background/95 backdrop-blur-sm shadow-2xl">
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2">
                🍪 Aviso de Cookies e Privacidade
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Este site utiliza cookies para melhorar sua experiência de navegação e analisar o uso do site. 
                Ao continuar navegando, você concorda com nossa{" "}
                <a 
                  href="/politica-privacidade" 
                  className="text-primary hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>{" "}
                e com o uso de cookies conforme a LGPD (Lei Geral de Proteção de Dados).
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={handleAccept}
                  variant="gradient"
                  size="sm"
                  className="rounded-full"
                >
                  Aceitar Todos
                </Button>
                <Button 
                  onClick={handleReject}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  Apenas Necessários
                </Button>
              </div>
            </div>
            <button
              onClick={handleReject}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
