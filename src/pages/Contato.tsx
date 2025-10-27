import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Map } from "@/components/Map";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const stores = [
  {
    name: "Miguel de Frias - Icaraí",
    address: "Rua Miguel de Frias, 40, loja 101, Icaraí, Niterói. CEP 24220-002",
    phone: "(21) 2621-5177",
    whatsapp: "(21) 2622-0754",
    hours: "Seg-Sex: 09h-19h | Sáb: 9h-13h",
    coordinates: [-43.1089, -22.9068] as [number, number],
    highlight: true
  },
  {
    name: "José Clemente 73 - Centro",
    address: "Rua José Clemente, 73, loja 1, Centro, Niterói. CEP 24020-102",
    phone: "(21) 2717-6636 | (21) 2717-5103",
    hours: "Seg-Sex: 10h-18h | Sáb: 9h-13h",
    coordinates: [-43.1220, -22.8960] as [number, number]
  },
  {
    name: "Conceição - Centro",
    address: "Rua da Conceição 181, Centro, Niterói. CEP 24020-083",
    phone: "(21) 2620-2118",
    hours: "Seg-Sex: 10h-18h | Sáb: 9h-13h",
    coordinates: [-43.1230, -22.8970] as [number, number]
  },
  {
    name: "Feliciano Sodré - São Gonçalo",
    address: "Rua Feliciano Sodré, 71, Centro, São Gonçalo. CEP 24440-440",
    phone: "(21) 2604-3099",
    hours: "Seg-Sex: 10h-18h | Sáb: 9h-13h",
    coordinates: [-43.0538, -22.8264] as [number, number]
  },
  {
    name: "Conde de Bonfim - Tijuca",
    address: "Rua Conde de Bonfim 807 loja B, Tijuca, Rio de Janeiro. CEP 20530-000",
    phone: "(21) 2571-0887",
    hours: "Seg-Sex: 10h-18h | Sáb: 9h-13h",
    coordinates: [-43.2470, -22.9177] as [number, number]
  },
  {
    name: "José Clemente 58 - Tecidos",
    address: "Rua José Clemente 58, Centro, Niterói. CEP 24020-105",
    phone: "(21) 2622-9124",
    hours: "Seg-Sex: 10h-18h | Sáb: 9h-13h",
    coordinates: [-43.1215, -22.8955] as [number, number],
    specialty: "Somente tecidos"
  }
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(1, "Telefone é obrigatório"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000),
});

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);

      const whatsappNumber = "5521262207554";
      const message = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

      toast({
        title: "Redirecionando para o WhatsApp!",
        description: "Você será direcionado para continuar a conversa.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Erro no formulário",
          description: error.issues[0].message,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Visite uma de nossas lojas ou entre em contato. Estamos prontos para atendê-lo!
            </p>
          </div>

          <div className="mb-16">
            <Map stores={stores} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(21) 99999-9999"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full rounded-full"
                    disabled={isSubmitting}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Enviando..." : "Enviar via WhatsApp"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Contato Rápido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      WhatsApp Principal
                    </h3>
                    <a
                      href="https://wa.me/5521262207554"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (21) 2622-0754
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email
                    </h3>
                    <a
                      href="mailto:contato@maxidecoracoes.com.br"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contato@maxidecoracoes.com.br
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Horários de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
                    <p className="font-semibold text-sm mb-1">Loja Miguel de Frias (Icaraí)</p>
                    <p className="text-sm text-muted-foreground">Segunda a Sexta: 09h - 19h</p>
                    <p className="text-sm text-muted-foreground">Sábados: 9h - 13h</p>
                  </div>
                  <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
                    <p className="font-semibold text-sm mb-1">Demais Lojas</p>
                    <p className="text-sm text-muted-foreground">Segunda a Sexta: 10h - 18h</p>
                    <p className="text-sm text-muted-foreground">Sábados: 9h - 13h</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              Nossas <span className="gradient-text">Lojas</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {stores.map((store, index) => (
                <Card
                  key={index}
                  className={`border-2 hover:shadow-xl transition-all duration-300 group ${
                    store.highlight ? "border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5" : "hover:border-primary/30"
                  }`}
                >
                  <CardContent className="p-6">
                    {store.highlight && (
                      <div className="mb-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full">
                          Loja Principal
                        </span>
                      </div>
                    )}
                    {store.specialty && (
                      <div className="mb-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-accent/20 text-accent-foreground rounded-full">
                          {store.specialty}
                        </span>
                      </div>
                    )}
                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                      {store.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{store.address}</span>
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{store.phone}</span>
                      </p>
                      {store.whatsapp && (
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <a
                            href={`https://wa.me/55${store.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {store.whatsapp}
                          </a>
                        </p>
                      )}
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{store.hours}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
