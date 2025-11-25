import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-primary-foreground/80">Last updated: November 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using Flinn Technologies services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">2. Services Description</h2>
            <p className="text-muted-foreground mb-6">
              Flinn Technologies provides custom AI solutions, including but not limited to intelligent AI agents, 
              AI-powered applications, and automation workflows. We reserve the right to modify, suspend, or 
              discontinue any aspect of our services at any time.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-muted-foreground mb-6">
              All content, features, and functionality of our services, including but not limited to text, graphics, 
              logos, software, and AI models, are owned by Flinn Technologies and are protected by copyright, 
              trademark, and other intellectual property laws. Custom solutions developed for clients will be 
              subject to separate licensing agreements.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              Fees for our services will be specified in individual service agreements or proposals. Payment terms, 
              including pricing models (fixed-price, subscription, or usage-based), will be outlined in your specific 
              engagement agreement. All fees are non-refundable unless otherwise stated in writing.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground mb-6">
              Both parties agree to maintain the confidentiality of any proprietary or confidential information 
              shared during the course of our business relationship. This obligation survives the termination of 
              any service agreement.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">7. Warranties and Disclaimers</h2>
            <p className="text-muted-foreground mb-6">
              We strive to provide high-quality services, but our services are provided "as is" without warranties 
              of any kind, either express or implied. We do not warrant that our services will be uninterrupted, 
              secure, or error-free.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              To the maximum extent permitted by law, Flinn Technologies shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including loss of profits, data, or business 
              opportunities, arising out of or related to your use of our services.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">9. Termination</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice 
              or liability, for any reason, including breach of these Terms. Upon termination, your right to use 
              our services will cease immediately.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes 
              by posting the new Terms on this page and updating the "Last updated" date. Your continued use of 
              our services after such changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms, please contact us by scheduling a consultation through 
              our website or using the contact information provided on our site.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Terms;