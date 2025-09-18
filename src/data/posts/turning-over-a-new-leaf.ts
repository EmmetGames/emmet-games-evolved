import { BlogPost } from "../blogPosts";
import gameplayFootage from "@/assets/blog-fill-gameplay.gif";

export const turningOverANewLeaf: BlogPost = {
  id: "turning-over-a-new-leaf",
  title: "Turning over a new leaf",
  excerpt: "Back from a break and now officially working part-time as a game dev! Plus, a sneak peek at my new game, FILL.",
  content: `Hi there!

I'm finally back from my break and I'm super pumped to get back into the action!
I won't fill you in on all the stuff that's been happening in my life, but there is one super cool thing I'd love to share - I'm officially working part-time as a game dev!

Until now, I've been working as a software developer at Amdocs full-time and developing games in my spare time. Needless to say, it was a lot of work, and while it payed the bills it was also exhausting to work both weekdays and weekends.

Thankfully, Amdocs allowed me to take some time off to focus on game development for the upcoming months, so while I'll still be working at Amdocs most of the time, I'll be given some weekdays to work on games! How cool is that?

Anyways, enough talk about my boring life, it's time to get into game development!

---

I began working on a new title today - _FILL_. In this hypercasual game, your mission is to fill up the screen by creating balls in the places you touch on screen.
However, there's a catch - as you do so, hazards will be flying to and fro. You'll need to dodge them as you fill the screen, in order to not lose any lives!

Since I have so much time to work on games now, I actually managed to implement most of the game's mechanics in one day. Here's what it looks like!

![Notice how the objects in the scene interact with the light. This is possible thanks to Unity's 2D light system.](${gameplayFootage})

I still have heaps to implement, like a life system, win/lose conditions, and several levels, but I'm happy with what I have so far. I especially like the use of 2D lighting and shadows, to give it a minimalistic feel :)

Now comes the part where I ramble about some technical thingamajig that non-developers don't care about.

---

I've decided to shell out 9$ a month for Unity's Cloud Build service. I've had such a wonderful time using it for Meme Masters, that I feel like going back now is a major loss. For those of you who don't know - Cloud Build will automatically build your game for you when you push an update to your Git repository. Of course, all of this is customizable, so you can build in different ways, or trigger a build only when certain branches are committed to.

This is super time saving when it comes to mobile development. Now, instead of having to sit and wait while my computer sluggishly builds my game, I can just commit and move on. Unity will do the rest and provide me with an APK straight to my email on my phone, while I continue with actually making the game.
I cannot recommend this tool enough, and since it comes with a minimum of three seats - hit me up if you wanna use it as well for free ;)

Thanks for catching up with me. I'll see you next time!`,
  date: "Sep 2, 2020",
  readTime: "2 min read",
  image: gameplayFootage
};
