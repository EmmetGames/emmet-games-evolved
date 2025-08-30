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
import { pieceOfCake } from "./posts/piece-of-cake";
import { fillingInThePieces } from "./posts/filling-in-the-pieces";
import { redditMoment } from "./posts/reddit-moment";
import { vlogginItUp } from "./posts/vloggin-it-up";
import { turningOverANewLeaf } from "./posts/turning-over-a-new-leaf";
import { theFinalMeme } from "./posts/the-final-meme";
import { iHateThis } from "./posts/i-hate-this";
import { memeMasterARetrospect } from "./posts/meme-master-a-retrospect";
import { theMemeMaster } from "./posts/the-meme-master";
import { whosMemeIsThisAnyway } from "./posts/whos-meme-is-this-anyway";
import { theTrialsAndTribulationsOfOnlineMultiplayer } from "./posts/the-trials-and-tribulations-of-online-multiplayer";
import { isThatGoingToBeOnTheTest } from "./posts/is-that-going-to-be-on-the-test";
// import { inSpaceNoOneCanHearYourSfx } from "./posts/in-space-no-one-can-hear-your-sfx";
// import { makingItPop } from "./posts/making-it-pop";
// import { backInTheGame } from "./posts/back-in-the-game";
// import { networkingShenanigans } from "./posts/networking-shenanigans";
// import { thatMomentWhenYouDevAGame } from "./posts/that-moment-when-you-dev-a-game";
// import { springCleaning } from "./posts/spring-cleaning";
// import { youreNotSupposedToBeHereIsPublished } from "./posts/youre-not-supposed-to-be-here-is-published";
// import { theVeryTop } from "./posts/the-very-top";
// import { openBetaIsFinallyHere } from "./posts/open-beta-is-finally-here";
// import { waxOnWaxOff } from "./posts/wax-on-wax-off";
// import { strikeAPose } from "./posts/strike-a-pose";
// import { haventIBeenHereBefore } from "./posts/havent-i-been-here-before";
// import { hidingInTheCorner } from "./posts/hiding-in-the-corner";
// import { youreNotSupposedToBeHereBabySteps } from "./posts/youre-not-supposed-to-be-here-baby-steps";
// import { officiallyWorkingOnANewGame } from "./posts/officially-working-on-a-new-game";
// import { vrIsJustAroundTheCorner } from "./posts/vr-is-just-around-the-corner";
// import { backToTheDrawingBoard } from "./posts/back-to-the-drawing-board";

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
  toPlanAMockingbird,
  theQuestToConnectConsoles,
  aRetrospectOnVideoGameMonetization,
  anotherOneDown,
  whereInTheWorldIsEmmetgames,
  backEndHeaven,
  smallUpdate,
  fillIsOut,
  fillAlpha2IsOutNow,
  fillAlphaIsOutNow,
  pieceOfCake,
  fillingInThePieces,
  redditMoment,
  vlogginItUp,
  turningOverANewLeaf,
  theFinalMeme,
  iHateThis,
  memeMasterARetrospect,
  theMemeMaster,
  whosMemeIsThisAnyway,
  theTrialsAndTribulationsOfOnlineMultiplayer,
  isThatGoingToBeOnTheTest,
  // inSpaceNoOneCanHearYourSfx,
  // makingItPop,
  // backInTheGame,
  // networkingShenanigans,
  // thatMomentWhenYouDevAGame,
  // springCleaning,
  // youreNotSupposedToBeHereIsPublished,
  // theVeryTop,
  // openBetaIsFinallyHere,
  // waxOnWaxOff,
  // strikeAPose,
  // haventIBeenHereBefore,
  // hidingInTheCorner,
  // youreNotSupposedToBeHereBabySteps,
  // officiallyWorkingOnANewGame,
  // vrIsJustAroundTheCorner,
  // backToTheDrawingBoard
];

export const getFeaturedPost = () => blogPosts.find(post => post.featured);
export const getOtherPosts = (limit?: number) => {
  const otherPosts = blogPosts.filter(post => !post.featured);
  return limit ? otherPosts.slice(0, limit) : otherPosts;
};
export const getPostById = (id: string) => blogPosts.find(post => post.id === id);