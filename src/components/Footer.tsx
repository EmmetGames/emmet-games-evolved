import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              EMMET<span className="text-accent">GAMES</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Game developer from Melbourne, Australia, creating immersive experiences 
              and pushing the boundaries of interactive entertainment.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#games" className="hover:text-primary transition-colors">Games</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Dev Log</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Game Assets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Emmet Games. All rights reserved. Built with passion for gaming.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;