import clsx from "clsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";

const componentStyle = (theme) => {
  return {
    HSocilLoginContainer: {
      flexGrow: 1,
      display: "flex",
      justifyContent: " space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      // fontWeight: 800,
      font: "normal normal bold 18px/24px Nunito",
      letterSpacing: "0px",
      opacity: 1,
      [theme.breakpoints.down("1200")]: {
        font: "normal normal 800 18px/24px Nunito",
      },
    },
    eachMethod: {
      "& .login-method-pic ": {
        height: "60px",
        width: "60px",
        borderRadius: "30px",
        [theme.breakpoints.down("1200")]: {
          height: "48px",
          width: "48px",
        },
      },
    },
  };
};

const useStyles = makeStyles((theme) => componentStyle(theme));

const HSocilLogin = (props) => {
  const {
    data: {
      googleImg,
      facebookImgImg,
      twitterImg,
      style,
      googleHref,
      facebookHref,
      twitterHref,
    } = {},
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
    <div className={clsx([classes.HSocilLoginContainer])}>
      <Typography className={clsx([classes.title])}>Or Login using</Typography>
      <div className="login-different-methods">
        <IconButton
          size="small"
          className={clsx([classes.eachMethod], "login-method-google ")}
          onClick={() => window.open(googleHref)}
        >
          {googleImg}
        </IconButton>
        <IconButton
          size="small"
          className={clsx([classes.eachMethod], "login-method-facebook ")}
          onClick={() => window.open(facebookHref)}
        >
          {facebookImgImg}
        </IconButton>
        <IconButton
          size="small"
          className={clsx([classes.eachMethod], "login-method-twitter ")}
          onClick={() => window.open(twitterHref)}
        >
          {twitterImg}
        </IconButton>
      </div>
    </div>
  );
};

export default HSocilLogin;
