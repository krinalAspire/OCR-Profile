import React, { useState } from "react";
import Nav from "./Nav";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InvoiceRecord from "./InvoicerRecord";
import checkCircle from "./images/check-circle.svg";
import trash from "./images/trash-2.svg";
import AddIcon from "@mui/icons-material/Add";

function Invoice() {
  // const [fieldCount, setFieldCount] = useState(2); // Initial field count is 2 (for the first two InvoiceRecord components)

  // const handleAddField = () => {
  //   // Increment the field count when the user clicks "Add More Fields"
  //   setFieldCount((prevCount) => prevCount + 1);
  //   console.log(fieldCount);
  // };

  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0, // Extra small devices (portrait phones)
  //       sm: 600, // Small devices (landscape phones)
  //       md: 1360, // Medium devices (tablets)
  //       lg: 1440, // Large devices (desktops)
  //       xl: 1920, // Extra large devices (large desktops)
  //     },
  //   },
  // });

  const customFont = {
    xl: 14,
    lg: 13,
    md: 12,
    sm: 10,
    xs: 10,
  };

  const AddField = () => {
    const [fieldCount, setFieldCount] = useState(2); // Initial field count is 2 (for the first two InvoiceRecord components)

  const handleAddField = () => {
    setFieldCount((prevCount) => prevCount + 1);
    console.log(fieldCount);
  };

    return (
      <>
        {Array.from({ length: fieldCount - 2 }).map((_, index) => (
          <InvoiceRecord
            key={index}
            fieldName=" Add Field"
            fieldData="Add Data"
          />
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginLeft: 4 }}>
            <AddIcon
              sx={{
                color: "#868686",
                width: {
                  xl: "20px",
                  lg: "18px",
                  md: "17px",
                  sm: "14px",
                  xs: "14px",
                },
                height: {
                  xl: "20px",
                  lg: "18px",
                  md: "17px",
                  sm: "14px",
                  xs: "14px",
                },
                marginRight: 1,
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                cursor: "pointer",
                color: "#868686",
                fontSize: customFont,
                fontFamily: "Heebo",
                fontWeight: 400,
              }}
              onClick={handleAddField}
              // onClick={onAddField}
            >
              Add More Fields
            </Typography>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      <Nav />
      {/* <ThemeProvider theme={theme}> */}
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
                <Box
                  sx={{
                    borderLeft: "1px solid rgba(0, 0, 0, 0.06)",
                    // border: "1px solid blue",
                    background: "#F7F7F7",
                  }}
                >
                  <Box
                    sx={{
                      // border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      mt: { xl: 4.25, lg: 4, md: 3.25, sm: 3, xs: 2.25 },
                      mb:{xl:5, lg:4.5, md:4, sm:3.5, xs:2}
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(30, 30, 30, 0.60)",
                        fontSize: customFont,
                        pl: { xl: 3, lg: 2, md: 2, sm: 1.65, xs: 1.65 },
                      }}
                    >
                      Invoice
                    </Typography>
                    <InvoiceRecord fieldName="Invoice No" fieldData="1325533" />
                    <InvoiceRecord
                      fieldName="Invoice Date"
                      fieldData="12/02/2023"
                    />
                    <InvoiceRecord
                      fieldName="Invoice Order Date"
                      fieldData="10/02/2023"
                    />
                    <InvoiceRecord
                      fieldName="Invoice Order No."
                      fieldData="SD-1245632"
                    />
                  </Box>

                  <Box
                    sx={{
                      // border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      mb:{xl:5, lg:4.5, md:4, sm:3.5, xs:2}
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(30, 30, 30, 0.60)",
                        fontSize: customFont,
                        pl: { xl: 3, lg: 2, md: 2, sm: 1.65, xs: 1.65 },
                      }}
                    >
                      Supplier
                    </Typography>
                    <InvoiceRecord
                      fieldName="Supplier Name"
                      fieldData="Supplier Address"
                    />
                    <InvoiceRecord
                      fieldName="Supplier Address"
                      fieldData="2118 Thornridge Cir. Syracuse, Connecticut 35624"
                    />

                    <AddField />
                  </Box>

                  <Box
                    sx={{
                      // border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      mb:{xl:5, lg:4.5, md:4, sm:3.5, xs:2}
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(30, 30, 30, 0.60)",
                        fontSize: customFont,
                        pl: { xl: 3, lg: 2, md: 2, sm: 1.65, xs: 1.65 },
                      }}
                    >
                      Customer
                    </Typography>
                    <InvoiceRecord
                      fieldName="Customer Name"
                      fieldData="Cameron Williamson"
                    />
                    <InvoiceRecord
                      fieldName="Customer Address"
                      fieldData="3891 Ranchview Dr. Richardson, California 62639"
                    />

                    <AddField />
                  </Box>

                  <Box
                    sx={{
                      // border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      // mt: { xl: 4.25, lg: 4, md: 3.25, sm: 3, xs: 2.25 },
                      mb:{xl:15, lg:13, md:11, sm:9, xs:7}
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(30, 30, 30, 0.60)",
                        fontSize: customFont,
                        pl: { xl: 3, lg: 2, md: 2, sm: 1.65, xs: 1.65 },
                      }}
                    >
                      Payment
                    </Typography>
                    <InvoiceRecord
                      fieldName="Payment  Total"
                      fieldData="9.460"
                    />
                    <InvoiceRecord
                      fieldName="Payment Total Value"
                      fieldData="2.00"
                    />

                    <AddField />
                  </Box>

                  <Box
                    sx={{
                      // border: "1px solid red",
                      mx: { xl: 3.75, lg: 3, md: 2.75, sm: 2, xs: 1.75 },
                      mb:{xl:3.6, lg:3.2, md:2.3, sm:2, xs:1.7}
                      // my: { xl: 4.25, lg: 4, md: 3.25, sm: 3, xs: 2.25 },
                    }}
                  >
                    <Grid container>
                      <Grid item xs={10.5}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Button
                            sx={{
                              textTransform: "none",
                              fontSize: {
                                xl: 16,
                                lg: 15,
                                md: 12,
                                sm: 10,
                                xs: 10,
                              },
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
                                sm: "265px",
                                xs: "245px",
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
                            <img
                              src={checkCircle}
                              alt="check-circle"
                              style={{ marginRight: "14px" }}
                            />
                            Validate Document
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={1.5} align="right">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(134, 134, 134, 0.20)",
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
                            },
                          }}
                        >
                          <img
                            src={trash}
                            alt={"trash"}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
}

export default Invoice;
