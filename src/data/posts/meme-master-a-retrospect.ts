import { BlogPost } from "../blogPosts";
import mainMenu from "@/assets/meme-masters-a-retrospect/mainMenu.png";
import tutorial from "@/assets/meme-masters-a-retrospect/tutorial.png";
import logo from "@/assets/meme-masters-a-retrospect/logo.webp";


export const memeMasterARetrospect: BlogPost = {
  id: "meme-master-a-retrospect",
  title: "Meme Master: A Retrospect",
  excerpt: "Fair warning - most of this blog post is going to be about looking back at the journey of Meme Masters and a retrospect on how well it...",
  content: `Fair warning - most of this blog post is going to be about looking back at the journey of _Meme Masters_ and a retrospect on how well it did. But before I get into all that, let's cover what's new!

I added three new features to Meme Masters (update hasn't come out yet though).

The biggest one is random online matchmaking, called 'Quick play'. In this mode, you don't join room codes, but rather _Meme Masters_ assigns you to existing public matches, so you can play with strangers online.
In concept, at least. For that to happen, this game will need a player base, which it still sorely lacks.

![image](${mainMenu})

I also added a more in-depth tutorial to the game upon the first boot, because I saw some people were having trouble understanding how to play the game or where all the menus are.

![image](${tutorial})

Lastly, I changed the way the game handles the memes in terms of memory - Instead of them being part of the game's assets, it will download them when the game initially opens, and load them from the local files from then on.
This change decreases the size of the initial download by over 60%, and more importantly is a crucial step towards adding custom memes/ meme DLCs for later on.

I will likely release these features (and more) in a future update very soon. Stay tuned!

Now, let's get to the retrospective.

---

_Meme Masters_ was my first completely online multiplayer game (the first one I finished, anyway). I spent 5 months actively working on it between workdays and on weekends.
It was the game I invested the most money into, buying Unity Plus so I may use Unity's UNet solution, plus additional matchmaking server and meme image hosting costs based on traffic.

Meme Masters has been out for a little over a month now, and exactly 31 people downloaded the game, with the vast majority of them being Israelis. I had not made a single cent off ads since the game came out.

I set out with the goal to make a game my friends will enjoy playing with one another during parties, and I'm happy to say that much has happened. It feels me with pride and happiness that people I care about are drawing enjoyment and laughter out of a game I made.
I also picked up some experience while developing the game. Unfortunately, the thing I learned the most was UNet, which is a terrible networking solution that I hope I will never have to use again. Because of this, this is knowledge that will likely not help me down the line.
That being said, it's clear that I'm getting better at making games. The game was a lot more polished than a lot of my previous titles, and I developed it in a far shorter time than most of my games. I'm happy to see that with determination and grit I can improve.

However, commercially, this game is a failure by all accounts. I'm currently at a loss of about 300$ on the game. A big part of this is disasterous marketing on my part. Please allow me to elaborate:

I wanted _Meme Masters_ to be my first commercially viable game, so I made a very big effort to step out of my comfort zone and share it with the world, sometimes forcefully. I spammed all my relevant Whatsapp contacts, posted on my Facebook wall, and most importantly - shared the game over numerous Facebook groups, subreddits, and game-related forums.
Despite all this, very very few people saw my posts, and those that did gave it no more than a glance. I got a couple of replies on them saying things along the lines of "The game is really outdated, the memes are too old" or "I might play this just for the sake of the nostalgic memes". That's when it hit me - nobody actually played the game, and were leaving reviews based on the poster I made for the game.

![image](${logo})

This is silly, of course, but it pointed to two major revelations on my behalf:
1.  Without a video trailer, nobody would look at my game because everyone's so desensitized by constant ads that I need to make my ad "pop" in order to draw attention. 
2.  Because my game was an online-only game, and because I only posted an image and some text, nobody actually could _feel_ what the game was like, which is a huge drawback.  

I thought that advertising my game on several pages would be enough. I was wrong. As far as I am aware, I did not cause a single person to download my game through all my marketing.
I will be making a gameplay trailer and I will try advertising it again in the future, perhaps then things will be different.

I'm not going to lie. It was very disheartening to see strangers online review my game based on the cover-art alone and not even try it. I really believed this game could blow up, and perhaps set my expectations too high.

That being said, I did achieve the goals I set out to meet at the beginning of the project, so perhaps it is simply my own hubris that made this feel so bitter-sweet.

Those who are reading this, don't make the mistakes I did. Choose technologies based on ease of use and not by proprietary convenience. Spend a real chunk of time on marketing your game with a good looking trailer. These things will make or break your game.

That's all for today. See you around :)`,
  date: "Jul 10, 2020",
  readTime: "4 min read",
  image: mainMenu
};
