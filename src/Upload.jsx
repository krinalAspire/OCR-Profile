import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import send from "./images/send.svg";
import code from "./images/code.svg";
import mail from "./images/mail.svg";
import book from "./images/book-open.svg";
import copy from "./images/copy.svg";
import cpu from "./images/cpu.svg";
import key from "./images/key.svg";
import circle from "./images/x-circle.svg";

export default function Upload() {
  const Icon = {
    xl: 32,
    lg: 32,
    md: 25,
    sm: 23,
    xs: 20,
  };

  const SubIcon = {
    xl: 22,
    lg: 22,
    md: 20,
    sm: 15,
    xs: 13,
  };

  const Title = {
    xl: 20,
    lg: 20,
    md: 16,
    sm: 10,
    xs: 10,
  };

  const Content = {
    xl: 15,
    lg: 15,
    md: 12,
    sm: 10,
    xs: 10,
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 960, // Small devices (landscape phones)
        md: 1360, // Medium devices (tablets)
        lg: 1440, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },
  });

  const handleEmailCopy = () => {
    const emailAddress = "example@example.com"; // Replace with the email address you want to copy

    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        console.log("Email address copied to clipboard:", emailAddress);
      })
      .catch((error) => {
        console.error("Failed to copy email address:", error);
      });
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Process the uploaded file here
    console.log(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            margin: {
              xl: "auto",
              lg: "auto",
              md: "auto",
              sm: "auto",
              xs: "auto",
            },
            width: {
              xl: "auto",
              lg: "auto",
              md: "auto",
              sm: "auto",
              xs: "auto",
            },
            height: {
              xl: "69vh",
              lg: "69vh",
              md: "65vh",
              sm: "67vh",
              xs: "80vh",
            },
            borderRadius: "5px",
            marginTop: {
              xs: "2vh",
              sm: "2vh",
              md: "2vh",
              lg: "2vh",
              xl: "2vh",
            },
            border: "1px dashed #D3D3D3",
            overflow: {
              xs: "auto",
              sm: "hidden",
              md: "hidden",
              lg: "hidden",
              xl: "hidden",
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                marginTop: {
                  md: "25px",
                  lg: "30px",
                  xl: "40px",
                  sm: "20px",
                  xs: "15px",
                },
                marginRight: {
                  md: "30px",
                  lg: "35px",
                  xl: "40px",
                  sm: "25px",
                  xs: "20px",
                },
              }}
            >
              <Typography
                sx={{
                  width: { xl: 28, lg: 28, md: 23, sm: 20, xs: 18 },
                  height: { xl: 28, lg: 28, md: 23, sm: 20, xs: 18 },
                }}
              >
                <img src={circle} alt="x-circle" />
              </Typography>
            </Button>
          </Box>

          <CardContent>
            <Box
              sx={{
                marginTop: { xl: "12vh", lg: "9vh", md: "4vh", sm: "2vh" },
              }}
            >
              <Typography
                gutterBottom
                component="div"
                align="center"
                margin={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
                sx={{
                  fontWeight: "600",
                  fontFamily: "Poppins",
                  fontSize: {
                    xl: 24,
                    lg: 24,
                    md: 19,
                    sm: 10,
                    xs: 10,
                  },
                }}
              >
                Upload your Documents
              </Typography>
              <Typography
                align="center"
                sx={{
                  // fontSize: "0.95rem",
                  fontSize: Content,
                  fontFamily: "Heebo",
                  color: "rgba(43, 43, 43, 0.80)",
                }}
              >
                PDF, Word Documents, and images accepted. Documents will be
                intelligently classNameified into:Resumes, Receipts, invoices
                etc.
              </Typography>

              <Grid
                container
                columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
                sx={{ padding: { xl: 4, lg: 4, md: 2, sm: 1, xs: 1 } }}
              >
                <Grid
                  xs={4}
                  align="center"
                  sx={{
                    borderRight: "1px solid #D3D3D3",
                    marginTop: {
                      xl: "3.5vh",
                      lg: "3.5vh",
                      md: "3vh",
                      xs: "1vh",
                      sm: "2.6vh",
                    },
                    padding: "0px 20px",
                  }}
                >
                  <Typography
                    sx={{
                      width: Icon,
                      height: Icon,
                      marginBottom: {
                        xl: "17px",
                        lg: "7px",
                        md: "5px",
                        sm: "3px",
                        xs: "3px",
                      },
                    }}
                  >
                    <img src={send} alt="send" />
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontFamily: "Poppins",
                      fontSize: Title,
                    }}
                  >
                    Manual Upload
                  </Typography>
                  <Typography
                    marginTop={{
                      xl: "10px",
                      lg: "10px",
                      md: "5px",
                      sm: "2px",
                      xs: "2px",
                    }}
                    sx={{
                      color: "rgba(43, 43, 43, 0.80)",
                      fontSize: Content,
                      fontFamily: "Heebo",
                    }}
                  >
                    Drag and Drop files from your computer or
                  </Typography>
                  <Box>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                    <Button
                      sx={{
                        backgroundColor: "#9F77EB",
                        textTransform: "none",
                        color: "white",
                        fontSize: Content,
                        fontFamily: "Heebo",
                        fontWeight: "500",
                        borderRadius: "5px",
                        width: {
                          xl: "132px",
                          lg: "132px",
                          md: "100px",
                          sm: "95px",
                          xs: "90px",
                        },
                        height: {
                          xl: "50px",
                          lg: "50px",
                          md: "30px",
                          sm: "25px",
                          xs: "25px",
                        },
                        mt: 3,
                        ":hover": {
                          bgcolor: "#9F77EB",
                          color: "white",
                        },
                      }}
                      onClick={handleButtonClick}
                    >
                      Choose Files
                    </Button>
                  </Box>
                </Grid>

                <Grid
                  xs={4}
                  align="center"
                  sx={{
                    borderRight: "1px solid #D3D3D3",
                    marginTop: {
                      xl: "3.5vh",
                      lg: "3.5vh",
                      md: "3vh",
                      xs: "1vh",
                      sm: "2.6vh",
                    },
                    padding: "0px 20px",
                  }}
                >
                  <Typography
                    sx={{
                      width: Icon,
                      height: Icon,
                      marginBottom: {
                        xl: "17px",
                        lg: "7px",
                        md: "5px",
                        sm: "3px",
                        xs: "3px",
                      },
                    }}
                  >
                    <img src={code} alt="code" />
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontFamily: "Poppins",
                      fontSize: Title,
                    }}
                  >
                    Use the API
                  </Typography>

                  <Grid
                    container
                    spacing={-4}
                    marginTop={{
                      xl: "10px",
                      lg: "10px",
                      md: "5px",
                      sm: "2px",
                      xs: "2px",
                    }}
                    marginBottom={{
                      xl: "12px",
                      lg: "12px",
                      md: "3px",
                      sm: "2px",
                      xs: "2px",
                    }}
                  >
                    <Grid xs={5} align="right">
                      <Typography
                        sx={{
                          // display: "flex",
                          // justifyContent: "flex-end",
                          fontSize: Content,
                          fontFamily: "Heebo",
                          color: "rgba(43, 43, 43, 0.80)",
                        }}
                      >
                        Copy your
                      </Typography>
                    </Grid>
                    <Grid xs={2} align="center">
                      <Typography
                        sx={{
                          width: SubIcon,
                          height: SubIcon,
                        }}
                      >
                        <img src={key} alt="key" />
                      </Typography>
                    </Grid>
                    <Grid
                      align="left"
                      xs={5}
                      sx={{
                        fontSize: Content,
                        fontFamily: "Heebo",
                        fontWeight: "600",
                      }}
                    >
                      <Link
                        to={"#"}
                        style={{ color: "#9E77EB", textDecoration: "none" }}
                      >
                        API Key
                      </Link>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={-4}
                    marginBottom={{
                      xl: "12px",
                      lg: "12px",
                      md: "3px",
                      sm: "2px",
                      xs: "2px",
                    }}
                  >
                    <Grid xs={5} align="right">
                      <Typography
                        sx={{
                          // display: "flex",
                          // justifyContent: "flex-end",
                          fontSize: Content,
                          fontFamily: "Heebo",
                          color: "rgba(43, 43, 43, 0.80)",
                        }}
                      >
                        Read the
                      </Typography>
                    </Grid>
                    <Grid xs={2} align="center">
                      <Typography
                        sx={{
                          width: SubIcon,
                          height: SubIcon,
                        }}
                      >
                        <img src={book} alt="book" />
                      </Typography>
                    </Grid>
                    <Grid
                      align="left"
                      xs={5}
                      sx={{
                        fontSize: Content,
                        fontFamily: "Heebo",
                        fontWeight: "600",
                      }}
                    >
                      <Link
                        to={"#"}
                        style={{ color: "#9E77EB", textDecoration: "none" }}
                      >
                        API Docs
                      </Link>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={-4}
                    marginBottom={{
                      xl: "12px",
                      lg: "12px",
                      md: "3px",
                      sm: "2px",
                      xs: "2px",
                    }}
                  >
                    <Grid xs={5} align="right">
                      <Typography
                        sx={{
                          // display: "flex",
                          // justifyContent: "flex-end",
                          fontSize: Content,
                          fontFamily: "Heebo",
                          color: "rgba(43, 43, 43, 0.80)",
                        }}
                      >
                        View available
                      </Typography>
                    </Grid>
                    <Grid xs={2} align="center">
                      <Typography
                        sx={{
                          width: SubIcon,
                          height: SubIcon,
                        }}
                      >
                        <img src={cpu} alt="cpu" />
                      </Typography>
                    </Grid>
                    <Grid
                      align="left"
                      xs={5}
                      sx={{
                        fontSize: Content,
                        fontFamily: "Heebo",
                        fontWeight: "600",
                      }}
                    >
                      <Link
                        to={"#"}
                        style={{ color: "#9E77EB", textDecoration: "none" }}
                      >
                        Integrations
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  align="center"
                  xs={4}
                  sx={{
                    marginTop: {
                      xl: "3.5vh",
                      lg: "3.5vh",
                      md: "3vh",
                      xs: "1vh",
                      sm: "2.6vh",
                    },
                    padding: "0px 20px",
                  }}
                >
                  <Typography
                    sx={{
                      width: Icon,
                      height: Icon,
                      marginBottom: {
                        xl: "17px",
                        lg: "7px",
                        md: "5px",
                        sm: "3px",
                        xs: "3px",
                      },
                    }}
                  >
                    <img src={mail} alt="mail" />
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: Title,
                      marginTop: {
                        xl: "17px",
                        lg: "17px",
                        md: "10px",
                        sm: "5px",
                        xs: "2px",
                      },
                    }}
                  >
                    Attach in an email
                  </Typography>
                  <Typography
                    marginTop={{
                      xl: "10px",
                      lg: "10px",
                      md: "5px",
                      sm: "2px",
                      xs: "2px",
                    }}
                    marginLeft={3}
                    sx={{
                      fontSize: Content,
                      fontFamily: "Heebo",
                      color: "rgba(43, 43, 43, 0.80)",
                    }}
                  >
                    Send documents 1 by 1 or in bulk to the email for this
                    workspace
                  </Typography>
                  <Typography
                    marginTop="12px"
                    sx={{
                      color: "#9F77EB",
                      cursor: "pointer",
                      fontFamily: "Heebo",
                      fontWeight: "600",
                      fontSize: Content,
                    }}
                    onClick={handleEmailCopy}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-copy"
                      style={{ marginRight: "10px" }}
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy email address
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
}
