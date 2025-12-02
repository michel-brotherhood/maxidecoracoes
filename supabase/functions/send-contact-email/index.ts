/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.76.1';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  console.log("Contact email function invoked");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();
    console.log("Processing contact request from:", email);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save to database
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({
        name,
        email,
        phone,
        message
      });

    if (dbError) {
      console.error("Error saving to database:", dbError);
      throw new Error(`Failed to save message to database: ${dbError.message}`);
    }

    console.log("Message saved to database successfully");

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    // Send email to company
    const companyEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contato <no-reply@maxidecoracoes.com.br>",
        to: ["contato@maxidecoracoes.com.br"],
        reply_to: [email],
        subject: "Novo cadastro no site",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #f97316, #fb923c); padding: 30px; border-radius: 10px 10px 0 0; }
                .header h1 { color: white; margin: 0; font-size: 24px; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .info-block { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #f97316; }
                .label { font-weight: bold; color: #f97316; margin-bottom: 5px; }
                .value { color: #555; }
                .message-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #f97316; }
                .footer { text-align: center; margin-top: 30px; color: #999; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>📬 Nova Mensagem de Contato</h1>
                </div>
                <div class="content">
                  <p>Você recebeu uma nova mensagem através do formulário de contato do site:</p>
                  
                  <div class="info-block">
                    <div class="label">👤 Nome:</div>
                    <div class="value">${name}</div>
                  </div>

                  <div class="info-block">
                    <div class="label">📧 E-mail:</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>

                  <div class="info-block">
                    <div class="label">📱 Telefone:</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                  </div>

                  <div class="message-box">
                    <div class="label">💬 Mensagem:</div>
                    <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
                  </div>

                  <p style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                    <strong>💡 Dica:</strong> Responda rapidamente para garantir um bom atendimento ao cliente!
                  </p>

                  <div class="footer">
                    <p>Esta mensagem foi enviada automaticamente através do site Maxi Decorações</p>
                    <p>Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!companyEmailResponse.ok) {
      const errorData = await companyEmailResponse.text();
      console.error("Error sending company email:", errorData);
      throw new Error(`Failed to send company email: ${errorData}`);
    }

    const companyEmailData = await companyEmailResponse.json();
    console.log("Company email sent successfully:", companyEmailData);

    // Send confirmation email to customer
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contato <no-reply@maxidecoracoes.com.br>",
        to: [email],
        subject: "Recebemos sua mensagem - Maxi Decorações",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #f97316, #fb923c); padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
                .header h1 { color: white; margin: 0; font-size: 28px; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .message-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #f97316; }
                .cta-button { display: inline-block; background: linear-gradient(135deg, #f97316, #fb923c); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #999; font-size: 12px; }
                .contact-info { background: white; padding: 15px; margin: 15px 0; border-radius: 8px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>✅ Mensagem Recebida!</h1>
                </div>
                <div class="content">
                  <p>Olá <strong>${name}</strong>,</p>
                  
                  <p>Obrigado por entrar em contato com a <strong>Maxi Decorações</strong>!</p>
                  
                  <p>Recebemos sua mensagem e nossa equipe entrará em contato em breve para atendê-lo da melhor forma possível.</p>

                  <div class="message-box">
                    <p><strong>📝 Sua mensagem:</strong></p>
                    <p style="color: #666; margin-top: 10px; white-space: pre-wrap;">${message}</p>
                  </div>

                  <div style="text-align: center;">
                    <a href="https://api.whatsapp.com/send/?phone=552126220754&text=Olá! Gostaria de mais informações." class="cta-button">
                      💬 Fale Conosco pelo WhatsApp
                    </a>
                  </div>

                  <div class="contact-info">
                    <p><strong>📍 Nossas Lojas:</strong></p>
                    <p>Loja Miguel de Frias - Icaraí, Niterói<br>
                    📞 (21) 2621-5177 | WhatsApp: (21) 2622-0754</p>
                    <p style="margin-top: 10px; color: #666; font-size: 14px;">
                      + 5 outras lojas em Niterói, São Gonçalo e Rio de Janeiro
                    </p>
                  </div>

                  <p style="margin-top: 30px; font-size: 14px; color: #666;">
                    Estamos há mais de 60 anos oferecendo os melhores produtos em decoração de interiores. Será um prazer atendê-lo!
                  </p>

                  <div class="footer">
                    <p><strong>Maxi Decorações</strong></p>
                    <p>Transformando ambientes em obras de arte</p>
                    <p style="margin-top: 10px;">
                      <a href="mailto:contato@maxidecoracoes.com.br" style="color: #f97316; text-decoration: none;">contato@maxidecoracoes.com.br</a>
                    </p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!customerEmailResponse.ok) {
      const errorData = await customerEmailResponse.text();
      console.error("Error sending customer email:", errorData);
      throw new Error(`Failed to send customer email: ${errorData}`);
    }

    const customerEmailData = await customerEmailResponse.json();
    console.log("Customer confirmation email sent successfully:", customerEmailData);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails enviados com sucesso!",
        companyEmailId: companyEmailData.id,
        customerEmailId: customerEmailData.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
