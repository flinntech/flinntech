import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Gamepad2, Server } from "lucide-react";

const projects = [
  {
    id: "multi-agent-research",
    name: "Autonomous Multi-Agent Market Research System",
    industries: ["AI & Machine Learning", "Data Analytics", "Software Development"],
    icon: Search,
    goal: "To automate the labor-intensive process of comprehensive market research, which typically requires hours of manual searching, reading, and synthesizing data.",
    challenge: "Single-agent AI systems often hallucinate or get overwhelmed when asked to perform deep, multi-step research. They lack the ability to verify their own work or maintain context across long workflows.",
    solution: {
      description: "I architected a Multi-Agent System using the Hierarchical Design Pattern. This system features specialized agents working in concert:",
      agents: [
        { name: "Retrieval Agent", description: "Scours live web data via APIs to gather real-time market signals." },
        { name: "Analysis Agent", description: "Synthesizes raw data to identify trends and sentiment." },
        { name: "Reporting Agent", description: "Formats the insights into a professional executive summary." }
      ]
    },
    technologies: ["Hierarchical Multi-Agent System", "Shared Memory", "Fallback Strategies"],
    outcome: "A fully autonomous workflow that reduces research time by 90%, delivering cited, verifiable reports in minutes."
  },
  {
    id: "rpg-mastermind",
    name: "RPG Mastermind: AI SaaS for Tabletop Gaming",
    industries: ["Gaming", "Software Development", "Entertainment"],
    icon: Gamepad2,
    goal: "To build 'RPG Mastermind,' a web-based SaaS platform that assists Tabletop Role-Playing Game (TTRPG) Game Masters (GMs) in managing complex campaign data and narrative generation.",
    challenge: "GMs struggle to keep track of infinite narrative variables—NPC backstories, inventory, and plot threads—while running a live game. Standard chatbots fail because they lack 'long-term memory' of the specific campaign world.",
    solution: {
      description: "I developed a Context-Aware AI application that acts as a creative partner for GMs:",
      agents: [
        { name: "Context Engineering", description: "Designed a system that layers 'Who You Are' (GM style), 'What's Happening' (Current Session), and 'Long-term Memory' (Campaign History) to provide hyper-relevant suggestions." },
        { name: "Product Management", description: "Led the end-to-end product lifecycle, from feature definition to architecture design." },
        { name: "Application Logic", description: "Built a web app interface that serves as the frontend for the AI agents, allowing GMs to visualize and edit generated content." }
      ]
    },
    technologies: ["Context Engineering", "Full-Stack Development", "Campaign Memory System"],
    outcome: "A specialized AI product that solves a specific niche problem using advanced context management, demonstrating my ability to build user-facing AI products, not just backend scripts."
  },
  {
    id: "aiops-system",
    name: "Enterprise AIOps Multi-Agent System",
    industries: ["IoT", "Cloud Computing", "DevOps/AIOps"],
    icon: Server,
    goal: "To automate the full lifecycle of network operations—from detection to remediation—for a large-scale industrial IoT infrastructure.",
    challenge: "A single AI model cannot simultaneously handle real-time alerting, deep-dive troubleshooting, and predictive analytics without losing context or hallucinating. The system required a team of specialized experts, not a generalist chatbot.",
    solution: {
      description: "I architected a complex Multi-Agent System using TypeScript and the Model Context Protocol (MCP). This system utilizes a hierarchical 'Swarm' architecture where a Supervisor Agent orchestrates five specialized sub-agents:",
      agents: [
        { name: "Troubleshooting Agent", description: "Investigates error logs and diagnostics to root-cause device failures." },
        { name: "Management Agent", description: "Executes configuration updates and firmware patches via secure API tools." },
        { name: "Analytics Agent", description: "Aggregates network health metrics to report on uptime and signal quality." },
        { name: "Alerting Agent", description: "Monitors real-time streams to escalate critical incidents to human staff." },
        { name: "AIOps Agent", description: "Uses predictive logic to identify anomalies before they become outages." }
      ]
    },
    technologies: ["TypeScript", "Model Context Protocol", "Hierarchical Swarm Architecture", "Custom MCP Server"],
    outcome: "A fully autonomous operations team in software form, capable of resolving Tier-1 network issues without human intervention."
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-world AI solutions delivering measurable impact across industries
          </p>
        </div>

        {/* Project Cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 bg-card border-border relative overflow-hidden"
              >
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />

                <CardHeader className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl mb-3">{project.name}</CardTitle>
                      {/* Industry Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.industries.map((industry) => (
                          <Badge key={industry} variant="secondary" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* The Goal */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">The Goal</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.goal}</p>
                  </div>

                  {/* Expandable Details */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details" className="border-border">
                      <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                        View Project Details
                      </AccordionTrigger>
                      <AccordionContent className="space-y-6 pt-4">
                        {/* The Challenge */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">The Challenge</h4>
                          <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                        </div>

                        {/* The Solution */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">The Solution</h4>
                          <p className="text-muted-foreground leading-relaxed mb-4">{project.solution.description}</p>
                          <ul className="space-y-3">
                            {project.solution.agents.map((agent) => (
                              <li key={agent.name} className="flex gap-3">
                                <span className="text-accent font-medium mt-1 flex-shrink-0">•</span>
                                <div>
                                  <span className="font-semibold text-foreground">{agent.name}:</span>
                                  <span className="text-muted-foreground"> {agent.description}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Key Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="bg-accent/5 border-accent/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Outcome - Always Visible */}
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Outcome</h4>
                    <p className="text-accent font-medium leading-relaxed">{project.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
