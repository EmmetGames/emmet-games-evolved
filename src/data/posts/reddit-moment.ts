import logo from "@/assets/redditMoment.jpg";
import { BlogPost } from "../blogPosts";

export const redditMoment: BlogPost = {
  id: "reddit-moment",
  title: "Reddit Moment",
  excerpt: "So, this is different.",
  content: `So, this is different.

I won't elaborate too much - the video speaks for itself.

<iframe
  src="https://www.youtube.com/embed/-QOiqjyHP2c?si=KNbjXEKmYmqbKhcZ"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy"
></iframe>

Thank you so much if you've been part of this. You're the best <3
`,
  date: "Oct 1, 2020",
  readTime: "1 min read",
  image: logo
};
