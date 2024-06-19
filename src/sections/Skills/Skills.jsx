import React from "react";
import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="JavaScript" />
        <SkillList skill="TypeScript" />
        <SkillList skill="NodeJs" />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList skill="Rect" />
        <SkillList skill="Angular" />
        <SkillList skill="Vue" />
        <SkillList skill="Tailwind CSS" />
        <SkillList skill="ExpressJs" />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList skill="Redux" />
        <SkillList skill="Git" />
        <SkillList skill="Webpack" />
        <SkillList skill="Jest" />
        <SkillList skill="Bootstrap" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
