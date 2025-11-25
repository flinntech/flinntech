import { Github, Linkedin } from "lucide-react";
import flinnLogo from "@/assets/flinn-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <img src={flinnLogo} alt="Flinn Technologies" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">Flinn Technologies</span>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-md">
              AI solutions that drive real business results.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a 
              href="#" 
              className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-primary-foreground/10 w-full">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-primary-foreground/60">
              <p>© 2025 Flinn Technologies LLC. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
                <span className="text-primary-foreground/40">·</span>
                <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;