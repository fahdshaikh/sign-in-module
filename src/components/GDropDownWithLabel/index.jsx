import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import clsx from "clsx";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const componentStyle = {
  GLargeDataBoxWithLabelContainer: { flexGrow: 1 },
  lebel: {
    margin: "0 0 12px",
    font: "normal normal bold 16px/24px Nunito",
    letterSpacing: "0px",
    color: "#000000",
    "@media(max-width: 1200px)": {
      font: "normal normal bold 14px/19px Nunito",
    },
  },
  inputField: {
    borderRadius: "8px",
    marginTop: "4px",
    "& div select": {
      height: "39px",
      letterSpacing: "0px",
      font: "normal normal normal 18px/26px Nunito",
      "@media(max-width: 1200px)": {
        height: "36px",
        paddingTop: "6px",
        paddingBottom: "6px",
        font: "normal normal normal 16px/26px Nunito",
      },
    },
    "& fieldset": {
      // backgroundColor: "#F7F7FC",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderRadius: "20px",
      border: "1px solid #2A5583",
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
  dropIcon: {
    // border: "1px solid",
  },
};
const useStyles = makeStyles(() => componentStyle);

const GDropDownWithLabel = (props) => {
  const {
    data: {
      value,
      label,
      placeholder,
      helperText,
      error,
      startIcon,
      dropIcon,
      style,
      name,
    } = {},
    onChange,
    options,
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
    <div className={clsx(classes.GLargeDataBoxWithLabelContainer)}>
      <Typography variant="body2" className={clsx(classes.lebel)}>
        {label}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        margin="dense"
        className={clsx([classes.inputField])}
        InputProps={{
          startAdornment: startIcon !== undefined && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment:
            dropIcon !== undefined ? (
              <InputAdornment position="end">{dropIcon}</InputAdornment>
            ) : (
              <InputAdornment position="end">
                <ArrowDropDownIcon />
              </InputAdornment>
            ),
          disableUnderline: true,
        }}
        select
        name={name !== undefined && name}
        value={value !== undefined && value}
        placeholder={placeholder !== undefined && placeholder}
        onChange={(e) => onChange !== undefined && onChange(e)}
        error={error !== undefined && error}
        helperText={helperText !== undefined && helperText}
        onKeyPress={(e) => {
          console.log(e.key);
        }}
        SelectProps={{
          native: true,
          IconComponent: () => null,
        }}
      >
        <option value={null} disabled selected>
          {placeholder !== undefined && placeholder}
        </option>
        {options &&
          options.map((item, index) => {
            return (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            );
          })}
      </TextField>
    </div>
  );
};

export default GDropDownWithLabel;
