import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mobileGames, pcGames } from "@/data/games";
import GameCard from "@/components/GameCard";

const games = [...mobileGames, ...pcGames];


const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Games <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of games I've worked on, from mobile hits to innovative indie projects
          </p>
        </div>

        {/* Mobile Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Mobile Games</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {games
              .filter((g) => g.type === "mobile")
              .map((game) => (
                <div className="w-full md:w-1/2 lg:w-[31%] box-border">
                  <GameCard key={game.title} game={game} />
                </div>
              ))}
          </div>
        </div>

        {/* PC Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">PC Games</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {games
              .filter((g) => g.type === "pc")
              .map((game) => (
                <div className="w-full md:w-1/2 lg:w-[31%] box-border">
                  <GameCard key={game.title} game={game} />
                </div>
              ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/games">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
