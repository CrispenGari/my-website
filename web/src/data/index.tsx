import { FaJava, FaMobile, FaPython, FaRobot } from "react-icons/fa";
import { MdWeb, MdDesktopMac } from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

import {
  MdThumbUp,
  MdSportsBasketball,
  MdPublic,
  MdCake,
  MdCode,
  MdHistory,
} from "react-icons/md";

export const techs = [
  {
    name: "Data Science, Machine Learning, Deep Learning and AI.",
    color: "#1d74b7",
    explanation:
      "Building Machine Leaning(ML)/Deep Learning application using different technologies such as, PyTorch, TensorFlow, Scikit-Learn, Open Computer Vision etc.",
    icon: <FaRobot />,
    id: 1,
    path: "/datascience",
    iconColor: "#1FAAC7",
    languages: [
      { icon: <IoLogoJavascript />, color: "#F7DF1E" },
      { icon: <FaPython />, color: "#3776AB" },
      { icon: <FaJava />, color: "#b07219" },
      { icon: <TbBrandCpp />, color: "#00599C" },
      { icon: <SiTypescript />, color: "#3178c6" },
    ],
  },
  {
    name: "Full Stack Web Development and Web Apps",
    color: "#42b983",
    iconColor: "#1B74BA",
    explanation:
      "Full Stack Development on the web using different front-end frameworks such as React.js, Vue.js and Angular.js. Using higher technologies such as babel and webpack to build we application in JavaScript/TypeScript.",
    icon: <MdWeb />,
    id: 2,
    path: "/web",
    languages: [
      { icon: <IoLogoJavascript />, color: "#F7DF1E" },
      { icon: <FaPython />, color: "#3776AB" },
      { icon: <FaJava />, color: "#b07219" },
      { icon: <TbBrandCpp />, color: "#00599C" },
      { icon: <SiTypescript />, color: "#3178c6" },
    ],
  },
  {
    name: "Mobile Development with JavaScript and TypeScript",
    color: "#8731d2",
    explanation:
      "Building Mobile application using Facebook React Technologies Expo + React Native.",
    icon: <FaMobile />,
    id: 3,
    path: "/mobile",
    iconColor: "#8731d2",
    languages: [
      { icon: <IoLogoJavascript />, color: "#F7DF1E" },
      { icon: <FaPython />, color: "#3776AB" },
      { icon: <FaJava />, color: "#b07219" },
      { icon: <TbBrandCpp />, color: "#00599C" },
      { icon: <SiTypescript />, color: "#3178c6" },
    ],
  },
  {
    name: "Native Desktop Development with JavaScript and TypeScript",
    color: "#0074e8",
    explanation:
      "Building Desktop Applications using Electron.js and Python TKinter techs.",
    icon: <MdDesktopMac />,
    id: 4,
    path: "/desktop",
    iconColor: "#0074e8",
    languages: [
      { icon: <IoLogoJavascript />, color: "#F7DF1E" },
      { icon: <FaPython />, color: "#3776AB" },
      { icon: <FaJava />, color: "#b07219" },
      { icon: <TbBrandCpp />, color: "#00599C" },
      { icon: <SiTypescript />, color: "#3178c6" },
    ],
  },
];

// lessons
export const lessons = [
  {
    imgURL: "/ai.jpeg",
    title: "Artificial Intelligence",
    description: "Learn artificial intelligence using python from scratch",
    btnTitle: "REQUEST",
    currentPrice: 199.99,
    previousPrice: 249.99,
  },
  {
    imgURL: "/web.png",
    title: "Web Development",
    description: "Learn how to create web apps and websites from scratch.",
    btnTitle: "REQUEST",
    currentPrice: 199.99,
    previousPrice: 249.99,
  },
  {
    imgURL: "/mobile-apps.jpg",
    title: "Mobile Apps",
    description: "Learn how to create mobile apps from scratch.",
    btnTitle: "REQUEST",
    currentPrice: 199.99,
    previousPrice: 249.99,
  },
  {
    imgURL: "/laptop-apps.webp",
    title: "Desktop Apps",
    description:
      "Learn how to create native desktop applications from scratch.",
    btnTitle: "REQUEST",
    currentPrice: 199.99,
    previousPrice: 249.99,
  },
];

export const projects = [
  {
    imgURL: "/ai-project.avif",
    title: "Artificial Intelligence Project",
    description:
      "If you want Crispen to help you with your Artificial Intelligence project.",
    btnTitle: "PROPOSE",
  },
  {
    imgURL: "/web-dev-project.jpg",
    title: "Web Development Project",
    description:
      "If you want Crispen to help you with your Web Development project.",
    btnTitle: "PROPOSE",
  },
  {
    imgURL: "/mobile-app-project.png",
    title: "Mobile App Project",
    description:
      "If you want Crispen to help you with your Mobile App project.",
    btnTitle: "PROPOSE",
  },
  {
    imgURL: "/desk-dev.png",
    title: "Desktop App Project",
    description:
      "If you want Crispen to help you with your Desktop App project.",
    btnTitle: "PROPOSE",
  },
];

export const abouts = [
  {
    icon: MdThumbUp,
    color: "#8731d2",
    iconColor: "lightblue",
    title: "Likes",
    id: 7,
    content:
      "Interested in Artificial Intelligence, Machine Learning, Open Computer Vision, Natural Language Processing. Also a huge fan of Web Development with React, Vue, Angular and Webpack.",
  },
  {
    icon: MdSportsBasketball,
    color: "#8731d2",
    iconColor: "purple",
    title: "Sports",
    id: 2,
    content: "A huge football fan of Real Madrid and Chelsea.",
  },
  {
    icon: MdPublic,
    color: "#8731d2",
    iconColor: "lime",
    title: "Nationality",
    id: 3,
    content:
      "Tinashe Crispen Garidzira (aka Crispen Gari) is originally from Zimbabwe.",
  },
  {
    icon: MdCake,
    color: "#8731d2",
    iconColor: "green",
    title: "Age",
    id: 4,
    content: `${new Date().getFullYear() - 1999} years old.`,
  },
  {
    icon: MdCake,
    color: "#8731d2",
    iconColor: "orange",
    title: "Birthday",
    id: 5,
    content: "I was born 5 October 1999",
  },
  {
    icon: MdCode,
    color: "#8731d2",
    iconColor: "orangered",
    title: "Programming Languages",
    id: 6,
    content:
      "I code in C, C++, Java, JavaScript and Python. Python, JavaScript and TypeScript being my favorite.",
  },
  {
    icon: MdHistory,
    color: "#8731d2",
    iconColor: "blue",
    title: "Programming History",
    id: 1,
    content:
      "My programming history was a horror movie. I was eager to learn the world of technologies and explore how computers interact with humans. I'm a self-taught developer who loves reading programming books and official docs. I've coded in Python, C#, C++, C, JavaScript, PHP, TypeScript, and Java. Now I'm a huge fan of Artificial Intelligence using TensorFlow, Scikit-Learn, and PyTorch.",
  },
];

export const banners = [
  {
    name: "datascience",
    displayName: "Data Science",
    color: "#1d74b7",
  },
  {
    name: "web",
    displayName: "Web Development",
    color: "#42b983",
  },
  {
    name: "mobile",
    displayName: "Mobile Development",
    color: "#8731d2",
  },
  {
    name: "desktop",
    displayName: "Desktop Development",

    color: "#0074e8",
  },
  {
    name: "about",
    displayName: "About Me",
    color: "#0074e8",
  },
  {
    name: "projects",
    displayName: "Projects",
    color: "#0074e8",
  },
];
