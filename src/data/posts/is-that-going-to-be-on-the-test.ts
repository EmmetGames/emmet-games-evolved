import { BlogPost } from "../blogPosts";
import monkey from "@/assets/is-that-going-to-be-on-the-test/monkey.gif";
import tasks from "@/assets/is-that-going-to-be-on-the-test/tasks.webp";

export const isThatGoingToBeOnTheTest: BlogPost = {
  id: "is-that-going-to-be-on-the-test",
  title: "Is that going to be on the test?",
  excerpt: "Hey everyone. It's been a busy week, so let's jump into it!",
  content: `Hey everyone. It's been a busy week, so let's jump into it!

I don't have much to show for the past week, but much has been done. I focused my attention on fixing bugs and optimizing and polishing the game. I simulated extensive QA testing on dozens of builds, and managed to weed out many of the more hidden bugs of my game. At its current state, this game is polished to the brim and completely playable.

...However, this did leave me in the sorry state of sending out a public beta that nobody would be able to play. After all, with the limitations of the quarantine, practically nobody would be able to play (or enjoy) this beta.

Which is why I mustered my strength, and went back to tackle the networking. I was going to make this game (drumroll) - online multiplayer!

That's right, folks. You heard it here first. Meme Masters is transitioning from LAN multiplayer to online multiplayer.

![monkey](${monkey})

While in concept it would have been far more complex than the local multiplayer I already had, it turned out to be very easy. I simply overrode and used UNet's matchmaking scripts.
For reals. Less than 2 hours of work and I managed to completely transition the game from LAN to WAN, and it would have been 30 minutes if I actually knew what I was doing.
I gotta hand it to Unity and the UNet team - As backwards as learning UNet is, once you do learn it the transition from local multiplayer to online multiplayer is practically seamless.

The game's actually better now that it's online multiplayer. The room codes are no longer based on the local player's IP, so now they're far shorter (random 4-letter code) and easier to write.  

Also, most importantly, now this game could be played by my friends during these depressing, isolated times! Because of server limitations, this does mean that for now there will only be a closed beta of the game, but supporting any lobby beyond one will require me to start paying Unity for traffic.

Speaking of, their costs are actually very reasonable. Currently, UNet charges you 0.5$ per giga-byte of data you pass through their matchmaking service. In my case, this means I'll be paying less than a Netflix subscription for maintaining this game for 500 players simultaneously. Pretty cool!
Do take this advice with a grain of salt - UNet's mid-deprecation and hard to learn. I do suggest you look elsewhere for your networking solution on future endeavours.

So that's basically it. I made the game online, in an effort to help spread joy and laughter during these times, and I'll continue to polish it from here on out, thanks to the feedback from the closed beta.

I hope to be able to release relatively soon. This time, I'll try to release for both iOS and Android.

For a sneak preview of what I have planned, see what you can spot ;)

![tasks](${tasks})

I normally work with a digital notepad to track my missions, but because they differ in BOTH category and priority I decided that a physical organization would be better.

That's it for now. Catch you soon, and thanks to those who will participate in the closed beta!`,
  date: "Apr 18, 2020",
  readTime: "2 min read",
  image: monkey
};
