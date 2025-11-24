import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DemoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Demo Request Received!",
        description: "We'll be in touch within 24 hours to schedule your custom demo.",
      });
    }, 500);
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
              Your demo request has been received. Our team will reach out within 24 hours to schedule your personalized AI consultation.
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
                See Flinn AI in Action
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Schedule a personalized demo to discover how our custom AI solutions can transform your business operations and drive measurable results.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Custom demo tailored to your industry",
                  "Live AI capabilities showcase",
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
                    placeholder="John Doe" 
                    required 
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input 
                    id="company" 
                    placeholder="Acme Corp" 
                    required 
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your AI needs</Label>
                  <Textarea 
                    id="message" 
                    placeholder="What challenges are you looking to solve with AI?"
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full group">
                  Request Custom Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
