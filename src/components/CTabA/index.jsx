import { Button } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const CTabA = (props) => {
  const { data: { tabData, style } = {}, activeTab, setActiveTab } = props;

  const componentStyle = {
    CTabAContainer: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: "10px",
      display: "flex",
      //   justifyContent: "space-between",
      overflow: "scroll",
      "&::-webkit-scrollbar ": {
        display: "none",
      },
    },
    eachTabButton: {
      //   width: `calc((100% / ${tabData.length}) - 3px)`,
      //   width: `calc(100% / ${tabData.length})`,
      minWidth: "150px",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "rgba(14, 82, 163, 0.5)",
      },
    },
    eachTabButtonActive: {
      backgroundColor: "#0E52A3",
      color: "#fff",
      "&:hover": {
        backgroundColor: "rgba(14, 82, 163, 0.9)",
      },
    },
    spaceBetweenEachTabButton: {},
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

  return (
    <div className={clsx([classes.CTabAContainer])}>
      {tabData &&
        tabData.map((eachData, index) => {
          return (
            <Button
              //   variant="contained"
              fullWidth
              key={index}
              onClick={() => setActiveTab(eachData.value)}
              startIcon={eachData.icon}
              className={clsx([classes.eachTabButton], {
                [classes.eachTabButtonActive]: eachData.value === activeTab,
                [classes.spaceBetweenEachTabButton]:
                  index !== 0 && index !== tabData.length - 1,
              })}
            >
              {eachData.text}
            </Button>
          );
        })}
    </div>
  );
};

export default CTabA;
