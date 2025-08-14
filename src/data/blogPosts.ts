import blogTop10 from "@/assets/blog-top10-2024.webp";
import blogCabinet1 from "@/assets/blog-cabinet-1.webp";
import blogCabinet2 from "@/assets/blog-cabinet-2.webp";
import blogCabinetComplete from "@/assets/blog-cabinet-complete.webp";
import blogLifeIsStrange from "@/assets/blog-life-is-strange.png";
import blogMockingbird from "@/assets/blog-mockingbird.jpg";
import blogQuestConsoles from "@/assets/blog-quest-consoles.jpg";
import blogPyramidScheme from "@/assets/blog-pyramid-scheme.jpg";
import blogFillGameplay from "@/assets/blog-fill-gameplay.gif";
import blogFillStore from "@/assets/blog-fill-store.png";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "my-top-10-video-games-for-2024",
    title: "My Top 10 Video Games for 2024",
    excerpt: "A comprehensive look at the best games released this year, from indie gems to AAA blockbusters.",
    content: `This year has been an incredible year for gaming, with so many fantastic releases that it was genuinely difficult to narrow down to just 10. From innovative indie darlings to massive AAA blockbusters, 2024 has delivered experiences that have pushed the medium forward in exciting ways.

## 10. Life is Strange: Double Exposure

<img src="${blogLifeIsStrange}" alt="Life is Strange: Double Exposure" style="max-width: 100%; margin: 20px 0;" />

The latest entry in the Life is Strange series brings back Max Caulfield with a fascinating new power - the ability to shift between two parallel timelines. The emotional storytelling and character development that the series is known for are in full force here.

## 9. Balatro

A roguelike deckbuilder that takes poker as its foundation and builds something truly special. The game's mathematical depth and addictive gameplay loop make it incredibly hard to put down.

## 8. UFO 50

This collection of 50 retro-style games created by a team of indie developers is a love letter to gaming's past while pushing creative boundaries. Each game feels complete and polished.

## 7. Stellar Blade

A stylish action RPG that combines fluid combat with stunning visuals. The game's post-apocalyptic world is both beautiful and haunting.

## 6. Helldivers 2

The sequel to the cult classic brings chaotic co-op gameplay to new heights. The friendly fire mechanics and over-the-top action create memorable moments.

## 5. Final Fantasy VII Rebirth

This continuation of the FFVII remake project expands the world in incredible ways. The open-world elements blend seamlessly with the classic storytelling.

## 4. Metaphor: ReFantazio

From the creators of Persona comes this fantasy epic that tackles themes of prejudice and social change through engaging gameplay and memorable characters.

## 3. Astro Bot

A delightful platformer that showcases the PS5's capabilities while delivering pure joy. The creative use of the DualSense controller enhances every moment.

## 2. Black Myth: Wukong

This action RPG brings Chinese mythology to life with breathtaking visuals and challenging combat. The attention to detail in both story and presentation is remarkable.

## 1. Indiana Jones and the Great Circle

Machine Games has created the definitive Indiana Jones experience. The game captures the spirit of the films while delivering fresh adventures that feel authentic to the character.

Each of these games represents the best of what 2024 had to offer, and I can't wait to see what 2025 brings to the table!`,
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: blogTop10
  },
  {
    id: "cabinet-complete",
    title: "Cabinet Complete!",
    excerpt: "After months of work, my arcade cabinet project is finally finished. Here's the complete journey from concept to completion.",
    content: `After what feels like an eternity, I can finally say those magical words: my arcade cabinet is complete! This has been one of the most challenging yet rewarding projects I've ever undertaken.

## The Build Process

<img src="${blogCabinet1}" alt="Cabinet construction progress" style="max-width: 100%; margin: 20px 0;" />

The journey started several months ago with a simple idea - I wanted to build my own arcade cabinet for playing classic games. What I didn't anticipate was just how much work would go into every single detail.

<img src="${blogCabinet2}" alt="Cabinet mid-construction" style="max-width: 100%; margin: 20px 0;" />

From cutting the wood to wiring the controls, every step presented its own unique challenges. The most difficult part was getting the monitor positioned correctly and ensuring all the controls felt responsive and authentic.

## The Final Result

<img src="${blogCabinetComplete}" alt="Completed arcade cabinet" style="max-width: 100%; margin: 20px 0;" />

The finished cabinet features:
- A 20-inch CRT monitor for that authentic retro feel
- 8-way joysticks and 6 buttons per player
- Custom artwork and vinyl graphics
- A powerful PC running EmulationStation
- Support for thousands of classic arcade games

## Lessons Learned

This project taught me so much about woodworking, electronics, and patience. There were moments when I wanted to give up, especially when the wiring got complicated, but pushing through those challenges made the final result even more satisfying.

The cabinet now sits proudly in my game room, and every time I fire up a classic like Street Fighter II or Galaga, I'm reminded of all the work that went into creating this piece.

If you're thinking about building your own arcade cabinet, my advice is simple: start planning now, but be prepared for it to take much longer than you expect. The end result is absolutely worth it!`,
    date: "Nov 28, 2024",
    readTime: "5 min read",
    image: blogCabinetComplete
  },
  {
    id: "to-plan-a-mockingbird",
    title: "To Plan a Mockingbird",
    excerpt: "Planning and developing a literary-inspired game presents unique challenges and opportunities.",
    content: `Working on a game inspired by classic literature has been one of the most creatively fulfilling projects I've undertaken. "To Plan a Mockingbird" represents an ambitious attempt to translate the themes and atmosphere of Harper Lee's masterpiece into an interactive medium.

<img src="${blogMockingbird}" alt="To Plan a Mockingbird concept art" style="max-width: 100%; margin: 20px 0;" />

## The Challenge of Adaptation

Adapting literature into games requires a delicate balance. You want to honor the source material while creating something that feels naturally suited to the interactive medium. The key is identifying which elements translate well to gameplay and which should be reimagined.

## Thematic Elements

The game focuses on themes of moral courage, social justice, and coming of age - all central to the original novel. Players navigate moral dilemmas and witness the complexities of human nature through carefully crafted scenarios.

## Visual Design

The art style draws inspiration from Depression-era photography and illustration, creating an authentic atmosphere that supports the narrative themes. Every visual element has been carefully considered to reinforce the game's emotional core.

## Interactive Storytelling

Rather than simply retelling the novel's events, the game creates new scenarios that explore similar themes. Players make choices that reflect the moral complexities central to the source material.

This project has reminded me why literature and games can be such powerful partners when thoughtfully combined. Both mediums excel at exploring the human condition, just through different means.`,
    date: "Oct 10, 2024",
    readTime: "4 min read",
    image: blogMockingbird
  },
  {
    id: "the-quest-to-connect-consoles",
    title: "The Quest to Connect Consoles",
    excerpt: "My journey to connect multiple retro gaming consoles to a single display setup.",
    content: `As my retro gaming collection has grown over the years, I've faced an increasingly common problem: how do you connect multiple consoles to a single TV without constantly swapping cables?

<img src="${blogQuestConsoles}" alt="Multiple gaming consoles setup" style="max-width: 100%; margin: 20px 0;" />

## The Problem

With consoles spanning from the NES to modern systems, each with different output types and requirements, my entertainment center was becoming a tangled mess of cables. Something had to change.

## Research Phase

I spent weeks researching different solutions:
- HDMI switches and converters
- RetroTINK devices for upscaling
- Professional AV equipment
- Custom cable solutions

## The Solution

After much deliberation, I settled on a combination approach:
1. A high-quality HDMI switch for modern consoles
2. RetroTINK 5X Pro for upscaling older systems
3. Custom SCART cables for the best possible picture quality
4. A dedicated CRT monitor for the most authentic retro experience

## Implementation Challenges

The biggest challenge was dealing with different aspect ratios and refresh rates. Some older systems output at 240p, while others use 480i or 480p. Getting everything to display properly required careful calibration.

## Results

The final setup allows me to switch between any console with the press of a button while maintaining excellent picture quality across all systems. The investment in proper upscaling equipment made a huge difference in how older games look on modern displays.

## Future Plans

I'm already planning additions to the setup, including proper audio switching and maybe even a dedicated retro gaming room. The quest continues!

This project reminded me that sometimes the infrastructure around gaming is just as important as the games themselves. A well-organized setup enhances every gaming session.`,
    date: "Sep 18, 2024",
    readTime: "6 min read",
    image: blogQuestConsoles
  },
  {
    id: "pyramid-scheme",
    title: "A Retrospect on Video Game Monetization",
    excerpt: "Examining the evolution of video game monetization and its impact on game design and player experience.",
    content: `The landscape of video game monetization has changed dramatically over the past decade. What started as simple one-time purchases has evolved into a complex ecosystem of DLC, season passes, microtransactions, and live service models.

<img src="${blogPyramidScheme}" alt="Video game monetization pyramid" style="max-width: 100%; margin: 20px 0;" />

## The Traditional Model

For most of gaming history, the model was simple: you bought a game, you owned it completely. Expansion packs occasionally added substantial content, but the core experience was self-contained and complete.

## The Shift to Digital

Digital distribution changed everything. Suddenly, developers could update games post-launch, add new content regularly, and experiment with different pricing models. This opened up incredible possibilities but also new challenges.

## Modern Monetization Strategies

Today's games employ various monetization approaches:

**Battle Passes**: Seasonal content tracks that encourage regular play
**Cosmetic Microtransactions**: Non-gameplay affecting purchases
**Pay-to-Win Elements**: Controversial systems that affect game balance
**Subscription Models**: Monthly fees for premium features or content
**Live Service Games**: Ongoing content updates and events

## The Player Perspective

From a player's standpoint, these changes have been mixed. On one hand, we get regular content updates and games that evolve over time. On the other hand, the fear of missing out (FOMO) and predatory practices have become serious concerns.

## Finding Balance

The most successful modern games find ways to monetize that enhance rather than detract from the player experience. Cosmetic options, meaningful content expansions, and respectful free-to-play models can work when implemented thoughtfully.

## Looking Forward

As the industry continues to evolve, I hope we see more emphasis on player-friendly monetization that creates sustainable business models without exploiting psychological vulnerabilities.

The key is remembering that games should be fun first, profitable second. When that priority gets reversed, everyone loses - players and developers alike.`,
    date: "Aug 22, 2024",
    readTime: "7 min read",
    image: blogPyramidScheme
  },
  {
    id: "fill-is-out",
    title: "FILL is Out!",
    excerpt: "After months of development, FILL has officially launched! Here's what you can expect from the final version.",
    content: `I'm incredibly excited to announce that FILL is now officially available! After months of development, testing, and polishing, the game is ready for players to experience.

<img src="${blogFillGameplay}" alt="FILL gameplay demonstration" style="max-width: 100%; margin: 20px 0;" />

## What is FILL?

FILL is a puzzle game that challenges players to think strategically about space and resource management. The core mechanics are simple to learn but difficult to master, creating that perfect "just one more level" feeling.

## Key Features

The final version includes:
- 50 carefully crafted levels
- Intuitive touch controls
- Beautiful minimalist art style
- Relaxing ambient soundtrack
- Achievement system
- Level editor for creating custom puzzles

<img src="${blogFillStore}" alt="FILL store page" style="max-width: 100%; margin: 20px 0;" />

## Development Journey

This project started as a simple prototype during a game jam, but the core concept was so compelling that I decided to expand it into a full release. The biggest challenge was maintaining the elegant simplicity while adding enough depth to keep players engaged.

## Player Feedback

The response during alpha and beta testing has been overwhelmingly positive. Players particularly love the intuitive mechanics and the satisfying feeling of solving each puzzle.

## What's Next?

I'm already working on additional content packs and exploring possibilities for FILL 2. The community response will help guide future development priorities.

Thank you to everyone who supported FILL during development. Your feedback and encouragement made this release possible!

You can download FILL now on your preferred platform. I hope you enjoy playing it as much as I enjoyed creating it!`,
    date: "Jul 8, 2024",
    readTime: "4 min read",
    image: blogFillGameplay
  }
];

// Helper functions for the blog section
export const getFeaturedPost = (): BlogPost => {
  return blogPosts[0]; // Return the most recent post as featured
};

export const getOtherPosts = (): BlogPost[] => {
  return blogPosts.slice(1, 3); // Return the next 2 posts
};