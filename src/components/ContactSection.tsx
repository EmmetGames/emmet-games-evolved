import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    // TODO: Send form data + captchaToken to your backend
    console.log("Form submitted with:", { captchaToken });
  };

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

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-gradient-card border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send me a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Your inputs stay the same */}

              <HCaptcha
                sitekey="YOUR_PUBLIC_SITE_KEY"
                onVerify={(token) => setCaptchaToken(token)}
                ref={captchaRef}
              />

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
