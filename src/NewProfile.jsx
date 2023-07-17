import React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import user from "./images/user.svg";
import mail from "./images/mail.svg";
import SelectButton from "./Select";
import layers from "./images/layers.svg";
import Progress from "./Progress";
import Nav from "./Nav";

function NewProfile() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 1366, // Medium devices (tablets)
        lg: 1440, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },
  });

  const SettingTitle = {
    xl: "18px",
    lg: "16px",
    md: "14px",
    sm: "12px",
    xs: "10px",
  };

  const TitleFontsize = {
    xl: 16,
    lg: 15,
    md: 12,
    sm: 10,
    xs: 10,
  };

  const ContentFonstsize = {
    xl: 15,
    lg: 15,
    md: 12,
    sm: 10,
    xs: 10,
  };

  return (
    <>
    <Nav />
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "auto" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: SettingTitle,
            }}
            mx={{ xl: 5, lg: 4, md: 3, sm: 2.5, xs: 2 }}
            pt={{ xl: 4, lg: 3, md: 2, sm: 1.5, xs: 1 }}
            pb={{ xl: 2, lg: 1.3, md: 1, sm: 0.7, xs: 0.5 }}
          >
            Account Settings
          </Typography>
          <Box
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
              width: "auto",
              overflow: "auto",
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
            mx={{ xl: 5, lg: 4, md: 3, sm: 2.5, xs: 2 }}
            mb={{ xl: 6.5, lg: 5.5, md: 4.5, sm: 3.5, xs: 2.5 }}
          >
            <Box
              mx={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
              mt={{ xl: 2.8, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
            >
              <Typography
                sx={{
                  fontSize: ContentFonstsize,
                  fontFamily: "Heebo",
                  fontWeight: 400,
                  color: "rgba(30, 30, 30, 0.60)",
                  mb: { xl: 1.63, lg: 1.4, md: 1, sm: 0.8, xs: 0.6 },
                }}
              >
                Change Password
              </Typography>

              <Grid
                container
                sx={{ background: "rgba(134, 134, 134, 0.10)" }}
                mb={{ xl: 5.7, lg: 4.7, md: 3.7, sm: 2.7, xs: 1.7 }}
                columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
              >
                <Grid xs={5}>
                  <Grid
                    container
                    my={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                    pl={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                  >
                    <Grid
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
                    <Grid xs={11} align="left">
                      <Typography
                        sx={{
                          color: "#1E1E1E",
                          fontWeight: "500",
                          fontFamily: "Heebo",
                          fontSize: TitleFontsize,
                        }}
                      >
                        Pratik Patel
                      </Typography>
                      <Typography
                        marginTop={{
                          xl: "2px",
                          lg: "2px",
                          md: "2px",
                          sm: "2px",
                          xs: "2px",
                        }}
                        sx={{
                          color: "rgba(43, 43, 43, 0.80)",
                          fontSize: ContentFonstsize,
                          fontFamily: "Heebo",
                          fontWeight: 400,
                        }}
                      >
                        pratik.patel@aspiresoftserv.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={7} sx={{ pl: { xs: 4.7 } }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      fontSize: TitleFontsize,
                      fontFamily: "Heebo",
                      fontWeight: "500",
                      borderRadius: "5px",
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
                sx={{
                  fontSize: ContentFonstsize,
                  fontFamily: "Heebo",
                  fontWeight: 400,
                  color: "rgba(30, 30, 30, 0.60)",
                  mb: { xl: 1.63, lg: 1.4, md: 1, sm: 0.8, xs: 0.6 },
                }}
              >
                Members
              </Typography>

              <Grid
                container
                sx={{ background: "rgba(159, 119, 235, 0.10)" }}
                mb={{ xl: 1.3, lg: 1, md: 0.9, sm: 0.7, xs: 0.5 }}
                columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
              >
                <Grid xs={5}>
                  <Grid
                    container
                    my={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                    pl={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                  >
                    <Grid
                      xs={1}
                      align="center"
                      pr={{ xl: 2, lg: 1.7, md: 1.3, sm: 1.5, xs: 0.7 }}
                    >
                      <Typography>
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
                      </Typography>
                    </Grid>
                    <Grid xs={11} align="left">
                      <Typography
                        sx={{
                          color: "#1E1E1E",
                          fontWeight: "500",
                          fontFamily: "Heebo",
                          fontSize: ContentFonstsize,
                        }}
                      >
                        Pratik Patel
                      </Typography>
                      <Typography
                        marginTop={{
                          xl: "2px",
                          lg: "2px",
                          md: "2px",
                          sm: "2px",
                          xs: "2px",
                        }}
                        sx={{
                          color: "rgba(43, 43, 43, 0.80)",
                          fontSize: ContentFonstsize,
                          fontFamily: "Heebo",
                          fontWeight: 400,
                        }}
                      >
                        pratik.patel@aspiresoftserv.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={7} sx={{ pl: { xs: 4.7 } }}>
                  <SelectButton label="Admin" />
                </Grid>
              </Grid>

              <Grid
                container
                sx={{ background: "rgba(134, 134, 134, 0.10)" }}
                mb={{ xl: 5.7, lg: 4.7, md: 3.7, sm: 2.7, xs: 1.7 }}
                columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
              >
                <Grid xs={5}>
                  <Grid
                    container
                    my={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                    pl={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                  >
                    <Grid
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
                    <Grid xs={11} align="left">
                      <Typography
                        sx={{
                          color: "#1E1E1E",
                          fontWeight: "500",
                          fontFamily: "Heebo",
                          fontSize: ContentFonstsize,
                        }}
                      >
                        poonampavakar5632@gmail.com
                      </Typography>
                      <Typography
                        marginTop={{
                          xl: "2px",
                          lg: "2px",
                          md: "2px",
                          sm: "2px",
                          xs: "2px",
                        }}
                        sx={{
                          color: "rgba(43, 43, 43, 0.80)",
                          fontSize: ContentFonstsize,
                          fontFamily: "Heebo",
                          fontWeight: 400,
                        }}
                      >
                        Invited by Poonam Pavaskar. Expires 1 week from now
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={7} sx={{ pl: { xs: 4.7 } }}>
                  <SelectButton label="Members" />
                </Grid>
              </Grid>

              <Typography
                sx={{
                  fontSize: ContentFonstsize,
                  fontFamily: "Heebo",
                  fontWeight: 400,
                  color: "rgba(30, 30, 30, 0.60)",
                  mb: { xl: 1.63, lg: 1.4, md: 1, sm: 0.8, xs: 0.6 },
                }}
              >
                My Plan
              </Typography>

              <Grid
                container
                sx={{ background: "rgba(134, 134, 134, 0.10)" }}
                mb={{ xl: 5.7, lg: 4.7, md: 3.7, sm: 2.7, xs: 1.7 }}
                columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
              >
                <Grid xs={5}>
                  <Grid
                    container
                    my={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                    pl={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                  >
                    <Grid
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
                    <Grid xs={11} align="left">
                      <Typography
                        sx={{
                          color: "#1E1E1E",
                          fontWeight: "500",
                          fontFamily: "Heebo",
                          fontSize: SettingTitle,
                        }}
                      >
                        My Current Plan
                      </Typography>
                      <Typography
                        marginTop={{
                          xl: "2px",
                          lg: "2px",
                          md: "2px",
                          sm: "2px",
                          xs: "2px",
                        }}
                        sx={{
                          color: "rgba(43, 43, 43, 0.80)",
                          fontSize: ContentFonstsize,
                          fontFamily: "Heebo",
                          fontWeight: 400,
                        }}
                      >
                        please check your plan which dated expires.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={7} sx={{ pl: { xs: 4.7 } }}>
                  <Box sx={{ my: { xl: 3, lg: 2.6, md: 2, sm: 1.5, xs: 1.3 } }}>
                    <Progress />
                    <Typography
                      sx={{
                        color: "rgba(43, 43, 43, 0.80)",
                        fontWeight: "500",
                        fontFamily: "Heebo",
                        fontSize: SettingTitle,
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
                      marginTop={{
                        xl: "2px",
                        lg: "2px",
                        md: "2px",
                        sm: "2px",
                        xs: "2px",
                      }}
                      sx={{
                        color: "rgba(43, 43, 43, 0.60)",
                        fontSize: TitleFontsize,
                        fontFamily: "Heebo",
                        fontWeight: 400,
                      }}
                    >
                      Expires April 25th, 2023
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography
                sx={{
                  fontSize: ContentFonstsize,
                  fontFamily: "Heebo",
                  fontWeight: 400,
                  color: "rgba(30, 30, 30, 0.60)",
                  mb: { xl: 1.63, lg: 1.4, md: 1, sm: 0.8, xs: 0.6 },
                }}
              >
                Summary
              </Typography>

              <Box
                sx={{
                  border: "1px solid #9F77EB",
                  // width:{xl:"1786px", lg:"1740px"},
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
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default NewProfile;
