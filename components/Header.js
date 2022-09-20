import React from "react";
import headerStyles from "../styles/Header.module.css";
const Header = ({ title }) => {
  return (
    <>
      <h1 className={headerStyles.title}>{title}</h1>
    </>
  );
};

export default Header;
