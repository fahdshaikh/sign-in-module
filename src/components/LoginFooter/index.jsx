import clsx from "clsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import JTextButton from "../JTextButton";

const componentStyle = {
  LoginFooterContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  LoginFooterText: {
    font: "normal normal normal 18px/30px Nunito",
    letterSpacing: "0px",
    opacity: 1,
    '@media(max-width: 1200px)' : {
      font: "normal normal normal 14px/24px Nunito",
    }
  },
};
const useStyles = makeStyles(() => componentStyle);

const LoginFooter = (props) => {
  const { style = {} } = props;
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
    <div className={clsx([classes.LoginFooterContainer])}>
      <Typography className={clsx([classes.LoginFooterText])}>
        Cannot Sign In?{" "}
        <JTextButton
          data={{
            buttonText: "Help & Support",
            style: {
              JTextButton: {
                color: "#E02E2E",
                font: "normal normal 600 18px/30px Nunito",
                letterSpacing: "0px",
                opacity: 1,
                "&:hover": {
                  color: "#EE7F25",
                  backgroundColor: "transparent",
                },
                '@media(max-width: 1200px)' : {
                  font: "normal normal normal 14px/24px Nunito",
                }
              },
            },
          }}
        />
      </Typography>
      <Typography className={clsx([classes.LoginFooterText])}>
        By proceeding, you agree to our{" "}
        <JTextButton
          data={{
            buttonText: "Terms and Conditions",
            style: {
              JTextButton: {
                color: "#E02E2E",
                font: "normal normal 600 18px/30px Nunito",
                letterSpacing: "0px",
                opacity: 1,
                "&:hover": {
                  color: "#EE7F25",
                  backgroundColor: "transparent",
                },
                '@media(max-width: 1200px)' : {
                  font: "normal normal normal 14px/24px Nunito",
                }
              },
            },
          }}
        />
      </Typography>
    </div>
  );
};

export default LoginFooter;
