import React from "react";
import styles from "./Hero.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import { RxDoubleArrowDown } from "react-icons/rx";

// import myphoto from "../../assets/images/aboutphoto.jpg";
// import myphoto from "../../assets/images/myphoto.jpeg";
import myphoto from "../../assets/images/kamran-photo-Photoroom.png";

import htmllogo from "../../assets/images/htmllogo.png";
import csslogo from "../../assets/images/csslogo.webp";
import reactlogo from "../../assets/images/react-logo.png";
import nextlogo from "../../assets/images/nextjslogo.png";
import jslogo from "../../assets/images/jslogo.png";
import Navbar from "../navbar/Navbar";

function Hero() {
  return (
    <section className={styles.heroSection}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.left}>
          <span className={styles.welcomemsg}>
            Hi there, welcome to my site
          </span>
          <h1>
            i'm kamran nazir <br />
            <span className="p-color">a Full stack developer</span>
            <br />& UI/UX designer
          </h1>
          <p>
            Website designer with over 4+ years of experience crafting clean,
            modern, and user-friendly websites.
          </p>
          <div className={styles.buttons}>
            <a className="btn">
              View Portfolio
              <i>
                <FiArrowUpRight />
              </i>
            </a>
            <a className="btn btn-bg">Hire Now</a>
          </div>
          <div className={styles.logoslist}>
            <h3>Expertise in</h3>
            <div className={styles.logos}>
              <img src={htmllogo} alt="" />
              <img src={csslogo} alt="" />
              <img src={jslogo} alt="" />
              <img src={reactlogo} alt="" />
              <img src={nextlogo} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={myphoto} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
