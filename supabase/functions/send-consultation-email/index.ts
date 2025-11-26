import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ConsultationRequest = await req.json();

    console.log("Processing consultation request from:", email);

    // Send notification email to consulting@flinntech.com
    const notificationEmail = await resend.emails.send({
      from: "Flinn Technologies <onboarding@resend.dev>",
      to: ["consulting@flinntech.com"],
      subject: `New Consultation Request from ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Consultation Request</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>
            ${message ? `<p style="margin: 10px 0;"><strong>Message:</strong><br/>${message}</p>` : ''}
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This request was submitted via the Flinn Technologies website contact form.
          </p>
        </div>
      `,
    });

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "Flinn Technologies <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your consultation request!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">Thank You for Reaching Out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>We've received your consultation request and appreciate your interest in Flinn Technologies' AI solutions.</p>
          
          <p>Our team will review your inquiry and get back to you within 24 hours to schedule your personalized consultation.</p>
          
          <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">What to Expect:</h3>
            <ul style="color: #374151;">
              <li>Personalized consultation tailored to ${company}</li>
              <li>Discussion of AI capabilities relevant to your industry</li>
              <li>ROI analysis and use case exploration</li>
              <li>Q&A with our AI experts</li>
            </ul>
          </div>
          
          <p>Best regards,<br/>
          <strong>The Flinn Technologies Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
          
          <p style="color: #6b7280; font-size: 12px;">
            If you have any immediate questions, feel free to reply to this email.
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { notificationEmail, confirmationEmail });

    // Send data to Zapier webhook
    try {
      const zapierResponse = await fetch("https://hooks.zapier.com/hooks/catch/25498237/uzjar8p/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message: message || "",
          timestamp: new Date().toISOString(),
        }),
      });
      console.log("Zapier webhook called, status:", zapierResponse.status);
    } catch (zapierError) {
      console.error("Zapier webhook error:", zapierError);
      // Don't fail the entire request if Zapier fails
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        notificationId: notificationEmail.data?.id,
        confirmationId: confirmationEmail.data?.id
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
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);