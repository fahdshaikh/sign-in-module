import { Button } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const componentStyle = {
  JTextButton: {
    minWidth: "min-content",
    padding: "0px",
    textTransform: "none",
    color: "#2A5583",
    font: "normal normal bold 18px/24px Nunito",
    letterSpacing: "0px",
    opacity: 1,
    "&:hover": {
      color: "#EE7F25",
      backgroundColor: "transparent",
    },
  },
};
const useStyles = makeStyles(() => componentStyle);

const JTextButton = (props) => {
  const { data: { buttonText, style } = {}, handleClick } = props;
  const importedStyles = makeStyles(() => ({
    ...overrideStyleObj(),
  }));

  const overrideStyleObj = () => {
    let temp;
    if (style !== undefined)
      for (const key in style)
        for (const key1 in componentStyle)
          if (key === key1) {
            temp = {
              ...temp,
              [key]: { ...componentStyle[key], ...style[key] },
            };
          }

    return temp;
  };
  const classes = { ...useStyles(), ...importedStyles() };

  return (
    <Button
      size="small"
      className={clsx([classes.JTextButton])}
    // onClick={() => handleClick()}
    >
      {buttonText !== undefined ? buttonText : ""}
    </Button>
  );
};

export default JTextButton;
