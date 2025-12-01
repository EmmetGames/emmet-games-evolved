import { BlogPost } from "../blogPosts";
import mainMenu from "@/assets/networking-shenanigans/mainMenu.png";
import tutorial from "@/assets/networking-shenanigans/tutorial.png";
import youDontSay from "@/assets/networking-shenanigans/youDontSay.jpg";

export const networkingShenanigans: BlogPost = {
  id: "networking-shenanigans",
  title: "Networking Shenanigans",
  excerpt: "Who would've thought that the use of a nearly-depracated, badly-documented networking system could pose trouble? I sure didn't. I...",
  content: `Who would've thought that the use of a nearly-depracated, badly-documented networking system could pose trouble? I sure didn't.

![image](${youDontSay})

An oldie, but a goodie.

I finished coding and designing the core game, networking and all. Once you get the hang of UNet's syntax, it doesn't get very hard.

I did have some issues regarding timeouts. As in, as the game would run, it would occasionally timeout and disconnect, as a result of too much networking traffic on the device. The way I got around to fixing this, is instead of calling updates every update, I call a coroutine which triggers every second.

Of course, this makes the network data updates trigger far less often than beforehand. However, for a text-based game such as my own, it's perfect.

I also got to work on the UI and designing the title screen. It's not the end result, not by a long-shot, but I'm fairly happy with how it looks.

![image](${mainMenu})

I still need to add a button/window/tab for editing the user's account (Display name, title, etc). Any advice in the comments would be greatly appreciated :)

I've also incorporated this cool blur background to each settings panel I've made. It uses a basic shader script which I've found online. One day, I'll know shaders well enough to create a shader like that on my own.

![image](${tutorial})

The blur effect in the background really adds to the focus of the panel itself, as well as make the window feel more 'dynamic'

As I've said, I'm facing networking issues now when it comes to making my game 'online'.

I'm able to create a server, as well as connect to it locally (Meaning, when I run builds of the game on my computer, I am able to connect them). However, connecting people online through the internet is a whole other thing. It requires discovery and sharing of public IP addresses and ports, as well as NAT punchthrough to properly handle things like the Firewall of the different devices you're trying to connect.

In long story short - it's a hassle.

Thankfully, that's not what I'm trying to achieve. I still need to test this out, but I am fairly certain I am able to connect devices through LAN, meaning if I have devices on the same network/wi-fi, they should still be able to connect through my code.

This is perfect for me, because I want my game to be played by people locally, with one another.

So I guess I'll update next time if that worked or not.

However, it's important to address the elephant in the room - Unet's matchmaking.

UNet has a built-in matchmaker which easily does all the stuff necessary for online connecting. It's really easy!

Problem is, when running the match like this, Unity charges you money for all the server and traffic. A lot of money, actually. So beware! Online games may be easy to setup with UNet like this, but unless you're willing to do heaps of learning and setting up on your own, you're going to need to pay a whole lot.

That's it for now. Hopefully by next update I'll have a more solid grasp on this whole networking thing in my game. Until then, stay tuned!`,
  date: "Oct 19, 2019",
  readTime: "2 min read",
  image: youDontSay
};
