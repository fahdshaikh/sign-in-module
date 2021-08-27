import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PlufoLogo from "../assets/I-logo.png";
import {
  NatureOutlined as NatureOutlinedIcon,
  VpnKey as VpnKeyIcon,
  Visibility as VisibilityIcon,
  Warning as WarningIcon,
  SchoolOutlined as SchoolOutlinedIcon,
  ArrowBack as ArrowBackIcon,
  Mail as MailIcon,
  Call as CallIcon,

  ChildCare as ChildCareIcon,
  SupervisorAccount as SupervisorAccountIcon,
} from "@material-ui/icons";
import GLargeDataBoxWithLabel from "../../../components/G-LargeDataBoxWithLabel";
import JTextButton from "../../../components/JTextButton";
import JMediumButton from "../../../components/JMediumButton";
import LoginFooter from "../../../components/LoginFooter";
import Group56500 from "../../../components/Group56500";
import Group56497Pic from "../assets/Group 56497.png";
import GDropDownWithLabel from "../../../components/GDropDownWithLabel";
import UserIcon from "../assets/I-User.svg";
import GradeIcon from "../assets/I-Grade.svg";
import DropDownIcon from "../assets/I-Drop Down.svg";

const Registration = (props) => {
  const { style } = props;

  const componentStyle = (theme) => {
    return {
      registrationContainer: {
        height: "100vh",
      },
      registrationForm: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("770")]: {
          maxWidth: "100%",
          flexBasis: "100%",
        },
      },
      formContainer: {
        // position: "relative",
        padding: "0px 30px",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        "& div.mainStep1Div": {
          width: "537px",
          margin: "15px 0 0",
          padding: "40px 0 40px",
          [theme.breakpoints.down("1200")]: {
            width: "348px",
            padding: "0",
            margin: "0"
          },
        },
        "& div.mainStep2Div": {
          padding: "40px 0 40px",
          marginTop: "10px",
          width: "537px",
          [theme.breakpoints.down("1200")]: {
            width: "348px",
            padding: "0",
            margin: "0"
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
          font: "normal normal 800 18px/24px Nunito",
        },
      },
      formSubTitle1: {
        margin: "29px 0 0",
        textAlign: "left",
        font: "normal normal bold 24px/32px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          margin: "37px 0 0",
        },
      },
      signInOptionDiv: {
        margin: "48px 0 40px ",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("1200")]: {
          margin: "40px 0",
        },
      },
      proceedToNext: {
        display: "flex",
        flexDirection: "column",
      },
      notRegisterText: {
        textAlign: "left",
        font: "normal normal 700 20px/26px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        [theme.breakpoints.down("1200")]: {
          font: "normal normal 600 16px/26px Nunito",
        },
      },
      backButton: {
        color: "#000000",
        width: "40px",
        height: "40px",
        [theme.breakpoints.down("1200")]: {
          width: "32px",
          height: "32px",
        },
      },
      registrationPhoto: {
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

  const [childName, setChildName] = useState({
    value: "",
    error: false,
    type: "text",
    label: "Name of Child",
    helperText: "",
    name: "ChildName",
    placeholder: "Enter Child's Full Name",
    startIcon: <ChildCareIcon style={{ color: "#89898B" }} fontSize="small" />,

    style: {
      GLargeDataBoxWithLabelContainer: {
        margin: "33px 0 0",
      },
    },
  });

  const [parentName, setParentName] = useState({
    value: "",
    error: false,
    type: "text",
    label: "Name of Parent",
    helperText: "",
    name: "ParentName",
    placeholder: "Enter Parent's Full Name",
    startIcon: <SupervisorAccountIcon style={{ color: "#89898B" }} fontSize="small" />,

    style: {
      GLargeDataBoxWithLabelContainer: {
        margin: "33px 0 0",
      },
    },
  });

  const [grade, setGrade] = useState({
    value: null,
    error: false,
    type: "text",
    label: "Child's Grade",
    helperText: "",
    name: "grade",
    placeholder: "Select Grade",
    startIcon: <img src={GradeIcon} alt="GradeIcon" />,
    dropIcon: <img src={DropDownIcon} alt="DropDownIcon" />,

    style: {
      GLargeDataBoxWithLabelContainer: {
        margin: "33px 0 0",
      },
      inputField: {
        // backgroundColor: "aqua",
        "& select": {
          color: "#2A5583",
        },
      },
    },
  });

  const proceedBtn = {
    name: window.screen.availWidth > 1200 ? "Proceed" : "Sign In",
    style: {
      JMediumButton: {
        width: "100%",
        font: "normal normal bold 20px/26px Nunito",
      },
    },
  };

  const [proceedToNext, setProceedToNext] = useState(false);

  const handleProceed = () => {
    console.log("handleProceed");
    let childCondition = false;
    let parentCondition = false;
    let gradeCondition = false;

    if (childName.value.length > 0) {
      childCondition = true;
    } else {
      setChildName({
        ...childName,
        error: true,
        helperText: "Child's name cannot be empty",
        endIcon: <WarningIcon style={{ color: "#f44336" }} fontSize="small" />,
      });
    }

    if (parentName.value.length > 0) {
      parentCondition = true;
    } else {
      setParentName({
        ...parentName,
        error: true,
        helperText: "Parent's name cannot be empty",
        endIcon: <WarningIcon style={{ color: "#f44336" }} fontSize="small" />,
      });
    }

    if (grade.value !== null) {
      gradeCondition = true;
    } else {
      setGrade({
        ...grade,
        error: true,
        helperText: "Child's Grade cannot be empty",
        endIcon: <WarningIcon style={{ color: "#f44336" }} fontSize="small" />,
      });
    }

    if (childCondition && parentCondition && gradeCondition) {
      setProceedToNext(true);
    }
  };

  const handleBack = () => {
    setProceedToNext(false);
  };

  const handleChildNameChange = (e) => {
    console.log(e.target.name);
    if (e.target.value.length < 1)
      setChildName({
        ...childName,
        value: e.target.value,
        error: true,
        helperText: "Child's name cannot be empty",
        endIcon: <WarningIcon style={{ color: "#f44336" }} fontSize="small" />,
      });
    else
      setChildName({
        ...childName,
        value: e.target.value,
        error: false,
        helperText: "",
        endIcon: undefined,
      });
  };

  const handleParentNameChange = (e) => {
    console.log(e.target.name);
    if (e.target.value.length < 1)
      setParentName({
        ...parentName,
        value: e.target.value,
        error: true,
        helperText: "min 6 char",
      });
    else
      setParentName({
        ...parentName,
        value: e.target.value,
        error: false,
        helperText: "",
        endIcon: undefined,
      });
  };

  const handleGradeChange = (e) => {
    console.log(e.target.value);
    if (e.target.value.length < 1)
      setGrade({
        ...grade,
        value: e.target.value,
        error: true,
        helperText: "Select Grade",
      });
    else
      setGrade({
        ...grade,
        value: e.target.value,
        error: false,
        helperText: "",
      });
  };

  const GradeOptions = [
    {
      value: 1,
      label: "Grade 1",
    },
    {
      value: 2,
      label: "Grade 2",
    },
    {
      value: 3,
      label: "Grade 3",
    },
    {
      value: 4,
      label: "Grade 4",
    },
  ];

  const [email, setEmail] = useState({
    value: "",
    error: false,
    type: "text",
    label: "Email",
    helperText: "",
    name: "email",
    placeholder: "Enter your email ID here",
    startIcon: <MailIcon name="startIcon" style={{ color: "#C5C5C9" }} />,

    style: {
      GLargeDataBoxWithLabelContainer: {
        margin: "24px 0 0",
        "@media(max-width: 1200px)": {
          margin: "26px 0 0",
        },
        label: {},
      },
      inputField: {
        // backgroundColor: "aqua",
        // "& p.MuiFormHelperText-root": {
        //   textAlign: "left",
        // },
      },
    },
  });

  const handleEmailChange = (e) => {
    console.log(e.target.name);
    if (e.target.value.length < 1)
      setEmail({
        ...email,
        value: e.target.value,
        error: true,
        helperText: "Email cannot be empty",
        endIcon: <WarningIcon style={{ color: "#f44336" }} fontSize="small" />,
      });
    else
      setEmail({
        ...email,
        value: e.target.value,
        error: false,
        helperText: "",
        endIcon: undefined,
      });
  };

  const [phone, setPhone] = useState({
    value: "",
    error: false,
    type: "text",
    label: "Phone",
    helperText: "",
    name: "phone",
    placeholder: "Enter your 10 digit phone number",
    startIcon: <CallIcon name="startIcon" style={{ color: "#C5C5C9" }} />,

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

  const handlePhoneChange = (e) => {
    console.log(e.target.name);
    if (e.target.value.length < 1)
      setPhone({
        ...phone,
        value: e.target.value,
        error: true,
        helperText: "Phone cannot be empty",
        endIcon: <WarningIcon style={{ color: "#f44336" }} fontSize="small" />,
      });
    else if (e.target.value.length !== 10)
      setPhone({
        ...phone,
        value: e.target.value,
        error: true,
        helperText: "Phone number should be 10 digit",
        endIcon: <WarningIcon style={{ color: "#f44336" }} fontSize="small" />,
      });
    else
      setPhone({
        ...phone,
        value: e.target.value,
        error: false,
        helperText: "",
        endIcon: undefined,
      });
  };

  const [password, setPassword] = useState({
    value: "",
    error: false,
    type: "password",
    label: "Password",
    helperText:
      "Password must have 1 special character, 1 numeric and minimum 8 character length",
    name: "Username",
    placeholder: "Enter your password here",
    startIcon: <VpnKeyIcon name="startIcon" style={{ color: "#C5C5C9" }} />,
    endIcon: <VisibilityIcon name="visibility" />,

    style: {
      GLargeDataBoxWithLabelContainer: {
        margin: "32px 0 0",
      },
      inputField: {
        // backgroundColor: "aqua",
        // "& p.MuiFormHelperText-root": {
        //   font: "normal normal normal 14px/24px Nunito",
        //   textAlign: "left",
        //   margin: "0",
        // },
      },
    },
  });

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

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: false,
    type: "password",
    label: "Confirm Password",
    helperText: "",
    name: "Confirm Password",
    placeholder: "Re-Enter your password",
    startIcon: <VpnKeyIcon name="startIcon" style={{ color: "#C5C5C9" }} />,
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

  const confirmBtn = {
    name: "Confirm",
    style: {
      JMediumButtonContainer: {
        margin: "40px 0 0",
      },
      JMediumButton: {
        // font: "normal normal bold 24px/26px Nunito",
        width: "100%",
        // "@media(max-width: 1200px)": {
        //   font: "normal normal bold 18px/26px Nunito",
        // },
      },
    },
  };

  const handleConfirm = () => {
    console.log("handleConfirm");
  };

  const loginBtn = {
    buttonText: "Click here to Login",
    style: {
      JTextButton: {
        font: "normal normal 600 20px/26px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        "@media(max-width: 1200px)": {
          font: "normal normal 600 16px/26px Nunito",
        },
        color: "#E52A33",
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
    <div className={clsx(classes.registrationContainer)}>
      <Grid container className={clsx(classes.registrationForm)}>
        <Grid item xs={12} sm={6} className={clsx(classes.formContainer)}>
          <div>
            {proceedToNext ? (
              <div className={clsx("mainStep2Div")}>
                <IconButton
                  size="small"
                  onClick={() => handleBack()}
                  className={clsx(classes.backButton)}
                >
                  <ArrowBackIcon className={clsx(classes.backButton)} />
                </IconButton>

                <Typography
                  variant="h6"
                  className={clsx(classes.formSubTitle1)}
                >
                  We need some more details!
                </Typography>
                <GLargeDataBoxWithLabel
                  onChange={handleEmailChange}
                  data={email}
                />
                <GLargeDataBoxWithLabel
                  onChange={handlePhoneChange}
                  data={phone}
                />
                <GLargeDataBoxWithLabel
                  onChange={handlePasswordChange}
                  data={password}
                />
                <GLargeDataBoxWithLabel
                  onChange={handleConfirmPasswordChange}
                  data={confirmPassword}
                />
                <JMediumButton
                  data={confirmBtn}
                  handleOnClick={() => handleConfirm()}
                />
              </div>
            ) : (
              <div className={clsx("mainStep1Div")}>
                <img
                  src={PlufoLogo}
                  alt="plufo"
                  className={clsx(classes.plufoIcon)}
                />
                <Typography className={clsx(classes.formTitle)}>
                  It all starts{" "}
                  <span className={clsx(classes.formTitle1)}>with you</span>
                </Typography>
                <Typography variant="h6" className={clsx(classes.formSubTitle)}>
                  {window.screen.availWidth > 1200
                    ? "Register now and explore the world of Plufo"
                    : "Sign in to continue"}
                </Typography>
                <GLargeDataBoxWithLabel
                  onChange={handleChildNameChange}
                  data={childName}
                />
                <GLargeDataBoxWithLabel
                  onChange={handleParentNameChange}
                  data={parentName}
                />

                <GDropDownWithLabel
                  onChange={handleGradeChange}
                  data={grade}
                  options={GradeOptions}
                />

                <div className={clsx(classes.signInOptionDiv)}>
                  <JMediumButton
                    data={proceedBtn}
                    handleOnClick={handleProceed}
                  />
                </div>
                <Typography className={clsx(classes.notRegisterText)}>
                  Already Registered?{" "}
                  <JTextButton data={loginBtn} handleClick={handleLogin} />
                </Typography>
              </div>
            )}
            <LoginFooter
              style={{
                LoginFooterContainer: {
                  margin: "48px 0 0",
                },
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={clsx(classes.registrationPhoto)}>
          <Group56500 data={Group56500Data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Registration;
