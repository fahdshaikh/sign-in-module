import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PlufoLogo from "../assets/I-logo.png";
import GoogleImg from "../assets/Google.png";
import FacebookImg from "../assets/Facebook.png";
import TwitterImg from "../assets/Twitter.png";
import {
  NatureOutlined as NatureOutlinedIcon,
  Warning as WarningIcon,
} from "@material-ui/icons";
import GLargeDataBoxWithLabel from "../../../components/G-LargeDataBoxWithLabel";
import JTextButton from "../../../components/JTextButton";
import JMediumButton from "../../../components/JMediumButton";
import HSocilLogin from "../../../components/HSocilLogin";
import LoginFooter from "../../../components/LoginFooter";
import Group56500 from "../../../components/Group56500";
import Group56497Pic from "../assets/Group 56497.png";
import UserIcon from "../assets/I-User.svg";

const ForgotPassword = (props) => {
  const { style } = props;

  const componentStyle = (theme) => {
    return {
      forgotPasswordContainer: {
        height: "100vh",
      },
      forgotPasswordForm: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("770")]: {
          maxWidth: "100%",
          flexBasis: "100%",
        },
      },
      formContainer: {
        // padding: "40px 0 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& div.mainFormDiv": {
          width: "537px",
          [theme.breakpoints.down("1200")]: {
            width: "348px",
          },
          [theme.breakpoints.down("770")]: {
            width: "348px",
          },
        },
        [theme.breakpoints.down("1200")]: {
          padding: "40px 0 50px",
        },
      },
      plufoIcon: {
        width: "213px",
        height: "81px",
        margin: "0 0 22px 0",
        [theme.breakpoints.down("1200")]: {
          width: "130px",
          height: "50px",
        },
      },
      formTitle: {
        color: "#2A5583",
        textAlign: "left",
        font: "normal normal 900 40px/40px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          font: "normal normal 900 28px/28px Nunito",
          letterSpacing: "-0.84px",
        },
      },
      formTitle1: {
        color: "#2A5583",
        textAlign: "left",
        font: "normal normal 900 40px/40px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          font: "normal normal 900 28px/28px Nunito",
          letterSpacing: "-0.84px",
        },
      },
      formSubTitle: {
        textAlign: "left",
        font: "normal normal bold 24px/32px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          font: "normal normal bold 18px/24px Nunito",
        },
      },
      formSubTitle2: {
        margin: "32px 0 0",
        font: "normal normal normal 18px/30px Nunito",
        letterSpacing: "0px",
        color: "#000000",
        [theme.breakpoints.down("1200")]: {
          font: "normal normal normal 16px/24px Nunito",
        },
      },
      signInOptionDiv: {
        margin: "40px 0 0",
        display: "flex",
        flexDirection: "column",
      },
      rememberPasswordText: {
        textAlign: "center",
        margin: "32px 0 0",
        font: "normal normal bold 18px/24px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          font: "normal normal bold 16px/22px Nunito",
        },
      },
      socialLoginDiv: {
        // width: "-webkit-fill-available",
        margin: "47px 0 0",
        width: "393px",
        [theme.breakpoints.down("1200")]: {
          width: "100%",
        },
      },
      forgotPasswordPhoto: {
        [theme.breakpoints.down("770")]: {
          display: "none",
        },
      },
    };
  };

  const useStyles = makeStyles((theme) => componentStyle(theme));
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

  const [userName, setUserName] = useState({
    value: "",
    error: false,
    type: "text",
    label: "User Id",
    helperText: "",
    name: "Username",
    placeholder: "Enter your username",
    startIcon: <img src={UserIcon} alt="UserIcon" />,

    style: {
      lebel: {
        marginTop: "32px",
      },
      inputField: {
        // backgroundColor: "aqua",
        "& p.MuiFormHelperText-root": {
          textAlign: "right",
        },
      },
    },
  });

  const [sendBtn, setSendBtn] = useState({
    name: "Send",
    style: {
      JMediumButton: {
        width: "100%",
        height: "64px",
        borderRadius: "12px",
        backgroundColor: "#E02E2E",
        font: "normal normal bold 20px/26px Nunito",
        "&:hover": {
          backgroundColor: "#EE7F25",
        },
        "@media(max-width: 1200px)": {
          font: "normal normal bold 18px/24px Nunito",
          height: "48px",
          borderRadius: "12px",
        },
      },
    },
  });
  const handleSend = () => {
    console.log("handleSend");
  };

  const handleUserNameChange = (e) => {
    console.log(e.target.name);
    if (e.target.value.length < 6)
      setUserName({
        ...userName,
        value: e.target.value,
        error: true,
        helperText: "Username cannot be empty",
        endIcon: <WarningIcon style={{ color: "#f44336" }} fontSize="small" />,
      });
    else
      setUserName({
        ...userName,
        value: e.target.value,
        error: false,
        helperText: "",
      });
  };

  const HSocialData = {
    googleImg: (
      <img src={GoogleImg} alt="GoogleImg" className="login-method-pic" />
    ),
    googleHref: "https://www.google.in",
    facebookImgImg: (
      <img src={FacebookImg} alt="FacebookImg" className="login-method-pic" />
    ),
    facebookHref: "https://www.google.in",
    twitterImg: (
      <img src={TwitterImg} alt="TwitterImg" className="login-method-pic" />
    ),
    twitterHref: "https://www.google.in",
    style: {
      HSocilLoginContainer: {
        margin: "15px 0",
      },
    },
  };

  const loginBtn = {
    buttonText: "Login",
    style: {
      JTextButton: {
        margin: "-2px 0 0",
        color: "#FF0000",
        font: "normal normal bold 18px/24px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        "&:hover": {
          color: "#EE7F25",
          backgroundColor: "transparent",
        },
        "@media(max-width: 1200px)": {
          font: "normal normal bold 16px/22px Nunito",
        },
      },
    },
  };

  const handleLogin = () => {
    console.log("handleLogin");
  };

  const Group56500Data = {
    image: (
      <img
        src={Group56497Pic}
        alt="image"
        style={{
          width: "40vw",
          height: "40vw",
          zIndex: "1",
        }}
      />
    ),
  };

  return (
    <div className={clsx(classes.forgotPasswordContainer)}>
      <Grid container className={clsx(classes.forgotPasswordForm)}>
        <Grid item xs={12} sm={6} className={clsx(classes.formContainer)}>
          <div className={clsx("mainFormDiv")}>
            <img
              src={PlufoLogo}
              alt="plufo"
              className={clsx(classes.plufoIcon)}
            />
            <Typography className={clsx(classes.formTitle)}>
              It all starts{" "}
              <span className={clsx(classes.formTitle1)}>with you</span>
            </Typography>
            <Typography variant="h5" className={clsx(classes.formSubTitle)}>
              Forgot Password?
            </Typography>
            <Typography variant="h5" className={clsx(classes.formSubTitle2)}>
              Enter your registered email below to receive password reset
              instructions.
            </Typography>
            <GLargeDataBoxWithLabel
              onChange={handleUserNameChange}
              data={userName}
            />

            <div className={clsx(classes.signInOptionDiv)}>
              <JMediumButton data={sendBtn} handleOnClick={handleSend} />
              <Typography className={clsx(classes.rememberPasswordText)}>
                Remember Password?{" "}
                <JTextButton data={loginBtn} handleClick={handleLogin} />
              </Typography>
            </div>
            <div className={clsx(classes.socialLoginDiv)}>
              <HSocilLogin data={HSocialData} />
            </div>
            <LoginFooter
              style={{
                LoginFooterContainer: {
                  margin: "45px 0 0",
                },
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={clsx(classes.forgotPasswordPhoto)}>
          <Group56500 data={Group56500Data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
