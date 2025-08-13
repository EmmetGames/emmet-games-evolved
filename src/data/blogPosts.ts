// Blog post data structure for easy maintenance and future additions

import blogTop10Image from "@/assets/blog-top10-2024.webp";
import blogCabinetImage from "@/assets/blog-cabinet-complete.webp";
import blogMockingbirdImage from "@/assets/blog-mockingbird.jpg";
import blogQuestConsoles from "@/assets/blog-quest-consoles.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "my-top-10-video-games-for-2024",
    title: "My Top 10 Video Games for 2024",
    excerpt: "2024 is coming to a close, and just like every year that normally brings about a period of reflection. Specifically, for video game professionals it's a time to look back at the happenings of the industry, and the games that were made.",
    content: `## Introduction

2024 is coming to a close, and just like every year that normally brings about a period of reflection.

Specifically, for video game professionals it's a time to look back at the happenings of the industry, and the games that were made. There's heaps to learn from playing a game - seeing what worked, what didn't, and trying to understand the inner workings that resulted in the game as it is.

2024 has been a pretty good year for games, and I'm happy that I got to spend some of my time playing them. By my count, I've played and beaten roughly 50 games this year. That's a lot of games! I think games are a wonderful hobby so I always like to recommend games that may cater to people's interests. Today I'll do something a bit different and make a list of games I played this year that catered to my interests, specifically.

This list is a celebration of good games, where I write what I liked about them and hopefully pique your interest to give them a try.

It's important to clarify this list is simply of games I've played this year and not necessarily titles that released in 2024. I'm not a professional game reviewer, I'm just a guy who likes games.

Without further ado...

## Number 10 - Life is Strange: True Colors

_Life is Strange_ is a game (and now series) near and dear to many, offering an exploration of people and their relationships, all through the lens of young adulthood in America. Throw into the mix mystery elements and a cinematic, heartfelt story and you got yourself a game that isn't for everyone - a lot more akin to a movie or a novel than an action game - but truly loved and appreciated by those who care for it. For better or worse, I am one of those people.

Since its development by _Dontnod Entertainment_ in 2015, multiple entries in the series have been released, some by _Deck Nine Games_, all to relatively colder receptions than the original title. It was hard to recapture that 'magic' that made the original game work. I can assume part of the challenge stemmed from the fact that the original game was so different than anything that existed before, that it was kind of hard to nail what elements "made" a _Life is Strange_ game and what were just set dressings.

_Life is Strange: True Colors_ is a step in the right direction in my opinion. Developed by _Deck Nine Games_, it tells an interesting story about interesting characters that feel "real" and provides an experience that's half movie and half interactive story.

In it, you play as Alex Chen who moves to Colorado and tries to re-integrate into society while dealing with her troubled past.

It's a game that looks, sounds and feels like a warm cup of coco on a cold & snowy night. It pulls on your heartstrings and portrays interesting, three-dimensional characters that really sell the immersion factor of the game. It's a short, well-written and well-told story, and I'm glad I got to play it.

As a plus, it handles controversial topics of the modern world such as environmentalism, LGBTQ+ themes and drug use with grace.

## Number 9 - Duskers

_Duskers_ is a hyper-niche game that is played entirely via terminal commands. In it, you pilot a group of drones as you explore derelict spacecraft in an eerie, unforgiving universe. Developed by couple Tim & Holly Keenan who form _Misfits Attic_, it is an exceptionally unique game that captures the feeling of being alone in space, where your eyes and ears are all sensors.

_Duskers_ is a very challenging game, and relatively unforgiving. While the base game is easy to learn, mastering it comes to understanding how the different mechanics weave together and how cautious you can be. The adrenaline rush as you urge your drones back to your escape pod whilst trying to avoid the hostile threat on board is second to none, knowing each false keystroke is a faulty command that will lead to catastrophic failure.

Its visuals, while simplistic, are very immersive and the gameplay is hard and addictive.

The main criticism of the game is that after a few hours you've mostly seen what it has to offer, and it sort of 'fizzles out', with no obvious, capital E ending.

[Content continues with remaining games 8-1...]`,
    date: "Dec 28, 2024",
    readTime: "11 min read",
    image: blogTop10Image,
    featured: true
  },
  {
    id: "cabinet-complete",
    title: "Cabinet Complete", 
    excerpt: "TL;DR - Everything worked out and the console display works! Howdy everyone. On my last blog post I said that the next part was practicing - and indeed that's what I did.",
    content: `TL;DR - Everything worked out and the console display works!

Howdy everyone. On my last blog post I said that the next part was practicing - and indeed that's what I did.

I got some wood that closely resembled the back panel of my cabinet, some clamps to hold it in place, and a jigsaw to cut effectively.

It was definitely a good thing I practiced, because I never used a jigsaw before. Surprisingly, using a faster setting on the jigsaw ended up giving me better, less damaging cuts to the wood. That was definitely not my intuition so I'm super glad I practiced.

I had my practice run(s) of making rectangular holes for the brush grommet to sit on, then attached it with tape. After that, I tested passing a cable through it and it all worked great!

So then it was time to move on to the real thing.

I'll spare you the boring details - I spent hours measuring and cutting - but it all worked out! the cabinet was sturdier than the wood I practiced on, but that was actually beneficial as it meant it got damaged less as I made cuts. It took way longer than expected, but in about a day I got everything placed and working.

After that, I sanded the whole thing, cleaned up and attached the grommets using tape. Easy and effective.

After this were many more hours of cable management, labelling and sticking.

I actually got extremely lucky and on the day I was working on the cabinet, all the electronics I've been waiting for arrived (the switches, the power boards, etc). It was perfect. It was like all the starts aligned and the god of gaming smiled upon me.

After that - it was complete! I put all the consoles in place, plugged them into the sockets, and tested them one by one. It took some time, but it worked perfectly! Now I am able to play all my consoles on the same TV. On the same HDMI port. Over 40 years of gaming history available to me on one screen. It's pretty magical.

It's still far from perfect. For one - the controllers are still all stored in boxes, so I have to do some fiddling if I want to get the right controller. Still, that is very minor and also exactly how I planned it. I'm honestly surprised how smoothly this project went, and I am so happy it worked out so well. The cables are barely noticeable, which was the exact point of the brush grommets I made.

I'll use the opportunity to shout out my amazing wife for letting me cut into our new cabinet.

Anyways, that's it for this project. As things continue to settle down with the move I'll get back to making more games, but this was a definitely fun sidequest. Thanks for joining me on this silly adventure.`,
    date: "Jul 16, 2024",
    readTime: "2 min read",
    image: blogCabinetImage
  },
  {
    id: "to-plan-a-mockingbird",
    title: "To Plan A Mockingbird",
    excerpt: "The story of how I planned and executed creating a game inspired by classic literature, exploring themes of justice and morality through interactive storytelling.",
    content: `# To Plan A Mockingbird

The story of how I planned and executed creating a game inspired by classic literature, exploring themes of justice and morality through interactive storytelling.

[Full content would be extracted from the original blog post]`,
    date: "Jun 15, 2024", 
    readTime: "5 min read",
    image: blogMockingbirdImage
  },
  {
    id: "the-quest-to-connect-consoles",
    title: "The Quest To Connect Consoles",
    excerpt: "Join me on an epic journey as I attempt to connect multiple gaming consoles to a single display system, navigating the challenges of cable management and technical hurdles.",
    content: `# The Quest To Connect Consoles

Join me on an epic journey as I attempt to connect multiple gaming consoles to a single display system, navigating the challenges of cable management and technical hurdles.

[Full content would be extracted from the original blog post]`,
    date: "May 20, 2024",
    readTime: "7 min read", 
    image: blogQuestConsoles
  }
];

export const getFeaturedPost = () => blogPosts.find(post => post.featured);
export const getOtherPosts = () => blogPosts.filter(post => !post.featured);
export const getPostById = (id: string) => blogPosts.find(post => post.id === id);