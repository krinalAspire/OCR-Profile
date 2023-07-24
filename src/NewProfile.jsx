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
// import { makeStyles } from '@mui/styles';
import { styled } from "@mui/material/styles";
// import {makeStyles} from '@mui/material/styles';
// import makeStyles from '@mui/styles/makeStyles'

// const MainBox = styled(Box)({
//   // height: {
//   //   xl: "79vh",
//   //   lg: "77vh",
//   //   md: "74.5vh",
//   //   sm: "80vh",
//   //   xs: "89vh",
//   // },
// //   height: `${(props) => props.theme.breakpoints.up('xl')} {
// //     height: 79vh;
// //   }`

// //   `${(props) => props.theme.breakpoints.between('lg', 'xl')} {
// //     height: 77vh;
// //   }`

// //   `${(props) => props.theme.breakpoints.between('md', 'lg')} {
// //     height: 74.5vh;
// //   }`

// //  ` ${(props) => props.theme.breakpoints.between('sm', 'md')} {
// //     height: 80vh;
// //   }`

// //   `${(props) => props.theme.breakpoints.down('sm')} {
// //     height: 89vh;
// //   }`,
//   height: "74.5vh",
//   border: "1px solid rgba(0, 0, 0, 0.20)",
//   borderRadius: "5px",
//   overflow: "auto",
//   scrollbarWidth: "thin",
//   "&::-webkit-scrollbar": {
//     width: "0.4em",
//   },
//   "&::-webkit-scrollbar-track": {
//     background: "#D9D9D9",
//     borderRadius: "5px",
//   },
//   "&::-webkit-scrollbar-thumb": {
//     backgroundColor: "#868686",
//     borderRadius: "5px",
//   },
//   // mx:{ xl: 5, lg: 4, md: 3, sm: 2.5, xs: 2 },
//   // mb:{ xl: 6.5, lg: 5.5, md: 4.5, sm: 3.5, xs: 2.5 }
//   // marginX: "20px",
//   // marginY: "30px",
//   // margin:"30px"
// });

// const PREFIX = "MainBox";
const classes = {
  root: 'root',
  box: 'box',
  title: 'title',
  titlegrid:'titlegri',
  content: 'content',
};

const MainBox = styled(Box)(({ theme }) => ({
  
  [`&.${classes.root}`]: {
    // background:"yellow",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "83vh",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "85vh",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "75vh",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "75vh",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "79vh",
    },
    [theme.breakpoints.up("xxl")]: {
      marginLeft: "40px",
      marginRight: "40px",
      height: "81.5vh",
    },
    borderRadius: "5px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    overflow: "auto",
    height: "70vh",
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

  [`& .${classes.box}`]: {
    // background:"yellow"
    [theme.breakpoints.up("xs")]: {
      margin:"15px 17px 15px 17px"
    },
    [theme.breakpoints.up("sm")]: {
      margin:"16px 19px 16px 19px"
    },
    [theme.breakpoints.up("md")]: {
      margin:"14px 19px 14px 19px"
    },
    [theme.breakpoints.up("lg")]: {
      margin:"16px 20px 16px 20px"
    },
    [theme.breakpoints.up("xl")]: {
      margin:"18px 23px 18px 23px"
    },
    [theme.breakpoints.up("xxl")]: {
      margin:"20px 25px 20px 25px"
    },
  },

  [`& .${classes.title}`]: {
    color:"rgba(30, 30, 30, 0.60)",
    [theme.breakpoints.up("xs")]: {
      marginBottom:"7px"
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom:"8px"
    },
    [theme.breakpoints.up("md")]: {
      marginBottom:"9px"
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom:"10px"
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom:"11px"
    },
    [theme.breakpoints.up("xxl")]: {
      marginBottom:"13px"
    },
    backgroundColor:` ${(theme) =>
      ({  
        xs: 'orange',
        sm: 'green',
        md: 'blue',
        lg: 'red',
        xl: 'yellow',
        xxl:"pink",
      }[theme.breakpoints.up()] || 'initial')}`
  },
  [`& .${classes.titlegrid}`]: {
    background:"rgba(134, 134, 134, 0.10)",
    [theme.breakpoints.up("xs")]: {
      marginBottom:"20px"
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom:"25px"
    },
    [theme.breakpoints.up("md")]: {
      marginBottom:"30px"
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom:"35px"
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom:"40px"
    },
    [theme.breakpoints.up("xxl")]: {
      marginBottom:"45px"
    },
  },
  [`& .${classes.content}`]: {
    color: theme.palette.common.white,
    fontSize: 16,
    lineHeight: 1.7,
  },
}));

// const useStyles = makeStyles({
//   root: {
//     border: "1px solid rgba(0, 0, 0, 0.20)",
//     background:"yellow",
//     borderRadius: "5px",
//     overflow: "auto",
//     scrollbarWidth: "thin",
//     "&::-webkit-scrollbar": {
//       width: "0.4em",
//     },
//     "&::-webkit-scrollbar-track": {
//       background: "#D9D9D9",
//       borderRadius: "5px",
//     },
//     "&::-webkit-scrollbar-thumb": {
//       backgroundColor: "#868686",
//       borderRadius: "5px",
//     },
//   },
// });

