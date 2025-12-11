import image1 from "@/assets/lessons-from-metroid-prime/boxart.jpg";
import image2 from "@/assets/lessons-from-metroid-prime/tallon_iv.webp"
import image3 from "@/assets/lessons-from-metroid-prime/temple.webp"
import image4 from "@/assets/lessons-from-metroid-prime/fission.jpg"
import image5 from "@/assets/lessons-from-metroid-prime/underwater.avif"

import { BlogPost } from "../blogPosts";

export const lessonsFromMetroidPrime: BlogPost = {
  id: "lessons-from-metroid-prime",
  title: "Lessons from Metroid Prime",
  excerpt: "2024 is coming to a close, and just like every year that normally brings about a period of reflection. Specifically, for video game professionals it's a time to look back at the happenings of the industry, and the games that were made.",
  content: `
I'm coming in hot after just finishing playing _Metroid Prime_ for the first time.
To clarify, I just beat the remastered version for the Switch (2023), though I have also played a bit of the original (2002).

![image](${image1})

This is a critically acclaimed game, widely considered among the best games of the Gamecube, and possibly even amongst the greatest of all time.
Its echoes are felt to this day in the very popular Metroidvania genre, which of course owes part of its name to the Metroid series.
I figured it would be interesting to write about my experiences with the game, from the perspective of a game developer.
I understand I'm wandering into controversial territory here, so I'll preface this by saying these are my first-take opinions and there is much I do not know.

Also be warned that I may discuss spoilers, both mechanics and plot-wise.

![image](${image2})

## High Level Overview

In this game you play space bounty hunter Samus Aran as she explores a mysterious alien planet whilst trying to stop nefarious space pirates.
The game controls like an FPS but is more exploration-focused than shooting-focused, so calling it an FPS is perhaps a bit misleading.
In general, you explore the alien world, find upgrades and powerups, and uncover the mystery at the heart of the ancient civilization that once lived there.

## The Good

![image](${image3})

### Natural Discovery & Exploration

The gameplay of _Metroid Prime_ involves a lot of backtracking through previously visited rooms, but as you play you get new powerups which in turn allow you to interact with the environment in new ways.
Sometimes, you'll get to uncover a whole new part of the world!
This is a quite common trope in Metroidvanias, but what sets this game apart (beyond being one of the first games to do this) are a few things:
  - There is a substantual amount of backtracking in the game, so there are way more moments where you'll see something you can't interact with just yet. This helps you remember these elements, so it's easier to return to them without getting explicit instructions to do so when you unlock a new power.
  - The game is very nonchalant about its unlockable elements. Sometimes behind a previously-locked door you'll find a small upgrade like a missile upgrade, or a big thing like a whole new part of the world or a new weapon. The fact that they're all given the same visual weight makes exploring come more naturally as it blurs the line between mandatory and optional.

### The Atmosphere

The game is immersive. Since _Metroid Prime_ has little to no characters, the world itself takes centre stage. It's teeming with environments and life, and really feels like an ecosystem full of bizzare alien life.
I really get the vibe that they are living organisms in this existing world and I am enroaching on their territory, rather than being "enemy X" in "dungeon Y" who stands there until the player shows up.
The music and sound effects play a key role, and enhance the experience.
Your player character, while rarely seen due to the FPS camera, also feels realized - Samus Aran comes across as competent and unfazed, professional and focused. It's impressive how they were able to convey that only through small cutscenes and first-person animations.

I'll also note that I like how the HUD appears as if on the visor of your space helmet.

### The End Goal

The fact that the end-goal of finding 12 Chozo keys scattered across the world feels so optional is so awesome in my book.
Like, the whole Chozo temple is uneccessary to go to until the very end of the game. You can (and probably will) find some keys accidentally while playing & exploring the world.
It feels like such a rewarding, fun treasure hunt, much more in line with collectibles for 100% completion of the game rather than reaching the end credits.
It really drives home the importance of exploration in this game rather than combat or plot - you can only beat the game by really familiarizing yourself with the environment.

### Empowerment

I'm going to gloss over that thing that the game does where you start with all the powerups and then they're stripped from you. I don't care much for that and I feel like it takes from the experience.
Rather, the powerups you get as you play the game feel so impactful and significant, which is awesome and sometimes rare in modern titles (which struggle to make every powerup count).
Like, being able to double-jump unlocks a huge part of the world and makes combat also feel more interesting. Getting the plasma beam weapon that cuts through enemies like butter is awesome. The spider ball allowing you to traverse the world in new ways feels so fun.
You truly feel like a force-of-nature by the end of the game, and it's impressive the game can do that while keeping the game challenging even into the late game.
Part of that is how the game knows when to throw fodder enemies at you and when to hit you with a reasonable challenge.

### The hint system

While exploring is fun, it can often be soul-crushing to not know what to do next. Having the built-in hint system that tells the player where they should go next WITHOUT explicitly telling them that it's a hint system was very cool.
It was honestly refreshing to play a 20+ year old game and not feel lost at least 5 times while playing.
Plus, because it's all optional it never gets in your way when you feel like you 'have a lead'.

## The Bad

![image](${image4})

### Scanning

The game really emphasizes scanning everything, which isn't really fun. While getting intel on enemies so you know how to fight them is cool, it's not fun to scan in order to activate an elevator or open a door, or to have it as one of the main trackable collectibles of the game.
I think a significant part of my frustration with this focus is the controls - if scanning was quick and easy, then I wouldn't mind as much. However, the fact that you have to change your visor, then hold the correct button, and then not let go if you want to read the text is a major blunder in my book.
An example of how better to implement something similar in my mind would be the Arkham games, which display information about the focus passively when using 'Detective Vision'. It's not a 1-to-1 comparison, but I think it shows how 'easy' it could be to scan enemies.

### The platforming

A not insignificant part of the game revolves around 3D platforming, which is a challenging thing for a game to pull off. Unfortunately _Metroid Prime_ doesn't handle this too well and you will end up falling from things - a lot.
I probably spent a collective hour or two of my playthrough retrying jumps, which is not a fun thing to do.
It's a shame because it does feel like platforming was supposed to be a thematic element rather than a major challenge in the game.

### The color-coded enemies

Fairly quickly you'll run into enemies that require you to use a specific weapon to fight them.
While this isn't bad on its own, the fact that swapping weapons in this game is such a pain in the butt makes this a miserable experience.
You need to hold the X button, and while doing so press the d-pad in the correct direction, all mid-combat. If you misclick, you will enter your morph ball or change your visor (which might make your enemy invisible).
This effectively means that if you encounter an enemy you were not prepared to fight, you need to accept you'll be losing a significant chunk of your health as you switch weapons in the midst of combat.
This gets much worse when fighting color-coded Metroids, who can grab your face and force you to morph-ball in order to detach from them.
Seriously, they're so unfun to fight that I avoided them whenever possible. They're not even that deadly, just annoying.

Unfortunately the weapon-switching is often a requirement - it's not that other weapons would be less effective, but rather that other weapons fully do not work.
I like the idea of making enemies weak to certain weapons and moves. I think it makes gameplay interesting.
However, limiting player choice like this and forcing them to go through an unintuitive control scheme to fight is a bad call.

### The bosses

In many ways, _Metroid Prime_ plays similar to Zelda games of the era - you explore different themed environments, get new items that unlock new parts of the world, and fight enemies using Z-targeting.
One major way the games differ, however, is their approach to boss fights.
While both will require you to use the relevant item from the zone to exhibit your mastery of it, and generally prove a challenging experience, Zelda will do so more symbolically.
That is to say - you will often need to perform the winning trick ~3 times in order to defeat the boss. Normally between iterations the boss will introduce new mechanics that'll make the process more challenging.
In _Metroid Prime_, the bosses have massive health bars and you'll need to perform the trick way more times. Each boss fight takes over 5 minutes and feels grueling, as they chip away at your health and you chip away at theirs.
Unfortunately dodging is not something that really expands in Samus' arsenal, so you'll end up getting hit a lot even by moves you could predict.
Beating a boss in this game doesn't make you feel powerful, it makes you say "Finally!".

## Conclusion

![image](${image5})

I think _Metroid Prime_ is a fun game that helped pave the way for titles that improved on its formula. On its own, it holds up but I don't really see it as a timeless classic.
I didn't touch on how it took a previously 2D series and gracefully moved it to the 3rd dimension, not unlike Mario and Zelda. I also didn't touch on how in the original Gamecube version you used the same stick to move forward and back and also rotate the camera. I guess there is much more to say.
Many of this game's greatest aspects have been since replicated a dozen times across more modern games, and I think it stands to show its impact on the industry.

If you have any strong feelings about my dissection, feel free to send them to me via the contact form on my website. I'd love to broaden my horizons. Thank you.
`,
  date: "Dec 11, 2025",
  readTime: "14 min read",
  image: image1,
  featured: false
};