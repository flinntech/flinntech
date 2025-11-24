import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import aiSolutionsIcon from "@/assets/ai-solutions-icon.png";
import analyticsIcon from "@/assets/analytics-icon.png";
import securityIcon from "@/assets/security-icon.png";

const solutions = [
  {
    icon: aiSolutionsIcon,
    title: "Intelligent AI Agents",
    description: "Autonomous AI agents that handle complex tasks, engage customers, and make decisions - working 24/7 to scale your operations without scaling headcount.",
    features: ["Conversational AI & Chatbots", "Task Automation Agents", "Decision-Making Assistants", "Multi-Agent Orchestration"],
  },
  {
    icon: analyticsIcon,
    title: "AI-Powered Applications",
    description: "Custom applications with embedded AI capabilities that transform how your team works - from intelligent document processing to smart recommendations.",
    features: ["Document Intelligence", "Smart Search & Discovery", "Recommendation Engines", "Predictive Insights"],
  },
  {
    icon: securityIcon,
    title: "Automation Workflows",
    description: "End-to-end workflow automation that connects your tools, eliminates manual tasks, and ensures consistent execution across your organization.",
    features: ["Process Automation", "System Integrations", "Trigger-Based Actions", "Real-Time Monitoring"],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-slate-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI That Works For You
          </h2>
          <p className="text-xl text-muted-foreground">
            Practical AI solutions that deliver immediate business value - from intelligent agents to automated workflows.
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
