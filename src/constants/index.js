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
  laravel
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { techs, experiences, projects };
