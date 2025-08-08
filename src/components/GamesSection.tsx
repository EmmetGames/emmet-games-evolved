import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const GamesSection = () => {
  const games = [
    {
      title: "Game 1",
      category: "TBD",
      description: "Game description to be updated.",
      tags: ["Unity", "C#"],
      status: "Released",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Game 2", 
      category: "TBD",
      description: "Game description to be updated.",
      tags: ["Mobile", "Unity"],
      status: "Released",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      title: "Game 3",
      category: "TBD", 
      description: "Game description to be updated.",
      tags: ["Strategy", "Mobile"],
      status: "Released",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="games" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Games <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of games I've worked on, from mobile hits to innovative indie projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {games.map((game, index) => (
            <Card 
              key={game.title}
              className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${game.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant={game.status === "Released" ? "default" : "secondary"}>
                    {game.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-glow-primary">
                    <Play size={20} />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-sm text-accent">{game.category}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </Button>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {game.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-muted hover:border-primary hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;