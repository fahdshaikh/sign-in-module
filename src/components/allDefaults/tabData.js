import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const tabData = {
  tabData: [
    {
      text: "Maths",
      value: "Maths",
      icon: <ArrowDropDownIcon />,
    },
    {
      text: "English",
      value: "English",
      icon: <ArrowDropDownIcon />,
    },
    {
      text: "Social Science",
      value: "Social Science",
      icon: <ArrowDropDownIcon />,
    },

    {
      text: "Science",
      value: "Science",
      icon: <ArrowDropDownIcon />,
    },
    {
      text: "Public Speaking",
      value: "Public Speaking",
      icon: <ArrowDropDownIcon />,
    },
  ],
  style: {
    CTabAContainer: {
      backgroundColor: "transparent",
    },
    spaceBetweenEachTabButton: {
      margin: "0 5px",
    },
    eachTabButton: {
      //   width: `calc((100% / ${tabData.length}) - 3px)`,
      // width: `calc(100% / ${tabData.length})`,
      //   minWidth: "150px",
      //   minWidth: "218px",
      height: "60px",
      backgroundColor: "#F7F7FC",
      borderRadius: "20px",
      color: "#2A5583",
      font: "normal normal bold 18px/12px Nunito",
      whiteSpace: "nowrap",
      letterSpacing: "0px",
      "&:hover": {
        backgroundColor: "#8E4E9F",
        color: "#fff",
      },
    },
    eachTabButtonActive: {
      backgroundColor: "#8E4E9F",
      color: "#fff",
      font: "normal normal bold 18px/12px Nunito",
      letterSpacing: "0px",
      "&:hover": {
        backgroundColor: "#8E4E9F",
        color: "#fff",
      },
    },
  },
};

export default tabData;
