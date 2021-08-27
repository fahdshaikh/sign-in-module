import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
// import Schedule from "../assets/"

const componentStyle = {
  header: {
    display: "flex",
    alignItems: "center",
  },
  headerPic: {
    padding: "8px",
    margin: "0 5px 0 0",
    backgroundColor: "white",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  headerConstant: {
    display: "flex",
    flexDirection: "column",
  },
  bolderText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "800",
  },
  normalText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "400",
  },
  italicNormalText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "400",
    fontStyle: "italic",
  },
  addColor: {
    color: "#2A5583",
  },
};

const useStyles = makeStyles(() => componentStyle);

const ComponentsHeading = (props) => {
  const { data: { heading, subheading, imageUrl, style } = {} } = props;

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
    <div className={clsx([classes.header])}>
      <div className={clsx([classes.headerPic])}>
        {/* <img
          src={
            imageUrl && require(`../assets/${imageUrl}`).default
            // require("../assets/" + (imageUrl || "image/schedule.png")).default
          }
          alt="logo"
        /> */}
        {imageUrl && imageUrl}
      </div>
      <div className={clsx([classes.headerConstant])}>
        <Typography className={clsx([classes.bolderText])}>
          {heading}
        </Typography>
        <Typography className={clsx([classes.normalText])}>
          {subheading}
        </Typography>
      </div>
    </div>
  );
};

export default ComponentsHeading;
