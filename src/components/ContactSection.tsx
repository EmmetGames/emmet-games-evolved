import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const ContactSection = () => {
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);

  const onHCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Validation: Check CAPTCHA
    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    // Add CAPTCHA token explicitly
    formData.append("captcha", captchaToken);

    try {
      setLoading(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        form.reset();
        setCaptchaToken("");
        captchaRef.current?.resetCaptcha();
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="8c152f9e-1810-43f7-ad85-c31922aa33d4" />
              <input type="hidden" name="from_name" value="Website Contact Form" />

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                <Input name="name" placeholder="Your name" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" name="email" placeholder="your.email@example.com" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input name="subject" placeholder="What's this about?" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea name="message" rows={6} required placeholder="Tell me about your project or idea..." className="resize-none" />
              </div>

              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={onHCaptchaChange}
                ref={captchaRef}
              />

              <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
