import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-foreground/80">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We collect information that you provide directly to us, including when you request a consultation, 
              contact us, or use our services. This may include your name, email address, company name, phone number, 
              and any other information you choose to provide.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              with trusted service providers who assist us in operating our business, conducting our services, or serving 
              our users, as long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect the security of your personal 
              information. However, no method of transmission over the internet or electronic storage is 100% secure, 
              and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct or update your personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-6">
              We use cookies and similar tracking technologies to collect and track information about your use of our 
              services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy, please contact us by scheduling a consultation 
              through our website or emailing us at the contact information provided on our site.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
