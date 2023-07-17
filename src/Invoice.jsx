import React from "react";
import Nav from "./Nav";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InvoiceRecord from "./InvoicerRecord";

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
            <Grid container>
              <Grid item xs={8}>
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
              <Grid item xs={4}>
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
                    {/* <InvoiceRecord fieldName="Invoice Order Date" fieldData="10/02/2023"/>
                    <InvoiceRecord fieldName="Invoice Order No." fieldData="SD-1245632"/> */}
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
