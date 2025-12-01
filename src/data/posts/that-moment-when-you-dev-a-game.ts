import { BlogPost } from "../blogPosts";
import image from "@/assets/that-moment-when-you-dev-a-game.jpg";

export const thatMomentWhenYouDevAGame: BlogPost = {
  id: "that-moment-when-you-dev-a-game",
  title: "That Moment When You Dev A Game",
  excerpt: "Howdy there! I'm glad to say I started work on a new game. This is also going to be a mobile game, but unlike _You're Not Supposed To Be Here_...",
  content: `Howdy there! I'm glad to say I started work on a new game.

This is also going to be a mobile game, but unlike _You're Not Supposed To Be Here_, which only had some online aspects, my new game is going to be 100% multiplayer!

The goal of this game is simple - I want to make a game which my friends can play at a party. A party game, if you will.

My friends are big fans of memes, as am I. Because of this, this game will revolve all around memes, and it even has a name - _Meme Masters_!

Those more keen of you will see this name is a rehash of my previously abandoned project, _Swipe Master_, but this time the name fits better in my opinion.

![image](${image})

So I already have a pretty good idea of how I want the gameplay to work. Basically, it'll be very similar to Jackbox's Quiplash, with the difference being that it revolves around memes. Each round, a meme image is presented, all players in the match propose a funny caption for the meme, and then they vote on who was funniest! It's a simple concept, but I think it can really work.

I've decided to go with UNET for this game's networking aspects. While it is infamously underwhelming (Which is why Unity is working on a new networking system as of time of writing), at least it's proprietary unlike Photon and other options. Moreover, it has a lot of control for what you wish to make in terms of networking topology.

UNET has pretty awful tutorials online, even including Unity's own tutorials. At least [its documentation](https://docs.unity3d.com/Manual/UNet.html) isn't awful, and [this specific tutorial series on Youtube by Quill](https://www.youtube.com/watch?v=cQ0f1_Ct9lc), while longer than it should be, is very clear and helpful for all sorts of things you can do with UNET.

Beyond the networking aspect, the game is very simple both mechanically and graphically. Because of this, I anticipate that I'll finish the game's logic and UI with relative ease.

I still expect a lot of challenges regarding networking, but that's part of the fun, right?

Stay tuned!`,
  date: "Oct 3, 2019",
  readTime: "2 min read",
  image: image
};
