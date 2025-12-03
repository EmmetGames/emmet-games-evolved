// src/components/GameCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

interface GameCardProps {
  game: {
    title: string;
    category: string;
    description: string;
    tags: string[];
    year: string | number;
    icon: string;
    playLink: string; // external URL
  };
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card
      className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image + Overlay Play Button */}
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

        {/* Hover Overlay */}
        <a
          href={game.playLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
        >
          <Button
            size="icon"
            className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-glow-primary"
          >
            <Play size={20} />
          </Button>
        </a>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {game.title}
            </h3>
            <p className="text-sm text-accent">{game.category}</p>
          </div>

          {/* External Link Icon */}
          <a
            href={game.playLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ExternalLink size={16} />
            </Button>
          </a>
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
  );
};

export default GameCard;