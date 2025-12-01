import { BlogPost } from "../blogPosts";
import image from "@/assets/youre_not_supposed_to_be_here_app_icon.png";

export const springCleaning: BlogPost = {
  id: "spring-cleaning",
  title: "Spring Cleaning",
  excerpt: "Before continuing - I'm happy to announce a new opinion questionaire available on Google Forms!",
  content: `Before continuing - I'm happy to announce a new opinion questionaire available on Google Forms!

I'd love to hear what you guys think about the finished, released version of _You're Not Supposed To Be Here_. Please be kind and [give me your two cents in the form!](https://forms.gle/ecTXUmAyitFSwHeE6)

Of course, I'd appreciate it just as much if you left a review on [the game's Google Play page](https://play.google.com/store/apps/details?id=emmetgames.game.youre_not_supposed_to_be_here), so please do so!

https://play.google.com/store/apps/details?id=emmetgames.game.youre\_not\_supposed\_to\_be\_here

![image](${image})

Some of you may have noticed that you can't find the game on the Play Store anymore. This is due to Google removing my game from the store for the time being. The reasoning behind it is that apparently my game violated policy by not having a privacy policy in it.

On a personal note, I'd like to say that I obviously don't actually collect any relevant information on anyone playing my game (I can only tell that _someone_ played my game and with some device, and that's it).

Still, this is probably due to me using Unity Ads, which may collect personal information. I'm not sure, I'm not Unity Ads.

Either way, I updated my game to contain a privacy policy as well as have created a privacy policy webpage[, which you can read here](https://you-re-not-supposed.flycricket.io/privacy.html). Hopefully the game will return to the Play Store soon.

I'm not angry or frustrated that Google took my game off their store, or that they required a privacy policy. Data collection and loss of privacy is a serious and growing issue in the modern world and I'm happy to comply and make the world a little less invasive and more transparent.

I'm just a bit ticked off that during my entire time working on releasing my game, from the many Unity tutorials I've undertook to finish the process, to the long and tedious process of uploading the game to the Play Store, not once did I see any mention of this requirement of a privacy policy and that a game made with Unity with ads automatically qualifies for it.

**Be aware of this, future developers!** I've been fortunate enough that this is a small love-project and not my career. This can be extremely detrimental for people who depend on this more.

For those interested with how I made a privacy policy, I'd like to share my process. Before that, let me make the following disclaimer extremely clear:

This is legal business. Don't consider this professional advice at all - I could be wrong about half of these stuff. I'm simply describing what I did, and claim no responsibility for anything that may happen to you if you follow in my footsteps.

According to the mail I got from Google Play Support, I needed to provide both a link to a privacy policy page on my Play Store listing of the game, as well as directly and clearly accessible within the game.

The game's access to the policy must been relatively stable, so instead of getting it from online I decided to just put it directly inside my game. True, now every time I update my policy I must also update my game and re-upload it, but at least it'll be effective offline as well and therefore the most stable possible.

But first, I needed to create a privacy policy. Luckily, [Firebase's App Privacy Policy Generator](https://app-privacy-policy-generator.firebaseapp.com/) website allows simpletons like me to simply and effectively create privacy policies. Just put in a few variables and the policy is generated. I put it in my game, and created a new build and APK. That was that.

There was still the matter of hosting it online. Luckily, [FlyCricket](https://flycricket.com/?utm_source=flycricket&utm_medium=landing_page&utm_campaign=1c9987994bbb435191187cab90453b2c) offers free website hosting for app-stuff, which includes privacy policies. I uploaded my privacy policy there with relative ease, and got a shareable link. That's all it took.

I will also say that I took time to read about the different privacy policies of both Google Play and Unity, in order to understand what information they actually collect on my players, since I'm not actually collecting much myself. I referenced them in my own privacy policy, since they obviously apply.

This privacy policy needs to be different for different apps/games because obviously each game has different things it may or may not collect from its players, but generally speaking I'm going to assume all my future games will require an identical privacy policy.`,
  date: "Aug 17, 2019",
  readTime: "3 min read",
  image: image
};
