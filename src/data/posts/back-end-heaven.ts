import image from "@/assets/backendHeaven.jpg";
import { BlogPost } from "../blogPosts";

export const backEndHeaven: BlogPost = {
  id: "back-end-heaven",
  title: "Back-End Heaven",
  excerpt: "Diving deep into server architecture and database optimization for games with a focus on scalability and performance.",
  content: `Hi everyone. I don't have much new info to share about my games, so in the meantime let me leave you with some highly recommended advice regarding your game's back-end. Note this will be relatively technical, so I'm sorry in advance if this blog post's too boring :)

My upcoming game, Pyramid Scheme, has some multiplayer elements. I needed a database to keep all of my users, but more importantly - I also wanted to perform some basic operations on the entries of all existing users whenever a new user entered the database.

This is a fairly standard operation, and there are many existing solutions which can help you deal with this.
One such example is Google's [Firebase Cloud Functions](https://firebase.google.com/docs/functions), which are a serverless solution for performing operations whenever certain interactions are performed with our Firebase database.
Unfortunately, this solution has a couple of issues which stopped me from using it:

1.  It requires a fairly extensive setup in order to be able to write and deploy your logic    
2.  It requires a paying account (Spark plan) in order to use
3.  It seems to be fairly buggy (I was unable to successfully complete the tutorial)
4.  There is very little documentation and dialogue about this solution
    

I looked elsewhere, at the familiar world of AWS. However, I also didn't want to go for that because it requires even more setup, and it would also cost me money.

I looked high and low for a server solution I could use, until I found the one.
My friends, it is my absolute privilege to introduce you to [Unisave](https://assetstore.unity.com/packages/tools/network/unisave-backend-server-142705).

Unisave is a free & super easy to use backend solution for Unity.
Its advantages include:

*   Write your server logic FROM INSIDE UNITY
*   Write your server logic IN C#
*   Work directly with classes instead of converting from one language to another and interfacing everything
*   Very simple setup, almost no requirements
*   Robust and clear documentation with examples for standard use cases
*   Friendly dev who will help when needed
*   Free to use (beyond a certain point of traffic)
    
UniSave is an absolute Godsend of a technology. It allows developers like me who are more client-side oriented to set up basic server-sides from inside the Unity engine within a few hours. Its only disadvantage is that it does not do real-time, but for anything else you need (player database, leaderboards, chat system, etc), this is an amazing technology and without a doubt what I will be using from now on.
It is developed by this super talented guy, and he's always around on Discord if you need any help.

That's it, really. I strongly suggest checking it out and using it in your projects. I can tell you that I did and it really is as simple as it looks.`,
  date: "May 28, 2024",
  readTime: "2 min read",
  image: image
};