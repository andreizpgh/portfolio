import GOFPreview from "../../assets/images/game-of-life-optimized.gif";
import GPPreview from "../../assets/images/gem-puzzle.gif";
import TDLPreview from "../../assets/images/todo-list.gif";
import IGPreview from "../../assets/images/image-gallery-optimized.gif";
import OKKPreview from "../../assets/images/ok-kids-optimized.gif";
import APPreview from "../../assets/images/audio-player-optimized.webp";
import LPreview from "../../assets/images/library-optimized.webp";
import CVPreview from "../../assets/images/CV-optimized.webp";

const projects = [
  {
    name: "Game of Life",
    preview: GOFPreview,
    desc: "A web-based implementation of John Conway's famous cellular automaton 'Game of Life'.",
    tech: "TS, React, p5.js, Webpack.",
    source: "https://github.com/andreizpgh/game-of-life",
    website: "https://andreizpgh.github.io/game-of-life/",
  },
  {
    name: "Gem Puzzle",
    preview: GPPreview,
    desc: "A gem puzzle for kids to make learning the alphabet fun.",
    tech: "JS, SCSS, Gulp.",
    source: "https://github.com/andreizpgh/gem-puzzle",
    website: "https://andreizpgh.github.io/gem-puzzle/",
  },
  {
    name: "Todo List",
    preview: TDLPreview,
    desc: "Bare-bones front end for a to-do app, built using React and Framer Motion.",
    tech: "React, Framer Motion, Webpack.",
    source: "https://github.com/andreizpgh/react-todo-list",
    website: "https://andreizpgh.github.io/react-todo-list/",
  },
  {
    name: "Image Gallery",
    preview: IGPreview,
    desc: "Beautiful wrapper for the Unspash API to quickly search for phone wallpapers. ",
    tech: "JS, SCSS, Gulp.",
    source: "https://github.com/andreizpgh/image-gallery",
    website: "https://andreizpgh.github.io/image-gallery/",
  },
  {
    name: "OK, Kids!",
    preview: OKKPreview,
    desc: "An aggregator of online language learning resources for children focused on Content and Language Integrated Learning.",
    tech: "JS, Swiper.js.",
    source: "https://github.com/andreizpgh/school-project",
    website: "https://andreizpgh.github.io/school-project/",
  },
  {
    name: "Audio Player",
    preview: APPreview,
    desc: "Simple web-based audio player with responsive design.",
    tech: "JS.",
    source: "https://github.com/andreizpgh/audio-player",
    website: "https://andreizpgh.github.io/audio-player/",
  },
  {
    name: "Library",
    preview: LPreview,
    desc: "Landing page for a library.",
    tech: "JS, SCSS, Swiper.js, Gulp.",
    source: "https://github.com/andreizpgh/library",
    website: "https://andreizpgh.github.io/library/",
  },
  {
    name: "CV",
    preview: CVPreview,
    desc: "Minimalist responsive web CV in English with custom design.",
    tech: "HTML, CSS.",
    source: "https://github.com/andreizpgh/rsschool-cv",
    website: "https://andreizpgh.github.io/rsschool-cv/",
  },
];

export default projects;
