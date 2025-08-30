import { BlogPost } from "../blogPosts";
import firstHalf from "@/assets/the-trials-and-tribulations-of-online-multiplayer/firstHalf.png";
import cryingBatman from "@/assets/the-trials-and-tribulations-of-online-multiplayer/cryingBatman.gif";

export const theTrialsAndTribulationsOfOnlineMultiplayer: BlogPost = {
  id: "the-trials-and-tribulations-of-online-multiplayer",
  title: "The Trials and Tribulations of Online Multiplayer",
  excerpt: "So, remember how last post I claimed that I successfully turned the game Meme Masters into an online multiplayer game? Turns out that I...",
  content: `So, remember how last post I claimed that I successfully turned the game Meme Masters into an online multiplayer game?

![firstHalf](${firstHalf})

Turns out that I wasn't as "finished" with the online aspect of the game as I originally thought. While everything worked just fine in local testing, the private beta went... far less well than anticipated. The matches continuously crashed for everyone, and they weren't able to get more than a single round into the match. Not once.
Suffice to say, it was very embarrassing, especially due to the incredible amount of time I put into testing the game. I wasted everyone's time on an unfinished game.

What followed was me depressingly trying to fix the online multiplayer bugs for the past week. It was extremely difficult as the server would randomly crash without warning, and the error logs would not provide any indicative info as to why. I was at a total loss, and the internet was not able to provide a certain answer.

![cryingBatman](${cryingBatman})

This was me realizing that I was alone since nobody on the internet uses Unet anymore

However, I continued to try hard and thanks to the continuous support of my friends and my wonderful partner, I eventually pulled through and fixed the errors.

How did I fix it, you ask?

**NOTE**: From this point on, this blog post is going to get far more technical and in-depth than my usual writing, but I feel that in this case it's appropriate as the info I have is going to be very useful for those who need it.

Before we can understand how I fixed my issue, it's important to understand UNet more.
Basically, UNet is divided into two versions - HLAPI and LLAPI. The high-level API and the low-level API. The high level API is what people usually refer to when they talk about UNet, it's all the UNet components that handle matches for you, the matchmaking, and so on.
The low-level API is what the high-level API is based on, it's the UNet code and infrastructure for Transport-level communications.
HLAPI is far easier to use and integrate, but LLAPI gives more control and customization options. It's basically difficulty vs. freedom.
I was using HLAPI for my game, as it's the out-of-the-box version of UNet, and it works really well for most games. Switching between the two, especially mid-development, is quite difficult, which was why I was trying to avoid it at all costs.

Anyway, I digress. When my game was a LAN game, it worked perfectly, and it also worked great with small numbers of players during testing when I made it an internet game. So what caused the bug?
Turns out UNet's matchmaking service comes at a high, invisible price - it has a bitrate limit.
Regardless of the speeds of information, the devices playing the game can transport, HLAPI has a fixed, hidden cap on how many bits can be transmitted per second to and from a client. This explains why the game may crash, but why unexpectedly? Why would the game randomly have too much info transferred at once, and not instantly when the game begins?

Turns out the answer was that under certain circumstances, UNet would sometimes send double the data in a packet. Specifically, when it failed to send the previous packet.
So that's what caused the issue. Due to networking issues, UNet would fail to send a packet, and then in the next packet try to send the original data AS WELL as the new. This was double the size, which was too much traffic, and thus caused the server to crash.

I managed to fix this issue by playing around with the configuration of the NetworkManager. By making it transfer its info over more packets, each packet would naturally contain less bits, so even during a retransmit there would be no risk of bit overload. Problem solved, right?

Not quite. Unfortunately, this caused a different issue. The server was still crashing, but this time due to a full event pool. Took me a while to understand that this was Unity-speak for 'too many packets being sent to the clients to handle'.
At first, I tried to configure the NetworkManager some more to fix this issue, but this proved fruitless as the NetworkManager of HLAPI is too limited.

Turns out the solution was just to go back to my code and overhaul much of how the networking was done. I had to go over my code and make sure that under no circumstances I send packets every frame, in the Update() function. I had to make sure I only transfer data when I absolutely have to, and interpolate information locally from that point on.

This is what fixed the game eventually. Not any precise or special networking configuration, just making my game's code better, more efficient. Sending as little packets as possible, not through configuration but by design.

Anyways, now I'm happy to say that my game's Online Multiplayer works as planned, finally. I successfully tested 10 simultaneous players, with extra disruption to simulate online networking issues. I'll carry on from here to the rest of the features I wanted to implement, and hopefully, the game will be in your hands not too long from now.
Thanks for all the support from everyone, I wouldn't have made it so far without you.

Anyways, see you next time!`,
  date: "Apr 25, 2020",
  readTime: "4 min read",
  image: firstHalf
};
