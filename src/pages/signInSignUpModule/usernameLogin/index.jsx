import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PlufoLogo from "../assets/I-logo@2x.png";
import GoogleImg from "../assets/Google.png";
import FacebookImg from "../assets/Facebook.png";
import TwitterImg from "../assets/Twitter.png";
import {
  NatureOutlined as NatureOutlinedIcon,
  VpnKey as VpnKeyIcon,
  Visibility as VisibilityIcon,
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
import KeyIcon from "../assets/I-Password.svg";

const UsernameLogin = (props) => {
  const { style } = props;

  const componentStyle = (theme) => {
    return {
      usernameLoginContainer: {
        height: "100vh",
      },
      usernameLoginForm: {
        // border: "1px solid red",
        // boxSizing: "border-box",
        // padding: "20px 0 30px",
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
        [theme.breakpoints.down("1200")]: {
          font: "normal normal bold 18px/24px Nunito",
        },
      },
      signInOptionDiv: {
        // margin: "10px 0 0 0",
        display: "flex",
        justifyContent: "space-between",
        margin: "46px 0 0",
        [theme.breakpoints.down("1200")]: {
          margin: "38px 0 0",
        },
      },
      forgotPasswordDiv: {
        // margin: "10px 0 0 0",
        display: "flex",
        justifyContent: "space-between",
        margin: "56px 0 44px",
        [theme.breakpoints.down("1200")]: {
          flexDirection: "column",
          justifyContent: "center",
          margin: "44px 0 32px",
        },
      },
      rememberMeText: {
        "& span.MuiFormControlLabel-label": {
          textAlign: "left",
          font: "normal normal bold 18px/24px Nunito",
          letterSpacing: "0px",
          opacity: 1,
          [theme.breakpoints.down("1200")]: {
            font: "normal normal 600 16px/22px Nunito",
          },
        },
        "& span.MuiCheckbox-root": {
          color: "#2A55833E",
        },
        "& span.MuiCheckbox-root.Mui-checked": {
          color: "#2A55833E",
        },
        "& span span svg.MuiSvgIcon-root": {
          height: "32px",
          width: "32px",
        },
      },
      socialLoginDiv: {
        width: "393px",
        [theme.breakpoints.down("1200")]: {
          width: "100%",
        },
      },
      notRegisterText: {
        textAlign: "left",
        font: "normal normal 700 20px/26px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        margin: "60px 0 48px",
        [theme.breakpoints.down("1200")]: {
          width: "100%",
          margin: "40px 0 28px",
          font: "normal normal 600 16px/26px Nunito",
        },
      },
      usernameLoginPhoto: {
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
    // startIcon: <NatureOutlinedIcon name="startIcon" />,
    startIcon: <img src={UserIcon} alt="UserIcon" />,

    style: {
      lebel: {
        textAlign: "left",
        marginTop: "32px",
      },
    },
  });

  const [password, setPassword] = useState({
    value: "",
    error: false,
    type: "password",
    label: "Password",
    helperText: "",
    name: "password",
    placeholder: "Enter your Password here",
    // startIcon: <VpnKeyIcon name="startIcon" />,
    startIcon: <img src={KeyIcon} alt="KeyIcon" />,
    endIcon: <VisibilityIcon name="visibility" />,

    style: {
      lebel: {
        textAlign: "left",
        marginTop: "32px",
      },
    },
  });

  const [rememberMe, setRememberMe] = useState(false);

  const [signInBtn, setSignInBtn] = useState({
    name: "Sign In",
    style: {
      JMediumButton: {
        // font: "normal normal bold 20px/26px Nunito",
        // "@media(max-width: 1200px)": {
        //   width: "100%",
        //   height: "48px",
        //   font: "normal normal 800 18px/24px Nunito",
        // },
      },
    },
  });

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
        endIcon: undefined,
      });
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.name);
    if (e.target.value.length < 6)
      setPassword({
        ...password,
        value: e.target.value,
        error: true,
        helperText: "min 6 char",
      });
    else
      setPassword({
        ...password,
        value: e.target.value,
        error: false,
        helperText: " ",
      });
  };

  const signInOtp = {
    buttonText: "Sign In Via OTP",
    style: {
      JTextButton: {
        "@media(max-width: 1200px)": {
          font: "normal normal bold 16px/26px Nunito",
        },
        "&:hover": {
          color: "#EE7F25",
          backgroundColor: "transparent",
        },
      },
    },
  };

  const handleSignViaOtp = () => {
    console.log("handleSignViaOtp");
  };

  const forgotPassword = {
    buttonText: "Forgot Password?",
    style: {
      JTextButton: {
        // fontWeight: "600",
        font: "normal normal bold 18px/24px Nunito",
        // color: "#E52A33",
        color: "#FF0000",
        "@media(max-width: 1200px)": {
          margin: "32px 0 0",
          font: "normal normal 600 16px/22px Nunito",
        },
      },
    },
  };

  const handleForgotPassword = () => {
    console.log("forgotPassword");
  };

  const handleSignIn = () => {
    console.log("handleSignIn");
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
  };

  const registerBtn = {
    buttonText: "Click here to register",
    style: {
      JTextButton: {
        font: "normal normal 600 20px/26px Nunito",
        color: "#E52A33",
      },
    },
  };

  const handleRegister = () => {
    console.log("handleRegister");
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
    <div className={clsx(classes.usernameLoginContainer)}>
      <Grid container className={clsx(classes.usernameLoginForm)}>
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
            <Typography className={clsx(classes.formSubTitle)}>
              Sign in to their brighter future
            </Typography>
            <GLargeDataBoxWithLabel
              onChange={handleUserNameChange}
              data={userName}
            />
            <GLargeDataBoxWithLabel
              onChange={handlePasswordChange}
              data={password}
            />

            <div className={clsx(classes.signInOptionDiv)}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    name="rememberMe"
                    color="primary"
                  />
                }
                label="Remember Me"
                className={clsx(classes.rememberMeText)}
              />
              <JTextButton data={signInOtp} handleClick={handleSignViaOtp} />
            </div>
            <div className={clsx(classes.forgotPasswordDiv)}>
              <JMediumButton data={signInBtn} handleOnClick={handleSignIn} />

              <JTextButton
                data={forgotPassword}
                handleClick={handleForgotPassword}
              />
            </div>
            <div className={clsx(classes.socialLoginDiv)}>
              <HSocilLogin data={HSocialData} />
            </div>
            <Typography className={clsx(classes.notRegisterText)}>
              Not Registered?{" "}
              <JTextButton data={registerBtn} handleClick={handleRegister} />
            </Typography>
            <LoginFooter
              style={{
                LoginFooterContainer: {
                  margin: "54px 0 0 ",
                },
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={clsx(classes.usernameLoginPhoto)}>
          <Group56500 data={Group56500Data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default UsernameLogin;
