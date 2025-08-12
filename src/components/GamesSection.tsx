import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
import fillIcon from "@/assets/fill-game-icon.png";
import memeMastersIcon from "@/assets/meme-masters-icon.png";
import youreNotSupposedIcon from "@/assets/youre-not-supposed-icon.png";
import dustbusterIcon from "@/assets/dustbuster-icon.png";
import interstellarGuardianIcon from "@/assets/interstellar-guardian-icon.png";
import plungingIcon from "@/assets/plunging-icon.png";

const GamesSection = () => {
  const games = [
    {
      title: "F I L L",
      year: "2020",
      category: "Hypercasual",
      description: "Fill up the screen with fun shapes!",
      tags: ["Unity", "Mobile", "Puzzle", "Hypercasual"],
      status: "Released",
      icon: fillIcon,
      type: "mobile"
    },
    {
      title: "Meme Masters", 
      year: "2020",
      category: "Social - Online Multiplayer",
      description: "Compete with friends to make the funniest memes!",
      tags: ["Mobile", "Unity", "Multiplayer", "Funny"],
      status: "Released",
      icon: memeMastersIcon,
      type: "mobile"
    },
    {
      title: "You're Not Supposed To Be Here",
      year: "2019",
      category: "Arcade - Stealth", 
      description: "Sneak through, collect intel, and DON'T. GET. CAUGHT.",
      tags: ["Mobile", "Stealth", "Arcade"],
      status: "Released",
      icon: youreNotSupposedIcon,
      type: "mobile"
    },
    {
      title: "Dying For Treasure",
      year: "2020",
      category: "Platformer - Puzzle",
      description: "Made in collaboration with Amit Klein and Inbar Zoref for the 2020 VimJam. Hunt for treasure and make sure not to let the treasure hunt you!",
      tags: ["PC", "Platformer", "Puzzle", "Game Jam"],
      status: "Released",
      icon: dustbusterIcon,
      type: "pc"
    },
    {
      title: "Interstellar Guardian",
      year: "2018",
      category: "Arcade - Top-Down Shooter",
      description: "Protect the Earth from the evil Surge and try to stay alive!",
      tags: ["PC", "Arcade", "Shooter"],
      status: "Released",
      icon: interstellarGuardianIcon,
      type: "pc"
    },
    {
      title: "Plunging",
      year: "2017",
      category: "Story-Driven",
      description: "There's only one way down.",
      tags: ["PC", "Story", "Adventure"],
      status: "Released",
      icon: plungingIcon,
      type: "pc"
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

        {/* Mobile Games Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Mobile Games</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.filter(game => game.type === "mobile").map((game) => (
              <Card 
                key={game.title}
                className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-48 bg-muted relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={game.icon} 
                    alt={`${game.title} game icon`}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {game.year}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
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
        </div>

        {/* PC Games Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground">PC Games</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.filter(game => game.type === "pc").map((game) => (
              <Card 
                key={game.title}
                className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-48 bg-muted relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={game.icon} 
                    alt={`${game.title} game icon`}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {game.year}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
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
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/games">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;