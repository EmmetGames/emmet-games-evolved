import { BlogPost } from "../blogPosts";
import image from "@/assets/la-ola-a-retrospective.png";
import gameplay from "@/assets/la_ola_gameplay.png";

export const laOlaARetrospective: BlogPost = {
  id: "la-ola-a-retrospective",
  title: "La Ola - A Retrospective",
  excerpt: "Hi everyone. This week my friends and I have released the game _La Ola_ as our submittion for the _Game Off 2025_ jam.",
  content: `Hi everyone. This week my friends and I have released the game _La Ola_ as our submittion for the _Game Off 2025_ jam.

## La Ola

![image](${image})

You can play it [here](https://quietlantern.itch.io/la-ola).

This jam, which celebrates open source, has been going for over 10 years but it was my first time. I'm personally fascinated with the concept of FOSS (free and open-source) software and am a fan of it wherever it exists, so it was cool to be part of a project that champions it.

However, before we talk more about this specific jam, I want to tell you about my general experiences with game jams.

I like game jams and I've participated in a couple of them over the years. In fact, some of you may know that I even hosted a game jam a couple of years ago in memory of a friend of mine.
I think game jams are a wonderful opportunity to learn new things, flex game creation muscles that we don't tend to and collaborate with others. That being said, like all hackathon-type events they're a fairly significant investment of time and energy.
I found that it was hard for me to justify participating in game jams considering my already busy schedule and obligations - sacrificing an entire weekend to a project like this, while fun, is very costly.
Thankfully, there are game jams like _Game Off_ which are very **long**, meaning that I can give a bit of time over a long period and while I'll end up with a smaller game than others, I still get to reap the benefits of this workflow.
On the other side of things, there are very **short** game jams like _Vimjam_ where you only have a few hours to make a game, and that introduces a bunch of other challenges.

In any case, I was pretty hesitant to join another game jam, but thanks to the encouragement of my wife and friends from the local games industry, I decided to give it a go.
I had a relatively soft landing because I was joining a team of people who have already collaborated before, and so already had good chemistry (which I was afraid to upset).
When the theme of "waves" was announced, the team sat around in our dining room and proposed all sorts of ideas. Unfortunately I was working at the time so while I wasn't part of that discussions, I was able to chip in here and there.
It was funny to see in the end how practically all the ideas we came up with in that session were thought up & developed by other game jam participants. There is nothing new under the sun.
In any case, we settled on making a game about the Mexican wave. We realized we were able to expand on that visual direction with many different game modes, such as a typing game, or a rhythm game, or a competitive multiplayer game, and that really excited us and got our creative juices flowing.

An interesting challenge we had with the game was our team composition - we had 3 developers, one producer, and one artist. This meant that we had quite a large technical capacity and a small artistic capacity. This is an unusual predicament.
Thankfully, us developers were able to focus on different aspects of the game and use our secondary skillsets to help where needed. I, for example, did the music for the game.

Another interesting challenge was that the game was made inside the Godot engine and programmed in GDScript. While I've dabbled in Godot tutorials in the past (shoutout to [Brackeys](https://www.youtube.com/watch?v=LOhfqjmasi0)), I have never actually created a project in it.
I loved the opportunity to get more familiar with Godot by practice. After the Unity fiascos of the past couple of years, many developers have left it for up-and-coming alternatives, with Godot leading the charge. I have definitely considered Godot as an alternative to Unity in light of the situation.

Godot was good. Some things in it are better than in Unity in my opinion:
  - Lightning-fast engine boot and game iteration
  - Easy setup of global systems and scenes
  - Easier animation for 2D
  - (In regards to GDScript) easy abstraction and extension

But it definitely has room for improvement in comparison to Unity:
  - UI system is hella complicated
  - Built-in code editor is pretty weak
  - It really panics when working with Git

I'd love to use Godot more in the future because it's fun to learn, but it might be some time before it polishes up to be a genuine replacement for the other big game engines.


I'm pretty happy with how _La Ola_ turned out. Having such a large team meant we were really able to get a lot done even with everyone contributing only a bit of work here and there. Moreover, we were able to pay attention to heaps of details and debug the game effectively.
Thanks to our narrow scope we were able to make a full, functional game, but of course we've left out 90% of our stretch goals. There was heaps we still wanted to add.
That's good, I think. It shows the idea has potential and that we're still excited about this game's concept.

![image](${gameplay})

In conclusion - I'm glad I participated in this game jam, and got to work with these lovely people.
I will certainly consider more game jams in the future, and I hope you will too.
That's it for now. Thanks for reading!
`,
  date: "Dec 4, 2025",
  readTime: "4 min read",
  image: image,
  featured: true
};
