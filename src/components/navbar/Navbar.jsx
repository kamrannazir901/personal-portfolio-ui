import React, { useState, useEffect, useRef } from "react";
import myphoto from "../../assets/images/myphoto.jpeg";
import cv from "../../pdf/Web Developer CV.pdf";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

import styles from "./Navbar.module.css";

function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setMenuState(false);
        menuRef.current?.classList.remove(styles.hideImmediate);
      } else {
        menuRef.current?.classList.add(styles.hideImmediate);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const toggleMenu = () => {
    setMenuState((prev) => !prev);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={myphoto} alt="" className={styles.logoimg} />
      </div>
      <div
        className={`${styles.menu} ${menuState ? styles.open : ""}`}
        ref={menuRef}
      >
        <a href="#about">About me</a>
        <a href="#portfolio">Projects</a>
        <a href={cv} download>
          Resume
        </a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles.icons}>
        <a href="#" className="icon">
          <FaGithub />
        </a>
        <a href="#" className="icon">
          <FaLinkedinIn />
        </a>
        <a href="#" className={`${styles.menuicon} icon`} onClick={toggleMenu}>
          <RiMenu3Fill />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
