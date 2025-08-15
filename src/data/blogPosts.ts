// Blog post data structure for easy maintenance and future additions

// Import individual blog posts
import { myTop10VideoGamesFor2024 } from "./posts/my-top-10-video-games-for-2024";
import { cabinetComplete } from "./posts/cabinet-complete";
import { aRetrospectOnVideoGameMonetization } from "./posts/a-retrospect-on-video-game-monetization";
import { anotherOneDown } from "./posts/another-one-down";
import { whereInTheWorldIsEmmetgames } from "./posts/where-in-the-world-is-emmetgames";
import { toPlanAMockingbird } from "./posts/to-plan-a-mockingbird";
import { theQuestToConnectConsoles } from "./posts/the-quest-to-connect-consoles";
import { backEndHeaven } from "./posts/back-end-heaven";
import { smallUpdate } from "./posts/small-update";
import { fillIsOut } from "./posts/fill-is-out";
import { fillAlpha2IsOutNow } from "./posts/fill-alpha-2-is-out-now";
import { fillAlphaIsOutNow } from "./posts/fill-alpha-is-out-now";

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
  myTop10VideoGamesFor2024,
  cabinetComplete,
  aRetrospectOnVideoGameMonetization,
  anotherOneDown,
  whereInTheWorldIsEmmetgames,
  toPlanAMockingbird,
  theQuestToConnectConsoles,
  backEndHeaven,
  smallUpdate,
  fillIsOut,
  fillAlpha2IsOutNow,
  fillAlphaIsOutNow,
  // Additional posts can be imported and added here
];

export const getFeaturedPost = () => blogPosts.find(post => post.featured);
export const getOtherPosts = () => blogPosts.filter(post => !post.featured);
export const getPostById = (id: string) => blogPosts.find(post => post.id === id);