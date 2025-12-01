import { BlogPost } from "../blogPosts";
import game_over from "@/assets/strike-a-pose/game_over.png";
import title_screen from "@/assets/strike-a-pose/title_screen.png";
import doorway from "@/assets/strike-a-pose/doorway.png";
import animator from "@/assets/strike-a-pose/animator.png";

export const strikeAPose: BlogPost = {
  id: "strike-a-pose",
  title: "Strike A Pose",
  excerpt: "Hey there. This is just a quick update because even though I did get a lot of things done, not a lot of them are very visual.",
  content: `Hey there. Before I continue with the update, let me address the elephant in the room:

I apologize for not posting in a long time. A lot of things in life are keeping me away from doing this, which is a huge shame because I really am passionate about this up-and-coming title. That being said, I did make a huge amount of progress on the game, so let's get right to it!

Until now, it was possible to damage the player, but now the game can end when the player runs out of life. When it does, a **Game Over** screen pops-up. This is where the game's core monetization comes in. The player can either start over, or can choose to continue, by watching an ad.

![image](${game_over})

I try to make it crystal clear to the user that pressing the 'Continue' button will cause an ad to play.

I've always hated how poorly ads are used in a lot of apps and games. You normally mind your own business, when BAM! A terrible, unskippable ad starts playing. A few years back, I found a great mobile game called [Lapse](https://play.google.com/store/apps/details?id=com.cornago.stefano.lapse) (Which I highly recommend you try out), which had the brilliant idea of simply asking the player once in a while if he'd be willing to watch an ad, and get a bonus. No interruption, just simply asking in a non-aggressive way.

I wanted to incorporate a similar idea into my game. Make it super obvious to the player that an ad would play once they pressed that button, and that giving up is just as much of a valid option.

Speaking of menus, the game now has a title screen. I'm a huge fan of the design of it, because I feel like it really pops while at the same time also fit the game's atmosphere. Still, it's a WIP and I'm probably gonna change it up a bit.

![image](${title_screen})

The black strokes behind the text are supposed to be reminiscent of old government document censorship.

I also finally added doors to separate the different rooms in the game, while giving each room its own unique tint, to make it look more distinct than the rest. There doors auto-open when the player approaches, and can be used as cover to hide from those pesky guards.

![image](${doorway})

These small details really help making the player feel they're progressing.

Last but not least - I've made a lot of grounds in the animation department. I basically finished all the different player sprites, and now I'm hard at work on the enemy sprites. It's a tough job, because they have different idles and walk cycles for their normal state, their alert state and their combat state. Still, I feel that with each sprite I'm becoming a better pixel artist, so that's awesome.

![image](${animator})

A behind-the-scenes look at how the player's animator looks.

I gotta give Unity a huge kudos for their animation tools. I remember how back in the day it used to be a total pain to integrate 2D sprite animations into a game. Now, there's the built-in animator and animation panes, that make creating and adjusting animations from the sprites super easy. The animator's visual tree system is also a huge convenience when it comes to animating the different characters.

That's it for my game's update. My current goal is to finish the sprites for the game and move on to adjusting the code for procedural generation, as well as some other tweaks and bugfixes. Stay tuned!`,
  date: "May 30, 2019",
  readTime: "2 min read",
  image: title_screen
};
