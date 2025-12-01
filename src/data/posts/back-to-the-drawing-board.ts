import { BlogPost } from "../blogPosts";
import image from "@/assets/back-to-the-drawing-board.png";

export const backToTheDrawingBoard: BlogPost = {
  id: "back-to-the-drawing-board",
  title: "Back to the drawing board",
  excerpt: "So unfortunately, it seems that _Swipe Master_ (My first attempt at a mobile phone game) is not going so well.",
  content: `So unfortunately, it seems that _Swipe Master_ (My first attempt at a mobile phone game) is not going so well. The gameplay simply just doesn't 'click' and the aesthetic seems crude and unskilled, rather than cartoony and simple. It seems I've been trying to combine too many elements together, that at least in the configuration I've used, simply don't mix very well.

Because of this, I think I'll scrap what I've done so far and head back to the drawing board with this project. It definitely has some promising elements that I'll be able to use later on, but perhaps in a different context or in a different way. The game needs to completely be reworked in order to be viable in any way.

![image](${image})`,
  date: "Feb 1, 2019",
  readTime: "1 min read",
  image: image
};
