import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { mobileGames, pcGames, jamGames } from "@/data/games";

const AllGames = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div className="flex flex-wrap justify-center gap-8">
              {mobileGames.map((game) => (
                <div className="w-full md:w-1/2 lg:w-[31%] box-border">
                  <GameCard key={game.title} game={game} />
                </div>
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

              <div className="flex flex-wrap justify-center gap-8">
                {pcGames.map((game) => (
                  <div className="w-full md:w-1/2 lg:w-[31%] box-border">
                    <GameCard key={game.title} game={game} />
                  </div>
                ))}
              </div>

            <div className="text-center mb-16 mt-20">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Game Jams
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {jamGames.map((game) => (
                <div className="w-full md:w-1/2 lg:w-[31%] box-border">
                  <GameCard key={game.title} game={game} />
                </div>
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