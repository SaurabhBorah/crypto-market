import React from "react";
import classes from "./SelectButton.module.css";

const SelectButton = ({ children, onClick, selected }) => {
  return (
    <span
      className={classes.selectButton}
      style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default SelectButton;
