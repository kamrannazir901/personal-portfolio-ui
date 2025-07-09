import React from "react";
import styles from "./About.module.css";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaChalkboardTeacher,
} from "react-icons/fa";

import aboutphoto from "../../assets/images/aboutphoto.jpg";
import codingimg from "../../assets/images/coding.jpg";
import paperplanimg from "../../assets/images/paperplan.jpg";
import tablettestingImg from "../../assets/images/tablettesting.jpg";
const zigzagData = [
  {
    title: "Planning on Paper",
    text: "Before jumping into design tools, I always begin with rough sketches on paper. It helps me think clearly about layout, flow, and user experience. This step might seem simple, but it often takes hours—and it sets the direction for everything ahead.",
    image: paperplanimg,
  },
  {
    title: "Design That Thinks",
    text: "I don’t just make things look pretty. I design with intention—making sure every element serves a purpose and keeps things easy for the user. Good design should feel natural and effortless.",
    image: codingimg,
  },
  {
    title: "Color & Font Logic",
    text: "Picking the right colors and fonts takes time. I spend hours testing combinations that match the brand's vibe and feel just right. It's not guesswork—it's about making the whole thing feel like it belongs.",
    image: paperplanimg,
  },
  {
    title: "Responsive by Default",
    text: "I always think mobile-first. Whether someone visits on a phone, tablet, or laptop, the website should feel smooth and consistent. It's more than just shrinking things down—it's about thoughtful adaptation.",
    image: tablettestingImg,
  },
  {
    title: "Polish Through Testing",
    text: "Before launch, I go through everything with a fine-tooth comb—checking speed, layout shifts, and little details. Then I fix, polish, and repeat. It’s all about getting the experience just right.",
    image: codingimg,
  },
  {
    title: "Beyond Launch",
    text: "Even after going live, I stay involved. I keep an eye on how things perform and look for ways to make it even better. A launch isn’t the end—it’s just the next step.",
    image: tablettestingImg,
  },
];

const timelineData = [
  {
    category: "education",
    title: "Matriculation",
    subtitle: "Govt Islamia High School",
    duration: "2015 - 2016",
    description:
      "Laid the foundation of my academic journey with core science subjects.",
    icon: <FaGraduationCap />,
  },
  {
    category: "education",
    title: "FSC (Pre-Engineering)",
    subtitle: "Punjab Group of Colleges",
    duration: "2017 - 2018",
    description: "Explored the basics of engineering and mathematics.",
    icon: <FaChalkboardTeacher />,
  },
  {
    category: "education",
    title: "BS Information Technology",
    subtitle: "University of Gujrat",
    duration: "2019 - 2023",
    description:
      "Studied full-stack development, data structures, and real-world problem solving.",
    icon: <FaLaptopCode />,
  },
  {
    category: "experience",
    title: "WordPress & PHP Developer",
    subtitle: "Freelance on Fiverr",
    duration: "Since 2019",
    description:
      "Started my career freelancing with WordPress and custom PHP projects.",
    icon: <FaBriefcase />,
  },
  {
    category: "experience",
    title: "Backend Developer",
    subtitle: "Part-time at Local Agencies",
    duration: "2020 - 2022",
    description:
      "Worked on various Laravel-based systems while completing my degree.",
    icon: <FaLaptopCode />,
  },
  {
    category: "experience",
    title: "React & MERN Developer",
    subtitle: "Full-time Developer",
    duration: "2023 - Present",
    description:
      "Now building blazing-fast MERN apps, focusing on UI/UX and clean code.",
    icon: <FaBriefcase />,
  },
];

function About() {
  return (
    <section id="about">
      {/* one */}

      <h2 className="section-heading">About me</h2>
      <h3 className="section-subheading">
        A journey from <span className="p-color">freelancer</span> to full-stack{" "}
        <span className="p-color">creator</span>.
      </h3>
      <div className={styles.aboutus}>
        <div className={styles.education}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={styles.eduitem}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className={styles.circle}>{item.icon}</div>
              <div className={styles.eduiteminner}>
                {/* <span className={styles.arrow}></span> */}

                <div className={styles.edugroup}>
                  <h3>{item.title}</h3>
                  <span>{item.duration}</span>
                </div>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.aboutright}>
          <p className={styles.aboutText}>
            My journey began back in{" "}
            <span className={styles.highlight1}>2019</span>, when I started
            offering{" "}
            <span className={styles.highlight2}>WordPress services</span> on
            Fiverr. Working with clients from around the globe gave me a solid
            foundation in understanding real-world needs. Over time, I expanded
            my skill set by diving into{" "}
            <span className={styles.highlight3}>PHP and Laravel</span>,
            collaborating on full-fledged backend solutions. As the tech
            landscape evolved, I pushed myself to adapt and embraced the{" "}
            <span className={styles.highlight4}>MERN stack</span>. Today, I
            build complete, modern frontends using{" "}
            <span className={styles.highlight5}>React.js</span>. Every design
            and interaction in my projects is a reflection of my growth,
            experience, and passion for clean user experiences .
          </p>
          <br />
          <img src={codingimg} alt="" />
        </div>
      </div>

      {/* two */}

      <h3 className="section-subheading">
        There's more to <span className="p-color">web design</span> than just
        code.
      </h3>
      <div className={styles.zigzag}>
        {zigzagData.map(({ title, text, image }, index) => (
          <div
            className={`${styles.zigzagBox} ${
              index % 2 === 0 ? styles.reverse : ""
            }`}
            key={index}
          >
            <div className={styles.text}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <div className={styles.image}>
              <img src={image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
