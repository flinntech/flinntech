import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import founderPlaceholder from "@/assets/founder-placeholder.jpg";

const AboutFounder = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    demoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Your <span className="text-accent">AI Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building intelligent systems that transform how businesses operate
            </p>
          </div>

          <Card className="overflow-hidden border-2 hover:border-accent/50 transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8 md:p-12">
                  <div className="relative w-48 h-48 md:w-full md:h-auto md:aspect-square">
                    <img
                      src={founderPlaceholder}
                      alt="Founder portrait"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-accent/20" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Product Management & AI Development Expert
                      </h3>
                      <p className="text-muted-foreground">
                        Founder & Lead Architect
                      </p>
                    </div>

                    <div className="space-y-4 text-foreground/90 leading-relaxed">
                      <p>
                        With a proven track record in product management and AI development, 
                        I specialize in building intelligent systems that solve real business problems. 
                        My expertise spans from strategic planning to hands-on implementation of 
                        cutting-edge AI solutions.
                      </p>
                      
                      <p>
                        I've architected and deployed multi-agent systems and MCP server architectures 
                        that power mission-critical applications for enterprises. Each solution is 
                        designed with scalability, reliability, and measurable ROI in mind.
                      </p>

                      <p>
                        From autonomous AI agents handling complex workflows to intelligent automation 
                        systems that eliminate manual tasks, I deliver enterprise solutions that drive 
                        tangible business outcomes. Let's discuss how AI can transform your operations.
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button
                        onClick={scrollToDemo}
                        size="lg"
                        className="group"
                      >
                        Schedule a Consultation
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
