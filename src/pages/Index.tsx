import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Portfolio from "@/components/Portfolio";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Flinn AI Solutions",
          "url": "https://yourdomain.com",
          "logo": "https://yourdomain.com/logo.png",
          "description": "We design, build, and deploy custom AI solutions that drive measurable business outcomes. From strategy to implementation, we're your trusted partner in AI transformation.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Business Inquiries",
            "email": "contact@yourdomain.com"
          }
        },
        {
          "@type": "Service",
          "serviceType": "Intelligent AI Agents",
          "provider": {
            "@type": "Organization",
            "name": "Flinn AI Solutions"
          },
          "description": "Autonomous AI agents that handle complex tasks, engage customers, and make decisions - working 24/7 to scale your operations without scaling headcount.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Agent Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Conversational AI & Chatbots"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Task Automation Agents"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Decision-Making Assistants"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Multi-Agent Orchestration"
                }
              }
            ]
          }
        },
        {
          "@type": "Service",
          "serviceType": "AI-Powered Applications",
          "provider": {
            "@type": "Organization",
            "name": "Flinn AI Solutions"
          },
          "description": "Custom applications with embedded AI capabilities that transform how your team works - from intelligent document processing to smart recommendations.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Application Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Document Intelligence"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Smart Search & Discovery"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Recommendation Engines"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Predictive Insights"
                }
              }
            ]
          }
        },
        {
          "@type": "Service",
          "serviceType": "Automation Workflows",
          "provider": {
            "@type": "Organization",
            "name": "Flinn AI Solutions"
          },
          "description": "End-to-end workflow automation that connects your tools, eliminates manual tasks, and ensures consistent execution across your organization.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Workflow Automation Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Process Automation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "System Integrations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Trigger-Based Actions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Real-Time Monitoring"
                }
              }
            ]
          }
        }
      ]
    };

    // Create and insert script tag
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <Portfolio />
      <DemoForm />
      <Footer />
    </div>
  );
};

export default Index;
