import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Call as CallIcon } from "@material-ui/icons";
import JTextButton from "../../../components/JTextButton";
import JMediumButton from "../../../components/JMediumButton";
import LoginFooter from "../../../components/LoginFooter";
import Group56500 from "../../../components/Group56500";
import Group56497Pic from "../assets/Group 56497.png";
import OtpInput from "react-otp-input";
import PlufoLogo from "../assets/I-logo@2x.png";

const ConfirmOtp = (props) => {
  const { style } = props;

  const componentStyle = (theme) => {
    return {
      verifyOtpContainer: {
        height: "100vh",
      },
      verifyOtpForm: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("770")]: {
          maxWidth: "100%",
          flexBasis: "100%",
        },
      },
      formContainer: {
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
          padding: "35px 0 35px",
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
      formSubTitle: {
        textAlign: "left",
        font: "normal normal bold 24px/32px Nunito",
        letterSpacing: "0px",
        [theme.breakpoints.down("1200")]: {
          font: "normal normal bold 18px/24px Nunito",
          letterSpacing: "-0.22px",
        },
      },
      shareOtpText: {
        color: "#EE7F25",
        margin: "40px 0 16px 0",
        textAlign: "left",
        font: "normal normal bold 24px/26px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          margin: "40px 0 25px 0",
          font: "normal normal 600 16px/24px Nunito",
        },
      },
      normalText: {
        margin: "0 0 16px",
        textAlign: "left",
        font: "normal normal normal 20px/26px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          margin: "0 0 8px",
          font: "normal normal normal 14px/19px Nunito",
        },
      },
      callIcon: {
        color: "#EC8130",
        margin: "0 9px 0 19px",
        height: "18px",
        width: "18px",
        [theme.breakpoints.down("1200")]: {
          margin: "0 9px 0 10px",
          height: "14px",
          width: "14px",
        },
      },
      otpPinContainer: {
        backgroundColor: "#f7f7fc",
        // backgroundColor: "aqua",
        padding: "16px 0",
        borderRadius: "20px",
        boxSizing: "border-box",
        margin: "16px 0 0 0",
        [theme.breakpoints.down("1200")]: {
          margin: "24px 0 0 0",
          padding: "10px 0",
        },
      },
      otpError: {
        border: "1px solid #E52A33",
      },
      eachOtpPin: {
        // margin: "0 2px",
        width: "calc(100% / 6)",
      },
      eachOtpPinError: {
        "& input": {
          color: "#E02E2E",
        },
      },
      eachInput: {
        width: "100% !important",
        height: "32px",
        margin: "0 2px",
        borderRadius: "10px",
        border: "none",
        color: "#2A5583",
        backgroundColor: "#f7f7fc",
        // borderRight: "1px solid red",
        textAlign: "left",
        font: "normal normal 600 20px/26px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          height: "28px",
          font: "normal normal 600 18px/26px Nunito"
        },
      },
      pinInputFocus: {
        outline: "none",
        // backgroundColor: "#fff",
      },
      otpSeperator: {
        border: "1px solid #fff",
        height: "25px",
        boxSizing: "border-box"
      },
      resendOtpText: {
        margin: "32px 0 0 0",
        color: "#2A5583",
        textAlign: "left",
        font: "normal normal bold 18px/24px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          font: "normal normal bold 14px/24px Nunito",
        },
      },
      invalidOtpText: {
        margin: "8px 0 0 0",
        color: "#FF0000",
        textAlign: "left",
        font: "normal normal normal 14px/19px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        // minHeight: "26px",
        padding: "0 0 0 20px",
        [theme.breakpoints.down("1200")]: {
          font: "normal normal normal 12px/16px Nunito",
        },
      },
      signInOptionDiv: {
        margin: "40px 0 0 0",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("1200")]: {
          flexDirection: "column",
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
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(12);
  const [otpError, setOtpError] = useState(false);

  // useEffect(() => {
  //   let myInterval = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }
  //     if (seconds === 0) {
  //       // setSeconds(10);
  //       // clearInterval(myInterval);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // }, [seconds]);

  const handleOTPChange = (otp1) => {
    setOtp(otp1);
  };

  const user = {
    number: "+1 (123) 87638903",
    email: "vedanshu.s@orchids.edu.in",
  };

  const resendOtpBtn = {
    buttonText: "Resend OTP",
    style: {
      JTextButton: {
        color: "#2A5583",
        textAlign: "left",
        font: "normal normal bold 18px/24px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        "&:hover": {
          color: "#2A5583",
          backgroundColor: "transparent",
        },
        "@media(max-width: 1200px)": {
          font: "normal normal bold 14px/24px Nunito",
        },
      },
    },
  };

  const handleResendOtp = () => {
    console.log("handleResendOtp");
  };

  const sendOtpBtn = {
    name: "Send OTP",
    style: {
      JMediumButtonContainer: {},
      JMediumButton: {
        font: "normal normal bold 24px/26px Nunito",
        backgroundColor: "#E02E2E",
        "&:hover": {
          backgroundColor: "#EE7F25",
        },
        "@media(max-width: 1200px)": {
          width: "100%",
          height: "48px",
          font: "normal normal 800 18px/24px Nunito",
          borderRadius: "12px",
        },
      },
    },
  };

  const handleSendOtp = () => {
    console.log("handleSendOtp");
    if (otp.length < 6 || otp !== "123456") {
      setOtpError(true);
    } else {
      setOtpError(false);
    }
  };

  const notMyNumBtn = {
    buttonText: "Not my phone number?",
    style: {
      JTextButton: {
        color: "#E52A33",
        "@media(max-width: 1200px)": {
          font: "normal normal 600 16px/22px Nunito",
          margin: "20px 0 0",
        },
      },
    },
  };

  const handleNotMyNum = () => {
    console.log("handleNotMyNum");
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
    <div className={clsx(classes.verifyOtpContainer)}>
      <Grid container className={clsx(classes.verifyOtpForm)}>
        <Grid item xs={12} sm={6} className={clsx(classes.formContainer)}>
          <div className={clsx("mainFormDiv")}>
            <img
              src={PlufoLogo}
              alt="plufo"
              className={clsx(classes.plufoIcon)}
            />
            <Typography className={clsx(classes.formTitle)}>
              Congratulations!
            </Typography>
            <Typography className={clsx(classes.formSubTitle)}>
              Your account is ready. You need to verify it.
            </Typography>
            <Typography className={clsx(classes.shareOtpText)}>
              Share your OTP
            </Typography>
            <Typography className={clsx(classes.normalText)}>
              An OTP has been shared on{" "}
              <CallIcon className={clsx(classes.callIcon)} /> {user.number}
            </Typography>
            <Typography className={clsx(classes.normalText)}>
              Please enter 6 digit OTP
            </Typography>

            <OtpInput
              value={otp}
              onChange={handleOTPChange}
              numInputs={6}
              isInputNum={true}
              shouldAutoFocus={true}
              className={clsx(classes.eachOtpPin, {
                [classes.eachOtpPinError]: otpError,
              })}
              containerStyle={clsx(classes.otpPinContainer, {
                [classes.otpError]: otpError,
              })}
              inputStyle={clsx(classes.eachInput)}
              focusStyle={clsx(classes.pinInputFocus)}
              separator={<div className={clsx(classes.otpSeperator)}></div>}
            />
            <Typography className={clsx(classes.invalidOtpText)}>
              {otpError ? "Invalid OTP" : ""}
            </Typography>
            <Typography className={clsx(classes.resendOtpText)}>
              <JTextButton data={resendOtpBtn} handleClick={handleResendOtp} />
              {seconds ? ` after ${seconds} seconds` : ""}
            </Typography>
            <div className={clsx(classes.signInOptionDiv)}>
              <JMediumButton data={sendOtpBtn} handleOnClick={handleSendOtp} />
              <JTextButton data={notMyNumBtn} handleClick={handleNotMyNum} />
            </div>
            <br />
            <LoginFooter
              style={{
                LoginFooterContainer: {
                  margin: "18px 0 0 ",
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

export default ConfirmOtp;
