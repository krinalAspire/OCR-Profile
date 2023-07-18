import React from "react";
import Nav from "./Nav";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InvoiceRecord from "./InvoicerRecord";
import checkCircle from "./images/check-circle.svg";
import trash from "./images/trash-2.svg";

function Invoice() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 1360, // Medium devices (tablets)
        lg: 1440, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },
  });

  return (
    <>
      <Nav />
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "auto" }}>
          <Box sx={{ height: "46vh" }}>
            <Grid container columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <Grid item xs={8.5}>
                <Box sx={{ border: "1px solid black" }}>
                  <Box
                    sx={{
                      border: "1px solid red",
                      mx: { xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 },
                      my: { xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 },
                    }}
                  >
                    <div>Hello</div>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3.5}>
                <Box sx={{ border: "1px solid blue" }}>
                  <Box
                    sx={{
                      border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      my: { xl: 4.25, lg: 4, md: 3.25, sm: 3, xs: 2.25 },
                    }}
                  >
                    <Typography sx={{color:"rgba(30, 30, 30, 0.60)" }}>Invoice</Typography>
                    <InvoiceRecord fieldName="Invoice No" fieldData="1325533"/>
                    <InvoiceRecord fieldName="Invoice Date" fieldData="12/02/2023"/>
                    <InvoiceRecord fieldName="Invoice Order Date" fieldData="10/02/2023"/>
                    <InvoiceRecord fieldName="Invoice Order No." fieldData="SD-1245632"/>
                  </Box>

                  <Box
                    sx={{
                      border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      my: { xl: 4.25, lg: 4, md: 3.25, sm: 3, xs: 2.25 },
                    }}
                  >
                    <Typography sx={{color:"rgba(30, 30, 30, 0.60)" }}>Supplier</Typography>
                    <InvoiceRecord fieldName="Supplier Name" fieldData="Supplier Address"/>
                    <InvoiceRecord fieldName="Supplier Address" fieldData="2118 Thornridge Cir. Syracuse, Connecticut 35624"/>
                  </Box>

                  <Box
                    sx={{
                      border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      my: { xl: 4.25, lg: 4, md: 3.25, sm: 3, xs: 2.25 },
                    }}
                  >
                    <Typography sx={{color:"rgba(30, 30, 30, 0.60)" }}>Customer</Typography>
                    <InvoiceRecord fieldName="Customer Name" fieldData="Cameron Williamson"/>
                    <InvoiceRecord fieldName="Customer Address" fieldData="3891 Ranchview Dr. Richardson, California 62639"/>
                  </Box>

                  <Box
                    sx={{
                      border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      my: { xl: 4.25, lg: 4, md: 3.25, sm: 3, xs: 2.25 },
                    }}
                  >
                    <Typography sx={{color:"rgba(30, 30, 30, 0.60)" }}>Payment</Typography>
                    <InvoiceRecord fieldName="Payment  Total" fieldData="9.460"/>
                    <InvoiceRecord fieldName="Payment Total Value" fieldData="2.00"/>
                  </Box>

                  <Box
                    sx={{
                      border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      my: { xl: 4.25, lg: 4, md: 3.25, sm: 3, xs: 2.25 },
                    }}
                  >
                  <Grid container>
                    <Grid item xs={10.5}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                      sx={{
                        textTransform: "none",
                        // fontSize: CustomFont,
                        fontFamily: "Heebo",
                        fontWeight: "500",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: {
                          xl: "421px",
                          lg: "304px",
                          md: "290px",
                          sm: "263px",
                          xs: "100px",
                        },
                        height: {
                          xl: "54px",
                          lg: "50px",
                          md: "44px",
                          sm: "40px",
                          xs: "35px",
                        },
                        background: "#9F77EB",
                        color: "white",
                        //   my: { xl: 3, lg: 2.6, md: 2, sm: 1.5, xs: 1.3 },
                        ":hover": {
                          bgcolor: "#9F77EB",
                          color: "white",
                        },
                        // top: { xl: "-12px", lg: "-10px", md: "-8px", sm: "-6px" },
                      }}
                    >
                      <img src={checkCircle} alt="check-circle" style={{marginRight:"14px"}}/>
                      Validate Document
                    </Button>
                    </Box>
                    </Grid>
                    <Grid item xs={1.5} align="right">
                    {/* <Button
                      sx={{
                        textTransform: "none",
                        // fontSize: CustomFont,
                        fontFamily: "Heebo",
                        fontWeight: "500",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: {
                          xl: "54px",
                          lg: "15px",
                          md: "10px",
                          sm: "35px",
                          xs: "25px",
                        },
                        height: {
                          xl: "54px",
                          lg: "50px",
                          md: "40px",
                          sm: "35px",
                          xs: "25px",
                        },
                        background: "rgba(134, 134, 134, 0.20)",
                        //   my: { xl: 3, lg: 2.6, md: 2, sm: 1.5, xs: 1.3 },
                        ":hover": {
                          bgcolor: "rgba(134, 134, 134, 0.20)",
                        },
                        // top: { xl: "-12px", lg: "-10px", md: "-8px", sm: "-6px" },
                      }}
                    >
                      <img src={trash} alt="delete"/>
                      {/* Validate Document */}
                    {/* </Button>  */}
                     <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', background:"rgba(134, 134, 134, 0.20)",
                      width: {
                          xl: "54px",
                          lg: "50px",
                          md: "44px",
                          sm: "40px",
                          xs: "35px",
                        },
                        height: {
                          xl: "54px",
                          lg: "50px",
                          md: "44px",
                          sm: "40px",
                          xs: "35px",
                        }}}>
                       <img src={trash} alt={"trash"} style={{display:'flex', alignItems:'center', justifyContent:'center'}} />
                     </Box>
                    </Grid>
                  </Grid>
                  </Box>

                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Invoice;
