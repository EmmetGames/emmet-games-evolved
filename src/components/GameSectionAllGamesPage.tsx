import GameCard from "@/components/GameCard";

type GamesSectionProps<T> = {
  index: number;
  title: React.ReactNode;
  description: string;
  games: T[];
  badge?: {
    href: string;
    imgSrc: string;
    alt: string;
    imgClassName?: string;
  };
};

const GamesSection = <T extends { title: string }>({
  index,
  title,
  description,
  games,
  badge,
}: GamesSectionProps<T>) => {
  const isMuted = index % 2 === 1;
  const bgClass = isMuted ? "bg-muted/20" : "bg-background";

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {title}
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {description}
          </p>

          {badge && (
            <a
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={badge.imgSrc}
                alt={badge.alt}
                className={`hover:opacity-80 transition-opacity ${
                  badge.imgClassName ?? ""
                }`}
              />
            </a>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {games.map((game) => (
            <div
              key={game.title}
              className="w-full md:w-1/2 lg:w-[31%] box-border"
            >
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
