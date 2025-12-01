import { BlogPost } from "../blogPosts";
import image from "@/assets/vr-is-just-around-the-corner.jpg";

export const vrIsJustAroundTheCorner: BlogPost = {
  id: "vr-is-just-around-the-corner",
  title: "VR is just around the corner!",
  excerpt: "So I've started experimenting a bit with VR development, specifically for the Oculus Rift.",
  content: `So I've started experimenting a bit with VR development, specifically for the Oculus Rift. It's surprisingly easy! The Oculus Team must've worked closely with Unity, because their integration and APK is super easy to use. Seriously, with the links handy, it's possible to set up a running VR scene in 5 minutes!

I'm still trying to figure out what to do with it. I know that by releasing a game for the Oculus a total of three people max will play it, but it still seems really fun!

Don't let that fool you, though. I definitely have some ideas in store. It's more that I still need to pick up more experience before I feel ready to tackle these bigger things. Oh well.

Wish me luck!

![image](${image})`,
  date: "Feb 18, 2019",
  readTime: "1 min read",
  image: image
};
