import logo from "@/assets/blogIcon.jpg";
import { BlogPost } from "../blogPosts";

export const fillingInThePieces: BlogPost = {
  id: "filling-in-the-pieces",
  title: "Filling in the pieces",
  excerpt: "A short gameplay video showcase.",
  content: `Hiya! Welcome to another Dev Vlog!

<iframe
  src="https://www.youtube.com/embed/VKcs949bf-4"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy"
></iframe>

In the video I showcase some game footage. Please let me know if you have any suggestions. Cheers!
`,
  date: "Oct 5, 2020",
  readTime: "1 min read",
  image: logo
};
