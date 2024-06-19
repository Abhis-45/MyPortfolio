import React from "react";
import checkMarkIconDark from "../assets/checkmark-dark.svg";
import checkMarkIconLight from "../assets/checkmark-light.svg";
import { useTheme } from "../common/ThemeContext";

function SkillList({ skill }) {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <span>
      <img src={checkMarkIcon} alt="Checkmark Icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
