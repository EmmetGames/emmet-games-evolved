import logo from "@/assets/blogIcon.jpg";
import { BlogPost } from "../blogPosts";

export const vlogginItUp: BlogPost = {
  id: "vloggin-it-up",
  title: "Vloggin' it up!",
  excerpt: "Hi everyone! Today I'll be trying out something different - vlogging!",
  content: `Hi everyone! Today I'll be trying out something different - vlogging! I figured listening to me and seeing visuals on-screen would be more interesting than reading my nerdy articles about different Unity packages.

<iframe
  src="https://www.youtube.com/embed/InS_nhwfWHA?si=_6dfayeUpFFLXOSr"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy"
></iframe>

Please let me know if you prefer vlogs or blogs, and make sure to subscribe to my channel to get notified when I post a new vlog!
`,
  date: "Sep 26, 2020",
  readTime: "1 min read",
  image: logo
};
