import {
  php,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
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
    title: "Field Work Practice",
    company_name: "PT. Ultimo Solutions",
    icon: git,
    iconBg: "#383E56",
    date: "Jan 2020 - April 2020",
    points: [
      "Conducted manual testing to identify bugs and review the outcomes of senior-developed websites prior to publication.",
      "Explored a comprehensive understanding of HTML, CSS, and JavaScript to enhance skills in web development.",
      "Designed and developed basic responsive websites to demonstrate proficiency in responsive design techniques.",
      "Undertook the study of the C# programming language to broaden knowledge and skills in software development.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "PT. Senja Solutions",
    icon: git,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Now",
    points: [
      "Translated Figma designs into functional code using HTML, CSS, and JavaScript.",
      "Designed and built a landing page for CuciCepat, showcasing relevant information and features.",
      "Developed a landing page for ReBill using Laravel framework and TailwindCSS for enhanced design and functionality.",
      "Collaborated within the ReBill-POS team to update content and perform various tasks to enhance the platform.",
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
