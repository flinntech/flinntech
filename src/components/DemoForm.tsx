import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const DemoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string || null,
    };

    try {
      // Store in database
      const { error: dbError } = await supabase
        .from("consultation_requests")
        .insert([data]);

      if (dbError) throw dbError;

      // Send webhook notification to Zapier
      try {
        await fetch("https://hooks.zapier.com/hooks/catch/25498237/uzjar8p/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
        // Don't throw - we still want to show success if DB insert worked
      }

      setIsSubmitted(true);
      toast({
        title: "Consultation Request Received!",
        description: "We'll be in touch within 24 hours to schedule your consultation.",
      });
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at consulting@flinntech.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 lg:py-32 bg-slate-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your consultation request has been received. Our team will reach out within 24 hours to schedule your personalized AI consultation.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="demo" className="py-24 lg:py-32 bg-slate-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Schedule Your Free Consultation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Book a personalized consultation to discover how our custom AI solutions can transform your business operations and drive measurable results.
              </p>
              
               <ul className="space-y-4">
                {[
                  "Consultation tailored to your industry",
                  "AI capabilities and solutions review",
                  "ROI analysis and use case discussion",
                  "Q&A with our AI experts",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="John Doe" 
                    required 
                    className="h-12"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    className="h-12"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input 
                    id="company"
                    name="company"
                    placeholder="Acme Corp" 
                    required 
                    className="h-12"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your AI needs</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="What challenges are you looking to solve with AI?"
                    rows={4}
                    className="resize-none"
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full group"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Schedule Consultation"}
                  {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy. We respect your data.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
