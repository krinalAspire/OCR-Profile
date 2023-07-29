import { styled } from "@mui/material/styles";
import { up } from "../Theme";

export const classes = {
  root: "root",
  MainTitle: "MainTitle",
  box: "box",
  title: "title",
  titlegrid: "titlegrid",
  IndividualGrid: "IndividualGrid",
  Icon: "Icon",
  btn: "btn",
  fontweight: "fontweight",
  Gridpadding: "Gridpadding",
  // content: "content",
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    // background:"yellow",
    [up("xs")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "83vh",
    },
    [up("sm")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "85vh",
    },
    [up("md")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "75vh",
    },
    [up("lg")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "75vh",
    },
    [up("xl")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "79vh",
    },
    [up("xxl")]: {
      marginLeft: "40px",
      marginRight: "40px",
      height: "81.5vh",
    },
    borderRadius: "5px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    overflow: "auto",
    // height: "70vh",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#D9D9D9",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#868686",
      borderRadius: "5px",
    },
  },
  [`& .${classes.MainTitle}`]: {
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  [`& .${classes.box}`]: {
    // background:"yellow"
    [up("xs")]: {
      margin: "15px 17px 15px 17px",
    },
    [up("sm")]: {
      margin: "16px 19px 16px 19px",
    },
    [up("md")]: {
      margin: "14px 19px 14px 19px",
    },
    [up("lg")]: {
      margin: "16px 20px 16px 20px",
    },
    [up("xl")]: {
      margin: "18px 23px 18px 23px",
    },
    [up("xxl")]: {
      margin: "20px 25px 20px 25px",
    },
  },
  [`& .${classes.title}`]: {
    color: "rgba(30, 30, 30, 0.60)",
    [up("xs")]: {
      marginBottom: "7px",
    },
    [up("sm")]: {
      marginBottom: "8px",
    },
    [up("md")]: {
      marginBottom: "9px",
    },
    [up("lg")]: {
      marginBottom: "10px",
    },
    [up("xl")]: {
      marginBottom: "11px",
    },
    [up("xxl")]: {
      marginBottom: "13px",
    },
  },
  [`& .${classes.titlegrid}`]: {
    borderRadius: "5px",
    background: "rgba(134, 134, 134, 0.10)",
    [up("xs")]: {
      marginBottom: "20px",
    },
    [up("sm")]: {
      marginBottom: "25px",
    },
    [up("md")]: {
      marginBottom: "30px",
    },
    [up("lg")]: {
      marginBottom: "35px",
    },
    [up("xl")]: {
      marginBottom: "40px",
    },
    [up("xxl")]: {
      marginBottom: "45px",
    },
  },
  [`& .${classes.IndividualGrid}`]: {
    [up("xs")]: {
      padding: "14px 0px 14px 14px",
    },
    [up("sm")]: {
      padding: "16px 0px 16px 16px",
    },
    [up("md")]: {
      padding: "18px 0px 18px 18px",
    },
    [up("lg")]: {
      padding: "20px 0px 20px 20px",
    },
    [up("xl")]: {
      padding: "22px 0px 22px 22px",
    },
    [up("xxl")]: {
      padding: "24px 0px 24px 24px",
    },
  },
  [`& .${classes.Icon}`]: {
    [up("xs")]: {
      width: "13px",
      height: "13px",
      marginTop: "1.6px",
    },
    [up("sm")]: {
      width: "15px",
      height: "15px",
      marginTop: "2.4px",
    },
    [up("md")]: {
      width: "18px",
      height: "18px",
      marginTop: "1.6px",
    },
    [up("lg")]: {
      width: "20px",
      height: "20px",
      marginTop: "3.2px",
    },
    [up("xl")]: {
      width: "22px",
      height: "22px",
      marginTop: "4.8px",
    },
    [up("xxl")]: {
      width: "24px",
      height: "24px",
      marginTop: "3.2px",
    },
    paddingRight: "16px",
  },
  [`& .${classes.btn}`]: {
    background: "rgba(134, 134, 134, 0.40)",
    color: "#1E1E1E",
    ":hover": {
      background: "rgba(134, 134, 134, 0.40)",
      color: "1E1E1E",
    },
    [up("xs")]: {
      width: "29vw",
      height: "4.5vh",
      marginBottom: "10px",
    },
    [up("sm")]: {
      width: "15vw",
      height: "3.5vh",
      margin: "20px 0px",
    },
    [up("md")]: {
      width: "14vw",
      height: "5vh",
      margin: "20px 0px",
    },
    [up("lg")]: {
      width: "13vw",
      height: "6vh",
      margin: "22px 0px",
    },
    [up("xl")]: {
      width: "12.5vw",
      height: "5.78vh",
      margin: "23px 0px",
    },
    [up("xxl")]: {
      width: "9.47vw",
      height: "5vh",
      margin: "24px 0px",
    },
  },
  [`& .${classes.fontweight}`]: {
    fontWeight: 500,
  },
  [`& .${classes.Gridpadding}`]: {
    paddingLeft: "37.6px",
  },
  // [`& .${classes.content}`]: {
  //   color: theme.palette.common.white,
  //   fontSize: 16,
  //   lineHeight: 1.7,
  // },
}));
