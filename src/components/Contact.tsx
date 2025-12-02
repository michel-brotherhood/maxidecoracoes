import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Telefone inválido" })
    .max(20, { message: "Telefone deve ter no máximo 20 caracteres" }),
  message: z.string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem deve ter no máximo 1000 caracteres" }),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar a política de privacidade",
  }),
});

const stores = [
  {
    name: "Loja Miguel de Frias",
    address: "Rua Miguel de Frias, 40, loja 101",
    district: "Icaraí, Niterói",
    cep: "CEP 24220-002",
    phone: "(21) 2621-5177",
    whatsapp: "(21) 2622-0754",
    schedule: "Seg a Sex: 09h - 19h | Sáb: 9h - 13h",
    featured: true,
  },
  {
    name: "Loja José Clemente",
    address: "Rua José Clemente, 73, loja 1",
    district: "Centro, Niterói",
    cep: "CEP 24020-102",
    phone: "(21) 2717-6636 / 2717-5103",
    schedule: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
    featured: true,
  },
  {
    name: "Loja Conceição",
    address: "Rua da Conceição 181",
    district: "Centro, Niterói",
    cep: "CEP 24020-083",
    phone: "(21) 2620-2118",
    schedule: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
  },
  {
    name: "Loja São Gonçalo",
    address: "Rua Feliciano Sodré, 71",
    district: "Centro, São Gonçalo",
    cep: "CEP 24440-440",
    phone: "(21) 2604-3099",
    schedule: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
  },
  {
    name: "Loja Tijuca",
    address: "Rua Conde de Bonfim 807 loja B",
    district: "Tijuca, Rio de Janeiro",
    cep: "CEP 20530-000",
    phone: "(21) 2571-0887",
    schedule: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
  },
  {
    name: "Loja José Clemente 58",
    address: "Rua José Clemente 58",
    district: "Centro, Niterói",
    cep: "CEP 24020-105",
    phone: "(21) 2622-9124",
    schedule: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
    note: "Somente tecidos",
  },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os produtos da Maxi Decorações.");
    window.open(`https://wa.me/55${cleanPhone}?text=${message}`, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);
      
      console.log("Enviando formulário:", { ...formData, privacyAccepted: formData.privacyAccepted });
      
      const { supabase } = await import("@/integrations/supabase/client");
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      console.log("Resposta da edge function:", { data, error });

      // Check for HTTP/network errors
      if (error) {
        console.error("Erro HTTP/rede:", error);
        toast({
          variant: "destructive",
          title: "Erro de conexão",
          description: error.message || "Não foi possível conectar ao servidor. Tente novamente.",
        });
        return;
      }

      // Check for application-level errors from the edge function
      if (data?.success === false) {
        console.error("Erro da aplicação:", data);
        
        if (data.details?.length > 0) {
          // Validation error
          toast({
            variant: "destructive",
            title: "Erro de validação",
            description: data.details[0].message,
          });
        } else {
          toast({
            variant: "destructive",
            title: "Erro ao enviar",
            description: data.error || "Ocorreu um erro. Tente novamente.",
          });
        }
        return;
      }

      // Success!
      console.log("Mensagem enviada com sucesso!");
      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", phone: "", message: "", privacyAccepted: false });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error("Erro inesperado:", error);
        toast({
          variant: "destructive",
          title: "Erro ao enviar mensagem",
          description: "Por favor, tente novamente ou entre em contato por telefone.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Visite uma de nossas lojas ou entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16">
          <div>
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300 shadow-lg">
              <CardContent className="p-5 sm:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Envie sua Mensagem</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nome *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo" 
                      className={`h-11 transition-all duration-300 focus:ring-2 focus:ring-primary ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">E-mail *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com" 
                      className={`h-11 transition-all duration-300 focus:ring-2 focus:ring-primary ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Telefone *</label>
                    <Input 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(21) 99999-9999" 
                      className={`h-11 transition-all duration-300 focus:ring-2 focus:ring-primary ${errors.phone ? 'border-destructive' : ''}`}
                    />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Mensagem *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seu projeto..." 
                      className={`min-h-32 transition-all duration-300 focus:ring-2 focus:ring-primary ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      id="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
                    />
                    <label htmlFor="privacyAccepted" className="text-sm text-muted-foreground cursor-pointer">
                      Li e aceito a{" "}
                      <a 
                        href="/politica-privacidade" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        Política de Privacidade
                      </a>
                      {" "}e concordo com o tratamento dos meus dados pessoais. *
                      {errors.privacyAccepted && <p className="text-xs text-destructive mt-1">{errors.privacyAccepted}</p>}
                    </label>
                  </div>
                  <Button 
                    variant="gradient"
                    size="lg" 
                    className="w-full rounded-full group"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground border-0 shadow-xl mb-6">
              <CardContent className="p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Horários de Atendimento</h3>
                </div>
                <div className="space-y-4 text-primary-foreground/95">
                  <div className="pb-4 border-b border-primary-foreground/20">
                    <p className="font-semibold mb-2">Loja Miguel de Frias</p>
                    <p>Segunda a Sexta: 9h às 19h</p>
                    <p>Sábados: 9h às 13h</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Demais Lojas</p>
                    <p>Segunda a Sexta: 10h às 18h</p>
                    <p>Sábados: 9h às 13h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500/50 transition-colors duration-300">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  WhatsApp - Loja Principal
                </h3>
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  onClick={() => handleWhatsApp("21 2622-0754")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale Conosco pelo WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 sm:mb-10">
            Nossas <span className="gradient-text">Lojas</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {stores.map((store, index) => (
              <Card 
                key={index} 
                className={`border-2 transition-all duration-300 hover:shadow-lg group ${
                  store.featured 
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-transparent' 
                    : 'hover:border-primary/50'
                }`}
              >
                <CardContent className="p-6">
                  {store.featured && (
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-accent text-white rounded-full">
                        Loja Principal
                      </span>
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-foreground mb-4">{store.name}</h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>{store.address}</p>
                        <p>{store.district}</p>
                        <p className="text-xs">{store.cep}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>{store.phone}</p>
                        {store.whatsapp && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-green-600 hover:text-green-700 hover:bg-transparent mt-1"
                            onClick={() => handleWhatsApp(store.whatsapp!)}
                          >
                            <MessageCircle className="w-3 h-3 mr-1" />
                            WhatsApp: {store.whatsapp}
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground text-xs">{store.schedule}</p>
                    </div>

                    {store.note && (
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs font-medium text-primary">{store.note}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
