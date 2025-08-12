import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const skills = [
    "Unity", "C#", "JavaScript", "Game Design", 
    "2D Art", "Music", "Jenkins", "Team Leadership",
    "Project Management", "Indie Development"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Emmet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate game developer combining technical expertise with creative vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-500">
              <div className="w-full aspect-square bg-muted rounded-lg mb-6 relative overflow-hidden">
                <img 
                  src="/src/assets/emmet-profile.jpg" 
                  alt="Emmet Winter - Game Developer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Emmet Winter</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Emmet Winter is a game developer currently based in Melbourne, Victoria. He is currently a Unity team lead and architect at Beach Bum Ltd, and also makes smaller independent games in his spare time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                EmmetGames is his one-man studio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Emmet grew up playing video games with his family and friends. They had a profound impact on his childhood - as he grew up he relocated numerous times. Video games helped him bond with others, learn new skills and keep himself busy. In high school, Emmet was introduced to programming and immediately sought out to combine his newfound skills with his favourite hobby which was game making.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;