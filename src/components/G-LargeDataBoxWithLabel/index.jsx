import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import clsx from "clsx";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

const GLargeDataBoxWithLabel = (props) => {
  //   const { label, placeholder, type, style, startIcon, endIcon, onChange } =
  //     props;
  const {
    data: {
      value,
      label,
      placeholder,
      helperText,
      type,
      error,
      startIcon,
      endIcon,
      style,
      name,
      //   onChange,
    } = {},
    onChange,
  } = props;

  const componentStyle = {
    GLargeDataBoxWithLabelContainer: { flexGrow: 1 },
    lebel: {
      // fontWeight: "600",
      font: "normal normal bold 16px/24px Nunito",
      letterSpacing: "0px",
      color: "#000000",
      "@media(max-width: 1200px)": {
        font: "normal normal bold 14px/19px Nunito",
      },
    },
    inputField: {
      borderRadius: "8px",
      marginTop: "8px",
      "& input": {
        height: "39px",
        font: "normal normal normal 18px/28px Nunito",
        "@media(max-width: 1200px)": {
          height: "36px",
          paddingTop: "6px",
          paddingBottom: "6px",
          font: "normal normal normal 16px/22px Nunito",
        },
      },
      "& fieldset": {
        // backgroundColor: "#F7F7FC",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderRadius: "20px",
        // borderColor: "transparent !important",
        borderColor: error ? "#FF0000" : "transparent !important",
      },
      "& p.MuiFormHelperText-root": {
        font: "normal normal normal 14px/19px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        color: "#000000",
        "@media(max-width: 1200px)": {
          font: "normal normal normal 12px/16px Nunito",
        },
      },
      "& p.MuiFormHelperText-root.Mui-error": {
        color: "#FF0000",
        // textAlign: "right",
        font: "normal normal normal 14px/19px Nunito",
        letterSpacing: "0px",
        opacity: 1,
        margin: "0",
        padding: "0 0 0 20px",
        "@media(max-width: 1200px)": {
          font: "normal normal normal 12px/16px Nunito",
        },
      },
    },
  };

  const useStyles = makeStyles(() => componentStyle);
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

  const [inputType, setInputType] = useState(
    type !== undefined ? type : "text"
  );

  const toggleType = () => {
    if (inputType === "text") {
      setInputType("password");
    }
    if (inputType === "password") {
      setInputType("text");
    }
  };

  return (
    <div className={clsx(classes.GLargeDataBoxWithLabelContainer)}>
      <Typography variant="body2" className={clsx(classes.lebel)}>
        {label}
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        margin="dense"
        type={inputType}
        className={clsx([classes.inputField])}
        InputProps={{
          startAdornment: startIcon !== undefined && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon !== undefined && (
            <InputAdornment position="end">
              {endIcon !== undefined && endIcon.props.name === "visibility" ? (
                inputType === "text" ? (
                  <IconButton onClick={toggleType}>
                    <VisibilityIcon style={{ color: "rgba(0,0,0, 0.3)" }} />
                  </IconButton>
                ) : (
                  <IconButton onClick={toggleType}>
                    <VisibilityOffIcon style={{ color: "rgba(0,0,0, 0.3)" }} />
                  </IconButton>
                )
              ) : (
                endIcon
              )}
            </InputAdornment>
          ),
          // style: style.inputField,
          disableUnderline: true,
        }}
        name={name !== undefined && name}
        value={value !== undefined ? value : ""}
        placeholder={placeholder !== undefined && placeholder}
        onChange={(e) => onChange !== undefined && onChange(e)}
        error={error !== undefined && error}
        helperText={helperText !== undefined && helperText}
        onKeyPress={(e) => {
          console.log(e.key);
        }}
      />
    </div>
  );
};

export default GLargeDataBoxWithLabel;
