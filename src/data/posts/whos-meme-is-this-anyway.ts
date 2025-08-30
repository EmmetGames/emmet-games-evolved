import { BlogPost } from "../blogPosts";
import cat from "@/assets/whos-meme-is-this-anyway/cat.jpg";
import vote from "@/assets/whos-meme-is-this-anyway/meme.png";
import topBar from "@/assets/whos-meme-is-this-anyway/ui.png";
import results from "@/assets/whos-meme-is-this-anyway/vote.png";

export const whosMemeIsThisAnyway: BlogPost = {
  id: "whos-meme-is-this-anyway",
  title: "Who's meme is this, anyway?",
  excerpt: "Well. It's certainly been a while since my last blog post. I apologize for the radio silence, but I can assure you that I've been very...",
  content: `_Well._
It's certainly been a while since my last blog post. I apologize for the radio silence, but I can assure you that I've been very hard at work on _Meme Masters_. In fact, I'm happy to say that version 1.1 is ready!

But what does that mean, exactly? What about the beta? And the Online Multiplayer bugs? And your beautiful hair?

Well, let's address things one at a time, shall we?

**The Beta**

Since the last time of writing, I've held two beta sessions with some playtesters (who may or may not be the readers of this very blog). Both times went very well, and the game ran relatively smoothly and without a hitch!
I got very useful feedback from my players, which I worked into my task and missions in order to create version 1.1. If the original version of Meme Masters beta (1.0) was the first truly playable version of the game, then version 1.1 would be its flashier and improved younger brother.

![cat](${cat})

In truth, I was honestly humbled by how well the game was received during the beta. Players went on to talk about _Meme Masters_ and play it even outside the beta events. What's more, they seemed to have a blast doing it! If you remember during [my first blog post about this game](https://www.emmetgames.com/post/that-moment-when-you-dev-a-game) (back in October of 2019, holy cow), my main goal with this game was to make a game which my friends could play at parties.
My dream since then has been realized, and more than once. That's a big check on Meme Masters! Thank you guys so much for the support and praise!

I'm far from over with the game, though. I still have lots of improvements I want to add, and I don't want to leave my iOS friends in the dust. From here I'll work on improving the core game, adding more features, and releasing it properly.

**The Online Multiplayer**

Surprisingly, the Online Multiplayer of the game has been relatively bug-free from the moment I reworked my code to be more efficient. I had no mid-match crashes since then, and everything worked as intended...

Alas, nothing could last forever in Online Multiplayer land. Now that my game's mostly up and running, I've been looking into different options for relay servers, and it's going to be a very expensive endeavor.
Remember how I discussed UNet's Live Play features which allows you to pay for your game's relay server based on how much traffic is passing through it? Well, turns out you need to be a Unity Plus member just to be able to use for that feature. This means I'll need to sink in 40$ a month just in order to be able to pay for the relay server services. Yikes.
That's a big cost for a game that'll likely net no profits. Because of that, I've been looking for another way to get my game running.

After searching, I found an alternative that won't require me to rewrite my entire game's code - There's a Swedish game dev (who's younger than me!) called TwoTen who developed a standalone relay server that could be run on Unix servers. This tool is called the [MLAPI Relay](https://forum.unity.com/threads/standalone-unet-relay-mlapi-relay.535970/).
This tool is completely open-source and free to use, which is incredible. Absolute cudos to TwoTen. I talked with him over the Unity Forums and he's a total boss.
Sadly, I found it too difficult to set up the Relay server and get MLAPI to run on it, so I think I'll end up paying for Unity Plus. Oh well.

**The Hair**

Facial hair game still going strong, but I'll need to look into hair resilience products if I want to keep the mane on top of my head. The stress from work and life has been making me shed :)

**So What's New in Meme Masters?**

Very good that I remembered to talk about the new features, 600 words into my _dev log post_.

The new features included in Meme Masters include:

*   **Overhaul to the meme voting screen**
    

![vote](${vote})

I changed the way the second stage (voting for your favourite meme) looks. Now, instead of showing a vertically-scrollable list of all the memes created, you can swipe between them horizontally, like viewing a gallery.
I went with this design because it's intuitive for mobile users, and also gives users to focus more on each individual meme.

*   **Overhaul to the top bar during the match**
    
![topbar](${topBar})

I completely revamped the top bar, so it will no longer show the game's logo, a settings button and a player list button. It kept the settings button, but everything else has changed.
Now, the leaderboard _is_ the top bar! It's automatically programmed to show the top 3 players in terms of ranking in the match, as well as your player and position. That way, it's very evident who is winning and who is playing.
The icons are fairly intuitive and look pretty stylish, in my opinion. Clicking on them shows the player's full name!

*   **Overhaul to the round ending stage**
    
![results](${results})

There's still some stuff I need to fix with the 'who voted for who' code. Obviously, only the players who aren't the winner should appear in the bottom panel.
The end of the round used to be relatively... underwhelming. See who won, and click on a meme for the next stage. That's it.
I've decided to cut this into two smaller stages instead. The first shows the winning meme, and then who voted for who, as well as animating the leaderboard with points and positions. This was done to emphasize the players who won and how well-received their memes were, as well as to draw attention to the scoreboard all the time.
The second part is very similar to what people have seen before - just allowing people to vote for their next meme

*   **Other small fixes**
    
Beyond all of these, I added a bunch of smaller features and tweaks, such as adding the round number at the start of every round, fixing some sounds, adding music to the game, and more. It's really improved over time :)

That's it for Meme Masters for the time being. Next on the agenda is to get the Relay server the game deserves, and from then on get ready to release version 1.1 as an open Beta as I work on version 1.2. Stay tuned!`,
  date: "May 26, 2020",
  readTime: "4 min read",
  image: vote
};
