import React, { useRef, useState } from "react";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import user from "./images/user.svg";
import image from "./images/image.svg";
import Avatar from "@mui/material/Avatar";

function Profile() {
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

  const [selectedImage, setSelectedImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Process the uploaded file here
    console.log(file);
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 960, // Small devices (landscape phones)
        md: 1366, // Medium devices (tablets)
        lg: 1440, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        mx={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }}
        my={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
        sx={{
          // border: "1px solid rgba(134, 134, 134, 0.40)",
          border: "1px solid rgba(0, 0, 0, 0.20)",
          height: {
            xl: "72vh",
            lg: "72vh",
            md: "71vh",
            sm: "70vh",
            xs: "70vh",
          },
          // width: {
          //     xl: "auto",
          //     lg: "auto",
          //     md: "auto",
          //     sm: "auto",
          //     xs: "auto",
          //   },
          borderRadius: "5px",
          flexGrow: 1,
        }}
      >
        <Box
          mx={{ xl: 5, lg: 4, md: 3, sm: 1.5, xs: 2.5 }}
          my={{ xl: 4, lg: 3, md: 2, sm: 1.5, xs: 2.5 }}
        >
          <Grid container columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Grid xs={6}>
              <Box
                sx={{
                  borderRadius: "5px",
                  background: "rgba(43, 43, 43, 0.05)",
                  mr: { xl: 5, lg: 4, md: 3, sm: 1.5, xs: 0 },
                  mb: { xs: 2.5 },
                }}
              >
                <Grid
                  container
                  py={{ xl: 3, lg: 2, md: 1.5, sm: 1, xs: 1 }}
                  pl={{ xl: 2.5, lg: 2, md: 1.5, sm: 1, xs: 1 }}
                >
                  <Grid xs={1} align="center">
                    <Typography
                      sx={{
                        width: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                        height: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
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
                      Poonam Pavaskar
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
                        fontSize:ContentFonstsize,
                        fontFamily: "Heebo",
                      }}
                    >
                      poonam.pavaskar@aspiresoftserv.com
                    </Typography>
                    <Button
                      sx={{
                        textTransform: "none",
                        fontSize:ContentFonstsize,
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
                        mt: { xl: 2, lg: 2, md: 1.5, sm: 1.4, xs: 1.3 },
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
              </Box>
            </Grid>

            <Grid xs={6}>
              <Box
                sx={{
                  borderRadius: "5px",
                  background: "rgba(43, 43, 43, 0.05)",
                }}
              >
                <Grid
                  container
                  py={{ xl: 3, lg: 2, md: 1.5, sm: 1, xs: 1 }}
                  pl={{ xl: 2.5, lg: 2, md: 1.5, sm: 1, xs: 1 }}
                >
                  <Grid xs={1} align="center">
                    <Typography
                      sx={{
                        width: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                        height: { xl: 24, lg: 21, md: 18, sm: 15, xs: 13 },
                      }}
                    >
                      <img src={image} alt="image" />
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
                      Avatar
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
                        fontSize:ContentFonstsize,
                        fontFamily: "Heebo",
                      }}
                    >
                      Upload an avatar for your account
                    </Typography>

                    <Grid container>
                      <Grid
                        mr={{ xl: 6.3, lg: 5.8, md: 4.4, sm: 3, xs: 2 }}
                        mt={{ xl: 1.5, lg: 1.7, md: 0.9, sm: 0.6, xs: 0.7 }}
                      >
                        {selectedImage ? (
                          <Avatar
                            alt="Remy Sharp"
                            mr={8}
                            src={selectedImage}
                            sx={{
                              width: { xl: 60, lg: 58, md: 46, sm: 34, xs: 31 },
                              height: {
                                xl: 60,
                                lg: 57,
                                md: 46,
                                sm: 34,
                                xs: 30,
                              },
                            }}
                          />
                        ) : (
                          <Avatar
                            alt="Remy Sharp"
                            mr={8}
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                            sx={{
                              width: { xl: 60, lg: 58, md: 46, sm: 34, xs: 31 },
                              height: {
                                xl: 60,
                                lg: 57,
                                md: 46,
                                sm: 34,
                                xs: 30,
                              },
                            }}
                          />
                        )}
                        {/* // <Avatar
                        //   alt="Remy Sharp"
                        //   mr={8}
                        //   // src="/static/images/avatar/1.jpg"
                        //   // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlysovRqSseA4uUGlio_vESy9xFc5OS7jXOva3NlE&s"
                        //   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        //   sx={{
                        //     width: { xl: 60, lg: 58, md: 46, sm: 34, xs: 31 },
                        //     height: { xl: 60, lg: 57, md: 46, sm: 34, xs: 30 },
                        //   }}
                        // /> */}
                      </Grid>
                      <Grid>
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileUpload}
                        />
                        <Button
                          sx={{
                            textTransform: "none",
                            fontSize:ContentFonstsize,
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
                            mt: { xl: 2, lg: 2, md: 1.5, sm: 1, xs: 1 },
                            ":hover": {
                              bgcolor: "rgba(134, 134, 134, 0.40)",
                              color: "1E1E1E",
                            },
                          }}
                          onClick={handleButtonClick}
                        >
                          Upload Avatar
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Profile;
