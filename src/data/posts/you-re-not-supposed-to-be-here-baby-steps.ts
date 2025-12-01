import { BlogPost } from "../blogPosts";
import image from "@/assets/you-re-not-supposed-to-be-here-baby-steps.png"

export const youreNotSupposedToBeHereBabySteps: BlogPost = {
  id: "you-re-not-supposed-to-be-here-baby-steps",
  title: "You're Not Supposed To Be Here - Baby Steps",
  excerpt: "After spending a few hours coding, planning, drawing pixel art and sketching more concept art...",
  content: `After spending a few hours coding, planning, drawing pixel art and sketching more concept art, the new game is already starting to look more like an actual game!

_You're Not Supposed To Be Here_ uses a 16 by 16 pixel area for most of its sprites. While this does limit the level of detail I can add to the art, it does allow me to practice the principles of pixelart more. After all, pixelart is the art of using the littlest amount of detail (Pixels) to convey the most amount of information. I found a very helpful tutorial (That can be found [here](https://www.youtube.com/watch?v=gW1G_FLsuEs)) to get some pointers on how to give my art that extra edge :)

Coding is always fun, but I gotta say that developing for mobile is proving to be a bit more challenging. Unity's Remote app still malfunctions a lot of the time, and building and transferring the game to the phone each time you want to try out the game is a big hassle. Perhaps I should invest in a worthy emulator, which will allow me to test my game from the comfort of my computer.

I will give the Unity team props for the Collab feature. It's a super easy-to-use source control feature that makes working from multiple computers on a single project a complete cakewalk.

A lot of the game's core elements (Movement, health, enemy motion and player interaction, stealth) already exist in the current version of the game, but it's far too clunky to be considered playable. Besides, so many other important features don't exist, that it's not something worth giving your friends to demo.

Still, I am excited with what's to come. With the sudden burst of worktime at my disposal, I daresay that it is possible this game will be finished in a month's time. Stay tuned!

![image](${image})

A snapshot from the current build. I really dig the artstyle so far! I was heavily inspired by Gunpoint, which is an awesome game and you should totally check it out!`,
  date: "Mar 20, 2019",
  readTime: "2 min read",
  image: image
};
