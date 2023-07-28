import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import user from "./images/user.svg";
import mail from "./images/mail.svg";
import SelectButton from "./Select";
import layers from "./images/layers.svg";
import Progress from "./Progress";
import Nav from "./Nav";
import { up } from "./Theme";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

// const PREFIX = "MainBox";
const classes = {
  root: "root",
  MainTitle: "MainTitle",
  box: "box",
  title: "title",
  titlegrid: "titlegrid",
  IndividualGrid: "IndividualGrid",
  Icon: "Icon",
  btn: "btn",
  fontweight: "fontweight",
  Gridpadding:'Gridpadding'
  // content: "content",
};

const Root = styled(Box)(({ theme }) => ({
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
    fontFamily:'Poppins',
    fontWeight:600
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
    paddingLeft:"37.6px"
  },
  // [`& .${classes.content}`]: {
  //   color: theme.palette.common.white,
  //   fontSize: 16,
  //   lineHeight: 1.7,
  // },
}));

function NewProfile() {
  return (
    <>
      <Nav />
      <Typography
        variant="h5"
        // className={classes.MainTitle}
        sx={{
          fontSize: "Poppins",
          fontWeight: 600,
          margin: {
            xxl: "32px 43px 16px",
            xl: "27px 23px 14px",
            lg: "23px 23px 12px",
            md: "19px 23px 11px",
            sm: "18px 22px 8px",
            xs: "16px 21px 6px",
          },
        }}
      >
        Account Settings
      </Typography>
      <Root className={classes.root}>
        <Box
          className={classes.box}
          // mx={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
          // mt={{ xl: 2.8, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
        >
          <Typography variant="subtitle1" className={classes.title}>
            Change Password
          </Typography>

          <Grid
            container
            className={classes.titlegrid}
            columns={{ xs: 4, sm:12}}
          >
            <Grid item xs={5}>
              <Grid container className={classes.IndividualGrid}>
                <Grid item xs={1} align="center">
                  <Box className={classes.Icon}>
                    <img src={user} alt="user" />
                  </Box>
                </Grid>
                <Grid item xs={11} align="left">
                  <Typography
                    variant="body1"
                    className={classes.fontweight}
                    sx={{
                      color: "#1E1E1E",
                    }}
                  >
                    Pratik Patel
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "rgba(43, 43, 43, 0.80)",
                    }}
                  >
                    pratik.patel@aspiresoftserv.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.Gridpadding}>
              <Button className={classes.btn}>Change Password</Button>
            </Grid>
          </Grid>

          <Typography variant="subtitle1" className={classes.title}>
            Members
          </Typography>

          <Grid
            container
            sx={{
              background: "rgba(159, 119, 235, 0.10)",
              borderRadius: "5px",
            }}
            mb={{ xl: 1.3, lg: 1, md: 0.9, sm: 0.7, xs: 0.5 }}
            columns={{ xs: 4, sm: 12}}
          >
            <Grid item xs={5}>
              <Grid container className={classes.IndividualGrid}>
                <Grid item xs={1} align="center">
                  <Avatar
                    alt="Remy Sharp"
                    // src={selectedImage}
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    sx={{
                      marginRight: "16px",
                      width: {
                        xxl: 45,
                        xl: 35,
                        lg: 33,
                        md: 25,
                        sm: 20,
                        xs: 19,
                      },
                      height: {
                        xxl: 45,
                        xl: 35,
                        lg: 33,
                        md: 25,
                        sm: 20,
                        xs: 19,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={11} align="left">
                  <Typography
                    variant="subtitle1"
                    className={classes.fontweight}
                    sx={{
                      color: "#1E1E1E",
                    }}
                  >
                    Pratik Patel
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "rgba(43, 43, 43, 0.80)",
                    }}
                  >
                    pratik.patel@aspiresoftserv.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.Gridpadding} >
              <SelectButton label="Admin" />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              background: "rgba(134, 134, 134, 0.10)",
              borderRadius: "5px",
            }}
            columns={{ xs: 4, sm: 12}}
          >
            <Grid item xs={5}>
              <Grid container className={classes.IndividualGrid}>
                <Grid item xs={1} align="center">
                  <Box className={classes.Icon}>
                    <img src={mail} alt="mail" />
                  </Box>
                </Grid>
                <Grid item xs={11} align="left">
                  <Typography
                    variant="subtitle1"
                    className={classes.fontweight}
                    sx={{
                      color: "#1E1E1E",
                    }}
                  >
                    poonampavakar5632@gmail.com
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "rgba(43, 43, 43, 0.80)",
                    }}
                  >
                    Invited by Poonam Pavaskar. Expires 1 week from now
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.Gridpadding}>
              <SelectButton label="Members" />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              mb: {
                xxl: "45px",
                xl: "40px",
                lg: "35px",
                md: "30px",
                sm: "25px",
                xs: "20px",
              },
              mt: 1,
            }}
          >
            <Box>
              <AddIcon
                // onClick={handleSaveClick}
                sx={{
                  color: "#9F77EB",
                  cursor: "pointer",
                  width: {
                    xxl: "16px",
                    xl: "15px",
                    lg: "14px",
                    md: "13px",
                    sm: "12px",
                    xs: "11px",
                  },
                  height: {
                    xxl: "16px",
                    xl: "15px",
                    lg: "14px",
                    md: "13px",
                    sm: "12px",
                    xs: "11px",
                  },
                  mr: 1,
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#9F77EB", cursor: "pointer" }}
              >
                Add More Users
              </Typography>
            </Box>
          </Box>

          <Typography variant="subtitle1" className={classes.title}>
            My Plan
          </Typography>

          <Grid
            container
            className={classes.titlegrid}
            columns={{ xs: 4, sm: 12}}
          >
            <Grid item xs={5}>
              <Grid container className={classes.IndividualGrid}>
                <Grid item xs={1} align="center">
                  <Box className={classes.Icon}>
                    <img src={layers} alt="layers" />
                  </Box>
                </Grid>
                <Grid item xs={11} align="left">
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#1E1E1E",
                    }}
                  >
                    My Current Plan
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(43, 43, 43, 0.80)",
                    }}
                  >
                    please check your plan which dated expires.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.Gridpadding}>
              <Box
                sx={{
                  my: { xxl: 3, xl: 2.9, lg: 2.75, md: 2.5, sm: 2.5 },
                  mb: { xs: 1.3 },
                }}
              >
                <Progress />
                <Typography
                  variant="h5"
                  sx={{
                    color: "rgba(43, 43, 43, 0.80)",
                    marginTop: {
                      xxl: 2,
                      xl: 1.9,
                      lg: 1.7,
                      md: 1.5,
                      sm: 1.2,
                      xs: 1,
                    },
                  }}
                >
                  190 of 200 credits remaining
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(43, 43, 43, 0.60)",
                    fontWeight: 400,
                  }}
                >
                  Expires April 25th, 2023
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="subtitle1" className={classes.title}>
            Summary
          </Typography>

          <Box
            sx={{
              border: "1px solid #9F77EB",
              width: "auto",
              height: {
                xl: "430px",
                lg: "400px",
                md: "370px",
                sm: "330px",
                xs: "300px",
              },
            }}
            mb={{ xl: 5.7, lg: 4.7, md: 3.7, sm: 2.7, xs: 1.7 }}
          ></Box>
        </Box>
      </Root>
    </>
  );
}

export default NewProfile;
