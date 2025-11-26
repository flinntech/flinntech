import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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
        success: true
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