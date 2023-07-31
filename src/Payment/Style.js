import { styled } from "@mui/material/styles";
import { up } from "../Theme";

export const classes = {
  root: "root",
  btn: "btn",
  addIcon: "addIcon",
  filterIcon: "filterIcon",
  filterSelect: "filterSelect",
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    border: `1px solid ${theme.palette.secondaryBlack.light}`,
    borderRadius: "5px",
    [up("xs")]: {
      margin: "20px 23px",
    },
    [up("sm")]: {
      margin: "32px 32px",
    },
    [up("md")]: {
      margin: "25px 27px",
    },
    [up("lg")]: {
      margin: "30px 32px",
    },
    [up("xl")]: {
      margin: "32px 32px",
    },
    [up("xxl")]: {
      margin: "32px 40px",
    },
  },
  [`& .${classes.btn}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.main,
    color: "white",
    marginRight: "1vh",
    ":hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
    [up("xs")]: {
      width: "114px",
      height: "32.25px",
      // padding:"7.9px 8px"
    },
    [up("sm")]: {
      width: "128px",
      height: "35.3px",
      // padding:"7.9px 19px"
    },
    [up("md")]: {
      width: "134px",
      height: "35.9px",
      // padding:"8px 10px"
    },
    [up("lg")]: {
      width: "145px",
      height: "35px",
      // padding:"8px 12px"
    },
    [up("xl")]: {
      width: "175px",
      height: "39px",
      // padding:"7px 15px"
    },
    [up("xxl")]: {
      width: "190px",
      height: "41px",
      // padding:"6.5px 16px"
    },
  },
  [`& .${classes.addIcon}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [up("xs")]: {
      width: "14px",
      height: "14px",
    },
    [up("sm")]: {
      width: "15px",
      height: "15px",
    },
    [up("md")]: {
      width: "16px",
      height: "16px",
    },
    [up("lg")]: {
      width: "17px",
      height: "17px",
    },
    [up("xl")]: {
      width: "19px",
      height: "19px",
    },
    [up("xxl")]: {
      width: "20px",
      height: "20px",
    },
  },
  [`& .${classes.filterIcon}`]: {
    display: "flex",
    alignItems: "center",
    [up("xs")]: {
      width: "12px",
      height: "12px",
      marginRight: "6px",
    },
    [up("sm")]: {
      width: "13px",
      height: "13px",
      marginRight: "6px",
    },
    [up("md")]: {
      width: "17px",
      height: "17px",
      marginRight: "7px",
    },
    [up("lg")]: {
      width: "18px",
      height: "18px",
      marginRight: "8px",
    },
    [up("xl")]: {
      width: "18px",
      height: "21px",
      marginRight: "10px",
    },
    [up("xxl")]: {
      width: "18px",
      height: "21px",
      marginRight: "10px",
    },
  },
  [`& .${classes.filterSelect}`]: {
    // height: "55vh",
    // "& .MuiMenuItem-root": {
    //   "&:hover": {
    //     background: "rgba(30, 30, 30, 0.10)",
    //     color: "#1E1E1E",
    //   },
    //   "&.Mui-selected": {
    //     background: "rgba(159, 119, 235, 0.28)",
    //     color: "#1E1E1E",
    //   },
    //   "&.Mui-selected:hover": {
    //     background: "rgba(159, 119, 235, 0.28)",
    //     color: "#1E1E1E",
    //   },
    // },
    // "& .MuiSelect-root": {
    //   // Add the desired height to the select container
    //   height: "55vh", // Adjust the height as needed
    // },
    // "& .MuiMenuItem-root": {
    //   "&:hover": {
    //     background: "rgba(30, 30, 30, 0.10)",
    //     color: "#1E1E1E",
    //   },
    //   "&.Mui-selected": {
    //     background: "rgba(159, 119, 235, 0.28)",
    //     color: "#1E1E1E",
    //   },
    //   "&.Mui-selected:hover": {
    //     background: "rgba(159, 119, 235, 0.28)",
    //     color: "#1E1E1E",
    //   },
    // },
    "& .MuiSelect-selectMenu": {
      height: "55vh",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        background: "rgba(30, 30, 30, 0.10)",
        color: "#1e1e1e",
      },
      "&.Mui-focused": {
        background: "rgba(159, 119, 235, 0.28)",
        color: "#1e1e1e",
      },
      "&.Mui-selected": {
        background: "rgba(159, 119, 235, 0.28)",
        color: "#1e1e1e",
      },
    },
    // height:"30vh",  
    // background:"yellow",
    // "&.MuiMenu":{
    //     // height: "30vh",
    //     boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
    //     "&::-webkit-scrollbar": {
    //       width: "0.4em",
    //     },
    //     "&::-webkit-scrollbar-track": {
    //       background: "#D9D9D9",
    //       borderRadius: "5px",
    //     },
    //     "&::-webkit-scrollbar-thumb": {
    //       background: "#868686",
    //       borderRadius: "5px",
    //     },
    // },
    fontFamily: "Heebo",
    fontWeight: 400,
    // ":hover" :{
    //   background:"rgba(30, 30, 30, 0.10)",
    //   color:"#1E1E1E"
    // },
    // "&.Mui-selected":{
    //  background:"rgba(159, 119, 235, 0.28)",
    //  color:"#1E1E1E"
    // },
    // "&.Mui-selected:hover":{
    //  backgroundColor: "rgba(159, 119, 235, 0.28)",
    //  color:"#1E1E1E"
    // }
  },
}));

