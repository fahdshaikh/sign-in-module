import { Button } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const componentStyle = {
  //   VideoContainer: {
  //     minWidth: "min-content",
  //     padding: "10px",
  //     backgroundColor: "aqua",
  //   },
  VideoFrame: {
    border: "none",
    borderRadius: "20px",
    backgroundColor: "aqua",
    padding: "10px",
    width: "-webkit-fill-available",
    height: "-webkit-fill-available",
  },
};
const useStyles = makeStyles(() => componentStyle);

const JVideo = (props) => {
  const { data: { buttonText, style } = {} } = props;
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
    <iframe
      // src="https://www.youtube.com/embed/i9MgCZvMdNU?autoplay=0&mute=1"
      src="https://www.w3schools.com/"
      className={clsx([classes.VideoFrame])}
      title="youtube"
    />
    // <div className={clsx([classes.VideoContainer])}>
    // </div>
  );
};

export default JVideo;
