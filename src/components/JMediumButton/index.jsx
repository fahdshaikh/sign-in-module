import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const componentStyle = {
  JMediumButtonContainer: {
    flexGrow: 1,
  },
  JMediumButton: {
    color: "#fff",
    backgroundColor: "#E02E2E",
    padding: "10px 20px",
    borderRadius: "20px",
    // fontWeight: "bold",
    letterSpacing: "0px",
    opacity: 1,
    width: "284px",
    height: "64px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#EE7F25",
    },
    font: "normal normal bold 20px/26px Nunito",
    "@media(max-width: 1200px)": {
      width: "100%",
      height: "48px",
      font: "normal normal 800 18px/24px Nunito",
      borderRadius: "12px",
    },
  },
};
const useStyles = makeStyles(() => componentStyle);

const JMediumButton = (props) => {
  const {
    data: { name, style, startIcon, endIcon },
    handleOnClick = {},
  } = props;

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
    <div className={clsx(classes.JMediumButtonContainer)}>
      <Button
        className={clsx(classes.JMediumButton)}
        onClick={() => handleOnClick !== undefined && handleOnClick(props.data)}
        startIcon={startIcon !== undefined && startIcon}
        endIcon={endIcon !== undefined && endIcon}
      >
        {name}
      </Button>
    </div>
  );
};

export default JMediumButton;
