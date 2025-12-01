import { BlogPost } from "../blogPosts";
import settings from "@/assets/making-it-pop/settings.png";
import mainPage from "@/assets/making-it-pop/mainPage.gif";


export const makingItPop: BlogPost = {
  id: "making-it-pop",
  title: "Making it \"Pop\"",
  excerpt: "Hey there! It's been a while since we've had a proper devlog, so let's just jump straight into it!",
  content: `Hey there! It's been a while since we've had a proper devlog, so let's just jump straight into it!

I managed to successfully connect clients over LAN to a host player. This means that people connected to the same network can play together. Neat!

I still need to think if I want to provide support for any online multiplayer option. If I do, I'll need to rethink my approach to networking on this one. However, for now, I'm fairly satisfied with LAN. I reckon that the initial release version will have just that.

Let's see... I've also added player titles. Now, players won't just be able to name themselves, but unlock different titles as they play. Some titles cost more than others, so it'll be a mark of status in a sense. Most of the titles are quite funny, though.

I mean, at least I think they are.

![image](${settings})

From this menu, the player can change their display name, and buy titles from the shop!

I've also added plenty of passive animations to the different UI elements of the game, to really make it "pop". A little motion can go a long way in emphasizing to the player where he should be looking or clicking, and what holds significance.

![image](${mainPage})

I purposely animated the join and create match buttons, as they're obviously the most important for the players to actually play the game.

Thankfully, thanks to Unity's Animator, making UI animations is as easy as pie. My only complaint is that the Animator cannot affect or trigger anything on its own, and that you'll need to use scripting for anything like that. It's quite frustrating that you can easily and without code make an animation play when you open a window, but you need to use code to make the reverse animation disable the Gameobject.

Beyond that, I spent a while fixing different bugs that popped up, because UNET just brings heaps of problems to the table. I just hope that I'm competent enough a developer to mitigate them as much as possible before launch.

And speaking of that title, as of late I find that I enjoy the game designing aspect a little more than developing. I love code, and I love to problem-solve, but sometimes it's just easier on my mind to sit back and design a game or a menu, and then try it out and say "You know what, maybe THIS would be better...".

Whatever the case is, it's good that I'm learning to enjoy the non-development aspects of the game. Just means that I have more fun during the whole process in general :)

I'm fairly close to finishing Meme Master. I need to finish up some animations, tie some knots on the code, create and manage the audio and do extensive testing to fish out all the bugs. So far, this project is turning out really well and I'm super proud of what I've done so far. I can't wait 'till all of you can play this with your friends!

Until next time :)`,
  date: "Mar 27, 2020",
  readTime: "2 min read",
  image: mainPage
};
