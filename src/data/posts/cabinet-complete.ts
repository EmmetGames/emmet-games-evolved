import blogCabinetCutting1 from "@/assets/cabinet-complete/blog-cabinet-cutting1.webp";
import blogCabinetCutting2 from "@/assets/cabinet-complete/blog-cabinet-cutting2.webp";
import blogCabinetCutting3 from "@/assets/cabinet-complete/blog-cabinet-cutting3.webp";
import blogCabinetFinished1 from "@/assets/cabinet-complete/CompleteSetup1.jpg";
import blogCabinetFinished2 from "@/assets/cabinet-complete/CompleteSetup2.jpg";
import blogCabinetFinished3 from "@/assets/cabinet-complete/CompleteSetup3.jpg";
import { BlogPost } from "../blogPosts";


export const cabinetComplete: BlogPost = {
  id: "cabinet-complete",
  title: "Cabinet Complete", 
  excerpt: "TL;DR - Everything worked out and the console display works! Howdy everyone. On my last blog post I said that the next part was practicing - and indeed that's what I did.",
  content: `TL;DR - Everything worked out and the console display works!

Howdy everyone. On my last blog post I said that the next part was practicing - and indeed that's what I did.
I got some wood that closely resembled the back panel of my cabinet, some clamps to hold it in place, and a jigsaw to cut effectively.
It was definitely a good thing I practiced, because I never used a jigsaw before. Surprisingly, using a faster setting on the jigsaw ended up giving me better, less damaging cuts to the wood. That was definitely not my intuition so I'm super glad I practiced.

I had my practice run(s) of making rectangular holes for the brush grommet to sit on, then attached it with tape. After that, I tested passing a cable through it and it all worked great!
So then it was time to move on to the real thing.

I'll spare you the boring details - I spent hours measuring and cutting - but it all worked out! the cabinet was sturdier than the wood I practiced on, but that was actually beneficial as it meant it got damaged less as I made cuts.
It took way longer than expected, but in about a day I got everything placed and working.

![Cabinet cutting process](${blogCabinetCutting1})
![Cabinet cutting process](${blogCabinetCutting2})
![Cabinet cutting process](${blogCabinetCutting3})

After that, I sanded the whole thing, cleaned up and attached the grommets using tape. Easy and effective.

After this were many more hours of cable management, labelling and sticking.
I actually got extremely lucky and on the day I was working on the cabinet, all the electronics I've been waiting for arrived (the switches, the power boards, etc). It was perfect. It was like all the starts aligned and the god of gaming smiled upon me.

After that - it was complete! I put all the consoles in place, plugged them into the sockets, and tested them one by one. It took some time, but it worked perfectly!
Now I am able to play all my consoles on the same TV. On the same HDMI port. Over 40 years of gaming history available to me on one screen. It's pretty magical.

![Complete cabinet](${blogCabinetFinished1})
![Complete cabinet](${blogCabinetFinished2})
![Complete cabinet](${blogCabinetFinished3})

It's still far from perfect. For one - the controllers are still all stored in boxes, so I have to do some fiddling if I want to get the right controller.
Still, that is very minor and also exactly how I planned it. I'm honestly surprised how smoothly this project went, and I am so happy it worked out so well.
The cables are barely noticeable, which was the exact point of the brush grommets I made.

I'll use the opportunity to shout out my amazing wife for letting me cut into our new cabinet.

Anyways, that's it for this project. As things continue to settle down with the move I'll get back to making more games, but this was a definitely fun sidequest. Thanks for joining me on this silly adventure.`,
  date: "Jul 16, 2024",
  readTime: "2 min read",
  image: blogCabinetFinished1
};