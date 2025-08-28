import { BlogPost } from "../blogPosts";
import pepe from "@/assets/the-final-meme/pepe.jpg";
import customMatchmaking from "@/assets/the-final-meme/customMatchmaking.png";

export const theFinalMeme: BlogPost = {
  id: "the-final-meme",
  title: "The Final Meme",
  excerpt: "The last big update for Meme Masters is out, featuring custom matches! Reflecting on the journey and what's next.",
  content: `So, we're finally here.

![image](${pepe})

Yesterday, I pushed to the Play Store the newest (and probably final) update for Meme Masters (though it will still take a few days until the Play Store entry is updated for everyone).
It includes all the aforementioned features, as well as custom matches!

![image](${customMatchmaking})

That's right. Now you can make custom private matches, deciding which memes to use (from your owned meme packages) and how many points it takes to win the match.

I've decided I'm going to finish working on Meme Masters for now. It's been almost a year since I started work on Meme Masters, and since then I've improved and overcome many challenges.
However, I also feel like I've exhausted most of the new learning opportunities I had in Meme Masters, so it's time to move on to a new project.

That's not to say I ran out of ideas for Meme Masters - I don't think anyone ever feels that their game has everything they wanted it to have and is perfect. It's more like that at this point I don't think these updates are worth my players' or my own time anymore. Not more than a new, probably better experience.

For those curious, the features that never made it into Meme Masters are:

*   Meme Battle Royale mode, where instead of getting the same meme each round, every player gets a different meme
*   Bottom text functionality
*   The ability to add your own custom memes and images to the game
*   Transitioning the game to a round-based system, where instead of ending the match when someone reaches a certain amount of points, the matches would end after a set amount of rounds. In this version of the game, points would be allocated to each player based on how many people voted for them, rather than only the winner getting a single point
    *   A point of expansion for this could have been rounds where points rewards are doubled or tripled, giving players in the back a chance to get the lead
    *   Another point of expansion could have been bonus trophies (sort of like the prize stars at the end of Mario Party games) which would award players point bonuses on stupid things (like losing 3 times in a row, using a certain word in their memes, etc.)
        
I'd like to thank you all for joining me on this journey. It's been great!
I'm very proud of Meme Masters and what it ended up as. I'm probably proud of it more than any other game I ever made.
Still, as proud as I am of this game, I hope that my next game will reclaim that title, because I want to keep improving.

'Till next time, see you around! I'll be taking a few weeks off from game development to get a breather.`,
  date: "Aug 5, 2020",
  readTime: "2 min read",
  image: pepe
};