function NewProfile() {
  // const classes = useStyles();
  return (
    <>
      <Nav />
      <Box>
        <Typography
          variant="h5"
          sx={{ fontSize: "Poppins", fontWeight: 600 }}
          mx={{ xl: 5, lg: 4, md: 3, sm: 2.5, xs: 2 }}
          pt={{ xl: 4, lg: 3, md: 2, sm: 1.5, xs: 1 }}
          pb={{ xl: 2, lg: 1.3, md: 1, sm: 0.7, xs: 0.5 }}
        >
          Account Settings
        </Typography>
        {/* <Box
          sx={{
            //  border: "1px solid red",
            border: "1px solid rgba(0, 0, 0, 0.20)",
            borderRadius: "5px",
            // height: "auto",
            height: {
              xl: "79vh",
              lg: "77vh",
              md: "74.5vh",
              sm: "80vh",
              xs: "89vh",
            },
            // width: "auto",
            overflow: "auto",
            // overflowY:"auto"
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
          }}
          // className={classes.root}
          mx={{ xl: 5, lg: 4, md: 3, sm: 2.5, xs: 2 }}
          mb={{ xl: 6.5, lg: 5.5, md: 4.5, sm: 3.5, xs: 2.5 }}
        > */}
        <MainBox className={classes.root}>
          <Box
            className={classes.box}
            // mx={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
            // mt={{ xl: 2.8, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
          >
            <Typography
              variant="subtitle1"
              className={classes.title}
              // sx={{
              //   color: "rgba(30, 30, 30, 0.60)",
              //   mb: { xl: 1.63, lg: 1.4, md: 1, sm: 0.8, xs: 0.6 },
              // }}
            >
              Change Password
            </Typography>

            <Grid
              container
              className={classes.titlegrid}
              // sx={{ background: "rgba(134, 134, 134, 0.10)" }}
              // mb={{ xl: 5.7, lg: 4.7, md: 3.7, sm: 2.7, xs: 1.7 }}
              columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
            >
              <Grid item xs={5}>
                <Grid
                  container
                  my={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                  pl={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                >
                  <Grid
                    item
                    xs={1}
                    align="center"
                    pr={{ xl: 2, lg: 1.7, md: 1.3, sm: 1, xs: 0.7 }}
                  >
                    <Typography
                      sx={{
                        width: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                        height: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                        mt: { xl: 0.5, lg: 0.6, md: 0.1 },
                        mb: { xs: 0.5 },
                      }}
                    >
                      <img src={user} alt="user" />
                    </Typography>
                  </Grid>
                  <Grid item xs={11} align="left">
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1E1E1E",
                      }}
                    >
                      Pratik Patel
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      marginTop={{
                        xl: "2px",
                        lg: "2px",
                        md: "2px",
                        sm: "2px",
                        xs: "2px",
                      }}
                      sx={{
                        color: "rgba(43, 43, 43, 0.80)",
                      }}
                    >
                      pratik.patel@aspiresoftserv.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={7} sx={{ pl: { xs: 4.7 } }}>
                <Button
                  sx={{
                    width: {
                      xl: "182px",
                      lg: "178px",
                      md: "145px",
                      sm: "110px",
                      xs: "105px",
                    },
                    height: {
                      xl: "54px",
                      lg: "52px",
                      md: "38px",
                      sm: "27px",
                      xs: "25px",
                    },
                    background: "rgba(134, 134, 134, 0.40)",
                    color: "#1E1E1E",
                    my: { xl: 3, lg: 2.6, md: 2, sm: 1.5, xs: 1.3 },
                    ":hover": {
                      bgcolor: "rgba(134, 134, 134, 0.40)",
                      color: "1E1E1E",
                    },
                  }}
                  // onClick={handleButtonClick}
                >
                  Change Password
                </Button>
              </Grid>
            </Grid>

            <Typography
              variant="subtitle1"
              className={classes.title}
              // sx={{
              //   color: "rgba(30, 30, 30, 0.60)",
              //   mb: { xl: 1.63, lg: 1.4, md: 1, sm: 0.8, xs: 0.6 },
              // }}
            >
              Members
            </Typography>

            <Grid
              container
              sx={{ background: "rgba(159, 119, 235, 0.10)" }}
              mb={{ xl: 1.3, lg: 1, md: 0.9, sm: 0.7, xs: 0.5 }}
              columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
            >
              <Grid item xs={5}>
                <Grid
                  container
                  my={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                  pl={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                >
                  <Grid
                    item
                    xs={1}
                    align="center"
                    pr={{ xl: 2, lg: 1.7, md: 1.3, sm: 1.5, xs: 0.7 }}
                  >
                    {/* <Typography> */}
                    <Avatar
                      alt="Remy Sharp"
                      // src={selectedImage}
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      sx={{
                        width: { xl: 45, lg: 35, md: 30, sm: 19, xs: 21 },
                        height: {
                          xl: 45,
                          lg: 35,
                          md: 30,
                          sm: 19,
                          xs: 21,
                        },
                      }}
                    />
                    {/* </Typography> */}
                  </Grid>
                  <Grid item xs={11} align="left">
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#1E1E1E",
                      }}
                    >
                      Pratik Patel
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      marginTop={{
                        xl: "2px",
                        lg: "2px",
                        md: "2px",
                        sm: "2px",
                        xs: "2px",
                      }}
                      sx={{
                        color: "rgba(43, 43, 43, 0.80)",
                      }}
                    >
                      pratik.patel@aspiresoftserv.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={7} sx={{ pl: { xs: 4.7 } }}>
                <SelectButton label="Admin" />
              </Grid>
            </Grid>

            <Grid
              container
              className={classes.titlegrid}
              // sx={{ background: "rgba(134, 134, 134, 0.10)" }}
              // mb={{ xl: 5.7, lg: 4.7, md: 3.7, sm: 2.7, xs: 1.7 }}
              columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
            >
              <Grid item xs={5}>
                <Grid
                  container
                  my={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                  pl={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                >
                  <Grid
                    item
                    xs={1}
                    align="center"
                    pr={{ xl: 2, lg: 1.7, md: 1.3, sm: 1, xs: 0.7 }}
                  >
                    <Typography
                      sx={{
                        width: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                        height: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                        mt: { xl: 0.5, lg: 0.6, md: 0.1 },
                        mb: { xs: 0.5 },
                      }}
                    >
                      <img src={mail} alt="mail" />
                    </Typography>
                  </Grid>
                  <Grid item xs={11} align="left">
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#1E1E1E",
                      }}
                    >
                      poonampavakar5632@gmail.com
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      marginTop={{
                        xl: "2px",
                        lg: "2px",
                        md: "2px",
                        sm: "2px",
                        xs: "2px",
                      }}
                      sx={{
                        color: "rgba(43, 43, 43, 0.80)",
                      }}
                    >
                      Invited by Poonam Pavaskar. Expires 1 week from now
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={7} sx={{ pl: { xs: 4.7 } }}>
                <SelectButton label="Members" />
              </Grid>
            </Grid>

            <Typography
              variant="subtitle1"
              // sx={{
              //   color: "rgba(30, 30, 30, 0.60)",
              //   mb: { xl: 1.63, lg: 1.4, md: 1, sm: 0.8, xs: 0.6 },
              // }}
              className={classes.title}
            >
              My Plan
            </Typography>

            <Grid
              container
              className={classes.titlegrid}
              // sx={{ background: "rgba(134, 134, 134, 0.10)" }}
              // mb={{ xl: 5.7, lg: 4.7, md: 3.7, sm: 2.7, xs: 1.7 }}
              columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
            >
              <Grid item xs={5}>
                <Grid
                  container
                  my={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                  pl={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                >
                  <Grid
                    item
                    xs={1}
                    align="center"
                    pr={{ xl: 2, lg: 1.7, md: 1.3, sm: 1, xs: 0.7 }}
                  >
                    <Typography
                      sx={{
                        width: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                        height: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                        mt: { xl: 0.5, lg: 0.6, md: 0.1 },
                        mb: { xs: 0.5 },
                      }}
                    >
                      <img src={layers} alt="layers" />
                    </Typography>
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
                      variant="subtitle1"
                      marginTop={{
                        xl: "2px",
                        lg: "2px",
                        md: "2px",
                        sm: "2px",
                        xs: "2px",
                      }}
                      sx={{
                        color: "rgba(43, 43, 43, 0.80)",
                      }}
                    >
                      please check your plan which dated expires.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={7} sx={{ pl: { xs: 4.7 } }}>
                <Box sx={{ my: { xl: 3, lg: 2.6, md: 2, sm: 1.5, xs: 1.3 } }}>
                  <Progress />
                  <Typography
                    variant="h5"
                    sx={{
                      color: "rgba(43, 43, 43, 0.80)",
                      marginTop: {
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
                    marginTop={{
                      xl: "2px",
                      lg: "2px",
                      md: "2px",
                      sm: "2px",
                      xs: "2px",
                    }}
                    sx={{
                      color: "rgba(43, 43, 43, 0.60)",
                    }}
                  >
                    Expires April 25th, 2023
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography
              variant="subtitle1"
              className={classes.title}
              // sx={{
              //   color: "rgba(30, 30, 30, 0.60)",
              //   mb: { xl: 1.63, lg: 1.4, md: 1, sm: 0.8, xs: 0.6 },
              // }}
            >
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
        </MainBox>
        {/* </Box> */}
      </Box>
    </>
  );
}

export default NewProfile;
