import bookbuy from "../assets/projects/bookbuy.png";
import yoom from "../assets/projects/yoom.png";
import portfolio from "../assets/projects/portfolio.png";
import blog from "../assets/projects/blog.png";

export const HERO_CONTENT = `I am a passionate third-year computer science student with hands-on experience in full stack web development and data analysis. I have developed skills in front-end technologies such as React and Next.js, along with back-end technologies like Node.js, MySQL, PostgreSQL, and Python. My goal is to leverage my knowledge and experience to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. As a third-year computer science student, I have gained hands-on experience with various technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, Python, Git and more. My interest in web development grew from a fascination with creating interactive experiences and finding innovative solutions to real-world problems. This passion has evolved into a commitment to continuous learning and adaptation to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy taking part in sports, exploring the outdoors, and staying active through various physical activities. These experiences help me maintain a balanced lifestyle and inspire my creativity.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: bookbuy,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "TailwindCSS", "React", "NextJs", "PostgresSQL"],
  },
  {
    title: "Video Conference App",
    image: yoom,
    description:
      "An application for video conferences and rooms, pretty much a replica of skype.",
    technologies: ["HTML", "TailwindCSS", "React", "NextJs"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Blogging Platform",
    image: blog,
    description:
      "A platform for creating and publishing blog posts, with features like editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Python"],
  },
];

export const CONTACT = {
  address: "London, United Kingdom",
  phoneNo: "+07",
  email: "revrennaleo@gmail.com",
};