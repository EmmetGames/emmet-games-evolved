import { BlogPost } from "../blogPosts";
import image from "@/assets/wax-on-wax-off.png";

export const waxOnWaxOff: BlogPost = {
  id: "wax-on-wax-off",
  title: "Wax on, wax off",
  excerpt: "Hey there. This is just a quick update because even though I did get a lot of things done, not a lot of them are very visual.",
  content: `Hey there. This is just a quick update because even though I did get a lot of things done, not a lot of them are very visual. Without further ado:

**Enemy Agents**

Unlike the friendly neighborhood guards, these agents are no joke. Sporting a slick suit and a pistol, they can neutralize any trespassers from afar. They also deal more damage than normal guards, so watch out!

![image](${image})

The player remains unseen as the agent passes by

This also means that I'm finally done with the spritework (At least, until it comes time to fix and polish some of the sprites). This is great news for me, because now I can finally get back to making the game not only playable, but fun to play.

**Stealth Overhaul**

All the playtesting I've done so far for the game proved that hiding was hard, even when trying to be forgiving towards players. It's simply not comfortable to double-tap a screen to do an essential action, when holding down the screen is required for movement. It's even worse when considering that often times the player will need to do both quickly in order to remain undetected.

This is why I changed the stealth system, so instead of actively choosing to hide, the player will auto-hide as soon as he's in range of a stealth object and is not moving. That way, it's easier than ever to run and hide when the time is right.

Playtesting so far shows that this makes the game much easier, which is good because it was super hard until now.

**Bugfixes**

I spent a significant amount of time fixing bugs, from animation issues, to AI mishaps, to errors in the auto-generation script. I won't go into further detail here, but with every bug fixed the game is becoming more and more polished.

With progress going so well, and the game being completely playable in its current state, I'll be ready to begin the closed-alpha stage of the project very soon. If you'd like to playtest the game, please contact me through the website and I'll send you a copy asap.

That's it for today. Stay tuned to see how the game becomes more polished and refined!`,
  date: "Jun 8, 2019",
  readTime: "2 min read",
  image: image
};
