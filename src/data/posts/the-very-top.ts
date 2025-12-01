import { BlogPost } from "../blogPosts";
import image from "@/assets/theVeryTop.png";

export const theVeryTop: BlogPost = {
  id: "the-very-top",
  title: "The Very Top",
  excerpt: "Hey there! First of all, I'd like to thank you all for playing and sharing the open beta of this game.",
  content: `Hey there!

First of all, I'd like to thank you all for playing and sharing the open beta of this game. I never thought so many people would take their time to play through, but I'm really glad they did!

Your voice has been heard (Anonymously, of course) through the feedback form some of you filled up. Your review and feedback has been most constructive and helpful. Thank you so much!

I was really happy to see most of you found the game fun (Even addicting at times), and that you enjoyed the game's mechanics and visuals. Of course, there was lots you guys wanted me to add, so I'm happy to oblige!

First thing's first - **The Camera**

A lot of you disliked how the camera moved, zoomed in and out, and overall made playing the game harder. After some tweaking, I overhauled the camera so it will no longer zoom in and out. Instead, it will keep the player mostly in the central area of the screen, and it will gracefully pan in the direction the player is heading, so upcoming targets (Or hazards) can be seen from a distance.

This was super easy to do, thanks to Unity's very own _Cinemachine_ package, that allows to very easily and effectively make 2D tracking that's pretty.

![image](${image})

I'll probably change how this looks in the release version, but this is more or less the structure it'll have :)

Another thing that some of you wanted and is now in the game are **Leaderboards**!

Now your highscore will be saved on your device, and also appear in the global leaderboards! If you're in the top 10, everyone playing the game will be able to see how well you did!

This was done using the amazing _Dreamlo_ tool developed by [Carmine Guida](https://carmine.com/), an American professor of Game Design and all in all great dude.

I'll be fixing some of the bugs you may have encountered over the next few days, as well as start working on an in-game shop so you can customize your character!

Stay tuned!`,
  date: "Jun 18, 2019",
  readTime: "2 min read",
  image: image
};
