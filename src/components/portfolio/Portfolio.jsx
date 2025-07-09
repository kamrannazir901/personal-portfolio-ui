import React from "react";
import PortfolioCard from "./PortfolioCard";
import styles from "./PortfolioCard.module.css";

import aboutphoto from "../../assets/images/aboutphoto.jpg";
import codingImg from "../../assets/images/coding.jpg";
import paperplanimg from "../../assets/images/paperplan.jpg";
import tablettestingImg from "../../assets/images/tablettesting.jpg";

export const portfolioItems = [
  {
    id: 1,
    image: codingImg,
    title: "Responsive Landing Page",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    id: 2,
    image: paperplanimg,
    title: "Modern Portfolio Site",
    tags: ["React JS", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    id: 3,
    image: tablettestingImg,
    title: "E-Commerce Store",
    tags: ["Next JS", "Node", "MongoDB"],
    link: "#",
  },
  {
    id: 4,
    image: paperplanimg,
    title: "Admin Dashboard",
    tags: ["React JS", "Chart JS", "Sass"],
    link: "#",
  },
  {
    id: 5,
    image: codingImg,
    title: "Blog App",
    tags: ["React", "Firebase", "Tailwind"],
    link: "#",
  },
  {
    id: 6,
    image: tablettestingImg,
    title: "Chat Application",
    tags: ["Node", "Socket.IO", "Express"],
    link: "#",
  },
  {
    id: 7,
    image: codingImg,
    title: "Personal Resume Website",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    id: 8,
    image: paperplanimg,
    title: "Online Course Platform",
    tags: ["React", "Redux", "Node"],
    link: "#",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h2 className="section-heading">Portfolio</h2>
      <h3 className="section-subheading">
        Hover and explore my <span className="p-color">projects</span>
      </h3>
      <div className={styles.portfolio}>
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

export default Portfolio;
