import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Call as CallIcon, Mail as MailIcon } from "@material-ui/icons";
import JTextButton from "../../../components/JTextButton";
import JMediumButton from "../../../components/JMediumButton";
import LoginFooter from "../../../components/LoginFooter";
import Group56500 from "../../../components/Group56500";
import Group56497Pic from "../assets/Group 56497.png";
import PlufoLogo from "../assets/I-logo@2x.png";

const VerifyOtp = (props) => {
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
        margin: "0 0 24px 0",
        // display: "none",
        [theme.breakpoints.down("1200")]: {
          // display: "block",
          width: "130px",
          height: "50px",
        },
      },
      radioContainer: {
        margin: "40px 0 0",
      },
      radio: {
        margin: "0 0 40px",
        width: "100%",
        height: "64px",
        backgroundColor: "#f7f7fc",
        borderRadius: "20px",
        [theme.breakpoints.down("1200")]: {
          height: "48px",
        },
      },
      radio2: {
        [theme.breakpoints.down("1200")]: {
          margin: "0 0 32px",
        },
      },
      radioTextContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 0",
        font: "normal normal normal 20px/26px Nunito",
        [theme.breakpoints.down("1200")]: {
          font: "normal normal normal 14px/26px Nunito",
        },
      },
      insideRadioIcon: {
        margin: "0 5px 0 10px",
        height: "18px",
        width: "18px",
        [theme.breakpoints.down("1200")]: {
          height: "16px",
          width: "16px",
        },
      },
      radioIcon: {
        "& span div svg": {
          fontSize: "27px",
          color: "#4CA6E3",
          [theme.breakpoints.down("1200")]: {
            fontSize: "24px"
          },
        }
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
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          font: "normal normal bold 18px/24px Nunito",
          letterSpacing: "-0.22px",
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
  const [verifyUserOn, setVerifyUserOn] = useState("phone");

  const user = {
    number: "+1 (123) 8763 8903",
    email: "vedanshu.s@orchids.edu.in",
  };

  const handleVerifyUserOnChange = (event) => {
    setVerifyUserOn(event.target.value);
  };

  const notMyNumBtn = {
    buttonText: "Not my phone number?",
    style: {
      JTextButton: {
        color: "#E52A33",
        "@media(max-width: 1200px)": {
          font: "normal normal 600 16px/24px Nunito",
        },
      },
    },
  };

  const handleNotMyNum = () => {
    console.log("handleNotMyNum");
  };

  const notMyEmailBtn = {
    buttonText: "Not my email  id?",
    style: {
      JTextButton: {
        color: "#E52A33",
        margin: "32px 0 0 0",
        "@media(max-width: 1200px)": {
          font: "normal normal 600 16px/24px Nunito",
        },
      },
    },
  };

  const handleNotMyEmail = () => {
    console.log("handleNotMyEmail");
  };

  const [sendOtpBtn, setSendOtpBtn] = useState({
    name: "Send OTP",
    style: {
      JMediumButtonContainer: {
        margin: "40px 0 0 0",
      },
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

  const handleSendOtp = () => {
    console.log("handleSendOtp");
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
            <div>
              <RadioGroup
                value={verifyUserOn}
                onChange={handleVerifyUserOnChange}
                className={clsx(classes.radioContainer)}
              >
                <FormControlLabel
                  className={clsx(classes.radio)}
                  value="phone"
                  control={<Radio className={clsx(classes.radioIcon)} color="primary" />}
                  label={
                    <>
                      <div className={clsx(classes.radioTextContainer)}>
                        Text me on{"  "}
                        <CallIcon
                          fontSize="small"
                          className={clsx(classes.insideRadioIcon)}
                          style={{ color: "#EC8130" }}
                        />
                        {user.number}
                      </div>
                    </>
                  }
                />
                <FormControlLabel
                  className={clsx(classes.radio, classes.radio2)}
                  value="email"
                  control={<Radio className={clsx(classes.radioIcon)} color="primary" />}
                  label={
                    <>
                      <div className={clsx(classes.radioTextContainer)}>
                        Email it to{"  "}
                        <MailIcon
                          fontSize="small"
                          className={clsx(classes.insideRadioIcon)}
                          style={{ color: "#4CA6E3" }}
                        />
                        {user.email}
                      </div>
                    </>
                  }
                />
              </RadioGroup>
            </div>
            <JTextButton data={notMyNumBtn} handleClick={handleNotMyNum} />
            <br />
            <JTextButton data={notMyEmailBtn} handleClick={handleNotMyEmail} />
            <JMediumButton data={sendOtpBtn} handleOnClick={handleSendOtp} />
            <LoginFooter
              style={{
                LoginFooterContainer: {
                  margin: "60px 0 0",
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

export default VerifyOtp;
