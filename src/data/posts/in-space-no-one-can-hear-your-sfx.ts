import { BlogPost } from "../blogPosts";
import loading from "@/assets/in-space-no-one-can-hear-your-sfx/loading.png";
import waiting from "@/assets/in-space-no-one-can-hear-your-sfx/waiting.png";


export const inSpaceNoOneCanHearYourSfx: BlogPost = {
  id: "in-space-no-one-can-hear-your-sfx",
  title: "In space, no one can hear your sfx",
  excerpt: "Hi! I've made heaps of progress over the past 2 weeks, and I'm eager to show it to you all, so let's get to it!",
  content: `Hi! I've made heaps of progress over the past 2 weeks, and I'm eager to show it to you all, so let's get to it!

I've finished up all the animations for the game. I'm very happy with how they all look (with the exception of the players-in-match scrollbar), and I believe they make the game really feel alive and polished!

I've also added a waiting-for-match lobby to the game. The players will now need to wait there until there are at least three players in the match. This is to make sure that the players will only be able to play when, well, there's any true 'game' to be had. Two or less players simply won't have much choice when it'll come time to vote for the best meme, after all.

![image](${waiting})

The names of the players in the match show up over the screen, randomly :)

Beyond that, I've managed to fix or workaround heaps of bugs in the game. It's now very stable, which is honestly fantastic for an online game! I still need to do some play-testing regarding some specific end-cases in the match in regards to players connecting, disconnecting and reconnecting in different stages of the match, but beyond that I don't think there are any bugs I need to handle, which is great.

One slight annoyance I found was that one of my functions (the one that converts IP addresses into room codes and vice-versa) is a little too slow. Thankfully, I was able to cover it up by adding an informative loading screen to the game when it initially boots up! That way, the game's stuttering cannot be seen, and at the same time I help the players learn about the game. It's a pretty clever solution, if I do say so myself, as it addresses multiple issues at once.

![image](${loading})

I especially like the meme-y illustration I made. Really captures the feel of the game, I think.

I've also finished adding sound effects and sound effects management to the game. All the sfx in the game are voiced by me, because I want to give the game a very silly feel. At the same time, it also makes the music and sfx production very easy compared to other games I've worked on.

That's it for my progress report. I'll do some final internal play-testing and bug-fixing, and then I'll be able to release a public beta! Hurray!

Unfortunately, due to the quarantine situation currently prevalent in the world, it will be hard for people to actually play my game, since it requires a minimum of three active players in the same local network to play. It's a huge bummer, but considering all the terrible things some people need to endure right now, this is definitely not such a big deal.

That's basically it. See you in the public beta!`,
  date: "April 10, 2020",
  readTime: "2 min read",
  image: waiting
};
