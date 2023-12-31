const techs = [
  {
    name: "Data Science, Machine Learning, Deep Learning and AI.",
    color: "#1d74b7",
    explanation:
      "Building Machine Leaning(ML)/Deep Learning application using different technologies such as, PyTorch, TensorFlow, Scikit-Learn, Open Computer Vision etc.",
    icon: "mdi-robot ",
    id: 1,
    path: "/datascience",
    iconColor: "#1FAAC7",
    languages: [
      { icon: "mdi-language-javascript", color: "#1d74b7" },
      { icon: "mdi-language-python", color: "#1d74b7" },
      { icon: "mdi-language-java", color: "#1d74b7" },
      { icon: "mdi-language-c", color: "#1d74b7" },
      { icon: "mdi-language-cpp", color: "#1d74b7" },
      { icon: "mdi-language-typescript", color: "#1d74b7" },
    ],
  },
  {
    name: "Full Stack Web Development and Web Apps",
    color: "#42b983",
    iconColor: "#1B74BA",
    explanation:
      "Full Stack Development on the web using different front-end frameworks such as React.js, Vue.js and Angular.js. Using higher technologies such as babel and webpack to build we application in JavaScript/TypeScript.",
    icon: "mdi-web",
    id: 2,
    path: "/web",
    languages: [
      { icon: "mdi-language-javascript", color: "#1d74b7" },
      { icon: "mdi-language-python", color: "#1d74b7" },
      { icon: "mdi-language-java", color: "#1d74b7" },
      { icon: "mdi-language-c", color: "#1d74b7" },
      { icon: "mdi-language-cpp", color: "#1d74b7" },
      { icon: "mdi-language-typescript", color: "#1d74b7" },
    ],
  },
  {
    name: "Mobile Development with JavaScript and TypeScript",
    color: "#8731d2",
    explanation:
      "Building Mobile application using Facebook React Technologies Expo + React Native.",

    icon: "mdi-cellphone",
    id: 3,
    path: "/mobile",
    iconColor: "#8731d2",
    languages: [
      { icon: "mdi-language-javascript", color: "#1d74b7" },
      { icon: "mdi-language-python", color: "#1d74b7" },
      { icon: "mdi-language-java", color: "#1d74b7" },
      { icon: "mdi-language-c", color: "#1d74b7" },
      { icon: "mdi-language-cpp", color: "#1d74b7" },
      { icon: "mdi-language-typescript", color: "#1d74b7" },
    ],
  },
  {
    name: "Native Desktop Development with JavaScript and TypeScript",
    color: "#0074e8",
    explanation:
      "Building Desktop Applications using Electron.js and Python TKinter techs.",
    icon: "mdi-desktop-mac ",
    id: 4,
    path: "/desktop",
    iconColor: "#0074e8",
    languages: [
      { icon: "mdi-language-javascript", color: "#1d74b7" },
      { icon: "mdi-language-python", color: "#1d74b7" },
      { icon: "mdi-language-java", color: "#1d74b7" },
      { icon: "mdi-language-c", color: "#1d74b7" },
      { icon: "mdi-language-cpp", color: "#1d74b7" },
      { icon: "mdi-language-typescript", color: "#1d74b7" },
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
export default techs;
