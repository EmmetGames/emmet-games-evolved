import image from "@/assets/anotherOneDown.avif";
import { BlogPost } from "../blogPosts";

export const anotherOneDown: BlogPost = {
  id: "another-one-down",
  title: "Another One Down",
  excerpt: "Reflecting on completing another game project and the lessons learned along the way.",
  content: `Howdy folks. Hope you've been doing well.

Game's Done
-----------

Things have been going pretty well on my end. I've just finished making the first fully playable version of the digital board game I've been working on. While it has been a relatively smaller project, I'm still really glad I made it because I've learned a lot on the way.
It's pretty surreal to be at this point again, where I've completed another game but can't release it to the public because of one reason or another. This is the third game project in a row that's pretty much only been released for friends and family.

Even though I was the only person working on this game and nobody was really expecting it, I still felt a lot of pressure to make it good and make it quick. I'm pretty much the only person who put that pressure on myself, and as a result I did get to the end of its development cycle pretty tired.
A lot of this has to do with my priorities and my time management. Basically, I don't really let myself truly rest until I get a project done. It's hard for myself to justify and prioritize self-care when I know there's a game I'm working on.

It's really silly. It's self destructive. And yet - it holds me accountable to the games I make and hopefully results in good games. I think a lot of it comes from the fear of seeming like a 'quitter'. I think I fear posting about stuff online and then not pulling through, because I think people would judge me for it. In truth, I don't think people would care that much what I choose to do or not do in my free time. Moreover, I think they would just be happy to get a fun small little game once in a while, but it won't be the end of the world for them if I slow down development or go on a hiatus for a while.

Maybe that should be my goal for future projects - try and take my time with them. Not feel committed to work on them when I don't want to. Be transparent about it and unapologetic about how I spend my free time. Maybe.

Anyways, enough about that. For those who are a little more tech-savvy, here are some technical notes and tips I've accumulated throughout the development of the board game:

Tech Ramblings About Unisave
----------------------------

Using Unisave has been really fun for this project. It took a little time to re-adjust to, but once I did I was able to develop and deploy net-code for my game super quick.
I ended up using [Unisave's broadcast](https://unisave.cloud/docs/broadcasting) system for the bulk of my game's networking, simply because it allowed for a really easy to setup way for one user's actions to show up on another user's machine.

In my game I ended up moving a lot of the processing from the server to the client. Obviously this is not secure, but I did it to save on running costs - I was barely able to scrape by Unisave's free tier by doing this.
Unisave's API was really easy to use for all of this. However, there are a few gripes I've had with it and some notes I'd like to share:

### Simplistic Classes

While the server receives C# code written in Unity and can therefore in theory take an instance of a class that's created on the client, then send it as-is across the network to a different client, it has limitations.
I found that basically all of the 'model classes' needed to be simple classes with public variables. No properties, no inheritance. In other words, we're dropping a lot of the best practices of OOO when utilizing models that travel through the server.
This isn't the end of the world - I ended up creating DTO (data transfer object) classes which had the sole purpose of representing data as they travelled from client to server and client again. Still, this meant that I essentially had to recreate heaps of classes to have a DTO version that is used solely for transferring data around the network, and a standard model class with all the bells and whistles to represent the same information while adhering to C# and Unity best-practices.

### Server Parsing Errors

If the server hits an exception while receiving your code, you will have to go to the Unisave dashboard to view it. You won't see any specific error pop up in your editor. This, again, is not the end of the world, but it does mean that sometimes you will need to have the foresight to check the dashboard console when you hits strange bugs.

### Disconnection from broadcasts

There is no API at the moment to disconnect from a broadcast channel. I don't think it's awful, but it does feel missing.

<br />
Anyways, thanks for checking in on me. I've told myself I'll be taking a break for the time being, but I'm truly itching to start something new. I'll do my best to hold off because I know I need my time to rest.
Until next time!`,
  date: "Feb 11, 2024",
  readTime: "4 min read",
  image: image
};