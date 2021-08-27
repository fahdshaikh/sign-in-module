import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PlufoLogo from "../assets/I-logo.png";
import GoogleImg from "../assets/Google.png";
import FacebookImg from "../assets/Facebook.png";
import TwitterImg from "../assets/Twitter.png";
import {
  VpnKey as VpnKeyIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";
import GLargeDataBoxWithLabel from "../../../components/G-LargeDataBoxWithLabel";
import JTextButton from "../../../components/JTextButton";
import JMediumButton from "../../../components/JMediumButton";
import HSocilLogin from "../../../components/HSocilLogin";
import LoginFooter from "../../../components/LoginFooter";
import Group56500 from "../../../components/Group56500";
import Group56497Pic from "../assets/Group 56497.png";
import KeyIcon from "../assets/I-Password.svg";

const ResetPassword = (props) => {
  const { style } = props;

  const componentStyle = (theme) => {
    return {
      resetPasswordContainer: {
        height: "100vh",
      },
      resetPasswordForm: {
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
        },
        [theme.breakpoints.down("1200")]: {
          padding: "40px 0 40px",
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
        margin: "48px 0 0 0",
        [theme.breakpoints.down("1200")]: {
          margin: "40px 0 0 0",
        },
      },
      socialLoginDiv: {
        margin: "40px 0",
        width: "393px",
        height: "60px",
        [theme.breakpoints.down("1200")]: {
          width: "100%",
        },
      },
      resetPasswordPhoto: {
        // background: `${Group56500Pic} `,
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

  const [password, setPassword] = useState({
    value: "",
    error: false,
    type: "password",
    label: "Password",
    helperText: "Must be at least 8 characters with special keywords",
    name: "Username",
    placeholder: "Enter your password here",
    startIcon: <img src={KeyIcon} alt="KeyIcon" />,
    endIcon: <VisibilityIcon name="visibility" />,

    style: {
      GLargeDataBoxWithLabelContainer: {
        margin: "34px 0 0",
      },
      inputField: {
        // backgroundColor: "aqua",
        // "& p.MuiFormHelperText-root": {
        //   textAlign: "left",
        // },
      },
    },
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: false,
    type: "password",
    label: "Confirm Password",
    helperText: "Both passwords must match.",
    name: "Password",
    placeholder: "Enter your password here",
    startIcon: <img src={KeyIcon} alt="KeyIcon" />,
    endIcon: <VisibilityIcon name="visibility" />,

    style: {
      GLargeDataBoxWithLabelContainer: {
        margin: "32px 0 0",
      },
      inputField: {
        // backgroundColor: "aqua",
        // "& p.MuiFormHelperText-root": {
        //   textAlign: "left",
        // },
      },
    },
  });

  const [resetBtn, setResetBtn] = useState({
    name: "Reset Password",
    style: {
      JMediumButton: {
        width: "100%",
        "@media(max-width: 1200px)": {
          font: "normal normal bold 18px/24px Nunito",
          height: "48px",
          borderRadius: "12px",
        },
      },
    },
  });

  const handleReset = () => {
    console.log("handleReset");
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.name);
    if (e.target.value.length < 8)
      setPassword({
        ...password,
        value: e.target.value,
        error: true,
        helperText: "Password must have 1 number and min 8 character length",
      });
    else
      setPassword({
        ...password,
        value: e.target.value,
        error: false,
        helperText: "",
      });
  };

  const handleConfirmPasswordChange = (e) => {
    console.log(e.target.name);
    if (e.target.value !== password.value)
      setConfirmPassword({
        ...confirmPassword,
        value: e.target.value,
        error: true,
        helperText: "Does not match with above Password",
      });
    else
      setConfirmPassword({
        ...confirmPassword,
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
    <div className={clsx(classes.resetPasswordContainer)}>
      <Grid container className={clsx(classes.resetPasswordForm)}>
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
              Reset Password?
            </Typography>
            <Typography variant="h5" className={clsx(classes.formSubTitle2)}>
              Your new password must be different from previous used password.
            </Typography>
            <GLargeDataBoxWithLabel
              onChange={handlePasswordChange}
              data={password}
            />
            <GLargeDataBoxWithLabel
              onChange={handleConfirmPasswordChange}
              data={confirmPassword}
            />

            <div className={clsx(classes.signInOptionDiv)}>
              <JMediumButton data={resetBtn} handleOnClick={handleReset} />
            </div>
            <div className={clsx(classes.socialLoginDiv)}>
              <HSocilLogin data={HSocialData} />
            </div>
            <LoginFooter
              style={{
                LoginFooterContainer: {
                  // margin: "76px 0 0 ",
                },
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={clsx(classes.resetPasswordPhoto)}>
          <Group56500 data={Group56500Data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPassword;
