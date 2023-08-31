import {
  php,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  laravel,

  portal, 
  eatscape, 
  mindcrash, 
  portfolio,
  pos,
  rebill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const techs = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "PHP",
    icon: php,
  },
  {
    title: "ThreeJS",
    icon: threejs,
  },
  {
    title: "ReactJS",
    icon: reactjs,
  },
  {
    title: "TailwindCSS",
    icon: tailwind,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "Laravel",
    icon: laravel,
  },
  {
    title: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Testing Engineer",
    company_name: "PT. Ultimo Solutions",
    icon: git,
    iconBg: "#383E56",
    date: "Jan 2020 - April 2020",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum alias recusandae sapiente dolorum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum alias recusandae sapiente dolorum.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "PT. Senja Solutions",
    icon: git,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Now",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum alias recusandae sapiente dolorum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum alias recusandae sapiente dolorum.",
    ],
  },
];

const projects = [
  {
    name: "3D-Portal",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga qui quibusdam nesciunt iusto velit distinctio.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
    ],
    image: portal,
    source_code_link: "https://github.com/",
  },

  {
    name: "Mindcrash",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga qui quibusdam nesciunt iusto velit distinctio.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: mindcrash,
    source_code_link: "https://github.com/",
  },
  {
    name: "My First Portfolio",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga qui quibusdam nesciunt iusto velit distinctio.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Eatscape",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga qui quibusdam nesciunt iusto velit distinctio.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: eatscape,
    source_code_link: "https://github.com/",
  },
  {
    name: "ReBill",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga qui quibusdam nesciunt iusto velit distinctio.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: rebill,
    source_code_link: "https://github.com/",
  },
  {
    name: "ReBill-POS",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga qui quibusdam nesciunt iusto velit distinctio.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: pos,
    source_code_link: "https://github.com/",
  },
];

export { techs, experiences, projects };
