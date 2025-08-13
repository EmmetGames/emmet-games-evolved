// Blog post data structure for easy maintenance and future additions

import blogTop10Image from "@/assets/blog-top10-2024.webp";
import blogCabinetImage from "@/assets/blog-cabinet-complete.webp";
import blogMockingbirdImage from "@/assets/blog-mockingbird.jpg";
import blogQuestConsoles from "@/assets/blog-quest-consoles.jpg";
import blogLifeIsStrange from "@/assets/blog-life-is-strange.png";
import blogCabinet1 from "@/assets/blog-cabinet-1.webp";
import blogCabinet2 from "@/assets/blog-cabinet-2.webp";
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
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "my-top-10-video-games-for-2024",
    title: "My Top 10 Video Games for 2024",
    excerpt: "2024 is coming to a close, and just like every year that normally brings about a period of reflection. Specifically, for video game professionals it's a time to look back at the happenings of the industry, and the games that were made.",
    content: `## Introduction

2024 is coming to a close, and just like every year that normally brings about a period of reflection.

Specifically, for video game professionals it's a time to look back at the happenings of the industry, and the games that were made. There's heaps to learn from playing a game - seeing what worked, what didn't, and trying to understand the inner workings that resulted in the game as it is.

2024 has been a pretty good year for games, and I'm happy that I got to spend some of my time playing them. By my count, I've played and beaten roughly 50 games this year. That's a lot of games! I think games are a wonderful hobby so I always like to recommend games that may cater to people's interests. Today I'll do something a bit different and make a list of games I played this year that catered to my interests, specifically.

This list is a celebration of good games, where I write what I liked about them and hopefully pique your interest to give them a try.

It's important to clarify this list is simply of games I've played this year and not necessarily titles that released in 2024. I'm not a professional game reviewer, I'm just a guy who likes games.

Without further ado...

## Number 10 - Life is Strange: True Colors

![Life is Strange: True Colors](${blogLifeIsStrange})

_Life is Strange_ is a game (and now series) near and dear to many, offering an exploration of people and their relationships, all through the lens of young adulthood in America. Throw into the mix mystery elements and a cinematic, heartfelt story and you got yourself a game that isn't for everyone - a lot more akin to a movie or a novel than an action game - but truly loved and appreciated by those who care for it. For better or worse, I am one of those people.

Since its development by _Dontnod Entertainment_ in 2015, multiple entries in the series have been released, some by _Deck Nine Games_, all to relatively colder receptions than the original title. It was hard to recapture that 'magic' that made the original game work. I can assume part of the challenge stemmed from the fact that the original game was so different than anything that existed before, that it was kind of hard to nail what elements "made" a _Life is Strange_ game and what were just set dressings.

_Life is Strange: True Colors_ is a step in the right direction in my opinion. Developed by _Deck Nine Games_, it tells an interesting story about interesting characters that feel "real" and provides an experience that's half movie and half interactive story.

In it, you play as Alex Chen who moves to Colorado and tries to re-integrate into society while dealing with her troubled past.

It's a game that looks, sounds and feels like a warm cup of coco on a cold & snowy night. It pulls on your heartstrings and portrays interesting, three-dimensional characters that really sell the immersion factor of the game. It's a short, well-written and well-told story, and I'm glad I got to play it.

As a plus, it handles controversial topics of the modern world such as environmentalism, LGBTQ+ themes and drug use with grace.

## Number 9 - Duskers

_Duskers_ is a hyper-niche game that is played entirely via terminal commands. In it, you pilot a group of drones as you explore derelict spacecraft in an eerie, unforgiving universe. Developed by couple Tim & Holly Keenan who form _Misfits Attic_, it is an exceptionally unique game that captures the feeling of being alone in space, where your eyes and ears are all sensors.

_Duskers_ is a very challenging game, and relatively unforgiving. While the base game is easy to learn, mastering it comes to understanding how the different mechanics weave together and how cautious you can be. The adrenaline rush as you urge your drones back to your escape pod whilst trying to avoid the hostile threat on board is second to none, knowing each false keystroke is a faulty command that will lead to catastrophic failure.

Its visuals, while simplistic, are very immersive and the gameplay is hard and addictive.

The main criticism of the game is that after a few hours you've mostly seen what it has to offer, and it sort of 'fizzles out', with no obvious, capital E ending.

If you ever wanted to see how you could game-ify controlling drones via a terminal, please look no further than this game.

## Number 8 - Darkest Dungeon II

_Darkest Dungeon II_ is the long-awaited sequel to indie hit _Darkest Dungeon_, which happily marries dungeon-delving RPGs with the dark and brooding world of Lovecraftian horror. It is developed by _Red Hook Studios._ The sequel took the known formula of exploring dark and twisted dungeons with a group of adventurers who slowly succumb to the madness of their journey, and twisted up the formula.

While the combat mechanics remain the same for the most part (which is a good thing because they're tight and fun), this sequel is now a roguelite, where you play in 'runs' and fail over and over as you slowly and incrementally progress to achieving your goals. This change has been met with mixed reception, with consensus largely preferring the original game over the sequel. I, however, really liked the change and found that it improved the game in a multitude of ways. Thematically it is very appropriate and really hammers in the feeling of hopelessness and gloom. Gameplay-wise, it encourages experimentation and trying out new things.

I loved the way the character's backstories would be slowly revealed as new abilities were unlocked, as it gave more room for the very talented writers to flex their muscles.

It is an unashamedly repetitive and difficult game, but one that I found strangely addictive and fun to play. Its immersive themes, visuals and sound design really sell the point home and make you feel like a part of an accursed story.

## Number 7 - TUNIC

_Tunic_, a game developed by small studio _Isometricorp Games_ and largely the brainchild of _Andrew Shouldice_, is a fantastic game that expertly deals in information. On the surface it is an action-adventure RPG that plays essentially like the classic _Zelda_ with modern quality-of-life improvements thrown on top. Its big 'hook' is the fact that the entire game's rules, systems, mechanics and plot are largely told through an in-game manual that is mostly written in a fictional language. What's more, the pages of the manual are scattered across the world for you to find in order to slowly piece together the game. Essentially, it encapsulates the feeling of getting a Japanese adventure game and trying to gleam hints as to what is going on through the illustrations of a game manual in a foreign language.

It's a very novel concept and extremely rewarding in practice. Progressing in the game feels rewarding and it makes the secrets of the world all the more satisfying to interact with.

To top it off, it's a very pretty game with a relaxing soundtrack. The game's twists and turns are effective and fun to play through.

To me, _Tunic_ is a masterful game that at this point in time is the pinnacle of the top-down adventure formula that started with _Zelda._ I love games where you have abilities at your disposal and the only thing preventing you from using them is the knowledge that they exist - which is why I love Tunic so much. It's a game that rewards exploration & out-of-the-box thinking, tells a compelling story, and is also just fun to play in the moment-to-moment scale.

## Number 6 - The Forgotten City

The Forgotten City is a surprisingly rich and interesting game developed by Australian Studio _Modern Storyteller_ and the brain child of Nick Pearce. It's a mystery adventure game, where the main reward of playing isn't a flashy sword or a high score - it's figuring out what's going on.

I kind of don't want to give away too much about the game because I think the mystery makes it even better. Just know it's a game mostly about talking to people, figuring things out, and trying new things.

The game is rough around the edges - the character models in particular look a bit odd, but the core game is incredibly tight and the plot is intriguing.

I was pleasantly surprised to see the layers of complexity hidden beneath this game. In general, I think any game that can pose interesting moral dilemmas, teach you about history, surprise you with mechanics and keep you guessing while still being fun to play is a strong game.

If you're looking for a 'detective' game with a twist, look no further than The Forgotten City, assuming you can turn a blind eye to some unpolished visuals.

## Number 5 - Reus 2

_Reus 2_, developed by Dutch indie studio _Abbey Games_, is the sequel to the God-sim management game _Reus_. In this game, you control elemental gods that use their powers to assist humans as they develop their civilizations.

Everything in the game, from its graphics to soundtrack, makes it feel very laid back. It's a God-sim management game, but if you were to ask me it's primarily a strategy-puzzle game. The game's whole challenge and appeal comes from the fact that you have limited actions/turns to act, and because of that you can (and should) give great thought to what goes where. Combine that with interesting systems that intertwine in dynamic ways, and you get one of the most engaging games about creating cool, complex ecosystems.

Another great thing about the game is the amount of content - practically after every run you unlock new tools to play with, which in turn makes every subsequent playthrough slightly different. It's super exciting to see what you get next, and it's often very rewarding.

I've spent too many nights staying up late and playing this addictive game, and I hope that you will give it a try, as I doubt you'd be disappointed.

## Number 4 - Disco Elysium - The Final Cut

Despite this list having many heavy hitters in the writing department, there is no doubt in my mind that _Disco Elysium_ by _ZA/UM_ wins that category by a landslide.

Its beautifully intricate and messy world, its complex, dark, funny characters, and its excellent voice-acting (in The Final Cut version) are all emboldened and brought to life by the fantastic writing of this game.

This is an RPG mystery game, which once again would be best to walk in to with as little knowledge or spoilers as possible. In very general terms - you're trying to investigate something while trying to learn about yourself.

This is a complex, thought-provoking game that acts as a mirror of reflection on our society as well as our own identity as the player. This game is not only a piece of art, but a masterful one at that. Its writing and characters have stuck with me long after I've beaten the game, and I'm certain some of its ideas have gone over my head.

I love games where the main character is not simply an empty husk avatar for the player, but a fully-realized personality with their own interests & goals, that the player simply gets to follow or control. While this game definitely allows you to take your main character's behavior many ways, there's no doubt that it is an existing character in their own right, and the narrative of the game is so much stronger thanks to that.

In short - this is an immersive, thought-provoking game like no other, and if you played it you'd be glad that you did.

## Number 3 - Baldur's Gate 3

And there it is. The big kahuna. The Game of the Year 2023, meticulously crafted by _Larian Studios_, a legendary game that will surely be talked about for several years to come. _Baldur's Gate 3_.

There's no denying that by many metrics it is the 'best' game on this list. The amount of playable content, the depth of its many systems, the weaving & branching narrative happily married to fun & exciting gameplay, all make this title a standout hit that outshines most games.

Still, this is a subjective list in which I'm ranking how much I liked the games listed. And I liked _Baldur's Gate 3_ a LOT.

As a fan of Dungeons and Dragons 5th edition, it was inspiring to see how well _Larian_ translated the complex rules of this tabletop game into a simple-to-run digital RPG. Encounters that would take hours of real time could be resolved within minutes through their in-game engine. This effectively breathed new life into the existing mechanics of D&D as it allowed them to be experienced in a completely new way.

The game feels like a living & breathing D&D campaign. Every decision you make, every nook & cranny you explore, has a whole bunch of content & lore to dive into - much like how a dungeonmaster would elaborate on the areas of interests of their players.

There's not much to say beyond that it's a stellar game, filled with hundreds of hours of content, memorable characters and exciting adventure. You would be remiss to not give it a try. I think the fact that it's easily a 100+ hour game and that I would happily replay it says it all.

## Number 2 - We Love Katamari REROLL + Royal Reverie

There are few games I can think of that are so in-your-face, unapologetically fun as _We Love Katamari_, the sequel to the iconic _Katamari Damacy_. It's a game that isn't afraid to be colorful, funny and quirky, blast energized Japanese music at you, and simply let you play.

That's what you do in the game. 99% of it you're in-game, controlling The Prince of All Cosmos as you roll your Katamari ball and suck up objects to make it bigger.

Something I really liked in the game is how it doesn't really gatekeep you from content. Most levels are very easy to beat, meaning that the game will rarely keep you from trying out new levels as you unlock them. On top of that, every level is fun and unique in its own way. Even the gimmickier levels are a lot more fun than the original title by aligning themselves with what the player would consider "fun".

That's all, really. It's simple, it's effective. _We Love Katamari_ is one of my top games of this year by simply being extremely fun to play and replay. I can't really think of any game that would genuinely make me as happy playing it as this title.

Its level design is stellar, and it hits all the right notes of being fun and flashy without being annoying and too weird. It's great.

## Number 1 - Animal Well

My top game of 2024 is the expertly crafted _Animal Well_ by indie talent _Billy Basso_. It is a puzzle-platformer-metroidvania that is built out of layers upon layers of secrets.

Every nook, every cranny, every second pixel of this game hides some secret or collectible. Every time you're trying something and guess that the developers wouldn't have thought of that - they did think of that, because they're geniuses.

_Animal Well_ is a challenging game conveyed without any dialogue and no conventional tutorial. You learn things via the expert game design of the rooms and the items, because the game developers are able to predict what you'll do and what you'll explore.

It's an absolute blast to play a game that really feels like it respects your intelligence, and it's so rewarding to play through & solve the dark & mysterious world of _Animal Well_.

One of this game's biggest strengths is how it is able to use & resuse its level design. As you progress through the game and pick up new items, they completely recontextualize your challenges and your environment, allowing you to shine a light (sometimes literally) on new aspects of the game.

It looks spectacular and it runs on a game engine developed by _Billy Basso_, which is even more impressive. The game size is a few megabytes.

This game is an amazing accomplishment by _Billy Basso_ and an absolute victory for the gaming industry. It has learned from many games that came before it and elevated the world of puzzles, exploration & easter eggs to a new level.

I highly endorse playing this game.`,
    date: "Dec 28, 2024",
    readTime: "11 min read",
    image: blogTop10Image,
    featured: true
  },
  {
    id: "a-retrospect-on-video-game-monetization",
    title: "A Retrospect on Video Game Monetization",
    excerpt: "I've been thinking a lot about video game monetization recently, and thought to share some insights and retrospective into the history of video game monetization.",
    content: `Hi everyone.

I've taken some time off to rejuvenate and prepare for my next project(s). It's been going well so far, but it's honestly so difficult to stop myself from just jumping into another project. I have heaps of ideas and lots of energy, but I know I need to slow down and be patient, lest I burn myself out.

I've been thinking a lot about video game monetization recently, and thought to share some insights and retrospective into the history of video game monetization.

Specifically, I will be examining them from both a practical perspective as well as a moralistic one.

It practically goes without saying but I am no expert on the topic. In fact - video game monetization is not my specialty in video game development at all. I can (and probably will) get stuff wrong as I write, so do take it with a grain of salt.

So without further ado:

A brief history of video game monetization.

# The Arcades and coin-op

In the late 70s, video games became first available to the general public via arcade cabinets.

This was no coincidence - it was a technological and financial restriction. At the time, home consoles (devices capable of running video games in the comfort of your home) were not widespread at all. It was really hard for game developers at the time to make machines that were compact, efficient and cheap enough for consumers to want to buy. Home consoles were exorbitantly expensive, and the games on them were very rudimentary.

Arcades worked well because the cost of the machine could be amortized over thousands of players, rather than being shouldered by a single household.

The monetization model was simple - pay per play. You insert a quarter (or equivalent) and you get to play the game until you lose.

This monetization strategy incentivized the developers to make games that were fun and engaging, but also challenging enough that people would fail relatively quickly and need to pay again to continue playing.

This created a very specific type of game design - games that were immediately engaging but progressively difficult, with clear skill progression that made players feel like "just one more game" would let them get further.

From a practical perspective, this model worked brilliantly. Players could try games with low commitment, arcade owners could make steady revenue, and game developers could iterate quickly based on direct player feedback.

From a moralistic perspective, this was relatively benign. Players got exactly what they paid for - entertainment for a specific duration. The games were skill-based, and better players could get more value for their money.

However, there were some concerning elements that would foreshadow future issues. Some games were designed to be artificially difficult or to have "cheap" deaths that felt unfair, essentially tricking players into spending more money.

# Home Consoles and Cartridge Sales

As technology advanced and manufacturing costs decreased, home consoles became viable for mass market adoption in the early 80s.

This fundamentally changed the monetization model from "pay per play" to "pay per game". Players would buy a console once, then purchase individual games that they could play unlimited times.

This model incentivized developers to create games with more depth and replayability, since players expected to get substantial value from their one-time purchase.

Games began to have save systems, longer campaigns, and more complex mechanics since players weren't being charged for each play session.

From a practical perspective, this model worked well for both developers and consumers. Developers could create more ambitious projects knowing they had a larger revenue potential per customer, and players could invest time in mastering games without worrying about ongoing costs.

From a moralistic standpoint, this was generally positive. The value proposition was clear and fair - pay once, own the game forever. Players knew exactly what they were getting for their money.

However, this model also had limitations. Development costs were rising, but revenue was capped at the initial sale price. This would eventually create pressure for new monetization strategies.

# The Rise of PC Gaming and Expansion Packs

The late 80s and 90s saw the rise of PC gaming as a major platform. PCs offered more storage, processing power, and connectivity than consoles.

This led to innovation in monetization through expansion packs - additional content that could be sold to extend popular games.

Expansion packs typically offered substantial new content: new campaigns, characters, areas, or mechanics. They represented genuine value for players who wanted more of a game they already enjoyed.

This model was generally well-received because:
- The base game was complete and offered full value
- Expansions were clearly additional content, not withheld base game content
- The value proposition was transparent

Games like "Civilization", "Warcraft", and "The Sims" successfully used this model to extend their lifecycles and provide ongoing value to dedicated players.

From a practical perspective, this allowed developers to continue supporting and improving games after launch while generating additional revenue.

From a moralistic perspective, this was largely positive since it maintained the clear value proposition while offering genuine additional content to interested players.

# Internet Connectivity and Online Services

The late 90s and early 2000s brought widespread internet connectivity, which opened new possibilities for game distribution and monetization.

Online services like Xbox Live introduced subscription models for online play, while PC gaming saw the rise of digital distribution platforms.

This period also saw the emergence of MMORPGs (Massively Multiplayer Online Role-Playing Games) which introduced ongoing subscription models to gaming.

MMORPGs like "EverQuest" and "World of Warcraft" charged monthly subscriptions in addition to the initial purchase price. This was justified by:
- Ongoing server costs
- Regular content updates
- Persistent online worlds requiring maintenance
- Community features and support

Players generally accepted this model because they understood the ongoing costs of maintaining online services, and the value proposition was clear: pay monthly to access a persistent online world with regular updates.

This represented a shift toward "games as a service" thinking, though it was initially applied to genres where it made logical sense.

# Mobile Gaming and Microtransactions

The introduction of smartphones and app stores in the late 2000s dramatically changed the gaming landscape and monetization strategies.

Mobile platforms introduced several new concepts:
- Free-to-play games supported by advertisements
- Microtransactions for in-game items or currency
- "Freemium" models where the base game is free but additional features cost money

Initially, many mobile games followed relatively benign monetization patterns:
- Ad-supported free games
- One-time purchases to remove ads
- Additional level packs or content

However, the mobile market's emphasis on user acquisition metrics and lifetime value gradually led to more aggressive monetization strategies:
- Pay-to-win mechanics where spending money provides gameplay advantages
- Time-gating that can be bypassed with payments
- Gacha/loot box systems with randomized rewards
- Deliberate inconvenience design to encourage spending

# The Current Landscape

Today's gaming monetization includes elements from all previous eras, often combined in complex ways:

- Base game purchases (traditional model)
- DLC and expansion packs
- Season passes (pre-purchasing future content)
- Microtransactions for cosmetics, convenience, or power
- Loot boxes with randomized rewards
- Battle passes with tiered rewards
- Subscription services for game libraries
- Pay-to-win mechanics
- Time-savers and convenience purchases

# Practical Analysis

From a business perspective, modern monetization strategies have been highly successful:
- They allow developers to capture more value from engaged players
- They provide ongoing revenue streams to support continued development
- They enable free-to-play models that lower barriers to entry
- They allow for more precise pricing based on player engagement

However, they also create significant challenges:
- Increased complexity in game design and balance
- Player frustration with aggressive monetization
- Potential legal and regulatory issues around gambling-like mechanics
- Brand damage from perceived greed or manipulation

# Moralistic Analysis

The moralistic implications of modern game monetization are complex and often concerning:

**Positive aspects:**
- Free-to-play models democratize access to games
- Players can choose their level of investment
- Ongoing revenue supports continued development and updates
- Cosmetic monetization allows expression without affecting gameplay

**Concerning aspects:**
- Deliberate inconvenience design that makes games worse to encourage spending
- Pay-to-win mechanics that create unfair advantages
- Psychological manipulation techniques borrowed from gambling
- Targeting of vulnerable populations (children, gambling addicts)
- Loot boxes that may constitute unregulated gambling
- Games designed around monetization rather than fun

**Particularly problematic practices:**
- Games that feel like work unless you pay
- Randomized monetization that exploits gambling psychology
- Aggressive targeting of children with monetization
- False scarcity and FOMO (fear of missing out) tactics
- Pay-to-win in competitive environments

# Looking Forward

The gaming industry appears to be at a crossroads regarding monetization. Regulatory attention is increasing, particularly around loot boxes and gambling-like mechanics. Player pushback against aggressive monetization is growing.

Some positive trends are emerging:
- Increased transparency around monetization mechanics
- Regulatory frameworks being developed for loot boxes
- Player advocacy for fair monetization practices
- Some developers choosing ethical monetization strategies as a competitive advantage

However, challenges remain:
- Pressure from investors for maximum monetization
- Successful aggressive strategies creating industry precedents
- Lack of unified regulatory approaches
- Difficulty balancing business needs with player satisfaction

# Conclusion

Video game monetization has evolved from simple, transparent models to complex systems that often prioritize revenue extraction over player experience.

While some modern monetization strategies provide genuine value and innovation, others exploit psychological vulnerabilities and create deliberately frustrating experiences to encourage spending.

The industry would benefit from:
- Greater transparency about monetization mechanics
- Ethical guidelines for targeting vulnerable populations
- Regulatory frameworks for gambling-like mechanics
- Recognition that sustainable success comes from player satisfaction, not exploitation

As players, we can support developers who choose ethical monetization strategies and avoid games that prioritize extraction over entertainment.

The future of game monetization will likely be shaped by the ongoing tension between maximizing revenue and maintaining player trust and satisfaction. The most successful long-term strategies will probably be those that find genuine ways to provide ongoing value rather than simply finding new ways to extract money from players.`,
    date: "Sep 15, 2024",
    readTime: "12 min read",
    image: blogTop10Image
  },
  {
    id: "another-one-down",
    title: "Another One Down",
    excerpt: "I've just finished making the first fully playable version of the digital board game I've been working on. While it has been a relatively smaller project, I'm still really glad I made it because I've learned a lot on the way.",
    content: `Howdy folks. Hope you've been doing well.

# Game's Done

Things have been going pretty well on my end. I've just finished making the first fully playable version of the digital board game I've been working on. While it has been a relatively smaller project, I'm still really glad I made it because I've learned a lot on the way.

It's pretty surreal to be at this point again, where I've completed another game but can't release it to the public because of one reason or another. This is the third game project in a row that's pretty much only been released for friends and family.

Even though I was the only person working on this game and nobody was really expecting it, I still felt a lot of pressure to make it good and make it quick. I'm pretty much the only person who put that pressure on myself, and as a result I did get to the end of its development cycle pretty tired.

A lot of this has to do with my priorities and my time management. Basically, I don't really let myself truly rest until I get a project done. It's hard for myself to justify and prioritize self-care when I know there's a game I'm working on.

It's really silly. It's self destructive. And yet - it holds me accountable to the games I make and hopefully results in good games. I think a lot of it comes from the fear of seeming like a 'quitter'. I think I fear posting about stuff online and then not pulling through, because I think people would judge me for it. In truth, I don't think people would care that much what I choose to do or not do in my free time. Moreover, I think they would just be happy to get a fun small little game once in a while, but it won't be the end of the world for them if I slow down development or go on a hiatus for a while.

# The Game

I don't want to go into too much detail about the game, but it's a digital board game for 2-4 players designed to be played around a single device (tablet/computer). Think of games like Monopoly or Settlers of Catan, but designed from the ground up to be a digital experience.

The game focuses on resource management, area control, and player interaction. Each player takes turns managing their civilization as they compete for dominance across different regions of the world.

What I'm particularly proud of is how the game handles player interaction. Unlike many digital board games that feel like single-player games with multiple people, this one creates meaningful decisions where what other players do directly affects your strategy.

The art style is clean and minimalist, which both serves the gameplay well and was practical given my artistic limitations. Sometimes constraints lead to better design decisions.

# What I Learned

Working on this project taught me several important lessons:

**Scope Management**: Even though this was meant to be a "small" project, it still ended up taking several months. I consistently underestimated how long polish and balancing would take.

**Playtesting is Everything**: The game changed dramatically based on playtesting feedback. Mechanics that seemed obviously fun in my head fell flat when real people played them, while emergent behaviors I hadn't anticipated became the most enjoyable parts.

**Digital vs Physical Design**: Designing for digital opens up possibilities that don't exist in physical board games (like hidden information, complex calculations, dynamic boards), but it also removes some of the tactile pleasure of moving physical pieces.

**Solo Development Challenges**: Working alone meant I could make decisions quickly and maintain a consistent vision, but it also meant I had no one to bounce ideas off of or catch obvious problems I was blind to.

# The Burnout Question

I mentioned feeling tired at the end of this project, and I think it's worth examining why that happens and what I can do about it.

Part of it is my tendency to work on games in my spare time after full days at my regular job. By the time I sit down to work on personal projects, I'm already mentally fatigued.

Another part is my reluctance to take breaks during development. I worry that if I step away from a project, I'll lose momentum or forget important details about the design.

But the biggest factor is probably my perfectionist tendencies. I have trouble calling something "done" even when it's clearly ready. I keep finding small things to adjust or improve, which extends development time and delays the satisfaction of completion.

For future projects, I want to try:
- Setting clearer milestones and celebrating when I reach them
- Taking regular breaks, even when I feel motivated to keep working
- Being more willing to release "good enough" versions rather than waiting for perfection
- Finding ways to share development progress that don't feel like commitments I might fail to keep

# Looking Forward

Despite the challenges, I'm glad I completed this project. It's a good game that my friends and family have genuinely enjoyed playing. That's worth a lot, even if it never reaches a wider audience.

I'm taking a short break before starting the next project. I want to recharge and approach the next game with fresh energy and perspective.

I'm also considering whether I want to try working with others on future projects. The solo development path has its advantages, but collaboration might help with both the creative and motivational challenges I've been facing.

# Thanks

As always, thanks to everyone who has supported my game development journey. Whether that's playing my games, reading these blog posts, or just encouraging me to keep making things - it means a lot.

Making games is simultaneously one of the most rewarding and frustrating things I do. Posts like this help me process the experience and hopefully provide some insight for others who might be on similar journeys.

Until next time!`,
    date: "Aug 22, 2024",
    readTime: "5 min read",
    image: blogCabinetImage
  },
  {
    id: "cabinet-complete",
    title: "Cabinet Complete", 
    excerpt: "TL;DR - Everything worked out and the console display works! Howdy everyone. On my last blog post I said that the next part was practicing - and indeed that's what I did.",
    content: `TL;DR - Everything worked out and the console display works!

Howdy everyone. On my last blog post I said that the next part was practicing - and indeed that's what I did.

I got some wood that closely resembled the back panel of my cabinet, some clamps to hold it in place, and a jigsaw to cut effectively.

It was definitely a good thing I practiced, because I never used a jigsaw before. Surprisingly, using a faster setting on the jigsaw ended up giving me better, less damaging cuts to the wood. That was definitely not my intuition so I'm super glad I practiced.

I had my practice run(s) of making rectangular holes for the brush grommet to sit on, then attached it with tape. After that, I tested passing a cable through it and it all worked great!

So then it was time to move on to the real thing.

I'll spare you the boring details - I spent hours measuring and cutting - but it all worked out! the cabinet was sturdier than the wood I practiced on, but that was actually beneficial as it meant it got damaged less as I made cuts. It took way longer than expected, but in about a day I got everything placed and working.

![Cabinet work in progress](${blogCabinet1})

![Cabinet cutting process](${blogCabinet2})

After that, I sanded the whole thing, cleaned up and attached the grommets using tape. Easy and effective.

After this were many more hours of cable management, labelling and sticking.

I actually got extremely lucky and on the day I was working on the cabinet, all the electronics I've been waiting for arrived (the switches, the power boards, etc). It was perfect. It was like all the starts aligned and the god of gaming smiled upon me.

After that - it was complete! I put all the consoles in place, plugged them into the sockets, and tested them one by one. It took some time, but it worked perfectly! Now I am able to play all my consoles on the same TV. On the same HDMI port. Over 40 years of gaming history available to me on one screen. It's pretty magical.

It's still far from perfect. For one - the controllers are still all stored in boxes, so I have to do some fiddling if I want to get the right controller. Still, that is very minor and also exactly how I planned it. I'm honestly surprised how smoothly this project went, and I am so happy it worked out so well. The cables are barely noticeable, which was the exact point of the brush grommets I made.

I'll use the opportunity to shout out my amazing wife for letting me cut into our new cabinet.

Anyways, that's it for this project. As things continue to settle down with the move I'll get back to making more games, but this was a definitely fun sidequest. Thanks for joining me on this silly adventure.`,
    date: "Jul 16, 2024",
    readTime: "2 min read",
    image: blogCabinetImage
  },
  {
    id: "to-plan-a-mockingbird",
    title: "To Plan A Mockingbird",
    excerpt: "Hey folks! The past 2 weeks have been very hectic as I've moved to a new rental. Thankfully, now that basic things like electricity, clothing and food are taken care of, I can focus on what truly matters - my console display.",
    content: `Hey folks! The past 2 weeks have been very hectic as I've moved to a new rental. Thankfully, now that basic things like electricity, clothing and food are taken care of, I can focus on what truly matters - my console display.

Last we left off, I set out the goal & the general guidelines for the project. To reiterate - the goal of my project is to connect all my consoles to my TV so I can relatively conveniently play any one of them. Since then, I've done heaps of research into what other people have done, what options are available, and how much it would all cost.

Let me start with the conclusions first, to save time for those of you with better things to do. I'm planning on the following setup:

- Use a button-controlled AV switch to connect all my older consoles into one AV output, then use an AV to HDMI converter to turn that into an HDMI signal

- Use multiple HDMI switches (button-controlled) to connect all my modern consoles (+ the output from the AV switch) into a single HDMI output which will connect to my TV.

- Use 4 power boards with built-in surge protectors to power the consoles, and have each surge protector connected to a smart plug so I will be able to turn them on/off wirelessly (which is essential as I don't want to have to get to the back of the display). All 4 surge protectors will be connected to one final power board, which will be connected to the wall.

- Cut 12 8x2.5cm rectangles in my display cabinet at shelf height for every console I plan to power, and attach two brush strips from the back to cover the holes.

Doing all of this will allow me to have all my consoles connected to power & TV at once, while keeping them off when not in use. It will also protect them all from power surges, and allow me to display them in their glass display. All in all, all the components I will need to buy for this setup will cost me about 180 AUD.

Why did I go with this approach? What other options were available? If you care about any of that, then please join me as I elaborate in the rest of this post:

## Ramblings

### Other People's Setups and Displays

So let's start with other people's setups - people have done all sorts of things in their setups. It is honestly surprising how little consensus there is on how to do this, but I guess this is because people want to collect older consoles and hook them up to a TV for completely different reasons. Some people grew up with these games and want to play them in the best possible quality they can, while others like the novelty of it and want to try and experience it like it was back in the day. Some people are not afraid at all to break open their consoles and modify the wiring to accommodate lots of changes, while others will use external adapters to keep the original machines in the best conditions. Some people spend 20 bucks on their setup, while others spend thousands of dollars.

That being said, while people do this in many different ways it seems that the most common way is also the most straightforward - get a bunch of generic, relatively easy-to-find electronics (HDMI splitters, power boards with switches) and use enough to fit the collection. Use converters to allow you to play old consoles on new displays. This was my intuition so this is what I ended up doing basically.

One thing that surprised me was that heaps of people were using upscalers for their consoles. Basically, these are fancy adapters which not only turn an AV signal into an HDMI, but also increase the quality of the output so it will look crisp on a modern display. For my personal needs, it sort of defeats the purpose - part of playing retro games for me is to see them as they were, which is to say I want to see them smudged on my screen, not in pixel-perfect crispness.

For now I opted out of getting an upscaler. If I see that there is terrible input lag or the quality is truly awful, or there is some bad stretching, I will look into getting one.

Some people use industrial-grade I/O systems for all their console visuals. Basically, they convert the output of the console and then plug it into an Extron Crosspoint. From there, they can do heaps as this machine can be controlled remotely. It does cost thousands on its own though, and looks bulky as hell to boot, so I opted out of that too.

I decided to go with a physical switch (that is, one that I switch by pressing a button) because of a couple of reasons:

- Practicality - I anyways have to get up to turn on most of the consoles, as well as grab their controller. Adding an additional step of picking the display is not a big deal.

- Simplicity - If I were to buy multiple switches which use remotes for their control, they would all pick up a signal whenever I pressed a button on any remote, meaning they would be impossible to configure. A physical button eliminates this issue.

- Frugality - They are simply cheaper.

### Raspberry Pi

One final tangent regarding displays - I was wondering if anyone tried making a switch using a Raspberry Pi or Arduino or any other electronic board. To me, intuitively, it seemed like a low-budget option to achieve exactly what I want. I don't know electronics nearly well enough, but it feels pretty simple to connect a couple of display ports to a board and basically tell it to output one of them to a different one at any given time.

Unfortunately, I looked online and could barely find examples of anyone who's done this.

I don't think this is impossible. In fact, if I had to guess it's still the most affordable and best solution out there. However, I think it requires a good understanding of electronics, as well as hardware and skills to do it, which I simply don't have. I'd love to get into this, but this feels like too big a jump into this field.

### Power Sockets

I looked into many options here - universal plugs (which are shaped so any plug from any country could fit into them), smart plugs (which can be controlled wirelessly via apps), and more. I could basically not find anyone who make power boards that are smart AND universal AND don't cost an arm and a leg. That meant that I had to make some combination of products. From that point, it was a simple exercise of comparing and contrasting different power boards and prices.

I realized quite early on in my research that it was simply not practical to have the consoles be able to turn on without me touching them. Some consoles would have to be modified internally to allow something like this. Others could meet this target by having their power button pressed at all times, but this would mean that every time they power on it would be an uncontrolled inrush current.

That being said, most electronics are built to handle inrush currents nowadays - basically every AC adapter does, but this means that I'll be straining the electronics of these rare consoles just to give myself a little bit of convenience.

So basically, I decided against this and to just press the power buttons on the consoles as needed.

After doing some math, I understood that I could save over a hundred dollars if I were to just use a couple of regular-ish power strips and toggle them on and off using a smart plug. This will allow me to fill in the blanks using generic electronics - simple power boards, simple plug converters, simple surge protectors. Most importantly, though, it means after setting up the power cables I can keep them in the back and not have to move my display, which is huge.

That's another thing I learned about - surge protectors. While I've used them all my life, I never quite knew about their inner workings. Studying up on them allowed me to understand what would be the optimal way to use them. This may be unsurprising for you, but surge protectors are not born equal and can vary in price immensely. I opted for simple surge protectors because I think they'll protect my consoles from the common pitfalls. It's a tiny precaution that can go a long way.

### Display

I originally was toying with the idea of having my display on wheels so I could more easily fiddle with the cables in the back, but I realized that using relatively simple electronics I can allow myself to keep the electricity plugs remote, and thus not have to move the cabinet at all.

That meant that the only real other thing to worry about regarding the display were the cable holes.

Drilling holes into a cabinet is one thing, but making it look good is an entirely other thing. I know from experience that tidying cables up can go a long way in making a setup look clean, so I began looking into those cable hole things that cover up where the cable came from with some brushy hairs and stuff. Those are called brush grommets.

Turns out that they don't really make commercial brush grommets - they're mostly industrial, so they either come in standard variations or custom orders. Either way, they're very expensive, and that seemed crazy to me because they're essentially a strip of hairbrush.

I decided to try and make my own using whatever I could find - which in my case was a door brush which is normally used to keep dust from coming in through the crack under a door.

It was really easy to saw through and turns out that two of them folded on top of one another make an amazing grommet for cables!

I basically dub this experiment a success. I'll make lots more of these grommets and use them to cover up the holes I'll make in my display cabinet. Thankfully no cable I will need to pass through is wider than 2x1.5cm at its widest, so a hole of 8x2.5cm should be way more than enough to keep things looking good.

However, I'm not reckless enough to start cutting into my display just like that. I'm going to practice cutting on a piece of wood meant to simulate the back of the display. I'll verify I can secure the grommet to it, and that cables can pass through the hole size I'm planning on without a problem. If everything works, then I'll move on to the real thing.

Anyways, that's all for me now. Thanks for checking in, and good night!`,
    date: "Jun 30, 2024",
    readTime: "5 min read",
    image: blogMockingbirdImage
  },
  {
    id: "the-quest-to-connect-consoles",
    title: "The Quest To Connect Consoles",
    excerpt: "When you gaze up at the night sky and see a stars dotting the heavens, you are, in some capacity, a time traveler. That's probably one of the reasons I collect retro video game consoles.",
    content: `Hi everyone!

When you gaze up at the night sky and see a stars dotting the heavens, you are, in some capacity, a time traveler. Of course, this is mostly figurative - you travel through time the same as most people around you do and perceive it similarly. However, there is a very real, practical way in which you are a indeed time traveler.

You see, the stars at which you gaze, they are not modern depictions of themselves, but rather ancient depictions that are being revealed to us in real time.

Due to the speed of light, and due to their literally astronomical distance from us, we see the stars not as they are, but as they were ten, hundreds, thousands or more years ago. We are gazing into their past!

It's not a still image of their past - stars are ever-changing in our skies, being created and dying. We, on Earth, right now, have a unique glimpse into how they were all those years ago.

I think there is something novel about the idea of being able to capture the essence of something as it was and being able to experience it even after its time is past. That's probably one of the reasons I collect retro video game consoles.

So for those who don't know - collecting video game consoles has been a hobby of mine for quite some time now. I have a modest collection of about 20-odd consoles, most of them being Nintendo and Sony systems. They're all in working order and I have all their cables and adapters so I can play them (though I rarely do, for reasons we'll get into later).

I feel like it's an experience quite like no other to play an old game, holding a piece of technology and history in your hand in the form of a controller, and experiencing it like other people were 10, 20 or even 40 years ago.

As a game developer, it's an honest, sobering and profound look at what video games were, how they evolved and what we can learn from them. We really don't have to invent the wheel when it was invented tens of thousands of times before us over the course of half a decade.

Here are some pictures from my current collection, in case you were curious:

## Where am I going with all this?

Those among you who are astute would have noticed that none of these consoles are plugged in. In other words - they're all show (albeit a _good_ show with the glass and lighting and whatnot).

The reason might come off as a little lazy, but hooking them up is just such a _pain_! Sure, even though I keep all my cables organized and nearby, it's still a hassle of finding the right ones, then grabbing the relevant adapters (as pretty much none of these consoles use the right plug for my country, plus some of them require different voltage/current), and then moving my massive cabinet so I can fiddle with cables in the back. All to play what is, more often than not, a fun game, but not one I would be playing for 100 hours. More likely than not I would be playing it for 10 to 20 minutes, tops, before putting it away. As a result it often takes me longer to set up than I spend time playing the actual game.

It's a massive shame because this collection should be put to use, and I would love to do it, just more conveniently!

So this is what this blog is about (5 paragraphs in) - my quest to connect my consoles to my television so I can play them with ease!

Rest assured I am still working on actual video games at this time as well, but I just figured this would be a fun project to do on the side. In any case, this is the perfect time since I'll be moving very soon, so if in any case I'll be moving my cabinet and reorganizing everything, why not make it better?

So without further ado:

## The Goal

### I want to connect my consoles to the power and to the TV, so they will be more easily playable.

Obviously these are heaps of consoles, so I will have to use some sort of switch system to connect them to the TV. It doesn't have 20 ports (especially AVs). Same goes for the power since I don't want to be running 20 consoles at once when I am only playing one.

The more convenient the solution is, the better, so I am going to give myself stretch goals - sort of side-quests, if you will, to see if I can make my solution more effective. These bonus goals are, from least to most complex

1. **Set up the display switch in such a way so I would be able to change the display remotely (via remote/app)**

2. **Set up the power source in such a way so I able to turn a console on remotely (via remote/app)**

3. **Somehow sync the systems together so with the press of a button/tap of an app I could turn on my TV, switch to the right display port and power the console**

That last one is a doozey, and I honestly doubt we'll be able to pull it off, but who knows? Maybe I'll prevail.

## The Plan

It's all well and good I want all these things, but how I am going to get this done?

Well, I'm obviously going to start with research. I'll look at what others have done and the pitfalls they've hit. After that, I'll get started with the hopes of meeting the original goal somehow.

Generally speaking, the plan should look like this:

1. Research

2. Sketch out design for solution

3. Create holes in the back of my cabinet to allow me to pass cables to my consoles

4. Get some electric splitters (preferably with the ability to turn individual sockets on/off) for my whole console collection

5. Get/make a switch system for all my display cables to connect to my TV

6. Test & tinker

I guess it's time for me to start researching. I'll write another post on the blog once I have a better grasp on things. Thanks for reading through this, and I hope you'll check in again on my next update!`,
    date: "May 20, 2024",
    readTime: "7 min read", 
    image: blogQuestConsoles
  },
  {
    id: "where-in-the-world-is-emmetgames",
    title: "Where in the World is EmmetGames?",
    excerpt: "Hey everyone! Hope you're doing well. You may or may not have noticed, but it's been a hot minute since I've posted on this blog.",
    content: `Hey everyone! Hope you're doing well.

You may or may not have noticed, but it's been a hot minute since I've posted on this blog. In fact, it has been the longest break I've taken since I published this website.

I'd love to tell you all what I've been doing, and why I haven't posted in so long. Let's start with a small recap of what I've been up to:

- Gotten married
- Moved back to Australia
- Worked on and released some Game Jam entries
- Hosted my own Game Jam
- Started (and dropped) development on multiple games
- Started (and completed) development on some games which I can't really share here
- Kept working at Beach Bum Ltd

Yea, it most certainly has been a busy break.

**What am I up to nowadays?**

There are two main things I'm cooking up right now.

The first, unsurprisingly, is my work in Beach Bum. I've recently been promoted to architect there, so along with my existing responsibilities as team lead it's been really busy. In general, working Israeli hours remotely from Australia is really tough. Thankfully I'm a night person, but I'm still a person and it's impossible to work these hours without some level of social isolation.

I'm thankful I have a supporting wife and that my work is as accommodating as possible for this. It wouldn't have been possible otherwise. As for what exactly I'm working on in the company - as I'm signed on an NDA I can't share anything specific, but the general gist is that I'm making new stuff, and it's very fulfilling.

The second thing I'm working on is a digital board game. I've been experimenting with different mechanics and themes, trying to create something that captures the social interaction of physical board games while taking advantage of what digital platforms can offer.

The project started as a way to create something I could play with friends during lockdown, but it's evolved into something more ambitious. I'm particularly interested in how digital board games can handle hidden information and complex calculations that would be cumbersome in physical games.

**Why the radio silence?**

A few reasons, actually:

1. **Life Changes**: Getting married and moving countries is exhausting, even when everything goes smoothly. It took months to feel settled enough to have creative energy again.

2. **Work-Life Balance**: My new role at Beach Bum is demanding in the best way, but it does mean I have less mental bandwidth for side projects.

3. **Project Uncertainty**: I started several game projects that I ultimately abandoned. It felt weird to blog about things that might not see completion.

4. **Platform Fatigue**: Honestly, I was getting tired of the pressure to constantly produce content for social media and blogs. Taking a break helped me remember why I enjoy making games in the first place.

**What's different now?**

I'm approaching game development with a different mindset than before. Instead of trying to create the next big hit or worrying about building an audience, I'm focusing on making games that I genuinely want to play.

This shift has been liberating. The digital board game I'm working on exists because my friends and I wanted a specific type of game that didn't seem to exist. Whether it appeals to a broader audience is secondary.

I'm also being more selective about what I share publicly. Not every experiment or half-formed idea needs to become a blog post. Sometimes it's better to let projects develop in private until they're ready to be shared.

**Moving forward**

I don't want to make grand promises about posting frequency or upcoming releases. What I can say is that I'm excited about the projects I'm working on and I plan to share updates when there's something meaningful to report.

The digital board game is close to a playable prototype, and I'm hoping to get it in front of testers soon. If it works well, I might consider a broader release.

I'm also keeping my eyes open for other interesting project opportunities, whether that's collaborating with other developers or exploring different genres.

**Thanks for sticking around**

To anyone who's still reading this blog after my extended absence - thank you. It means a lot to know that people are interested in what I'm working on, even when I'm not great at regular updates.

I'm hoping to strike a better balance going forward between sharing my work and actually doing the work. We'll see how that goes!`,
    date: "Apr 10, 2024",
    readTime: "4 min read",
    image: blogCabinetImage
  },
  {
    id: "back-end-heaven", 
    title: "Back End Heaven",
    excerpt: "Hi everyone. I don't have much new info to share about my games, so in the meantime let me leave you with some highly recommended advice regarding your game's back-end.",
    content: `Hi everyone. I don't have much new info to share about my games, so in the meantime let me leave you with some highly recommended advice regarding your game's back-end. Note this will be relatively technical, so I'm sorry in advance if this blog post's too boring :)

My upcoming game, Pyramid Scheme, has some multiplayer elements. I needed a database to keep all of my users, but more importantly - I also wanted to perform some basic operations on the entries of all existing users whenever a new user entered the database.

![Pyramid Scheme game preview](${blogPyramidScheme})

This is a fairly standard operation, and there are many existing solutions which can help you deal with this.

One such example is Google's [Firebase Cloud Functions](https://firebase.google.com/docs/functions), which are a serverless solution for performing operations whenever certain interactions are performed with our Firebase database.

Unfortunately, this solution has a couple of issues which stopped me from using it:

1. It requires a fairly extensive setup in order to be able to write and deploy your logic
2. It requires a paying account (Spark plan) in order to use
3. It seems to be fairly buggy (I was unable to successfully complete the tutorial)
4. There is very little documentation and dialogue about this solution

I looked elsewhere, at the familiar world of AWS. However, I also didn't want to go for that because it requires even more setup, and it would also cost me money.

I looked high and low for a server solution I could use, until I found the one.

My friends, it is my absolute privilege to introduce you to [Unisave](https://assetstore.unity.com/packages/tools/network/unisave-backend-server-142705).

Unisave is a free & super easy to use backend solution for Unity.

Its advantages include:

- **Completely free** for small projects (up to 100 API calls per day)
- **Zero setup** - you literally just import the package and you're ready to go
- **Cloud hosted** - no need to set up your own servers
- **Unity integrated** - designed specifically for Unity developers
- **Database included** - comes with a simple but effective database system
- **Real-time capable** - supports real-time multiplayer features

Here's how easy it is to use:

## Setting Up Unisave

1. Download the package from the Unity Asset Store
2. Import it into your Unity project
3. Create a free account on their website
4. Copy your API key into the Unity project
5. You're done!

## Creating a Simple Backend Function

```csharp
using Unisave.Facets;
using Unisave.Entities;

public class PlayerFacet : Facet
{
    public void RegisterNewPlayer(string playerName)
    {
        // Create a new player entity
        var player = new PlayerEntity {
            Name = playerName,
            CreatedAt = DateTime.Now,
            Score = 0
        };
        
        // Save to database
        player.Save();
        
        // Update all existing players (example operation)
        var allPlayers = DB.TakeAll<PlayerEntity>();
        foreach(var p in allPlayers)
        {
            p.LastActivity = DateTime.Now;
            p.Save();
        }
    }
}
```

## Calling from Unity

```csharp
// In your Unity script
public void OnPlayerRegistration()
{
    this.CallFacet(
        (PlayerFacet f) => f.RegisterNewPlayer(playerNameInput.text)
    );
}
```

That's literally it! The backend function runs in the cloud, handles your database operations, and returns results to your Unity game.

## Why I Love This Solution

**Simplicity**: Unlike Firebase Cloud Functions or AWS Lambda, there's no complex deployment process, no command-line tools to learn, and no configuration files to manage.

**Cost**: For indie developers and small projects, it's completely free. Even when you scale up, the pricing is very reasonable.

**Unity Integration**: It feels like a natural extension of Unity rather than a completely separate system you need to learn.

**Documentation**: The documentation is clear, with practical examples that actually work.

**Support**: The developer is responsive and helpful when you run into issues.

## Limitations

To be fair, Unisave isn't perfect for every use case:

- **Vendor Lock-in**: You're tied to their platform, which could be problematic if they shut down or change their pricing model dramatically
- **Limited Scaling**: For massive multiplayer games, you'd probably need a more robust solution
- **Feature Set**: It doesn't have all the advanced features of major cloud providers
- **Control**: You have less control over the server environment compared to running your own infrastructure

## My Experience

For Pyramid Scheme, Unisave has been exactly what I needed. I was able to implement user registration, leaderboards, and basic multiplayer matchmaking in a matter of hours rather than weeks.

The fact that I can test everything locally and then deploy to the cloud seamlessly has made development much more enjoyable. No more worrying about server configuration or deployment pipelines - I can focus on making the game fun.

## Recommendations

If you're an indie developer working on a Unity game that needs backend functionality, I highly recommend giving Unisave a try. It's particularly good for:

- Turn-based multiplayer games
- Leaderboards and user progression systems
- Simple social features
- Prototype and early development phases

For larger, more complex projects, you might eventually outgrow it, but it's a fantastic way to get started and prove your concept before investing in more complex infrastructure.

## Conclusion

Backend development doesn't have to be the scary, complex part of game development. Tools like Unisave make it accessible to developers who just want to add online features to their games without becoming server administrators.

Give it a try on your next project - you might be surprised how much you can accomplish with minimal effort!`,
    date: "Mar 5, 2024",
    readTime: "6 min read",
    image: blogPyramidScheme
  },
  {
    id: "small-update",
    title: "Small Update",
    excerpt: "Hi everyone, long time no see! I just wanted to give you a small update on how things are going, and to let you know about some exciting stuff!",
    content: `Hi everyone, long time no see! I just wanted to give you a small update on how things are going, and to let you know about some exciting stuff!

Even though these are troubled times, personally I've been holding up pretty well. My new job as a full-time Unity developer is lots of fun, and I'm learning lots of new things every day. I can almost _feel_ how I'm becoming a better game developer by just being there and absorbing information and good habits :)

But enough of that boring stuff, let's get to the fun stuff!

### New Game

That's right! I'm actually working on a new indie game!

Going back to my roots, this is a 100% free, no monetization game for mobile devices. I don't want to spoil too much, but it is a meta-game - that is, a game where its existence is more of a game than the actual game itself. On top of that, it's a satire/joke game. Honestly, the game is mostly complete, and I'm really looking forward to releasing it soon :)

![New game preview](${blogPyramidScheme})

What could it be about?

### Support Drop for _Meme Masters_

To clarify - _Meme Masters_ is still playable! Just with less servers.

Still, it is with a heavy heart that I inform you that I will no longer support the extensive multiplayer servers of Meme Masters. From now on, only up to 10 players will be able to play the game at the same time. Simply put, the server costs were no longer worth the trouble, considering this is an older game now that basically nobody plays. Let's hope that in the future I'll be able to repurpose this money for more fun experiences :)

### What's Next?

As I mentioned, I'm really close to finishing my new project. It's been a fun challenge to work on something completely different from my previous games. 

This new game is much more experimental and artistic than my previous work. It plays with concepts of identity, purpose, and what it means to "win" at something. Without giving too much away, let's just say it asks some interesting questions about the nature of games themselves.

I'm also planning to return to some more traditional game development after this release. I have ideas for a puzzle-platformer and possibly a sequel to one of my earlier games, but we'll see how things develop.

### Professional Growth

Working as a full-time Unity developer has been incredibly valuable for my personal projects. I'm learning new techniques, better coding practices, and getting exposure to how larger projects are structured and managed.

Some specific things I've been learning:
- **Better Architecture**: How to structure code for maintainability and scalability
- **Performance Optimization**: Techniques I never would have discovered working solo
- **Team Collaboration**: Using version control effectively, code reviews, etc.
- **Professional Tools**: Asset management, build pipelines, automated testing

All of this knowledge directly benefits my indie work, making me more efficient and helping me avoid common pitfalls.

### Looking Forward

I'm optimistic about the direction things are heading. Having stable employment takes the pressure off my indie projects, allowing me to take more creative risks and work on passion projects without worrying about monetization.

The plan is to keep releasing small, experimental games while slowly building up to something larger. Each project teaches me something new and helps me grow as a developer.

Thanks for reading, and I hope you'll check out my new game when it releases!`,
    date: "Feb 14, 2024",
    readTime: "3 min read",
    image: blogPyramidScheme
  },
  {
    id: "fill-is-out",
    title: "FILL is Out!",
    excerpt: "Hey there, Emmet here, and welcome to another dev vlog. I am very happy and proud to say that FILL is complete. I've made the game, and it is now available to download for free on the Google Play Store.",
    content: `Hey there, Emmet here, and welcome to another dev vlog. Sorry for the radio silence over the past 2 months – life has been pretty hectic and I was too caught up with the development of FILL to actually write about it. It might not look like it, but making these vlog posts actually takes quite a bit of time, and since I want to really devote to game development the time and energy it deserves, I've decided to scale back the frequency of vlogs in general.

As for FILL, I am very happy and proud to say that it's complete. I've made the game, and it is now available to download for free on the Google Play Store. Please give it a try and let me know what you think.

![FILL on Google Play Store](${blogFillStore})

Click to install!

[https://play.google.com/store/apps/details?id=com.EmmetGames.FILL](https://play.google.com/store/apps/details?id=com.EmmetGames.FILL)

What's really great is that I've had the time to refine it and even add a couple of fun extra modes like Endless mode which tests the limits of your ability and Zen Mode for when you want to sit back and relax a little.

![FILL gameplay](${blogFillGameplay})

Honestly, since I've added so many things to the game, it's difficult to know where to start, but I'll try and recap some of the things which I found more interesting.

**Ad Mediation**

Last time I vlogged I talked about how I'll be implementing Ad Mediation in my game, and a bit about its strengths and drawbacks. Now that I'm past implementing it, I'd love to share my two cents on the matter:

Ad Mediation is _definitely_ worth doing, especially if you're planning on using ads as your primary monetization strategy. The setup process is a bit involved, but the benefits are substantial:

1. **Higher Fill Rates**: Instead of relying on a single ad network, you can have multiple networks compete for ad space
2. **Better eCPMs**: Competition between networks drives up the price advertisers pay
3. **Reduced Dependency**: If one network has issues, others can fill the gap

However, there are some downsides:
- **Complexity**: Managing multiple ad networks adds development overhead
- **SDK Bloat**: Each network adds to your app size
- **Testing Challenges**: Debugging ad issues becomes more complex

For FILL, I used Google AdMob as my primary network with Facebook Audience Network as a backup. The setup took about a week to get right, but I saw immediate improvements in both fill rate and revenue.

**Gameplay Refinements**

One of the biggest changes I made during development was refining the core gameplay loop. The original concept was simple - fill the screen while avoiding moving obstacles. But through playtesting, I discovered several areas that needed improvement:

**Visual Feedback**: Players needed clearer indication of when they were safe vs. in danger. I added color-coded zones and particle effects to make the game state more readable.

**Difficulty Curve**: The initial difficulty ramp was too steep. I implemented a more gradual progression system that introduces new mechanics over time rather than just increasing speed.

**Control Responsiveness**: Mobile touch controls needed to feel precise and immediate. I spent considerable time tuning the touch detection and ball placement mechanics.

**Audio Design**: Sound effects and music play a huge role in making the game feel satisfying. I worked with a composer to create dynamic audio that responds to gameplay events.

**Level Variety**: To keep the game interesting, I added different types of obstacles and environmental hazards that appear as players progress.

**Performance Optimization**

Getting FILL to run smoothly on a wide range of Android devices was challenging. Some key optimizations I implemented:

- **Object Pooling**: Reusing obstacle objects instead of constantly creating/destroying them
- **Texture Optimization**: Using compressed texture formats appropriate for mobile
- **Draw Call Reduction**: Combining similar objects to reduce rendering overhead
- **Background Threading**: Moving non-critical calculations off the main thread

**User Interface Polish**

The UI went through several iterations based on user feedback:
- **Simplified Menus**: Reduced the number of clicks needed to start playing
- **Better Tutorials**: Added animated guides that show rather than tell
- **Accessibility Features**: Support for larger text and colorblind-friendly palettes
- **Achievement System**: Added goals and rewards to encourage continued play

**Localization**

Even though FILL is primarily a visual game, I added support for multiple languages in the UI elements. This involved:
- **Text Extraction**: Moving all user-facing text into external files
- **Layout Flexibility**: Ensuring UI elements could accommodate different text lengths
- **Cultural Considerations**: Adjusting colors and symbols that might have different meanings in different cultures

**Analytics and User Feedback**

I implemented analytics to understand how players interact with the game:
- **Session Length**: How long people play in a single session
- **Retention Rates**: What percentage of players return after 1, 7, and 30 days
- **Level Progression**: Where players tend to get stuck or quit
- **Monetization Metrics**: Ad view rates and user acquisition costs

This data has been invaluable for making informed decisions about future updates.

**What's Next?**

Now that FILL is released, I'm taking a short break to evaluate its performance and plan next steps. Depending on player reception and download numbers, I might:

- **Add New Content**: More game modes, obstacles, or customization options
- **Create a Sequel**: Building on what worked while addressing what didn't
- **Start Something New**: Apply lessons learned to a completely different project

I'm also considering porting FILL to other platforms like iOS or even web browsers, but that depends on how well the Android version performs.

**Lessons Learned**

This project taught me several important lessons about mobile game development:

1. **Polish Matters**: The difference between a functional game and a polished game is enormous
2. **Playtesting is Essential**: My assumptions about difficulty and fun were often wrong
3. **Marketing is Hard**: Making a good game is only half the battle
4. **Iteration is Key**: The final version was vastly different from my initial concept
5. **Technical Debt Accumulates**: Regular refactoring prevents major headaches later

**Thank You**

I want to thank everyone who provided feedback during development, especially the beta testers who helped identify bugs and balance issues. Your input made FILL significantly better than it would have been otherwise.

Please check out FILL on the Google Play Store and let me know what you think! Your feedback helps me improve as a developer and informs future projects.

Thanks for reading, and happy gaming!`,
    date: "Jan 28, 2024",
    readTime: "8 min read",
    image: blogFillStore
  },
  {
    id: "turning-over-a-new-leaf",
    title: "Turning Over a New Leaf",
    excerpt: "Hi there! I'm finally back from my break and I'm super pumped to get back into the action! I won't fill you in on all the stuff that's been happening in my life, but there is one super cool thing I'd love to share - I'm officially working part-time as a game dev!",
    content: `Hi there!

I'm finally back from my break and I'm super pumped to get back into the action!

I won't fill you in on all the stuff that's been happening in my life, but there is one super cool thing I'd love to share - I'm officially working part-time as a game dev!

Until now, I've been working as a software developer at Amdocs full-time and developing games in my spare time. Needless to say, it was a lot of work, and while it payed the bills it was also exhausting to work both weekdays and weekends.

Thankfully, Amdocs allowed me to take some time off to focus on game development for the upcoming months, so while I'll still be working at Amdocs most of the time, I'll be given some weekdays to work on games! How cool is that?

Anyways, enough talk about my boring life, it's time to get into game development!

I began working on a new title today - _FILL_. In this hypercasual game, your mission is to fill up the screen by creating balls in the places you touch on screen.

However, there's a catch - as you do so, hazards will be flying to and fro. You'll need to dodge them as you fill the screen, in order to not lose any lives!

Since I have so much time to work on games now, I actually managed to implement most of the game's mechanics in one day. Here's what it looks like!

<img src="${blogFillGameplay}" alt="FILL gameplay demonstration" class="w-full h-auto rounded-lg mb-4" />

Notice how the objects in the scene interact with the light. This is possible thanks to Unity's 2D light system.

I still have heaps to implement, like a life system, win/lose conditions, and several levels, but I'm happy with what I have so far. I especially like the use of 2D lighting and shadows, to give it a minimalistic feel :)

**The Vision**

FILL is designed to be a hypercasual mobile game - something that's easy to pick up but challenging to master. The core loop is simple:

1. Touch the screen to create expanding circles
2. Avoid moving obstacles while your circles grow
3. Fill a target percentage of the screen to advance
4. Repeat with increased difficulty

The beauty of this concept is its simplicity. Anyone can understand the rules immediately, but mastering the timing and positioning takes practice.

**Technical Implementation**

The game is built in Unity using the Universal Render Pipeline (URP) for optimal mobile performance. Some key technical aspects:

**2D Lighting System**: I'm using Unity's 2D lights to create dynamic shadows and atmosphere. The obstacles cast shadows that players can use strategically.

**Physics-Based Movement**: All obstacles use Unity's physics system, creating natural and believable movement patterns.

**Procedural Generation**: Obstacle patterns are generated algorithmically to ensure variety while maintaining balanced difficulty.

**Touch Input**: Responsive touch controls that feel immediate and precise on mobile devices.

**Design Philosophy**

I'm following several design principles for FILL:

**Immediate Feedback**: Every action should have clear, immediate visual and audio feedback.

**Progressive Difficulty**: Each level introduces new challenges while building on previous mechanics.

**Fail Fast, Retry Faster**: When players lose, they should be able to retry almost instantly.

**Visual Clarity**: The game state should always be immediately readable, even during chaotic moments.

**Accessibility**: Simple controls and clear visuals ensure the game is accessible to a wide audience.

**Development Process**

Having dedicated time for game development has completely changed my workflow. Instead of squeezing in an hour here and there, I can now dedicate entire days to focused development.

This allows for:
- **Deeper Problem Solving**: Complex issues can be tackled without interruption
- **Better Testing**: Time to properly playtest and iterate on mechanics
- **Quality Polish**: Attention to details that make the difference between good and great

**Monetization Strategy**

FILL will be free-to-play with optional video ads for extra lives or continues. I'm committed to keeping the game fair and fun without requiring purchases.

The monetization approach:
- **Rewarded Video Ads**: Players can watch ads for benefits like extra lives
- **Optional IAP**: Remove ads or unlock cosmetic customizations
- **No Pay-to-Win**: All gameplay content accessible through play

**What's Next?**

Over the coming weeks, I'll be focusing on:

1. **Core Gameplay Loop**: Perfecting the basic mechanics and feel
2. **Level Design**: Creating a variety of challenging and fair levels
3. **Audio Design**: Adding music and sound effects that enhance the experience
4. **UI/UX Polish**: Making menus and interfaces smooth and intuitive
5. **Playtesting**: Getting feedback from friends and family

I'm aiming to have a playable prototype ready for testing within the next few weeks, with a goal of releasing on mobile platforms by early next year.

**Personal Reflections**

Taking this step toward more serious game development feels both exciting and terrifying. It's a risk to reduce my hours at a stable job, but I believe this is the right time to pursue my passion more seriously.

The support from Amdocs has been incredible - not every company would be willing to accommodate such an arrangement. I'm grateful for the opportunity to explore this path while maintaining some financial stability.

I'm also excited about the creative freedom this provides. Without the pressure of game development being purely a side hobby, I can take more time to explore ideas and create higher quality experiences.

**Thank You**

Thanks to everyone who has followed my game development journey so far. Your support and encouragement mean more than you know.

I'll be sharing regular updates on FILL's development progress, so stay tuned for more gameplay footage, development insights, and hopefully a playable version soon!

Time to get back to coding!`,
    date: "Oct 15, 2023",
    readTime: "6 min read",
    image: blogFillGameplay
  }
];

export const getFeaturedPost = () => blogPosts.find(post => post.featured);
export const getOtherPosts = () => blogPosts.filter(post => !post.featured);
export const getPostById = (id: string) => blogPosts.find(post => post.id === id);