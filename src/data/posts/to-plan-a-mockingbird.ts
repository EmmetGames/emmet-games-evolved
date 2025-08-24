import grommetImage from "@/assets/to-plan-a-mockingbird/grommet.jpg";
import { BlogPost } from "../blogPosts";

export const toPlanAMockingbird: BlogPost = {
  id: "to-plan-a-mockingbird",
  title: "To Plan A Mockingbird",
  excerpt: "Hey folks! The past 2 weeks have been very hectic as I've moved to a new rental. Thankfully, now that basic things like electricity,...",
  content: `Hey folks! The past 2 weeks have been very hectic as I've moved to a new rental. Thankfully, now that basic things like electricity, clothing and food are taken care of, I can focus on what truly matters - my console display.

Last we left off, I set out the goal & the general guidelines for the project. To reiterate - the goal of my project is to connect all my consoles to my TV so I can relatively conveniently play any one of them.
Since then, I've done heaps of research into what other people have done, what options are available, and how much it would all cost.

Let me start with the conclusions first, to save time for those of you with better things to do. I'm planning on the following setup:

- Use a button-controlled AV switch to connect all my older consoles into one AV output, then use an AV to HDMI converter to turn that into an HDMI signal
- Use multiple HDMI switches (button-controlled) to connect all my modern consoles (+ the output from the AV switch) into a single HDMI output which will connect to my TV.
- Use 4 power boards with built-in surge protectors to power the consoles, and have each surge protector connected to a smart plug so I will be able to turn them on/off wirelessly (which is essential as I don't want to have to get to the back of the display).
All 4 surge protectors will be connected to one final power board, which will be connected to the wall.
- Cut 12 8x2.5cm rectangles in my display cabinet at shelf height for every console I plan to power, and attach two brush strips from the back to cover the holes.


Doing all of this will allow me to have all my consoles connected to power & TV at once, while keeping them off when not in use. It will also protect them all from power surges, and allow me to display them in their glass display.
All in all, all the components I will need to buy for this setup will cost me about 180 AUD.


Why did I go with this approach? What other options were available? If you care about any of that, then please join me as I elaborate in the rest of this post:


## Ramblings

### Other People's Setups and Displays

So let's start with other people's setups - people have done all sorts of things in their setups. It is honestly surprising how little consensus there is on how to do this, but I guess this is because people want to collect older consoles and hook them up to a TV for completely different reasons.
Some people grew up with these games and want to play them in the best possible quality they can, while others like the novelty of it and want to try and experience it like it was back in the day. Some people are not afraid at all to break open their consoles and modify the wiring to accommodate lots of changes, while others will use external adapters to keep the original machines in the best conditions.
Some people spend 20 bucks on their setup, while others spend thousands of dollars.


That being said, while people do this in many different ways it seems that the most common way is also the most straightforward - get a bunch of generic, relatively easy-to-find electronics (HDMI splitters, power boards with switches) and use enough to fit the collection. Use converters to allow you to play old consoles on new displays.
This was my intuition so this is what I ended up doing basically.


One thing that surprised me was that heaps of people were using upscalers for their consoles. Basically, these are fancy adapters which not only turn an AV signal into an HDMI, but also increase the quality of the output so it will look crisp on a modern display.
For my personal needs, it sort of defeats the purpose - part of playing retro games for me is to see them as they were, which is to say I want to see them smudged on my screen, not in pixel-perfect crispness.

For now I opted out of getting an upscaler. If I see that there is terrible input lag or the quality is truly awful, or there is some bad stretching, I will look into getting one.


Some people use industrial-grade I/O systems for all their console visuals. Basically, they convert the output of the console and then plug it into an Extron Crosspoint. From there, they can do heaps as this machine can be controlled remotely. It does cost thousands on its own though, and looks bulky as hell to boot, so I opted out of that too.


I decided to go with a physical switch (that is, one that I switch by pressing a button) because of a couple of reasons:

- Practicality - I anyways have to get up to turn on most of the consoles, as well as grab their controller. Adding an additional step of picking the display is not a big deal.
- Simplicity - If I were to buy multiple switches which use remotes for their control, they would all pick up a signal whenever I pressed a button on any remote, meaning they would be impossible to configure. A physical button eliminates this issue.
- Frugality - They are simply cheaper.


### Raspberry Pi

One final tangent regarding displays - I was wondering if anyone tried making a switch using a Raspberry Pi or Arduino or any other electronic board. To me, intuitively, it seemed like a low-budget option to achieve exactly what I want. I don't know electronics nearly well enough, but it feels pretty simple to connect a couple of display ports to a board and basically tell it to output one of them to a different one at any given time.

Unfortunately, I looked online and could barely find examples of anyone who's done this.

I don't think this is impossible. In fact, if I had to guess it's still the most affordable and best solution out there. However, I think it requires a good understanding of electronics, as well as hardware and skills to do it, which I simply don't have.
I'd love to get into this, but this feels like too big a jump into this field.


### Power Sockets

I looked into many options here - universal plugs (which are shaped so any plug from any country could fit into them), smart plugs (which can be controlled wirelessly via apps), and more.
I could basically not find anyone who make power boards that are smart AND universal AND don't cost an arm and a leg. That meant that I had to make some combination of products.
From that point, it was a simple exercise of comparing and contrasting different power boards and prices.


I realized quite early on in my research that it was simply not practical to have the consoles be able to turn on without me touching them. Some consoles would have to be modified internally to allow something like this. Others could meet this target by having their power button pressed at all times, but this would mean that every time they power on it would be an uncontrolled inrush current.

That being said, most electronics are built to handle inrush currents nowadays - basically every AC adapter does, but this means that I'll be straining the electronics of these rare consoles just to give myself a little bit of convenience.

So basically, I decided against this and to just press the power buttons on the consoles as needed.


After doing some math, I understood that I could save over a hundred dollars if I were to just use a couple of regular-ish power strips and toggle them on and off using a smart plug.
This will allow me to fill in the blanks using generic electronics - simple power boards, simple plug converters, simple surge protectors.
Most importantly, though, it means after setting up the power cables I can keep them in the back and not have to move my display, which is huge.


That's another thing I learned about - surge protectors. While I've used them all my life, I never quite knew about their inner workings. Studying up on them allowed me to understand what would be the optimal way to use them. This may be unsurprising for you, but surge protectors are not born equal and can vary in price immensely.
I opted for simple surge protectors because I think they'll protect my consoles from the common pitfalls.
It's a tiny precaution that can go a long way.


### Display

I originally was toying with the idea of having my display on wheels so I could more easily fiddle with the cables in the back, but I realized that using relatively simple electronics I can allow myself to keep the electricity plugs remote, and thus not have to move the cabinet at all.

That meant that the only real other thing to worry about regarding the display were the cable holes.

Drilling holes into a cabinet is one thing, but making it look good is an entirely other thing.
I know from experience that tidying cables up can go a long way in making a setup look clean, so I began looking into those cable hole things that cover up where the cable came from with some brushy hairs and stuff. Those are called brush grommets.


Turns out that they don't really make commercial brush grommets - they're mostly industrial, so they either come in standard variations or custom orders. Either way, they're very expensive, and that seemed crazy to me because they're essentially a strip of hairbrush.

I decided to try and make my own using whatever I could find - which in my case was a door brush which is normally used to keep dust from coming in through the crack under a door.

It was really easy to saw through and turns out that two of them folded on top of one another make an amazing grommet for cables!


![Grommet](${grommetImage})


I basically dub this experiment a success. I'll make lots more of these grommets and use them to cover up the holes I'll make in my display cabinet.
Thankfully no cable I will need to pass through is wider than 2x1.5cm at its widest, so a hole of 8x2.5cm should be way more than enough to keep things looking good.


However, I'm not reckless enough to start cutting into my display just like that. I'm going to practice cutting on a piece of wood meant to simulate the back of the display. I'll verify I can secure the grommet to it, and that cables can pass through the hole size I'm planning on without a problem.
If everything works, then I'll move on to the real thing.



Anyways, that's all for me now. Thanks for checking in, and good night!




`,
  date: "Jul 9 15, 2024", 
  readTime: "7 min read",
  image: grommetImage
};