import bookbuy from "../assets/projects/bookbuy.png";
import yoom from "../assets/projects/yoom.png";
import meeteen from "../assets/projects/meeteen.png";
import blog from "../assets/projects/blog.png";

export const HERO_CONTENT = `I am a passionate third-year computer science student with hands-on experience in full stack web development and data analysis. I have developed skills in front-end technologies such as React and Next.js, along with back-end technologies like Node.js, Express.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my knowledge and experience to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. As a third-year computer science student, I have gained hands-on experience with various technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, Python, Git and more. My interest in web development grew from a fascination with creating interactive experiences and finding innovative solutions to real-world problems. This passion has evolved into a commitment to continuous learning and adaptation to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy taking part in sports, exploring the outdoors, and staying active through various physical activities. These experiences help me maintain a balanced lifestyle and inspire my creativity.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Full Stack Web Developer",
    company: "Slick Site",
    description: `Started and managed a web development startup, building scalable and high-performance web applications with modern technologies.`,
    technologies: ["TypeScript", "React.js", "Next.js", "PostgreSQL", "GoCardless"],
  },
];

export const PROJECTS = [
  {
    title: "Advanced Events Management Platform",
    image: meeteen, // Replace with actual image reference
    description:
      "A feature-rich web application for event creation, management, and participation. Includes real-time chat, Google Maps integration, location-based filtering, dynamic charts, and responsive design.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Google Maps API", "Google Geocoder API","Chart.js"],
  },
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
    title: "Blogging Platform",
    image: blog,
    description:
      "A platform for creating and publishing blog posts, with features like editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Python"],
  },
];

export const CONTACT = {
  address: "London, United Kingdom",
  phoneNo: "07462636123",
  email: "revrennaleo@gmail.com",
};