import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Play, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import existing game icons
import fillGameIcon from "@/assets/fill-game-icon.png";
import memeMastersIcon from "@/assets/meme-masters-icon.png";
import youreNotSupposedIcon from "@/assets/youre-not-supposed-icon.png";
import dustbusterIcon from "@/assets/dustbuster-icon.png";
import dyingForTreasureIcon from "@/assets/dying-for-treasure-icon.png";
import interstellarGuardianIcon from "@/assets/interstellar-guardian-icon.png";
import plungingIcon from "@/assets/plunging-icon.png";

const AllGames = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const mobileGames = [
    {
      title: "F I L L",
      year: "2020",
      genre: "Hypercasual - Puzzle",
      description: "Fill up the screen with fun shapes!",
      icon: fillGameIcon,
      playLink: "https://play.google.com/store/apps/details?id=com.EmmetGames.FILL",
      platform: "Android"
    },
    {
      title: "Meme Masters",
      year: "2020", 
      genre: "Social - Online Multiplayer",
      description: "Compete with friends to make the funniest memes!",
      icon: memeMastersIcon,
      playLink: "https://play.google.com/store/apps/details?id=com.EmmetGames.MemeMasters",
      platform: "Android"
    },
    {
      title: "You're Not Supposed To Be Here",
      year: "2019",
      genre: "Arcade - Stealth",
      description: "Sneak through, collect intel, and DON'T. GET. CAUGHT.",
      icon: youreNotSupposedIcon,
      playLink: "https://play.google.com/store/apps/details?id=emmetgames.game.youre_not_supposed_to_be_here",
      platform: "Android"
    }
  ];

  const pcGames = [
    {
      title: "Interstellar Guardian",
      year: "2018",
      genre: "Arcade - Top-Down Shooter",
      description: "Protect the Earth from the evil Surge and try to stay alive!",
      icon: interstellarGuardianIcon,
      playLink: "https://emmet.itch.io/interstellar-guardian",
      platform: "PC"
    },
    {
      title: "Plunging",
      year: "2017",
      genre: "Story-Driven",
      description: "There's only one way down.",
      icon: plungingIcon,
      playLink: "https://emmet.itch.io/plunging-series",
      platform: "PC"
    }
  ];

  const pcGamesGameJams = [
  {
    title: "Dustbuster",
    year: "2022",
    genre: "Arcade - Action", 
    description: "As the legendary DustBuster, it's your job to keep the pesky dust off the shelf.",
    subtext: "Made for TriJam #172",
    icon: dustbusterIcon,
    playLink: "https://emmet.itch.io/dustbuster",
    platform: "PC"
  },
  {
    title: "Dying For Treasure",
    year: "2020",
    genre: "Platformer - Puzzle",
    description: "Hunt for treasure and make sure not to let the treasure hunt you!",
    subtext: "Made in collaboration with Amit Klein and Inbar Zoref for the 2020 VimJam.",
    icon: dyingForTreasureIcon,
    playLink: "https://emmet.itch.io/dying-for-treasure",
    platform: "PC"
  }
];

  const GameCard = ({ game, isMobile = false }: { game: any; isMobile?: boolean }) => (
    <Card className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-muted p-8 flex items-center justify-center">
          <img 
            src={game.icon} 
            alt={`${game.title} icon`}
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary">
            {isMobile ? "Mobile" : "PC"}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          {isMobile ? (
            <Smartphone size={20} className="text-primary" />
          ) : (
            <Play size={20} className="text-primary" />
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <span className="text-sm text-muted-foreground">({game.year})</span>
        </div>
        
        <p className="text-sm font-medium text-accent mb-3">{game.genre}</p>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {game.description}
        </p>
        
        {game.subtext && (
          <p className="text-xs text-muted-foreground italic mb-4">
            {game.subtext}
          </p>
        )}
        
        <Button 
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <a href={game.playLink} target="_blank" rel="noopener noreferrer">
            Play Now <ExternalLink size={16} className="ml-2" />
          </a>
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                All Games
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore the complete collection of EmmetGames - from mobile experiences to PC adventures
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Games Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Mobile <span className="text-primary">Games</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Casual and engaging experiences designed for mobile devices
              </p>
              
              <a 
                href="https://play.google.com/store/apps/developer?id=EmmetGames"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://static.wixstatic.com/media/de5e32_41ff52d2214245e28a7ef3653b750e35~mv2.png/v1/fill/w_387,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GetItOnGooglePlay.png"
                  alt="Get it on Google Play"
                  className="h-16 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mobileGames.map((game) => (
                <GameCard key={game.title} game={game} isMobile={true} />
              ))}
            </div>
          </div>
        </section>

        {/* PC Games Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                PC <span className="text-primary">Games</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Desktop experiences & games
              </p>
              
              <a 
                href="https://emmet.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://static.wixstatic.com/media/de5e32_544798372f4948c0bda87e6633e32a36~mv2.png/v1/fill/w_318,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/badge-color.png"
                  alt="Available on itch.io"
                  className="h-12 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pcGames.map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>

            <div className="text-center mb-16 mt-20">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Game Jams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pcGamesGameJams.map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllGames;