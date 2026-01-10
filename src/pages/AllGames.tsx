import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GamesSectionAllGamesPage from "@/components/GameSectionAllGamesPage";
import beachBumIcon from "@/assets/beachBumLogo.png"
import {
  beachBumGames,
  mobileGames,
  pcGames,
  jamGames,
} from "@/data/games";

const AllGames = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: (
        <>
          Beach <span className="text-primary">Bum</span> Games
        </>
      ),
      description:
        "Games worked on & contributed to during my employment at Beach Bum Ltd.",
      games: beachBumGames,
      badge: {
        href: "https://play.google.com/store/apps/dev?id=6496128650038483596",
        imgSrc: beachBumIcon,
        alt: "Get it on Google Play",
        imgClassName: "h-16",
      },
    },
    {
      title: (
        <>
          Mobile <span className="text-primary">Games</span>
        </>
      ),
      description:
        "Casual and engaging experiences designed for mobile devices",
      games: mobileGames,
      badge: {
        href: "https://play.google.com/store/apps/developer?id=EmmetGames",
        imgSrc:
          "https://static.wixstatic.com/media/de5e32_41ff52d2214245e28a7ef3653b750e35~mv2.png/v1/fill/w_387,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GetItOnGooglePlay.png",
        alt: "Get it on Google Play",
        imgClassName: "h-16",
      },
    },
    {
      title: (
        <>
          PC <span className="text-primary">Games</span>
        </>
      ),
      description: "Desktop experiences & games",
      games: pcGames,
      badge: {
        href: "https://emmet.itch.io/",
        imgSrc:
          "https://static.wixstatic.com/media/de5e32_544798372f4948c0bda87e6633e32a36~mv2.png/v1/fill/w_318,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/badge-color.png",
        alt: "Available on itch.io",
        imgClassName: "h-12",
      },
    },
    {
      title: (
        <>
          Game <span className="text-primary">Jams</span>
        </>
      ),
      description: "Experimental projects created during game jams",
      games: jamGames,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Header */}
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
                Explore the complete collection of EmmetGames — from mobile
                experiences to PC adventures
              </p>
            </div>
          </div>
        </section>

        {/* Sections */}
        {sections.map((section, index) => (
          <GamesSectionAllGamesPage
            key={index}
            index={index}
            {...section}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default AllGames;
