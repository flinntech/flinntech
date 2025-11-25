import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Portfolio from "@/components/Portfolio";
import AboutFounder from "@/components/AboutFounder";
import FAQ from "@/components/FAQ";
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
          "url": "https://flinntech.com",
          "logo": "https://flinntech.com/logo.png",
          "description": "We design, build, and deploy custom AI solutions that drive measurable business outcomes. From strategy to implementation, we're your trusted partner in AI transformation.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Business Inquiries",
            "email": "contact@flinntech.com"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://flinntech.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "AI Solutions",
              "item": "https://flinntech.com/#solutions"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Portfolio",
              "item": "https://flinntech.com/#portfolio"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contact",
              "item": "https://flinntech.com/#demo"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of AI solutions do you offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer three main categories of AI solutions: Intelligent AI Agents that handle complex tasks autonomously, AI-Powered Applications with embedded intelligence for document processing and recommendations, and Automation Workflows that connect your tools and eliminate manual tasks."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to implement a custom AI solution?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Implementation timelines vary based on project complexity. Simple AI integrations can be deployed in 2-4 weeks, while comprehensive custom AI systems typically take 8-12 weeks from strategy to deployment. We work closely with your team to ensure a smooth, phased implementation."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need technical expertise to use your AI solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No technical expertise is required. We design user-friendly interfaces and provide comprehensive training for your team. Our AI solutions are built to be intuitive and integrate seamlessly into your existing workflows, with ongoing support available whenever you need it."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure data security and privacy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Data security is our top priority. We implement enterprise-grade encryption, secure cloud infrastructure, and comply with industry standards including GDPR and SOC 2. All AI models can be deployed on-premises or in private cloud environments based on your security requirements."
              }
            },
            {
              "@type": "Question",
              "name": "What industries do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We work with businesses across all industries. From healthcare and finance to e-commerce, manufacturing, professional services, and beyond - our AI solutions are customized to address your specific industry challenges and regulatory requirements, regardless of your sector."
              }
            },
            {
              "@type": "Question",
              "name": "How much does a custom AI solution cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pricing varies based on project scope, complexity, and required features. We offer flexible pricing models including fixed-price projects, monthly subscriptions, and usage-based pricing. Schedule a consultation to receive a customized quote based on your specific needs."
              }
            },
            {
              "@type": "Question",
              "name": "Can AI agents integrate with our existing software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our AI solutions are designed to integrate seamlessly with your existing tools and platforms including CRM systems, databases, communication tools, and business applications. We support API integrations, webhooks, and custom connectors to ensure smooth data flow."
              }
            }
          ]
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
    }

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
      <AboutFounder />
      <FAQ />
      <DemoForm />
      <Footer />
    </div>
  );
};

export default Index;
