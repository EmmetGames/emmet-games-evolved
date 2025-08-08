import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const skills = [
    "Unity", "C#", "JavaScript", "React", "Game Design", 
    "3D Modeling", "Shader Programming", "Team Leadership",
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
              <div className="w-full h-64 bg-muted rounded-lg mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                  Game Developer Portrait
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Game Developer & Team Lead</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in Melbourne, Australia, I'm a passionate game developer. Currently serving as a 
                team lead at Beach Bum Ltd, I also work on smaller indie titles in my spare time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in game development spans multiple platforms and genres, from mobile games 
                to console experiences. I believe in creating games that not only entertain but also 
                push the boundaries of interactive storytelling.
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