import clsx from "clsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Group56500Pic from "../../assets/image/Group 56500.png";

const componentStyle = {
  Group56500Container: {
    width: "-webkit-fill-available",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Group56500ContainerBackground: {
    width: "-webkit-fill-available",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    // inset: "0 0 0 0",
  },
};
const useStyles = makeStyles(() => componentStyle);

const Group56500 = (props) => {
  const { data: { image } = {}, style } = props;
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
    <div className={clsx([classes.Group56500Container])}>
      <img
        src={Group56500Pic}
        alt="Group56500Pic"
        className={clsx([classes.Group56500ContainerBackground])}
      />
      {image}
    </div>
  );
};

export default Group56500;
