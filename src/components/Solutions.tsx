import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import aiSolutionsIcon from "@/assets/ai-solutions-icon.png";
import analyticsIcon from "@/assets/analytics-icon.png";
import securityIcon from "@/assets/security-icon.png";

const solutions = [
  {
    icon: aiSolutionsIcon,
    title: "Custom AI Development",
    description: "Tailored AI solutions designed specifically for your business needs, from intelligent automation to predictive analytics.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
  },
  {
    icon: analyticsIcon,
    title: "AI Strategy & Consulting",
    description: "Strategic guidance to identify high-impact AI opportunities and create a roadmap for successful implementation.",
    features: ["AI Readiness Assessment", "Use Case Identification", "ROI Analysis", "Implementation Roadmap"],
  },
  {
    icon: securityIcon,
    title: "Enterprise AI Infrastructure",
    description: "Secure, scalable AI infrastructure that integrates seamlessly with your existing systems and workflows.",
    features: ["Cloud & On-Premise", "API Integration", "Security & Compliance", "Continuous Monitoring"],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-slate-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Solutions That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive AI services designed to accelerate your digital transformation and deliver measurable business impact.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardHeader className="space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <img 
                    src={solution.icon} 
                    alt={solution.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Title & Description */}
                <div>
                  <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
