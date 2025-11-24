import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const caseStudies = [
  {
    company: "Global Financial Services",
    industry: "Finance",
    result: "40% reduction in processing time",
    quote: "Flinn Technologies delivered an AI solution that exceeded our expectations. The custom model they built transformed our operations.",
    metric: "40%",
    metricLabel: "Efficiency Gain",
  },
  {
    company: "Healthcare Innovation Leader",
    industry: "Healthcare",
    result: "3x faster diagnosis accuracy",
    quote: "Their deep understanding of both AI and our industry challenges made all the difference. The implementation was seamless.",
    metric: "3x",
    metricLabel: "Speed Improvement",
  },
  {
    company: "Retail Technology Pioneer",
    industry: "Retail",
    result: "$2.5M annual cost savings",
    quote: "From initial consultation to deployment, Flinn Technologies proved to be the perfect AI partner. ROI was clear within months.",
    metric: "$2.5M",
    metricLabel: "Annual Savings",
  },
];

const Proof = () => {
  return (
    <section id="proof" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-muted-foreground">
            Real companies, real challenges, transformative outcomes.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border relative overflow-hidden"
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />

              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent/40" />

                {/* Quote */}
                <p className="text-foreground leading-relaxed italic">
                  "{study.quote}"
                </p>

                {/* Company Info */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{study.company}</p>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </div>

                {/* Metric */}
                <div className="pt-4">
                  <div className="text-3xl font-bold text-accent">{study.metric}</div>
                  <div className="text-sm text-muted-foreground">{study.metricLabel}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">200+</div>
            <div className="text-sm text-muted-foreground">AI Models Deployed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$50M+</div>
            <div className="text-sm text-muted-foreground">Value Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
