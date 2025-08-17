import { BlogPost } from "../blogPosts";
import { YouTubeEmbed } from "@/components/YoutubeEmbed";

export const pieceOfCake: BlogPost = {
  id: "piece-of-cake",
  title: "Piece Of Cake",
  excerpt: "A short gameplay video showcase.",
  content: `
<iframe
  src="https://www.youtube.com/embed/NUWwrl1UBtQ"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy"
></iframe>`,
  date: "Oct 12, 2020",
  readTime: "1 min read",
  image: null
};
