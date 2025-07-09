import React from "react";
import styles from "./PortfolioCard.module.css";
import testimg from "../../assets/images/coding.jpg";
import { FiLink } from "react-icons/fi";

function PortfolioCard({ image, title, tags, link }) {
  return (
    <div className={styles.portfolioCard}>
      <div className={styles.image}>
        <img src={image} alt="Frontend UI Design" />
        <div className={styles.hoverCard}>
          <a href={link} className="btn">
            <i className={styles.linkIcon}>
              <FiLink />
            </i>
            {title}
          </a>
        </div>
      </div>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span className={styles.tag} key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PortfolioCard;
