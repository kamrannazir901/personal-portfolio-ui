import React from "react";
import styles from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import gmailicon from "../../assets/images/gmail.webp";
import whatsapp from "../../assets/images/whatsapp.png";
import fbicon from "../../assets/images/fbicon.png";
import instaicon from "../../assets/images/instaicon.png";
import LinkedInicon from "../../assets/images/linked-icon.webp";
import githubicon from "../../assets/images/githubicon.png";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-heading">Contact me</h2>
      <h3 className="section-subheading">
        <span className="p-color">Open to opportunities</span> — let's
        collaborate!
      </h3>
      <div className={styles.contactDiv}>
        <div className={styles.form}>
          <form action="">
            <div className={styles.inputgroup}>
              <span>
                <FaUserAlt />
              </span>
              <input type="text" placeholder="Name" autoComplete="1" />
            </div>
            <div className={styles.inputgroup}>
              <span>
                <MdEmail />
              </span>
              <input type="email" placeholder="Email" autoComplete="2" />
            </div>
            <div className={styles.inputgroup}>
              <span>
                <FaPhoneAlt />
              </span>
              <input type="phone" placeholder="Phone" autoComplete="3" />
            </div>
            <div className={styles.inputgroup}>
              <span>{/* <FaPhoneAlt /> */}</span>
              <textarea name="" id="" placeholder="Message"></textarea>
            </div>
            <input type="submit" placeholder="Phone" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
