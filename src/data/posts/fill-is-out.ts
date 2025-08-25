import logo from "@/assets/blogIcon.jpg";
import blogFillGooglePlay from "@/assets/blog-fill-google-play.png";
import heart from "@/assets/heart.webp";
import { BlogPost } from "../blogPosts";

export const fillIsOut: BlogPost = {
  id: "fill-is-out",
  title: "Fill is Out!",
  excerpt: "The official release of Fill is here! Learn about the development journey and what players can expect from this puzzle adventure.",
  content: `
<iframe
  src="https://www.youtube.com/embed/vgAwpwfFM3w?si=1WQ1cC-zRJe2HGAD"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy"
></iframe>

Hey there, Emmet here, and welcome to another dev vlog. Sorry for the radio silence over the past 2 months – life has been pretty hectic and I was too caught up with the development of FILL to actually write about it. It might not look like it, but making these vlog posts actually takes quite a bit of time, and since I want to really devote to game development the time and energy it deserves, I’ve decided to scale back the frequency of vlogs in general.
As for FILL, I am very happy and proud to say that it’s complete. I’ve made the game, and it is now available to download for free on the Google Play Store. Please give it a try and let me know what you think.

![Image](${blogFillGooglePlay})
https://play.google.com/store/apps/details?id=com.EmmetGames.FILL


What’s really great is that I’ve had the time to refine it and even add a couple of fun extra modes like Endless mode which tests the limits of your ability and Zen Mode for when you want to sit back and relax a little.
Honestly, since I’ve added so many things to the game, it’s difficult to know where to start, but I’ll try and recap some of the things which I found more interesting.

**Ad Mediation**

Last time I vlogged I talked about how I’ll be implementing Ad Mediation in my game, and a bit about its strengths and drawbacks. Now that I’m past implementing it, I’d love to share my two cents on the matter:
Ad Mediation is good, but it is not for everyone. In comparison to just integrating with an Ad Network’s SDK, it requires WAY more work. It took me about a week or two of 9-hour workdays to set up ad mediation correctly in my game. For each ad network, you need to make an account, define and create all the ads you’ll want in your game, configure things like payment details, then download the SDK, add integration logic in your code, and then also integrate in your mediation console.
Objectively, it performs better than a single ad network. You have more ad sources and you get better prices, but you really need to think twice if this is the right step for you. For me I believe it was, but it’s not the ultimate solution I originally thought it to be.

**Drag N’ Release Controls**

In the end, I’ve integrated a new optional control scheme into my game – Drag N’ Release controls, where instead of holding down your finger on the screen to let the shape grow over time, you drag your finger across the screen to stretch or shrink your shape, and release it to create it.
I’ve added this control scheme because I came to learn that some testers were struggling with their fingers covering the shape they were creating. This wasn’t an issue for most players, but I didn’t want to alienate dozens of potential players when the solution was relatively simple.
You may remember that I’ve worked on this control scheme way back and eventually decided to drop it. I’m really glad I did, though, because implementing it this time was much easier. Just goes to show that you’ll never know if and when your previous work will become relevant again.

**Leaderboards**

I’ve ended up implementing online leaderboards per level in my game. While in concept this is a small and novel idea, this actually ended up being the thing I spent the most time on in this game’s development. Crazy, I know.
The complexity came from two main factors – security, and the project’s packages.
The game’s leaderboard operations had to be secure, and this was clear from the start. If they weren’t this would allow hackers to post their data to my user’s devices, which was something I really wanted to avoid at all costs. Because of this, I had to pursue a solution that handled authentication, but could also do so using a Google Play Services account (as we were using this anyway for achievements in the game).
The game uses many packages, most of them because of mediation. This caused an issue because when being compiled to the APK format, all the Java classes couldn’t fit into a single Dex file. This meant that I had to use many inefficient and problematic methods to try and fit all those classes together, from using Proguard and Minify, to using custom multidex configurations. This was an issue because the most common and straightforward ways to implement and use most database solutions in a Unity project were to add its SDK to the game.
I’ll spare you from all the trials and tribulations, but the solution I used in the end was Google’s Firebase, and in particular their realtime database platform. After integrating their SDK into my game, I was able to quite easily send and retrieve data from the database in a secured and monitored manner.

**Endless & Zen modes**

These modes were always stretch goals for me, but I never thought I’d actually get to make them. They both took surprisingly little time to make (maybe 2-3 days for each mode), and this is in great part to the software design I’ve used while creating my game, as well as the similarities they shared with many of the existing mechanics in the game. I didn’t have to re-invent the wheel for everything, and it really boosted my development speed.
This makes me think that perhaps I should try and develop some standard libraries and packages for myself, so I’ll be able to jumpstart my development whenever I start working on a new project.

<br /><br />

Sorry for rambling on for so long, and thank you so much for bearing with me. I have some good news and some bad news.
The good news are that I’ll be starting work soon as a full-time Unity game developer! I’ll be joining an existing studio here in Israel, but for now I’ll keep it anonymous. The studio looks very cool, and I was really impressed with their games, which I genuinely enjoyed playing. I’m really happy that I’ll be able to do this full-time now, and use the skills which I’ve learned to make games for people to play.
The bad news are that because I’ll be moving on to developing games full time, I won’t really have time for my indie projects anymore, at least not in the foreseeable future. This means that for now I’ll be putting EmmetGames on hiatus, as I focus on my professional career in this new studio.
I’d like to thank you for joining me on the ride so far, and hopefully it won’t be long before I have time again to continue making games by myself.
That’s it for now. Thanks, and have a good one.

![Image](${heart})`,
  date: "Jan 29, 2021",
  readTime: "5 min read",
  image: logo
};