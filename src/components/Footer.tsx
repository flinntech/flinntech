import { Github, Linkedin, Twitter } from "lucide-react";
import flinnLogo from "@/assets/flinn-logo.png";
const Footer = () => {
  const footerLinks = {
    Solutions: ["Custom AI Development", "AI Strategy", "Enterprise Infrastructure", "AI Training"],
    Company: ["About Us", "Careers", "Partners", "Contact"],
    Resources: ["Case Studies", "Blog", "Documentation", "Webinars"],
    Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"]
  };
  return <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={flinnLogo} alt="Flinn Technologies" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">Flinn Technologies</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Leading the future of AI innovation with custom solutions that drive real business results.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map(link => <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Flinn Technologies LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;