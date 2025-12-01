import { BlogPost } from "../blogPosts";
import hiding from "@/assets/haven-t-i-been-here-before/hiding.png"
import running from "@/assets/haven-t-i-been-here-before/running.png"
import briefcase from "@/assets/haven-t-i-been-here-before/briefcase.png"

export const haventIBeenHereBefore: BlogPost = {
  id: "haven-t-i-been-here-before",
  title: "Haven't I Been Here Before?",
  excerpt: "Sorry for the brief pause in updates - Life has been pretty hectic, but I can assure you that...",
  content: `Sorry for the brief pause in updates - Life has been pretty hectic, but I can assure you that lots of work has been put into _You're Not Supposed To Be Here_! I can't wait to show you what's cooking!

First of all, after heaps of work, I managed to set up a **procedurally generated** corridor!

The corridor will be divided into rooms (Each created and spawned every time the player reaches the end of an existing room), which feature guards on a lookout, hidy objects to hide behind, and most importantly - a prize that will net you a hefty sum of money. This took a while to set up, and even longer to do right, but I'm very pleased with how it turned out :)

![image](${hiding})

The 'fade' effect on the player is bugging out at the moment, making it looking pretty goofy when they're trying to hide... but I personally think it's hilarious :D

And of course, that means that **Enemies** are up and running. Their animation is still a WIP, but the code works! As of now, there are two types of enemies you can run into: **Guards** - Simple, hardworking men with a baton, these fellows want nothing more than a quiet night... but if they see you, they're gonna give chase and whack you!

**Agents** - Sharply-dressed gentlemen with a pistol in hand. Unlike the guards, they don't need to get up all close. What're they guarding, anyway?!

![image](${running})

Uh oh! Looks like we're going to have to book it!

Writing enemy code for a stealth game is a difficult thing. On the one hand, you need to convey to the player what the enemy is doing or planning to do very clearly, otherwise they feel cheated. On the other hand, if you make the enemies too dumb and obvious, there's no fun to be had sneaking your way through them. I hope to strike the right balance with these guys.

![image](${briefcase})

In case it wasn't obvious enough the briefcase on the table is important, the giant yellow arrow is always here to help.

Prizes were also added into the game, as previously mentioned. Now there is finally some reward for getting through all those pesky guards! However, you're not looking for money. You're a spy, after all! You're looking for juicy intel, whether it's classified documents, password lists, or even proof of alien life! Just remember the more serious the intel is, the better guarded it is. Stay vigilant!

The game is playable in its current state, but is too unpolished for long play sessions. A few productive weeks from now it should be on the Play Store! Stay tuned!`,
  date: "Apr 7, 2019",
  readTime: "2 min read",
  image: running
};
