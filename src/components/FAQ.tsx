import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer: "We offer three main categories of AI solutions: Intelligent AI Agents that handle complex tasks autonomously, AI-Powered Applications with embedded intelligence for document processing and recommendations, and Automation Workflows that connect your tools and eliminate manual tasks."
  },
  {
    question: "How long does it take to implement a custom AI solution?",
    answer: "Implementation timelines vary based on project complexity. Simple AI integrations can be deployed in 2-4 weeks, while comprehensive custom AI systems typically take 8-12 weeks from strategy to deployment. We work closely with your team to ensure a smooth, phased implementation."
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer: "No technical expertise is required. We design user-friendly interfaces and provide comprehensive training for your team. Our AI solutions are built to be intuitive and integrate seamlessly into your existing workflows, with ongoing support available whenever you need it."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "Data security is our top priority. We implement enterprise-grade encryption, secure cloud infrastructure, and comply with industry standards including GDPR and SOC 2. All AI models can be deployed on-premises or in private cloud environments based on your security requirements."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve businesses across multiple industries including healthcare, finance, e-commerce, manufacturing, and professional services. Our AI solutions are customized to address industry-specific challenges and regulatory requirements."
  },
  {
    question: "How much does a custom AI solution cost?",
    answer: "Pricing varies based on project scope, complexity, and required features. We offer flexible pricing models including fixed-price projects, monthly subscriptions, and usage-based pricing. Schedule a consultation to receive a customized quote based on your specific needs."
  },
  {
    question: "Can AI agents integrate with our existing software?",
    answer: "Yes, our AI solutions are designed to integrate seamlessly with your existing tools and platforms including CRM systems, databases, communication tools, and business applications. We support API integrations, webhooks, and custom connectors to ensure smooth data flow."
  },
  {
    question: "What kind of support do you provide after deployment?",
    answer: "We provide comprehensive post-deployment support including system monitoring, performance optimization, regular updates, and technical assistance. Our support packages range from business hours coverage to 24/7 dedicated support based on your requirements."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our AI solutions and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:border-accent/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
