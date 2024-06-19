import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme == "light" ? githubLight : githubDark;
  const githubIcon = theme == "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme == "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Image" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Theme Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Abhishek Kumar</h1>
        <h2>MERN & Java Full Stack Developer</h2>
        <span>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhisingh12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a
            href="https://github.com/Abhis-45"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am Abhishek Kumar. I have completed my 4 years Graduation program in
          Computer Science Currently I am looking for job opportunities. I Have
          done a 3 months internship and have good technical skills and
          analytical skills. My skills are Java, Data Structures & Algorithms,
          Objects & Design, Computer Organization & Programming, Object-Oriented
          Programming, Web Development, Database Management. and also
          Participated in various cultural and technical events, showcasing
          teamwork and leadership skills.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
