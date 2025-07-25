import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're interested in collaboration, have a project idea, or just want to chat about games
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send me a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input 
                  placeholder="What's this about?" 
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or idea..." 
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">hello@emmetgames.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Melbourne, Australia</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Response Time</h4>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Find me on social</h4>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:text-primary hover:shadow-glow-primary transition-all duration-300"
                >
                  <Github size={20} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:text-primary hover:shadow-glow-primary transition-all duration-300"
                >
                  <Linkedin size={20} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:text-primary hover:shadow-glow-primary transition-all duration-300"
                >
                  <Twitter size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;