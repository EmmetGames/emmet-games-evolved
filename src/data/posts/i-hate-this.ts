import { BlogPost } from "../blogPosts";
import pepe from "@/assets/pepe-the-frog.jpg";

export const iHateThis: BlogPost = {
  id: "i-hate-this",
  title: "iHate This",
  excerpt: "Hey there! As I'm writing this blog, the new update for Meme Masters should be rolling out for Android... and for iOS. ...Or it would've...",
  content: `Hey there! As I'm writing this blog, the new update for Meme Masters should be rolling out for Android... and for iOS. ...Or it would've been. I will not be releasing for iOS. Here's why.

I'm not going to talk about my game's progress in this dev blog post. Instead, I want to talk about the journey of releasing a game on iOS, because I feel like the experience I had and the insights I've made could really help others.

Let me begin by ranting about Apple's policies a little. I am honestly speechless by how non-friendly their service has been, and how much time and effort it takes to release a FINISHED game onto the iOS App Store. It's unreal.

The process of releasing a Unity game on iOS, is something like this:

1.  Have an iOS build of a game that's working
2.  Create (and pay 100$ for) an Apple Developer Program Account to be able to publish apps
3.  Set up a shit-ton of certificates, licenses, profiles, etc.
4.  Build your Unity game through XCode to get an ipa file
5.  Upload that ipa file to AppStoreConnect and there set all of your game's shop details
6.  Wait for review

Despite seeming like a simple process written down, it's really not. The main challenges are as follows:

1.  **ACCOUNT CREATION** - Don't let [Apple's user-friendly site](https://developer.apple.com/programs/) fool you - you CANNOT sign up with a new account, and you can't sign up from any device that's not a Mac or an iPhone. When I tried signing up, I made an account, gave Apple my credit card info, got a confirmation email... then silence. I was never given permission. I immediately panicked and checked with Apple what was going on, and they reported that my money was not being transferred to them. This was really weird, because this is a legitimate credit card that I use for all my online/international shopping. After Googling this issue, it turns out [**hundreds of developers**](https://developer.apple.com/forums/thread/127752) are experiencing the same thing. What's going on is that Apple has systems which only allow payments to work from what they consider "active" accounts, that is Apple accounts that have been around for a while, are registered with some Apple devices and have made purchases before. What's crazy about this validation is that this is an "invisible prerequisite" - Apple wouldn't tell you about it, but it exists. I eventually got around this issue by signing up to and buying the Apple Developer Program account through a friend's existing Apple ID, on his iPhone. This is ridiculous.  
2.  **TECH** - Apple wants you to own an iPhone and a Mac computer. That is their prerequisite to publishing games to the app store. You PHYSICALLY CAN'T upload games to the App Store without a Mac, because XCode, the program which packages your game into ipa files, is only available on Mac devices. Furthermore, even though Unity may be able to build your iOS games, you can't actually use its output directly if you're using a Windows or Linux machine. For iOS games to build correctly in XCode, you need to be doing the Unity build on a Mac device. I obviously don't need to explain how crazy it is that you need to sink in thousands of dollars to release a free to play, functional game on iOS, but instead let me tell you how I did this without shelling out so much cash. For the first issue (getting a Mac), I instead used an on-demand Mac virtual machine, which I was able to connect to and work with from my PC. I personally used [MacInCloud](https://www.macincloud.com/), because they were easy to use, and their machines came pre-installed with all the software needed to develop and publish apps. Furthermore, they were relatively cheap (1$ an hour of use or 20$ for the entire month), but note that their prices have caveats. Read well before you purchase - I bought the 12$ package which gives me 3 hours a day to work on the VM, but that's only because I spent the minimal amount of time there and I wasn't testing my game. I think for the future I'd recommend to buy 30$ of the on-demand dollar-per-hour plan. As for the second issue (being able to only build the game on Macs), I used Unity Teams' solution of Unity Cloud Build. It's 7$ a month, but it was well-worth it for me for the sole operation of uploading my game to the App Store. In short, what it does is connect to your Source Control repository (Bitbucket, GitHub, etc) and builds them on the cloud for different platforms you choose automatically. Using this service, I was able to build a functional, uploadable ipa file for the App Store without having to run anything on my computer. It's pretty swell.    

In short, I spent about a week or two, about 130$ and years in future therapy sessions trying to get Meme Masters on iOS. It was a massive pain, but I finally submitted the game up for review. It was behind me.

...and then I got the response from the Apple team, telling me my game was not approved for the craziest reason:
Pepe the Frog.

![image](${pepe})
This cheeky bastard cost me the iOS release of Meme Masters

For those of you who don't know, the meme pepe the frog has been used, among other things, with far-right and racist propaganda, and as a result it has been classified as a hate symbol.
The Apple reviewers saw pepe in my screenshot of Meme Masters, and flagged it as potentially inappropriate or hurtful content.

In order to 'fix' my game and have Apple approve my game, I had to do the following:
1.  Change the screenshot so pepe won't appear
2.  Film a video on a real iPhone showing all of the game's features in play session, proving that pepe was out of the game
In my case, I was shit out of luck because I was using MacOnCloud, so I could not actually transfer the ipa file to an iPhone. This process is normally done by plugging the iPhone into the Mac.

And so, my quest for Meme Masters on iOS ended. I was unable to port it because pepe the frog appeared in my wallpaper.
In an alternate timeline where I would have chosen any other meme to feature in my wallpaper, Meme Masters would be out on iOS now.

That's all I wanted to say. Sorry for all those who wanted Meme Masters on iOS - I wanted you to be able to play too. However, my hands were tied and Apple's delirious policies prevented the game from coming out.

I'll be experimenting with some other solutions, but don't keep your hopes us. I'm sorry.`,
  date: "Jul 28, 2020",
  readTime: "4 min read",
  image: pepe
};
