import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import closeIcon from "../images/x-circle.svg";
import calendar from "../images/calendar.svg";
// import { ReactComponent as CalendarIcon } from "../images/calendar.svg";
import { classes } from "./Style";
import { Box, Button, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import StatusDropdown from "./StatusDropdown";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

function AddPayment({ handleClose }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Card className={classes.CardComponent}>
      <CardHeader
        className={classes.Cardheader}
        title={
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h6">Add Payment Details</Typography>
            </Grid>
            <Grid item xs={2} align="right">
              <Avatar
                onClick={handleClose}
                src={closeIcon}
                className={classes.CloseAction}
              />
            </Grid>
          </Grid>
        }
      />

      <CardContent className={classes.CardContent}>
          <Typography
            variant="subtitle1"
            className={classes.TypographyText}
          >
            Organization Name
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            rows={1}
            variant="outlined"
            sx={{
              // paddingLeft: "23px",
              "@media (min-width: 600px)": {
                "& input": {
                  height: "13px",
                  //  width: "43vw",
                },
              },
              "@media (min-width: 960px)": {
                "& input": {
                  height: "13px",
                  //width: "43.4vw",
                },
              },
              "@media (min-width: 1280px)": {
                "& input": {
                  height: "13px",
                  //width: "46vw",
                },
                "@media (min-width: 1920px)": {
                  "& input": {
                    height: "24px",
                    //width: "48.1vw",
                  },
                },
              },
            }}
          />

          <Grid
            container
            // variant="subtitle1"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 4 }}
            mt={3}
            // sx={{
            //   height: { xl: "98px", lg: "89px", md: "88px", sm: "82px" },
            // }}
          >
            <Grid item xs={4}>
              <Typography
              className={classes.TypographyText}
              >
                Amount
              </Typography>
              <TextField
                fullWidth
                sx={{
                  // paddingLeft: "23px",
                  "@media (min-width: 600px)": {
                    "& input": {
                      height: "13px",
                      //  width: "43vw",
                    },
                  },
                  "@media (min-width: 960px)": {
                    "& input": {
                      height: "13px",
                      //width: "43.4vw",
                    },
                  },
                  "@media (min-width: 1280px)": {
                    "& input": {
                      height: "13px",
                      //width: "46vw",
                    },
                    "@media (min-width: 1920px)": {
                      "& input": {
                        height: "24px",
                        //width: "48.1vw",
                      },
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.TypographyText}>Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem >
                  <DatePicker
                    // slots={{
                    //   openPickerIcon: <img src={calendar} alt="Calendar" />, // Use the SVG icon here
                    // }}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.TypographyText}>Status</Typography>
              <StatusDropdown />
              {/* <Dropdown /> */}
            </Grid>
          </Grid>

          <Typography
            variant="subtitle1"
            className={classes.TypographyText}
            // sx={{
            // //   margin: "4px",
            //   mb: 2,
            // //   mt: 4.5,
            // }}
          >
            Upload Payment Invoice
          </Typography>
          <Box border={"1px solid rgba(0, 0, 0, 0.20)"}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileSelect}
              fullWidth
              sx={{
                // paddingLeft: "23px",
                "@media (min-width: 600px)": {
                  "& input": {
                    height: "13px",
                    //  width: "43vw",
                  },
                },
                "@media (min-width: 960px)": {
                  "& input": {
                    height: "13px",
                    //width: "43.4vw",
                  },
                },
                "@media (min-width: 1280px)": {
                  "& input": {
                    height: "13px",
                    //width: "46vw",
                  },
                  "@media (min-width: 1920px)": {
                    "& input": {
                      height: "24px",
                      //width: "48.1vw",
                    },
                  },
                },
              }}
            />
            <Box sx={{display:"flex", alignItems:"center"}}>
            <Button
              onClick={() => fileInputRef.current.click()}
              sx={{
                width: {
                  xl: "169px",
                  lg: "151px",
                  md: "134px",
                  sm: "110px",
                },
                ":hover": {
                  background: "rgba(134, 134, 134, 0.40)",
                  color: "#1E1E1E",
                },
                height: { xl: "54px", lg: "47px", md: "36px", sm: "32px" },
                background: "rgba(134, 134, 134, 0.40)",
                color: "#1E1E1E",
                margin: "5px",
                textTransform: "none",
                borderRadius: "5px",
              }}
            >
              Browse File
            </Button>

            <Typography variant="subtitle1" sx={{ marginLeft: "69px" }}>
              {selectedFile ? selectedFile.name : "No File Selected"}
            </Typography>
            </Box>
          </Box>

          {/* <p> */}
            <Button
              sx={{
                width: {
                  xl: "169px",
                  lg: "151px",
                  md: "134px",
                  sm: "110px",
                },
                height: { xl: "54px", lg: "47px", md: "36px", sm: "32px" },
                backgroundColor: "#9F77EB",
                fontFamily: "heebo",
                fontSize: {
                  xl: "16px",
                  lg: "14px",
                  md: "12px",
                  sm: "10px",
                },
                padding: { sm: "7px" },
                fontWeight: "500!important",
                borderRadius: "5px",
                textTransform: "none",
                color: "#FFF",
                mt: 5,
                ":hover": {
                  bgcolor: "#9F77EB",
                  color: "white",
                },
              }}
            >
              Add Payment
            </Button>
      </CardContent>
    </Card>
  );
}

export default AddPayment;
