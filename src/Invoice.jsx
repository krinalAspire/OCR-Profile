import React, { useState } from "react";
import Nav from "./Nav";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InvoiceRecord from "./InvoicerRecord";
import checkCircle from "./images/check-circle.svg";
import trash from "./images/trash-2.svg";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { up } from "./Theme";

export const classes = {
  root: "root",
  InvoicePdfMainBox: "InvoicePdfMainBox",
  InvoicePdfBox: "InvoicePdfBox",
  InvoiceGridMainBox: "InvoiceGridMainBox",
  InvoiceGrid: "InvoiceGrid",
  InvoiceGridBox: "InvoiceGridBox",
  InvoiceRecordBox: "InvoiceRecordBox",
  InvoiceRecordTitle: "InvoiceRecordTitle",
  Validatebtn: "Validatebtn",
  trashbtn: "trashbtn",
  CheckCircleIcon: "CheckCircleIcon",
};

const Root = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    // background:'yellow'
  },
  [`& .${classes.InvoicePdfMainBox}`]: {
    // background:'yellow'
    overflow: "auto",
    // scrollbarWidth: "thin",
    // "&::-webkit-scrollbar": {
    //   width: "0.4em",
    // },
    // "&::-webkit-scrollbar-track": {
    //   background: "#D9D9D9",
    //   borderRadius: "5px",
    // },
    // "&::-webkit-scrollbar-thumb": {
    //   backgroundColor: "#868686",
    //   borderRadius: "5px",
    // },
    [up("xs")]: {
      height: "20vh",
    },
    [up("sm")]: {
      height: "20vh",
    },
    [up("md")]: {
      height: "86vh",
    },
    [up("lg")]: {
      height: "88.8vh",
    },
    [up("xl")]: {
      height: "80vh",
    },
    [up("xxl")]: {
      height: "92.8vh",
    },
  },
  [`& .${classes.InvoicePdfBox}`]: {
    // overflow: "auto",
    // scrollbarWidth: "thin",
    // "&::-webkit-scrollbar": {
    //   width: "0.4em",
    // },
    // "&::-webkit-scrollbar-track": {
    //   background: "#D9D9D9",
    //   borderRadius: "5px",
    // },
    // "&::-webkit-scrollbar-thumb": {
    //   backgroundColor: "#868686",
    //   borderRadius: "5px",
    // },
    height: "100vh",
  },
  [`& .${classes.InvoiceGridMainBox}`]: {
    // background:"yellow",
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
    [up("xs")]: {
      height: "77.5vh",
    },
    [up("sm")]: {
      height: "55vh",
    },
    [up("md")]: {
      height: "86vh",
    },
    [up("lg")]: {
      height: "88.8vh",
    },
    [up("xl")]: {
      height: "80vh",
    },
    [up("xxl")]: {
      height: "92.8vh",
    },
  },
  [`& .${classes.InvoiceGrid}`]: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.06)",
    // border: "1px solid blue",
    background: "#F7F7F7",
    // background:'yellow'
  },
  [`& .${classes.InvoiceGridBox}`]: {
    [up("xs")]: {
      margin: "9px 10px",
    },
    [up("sm")]: {
      margin: "10px 11px",
    },
    [up("md")]: {
      margin: "11px 12px",
    },
    [up("lg")]: {
      margin: "14px 13px",
    },
    [up("xl")]: {
      margin: "12px 11px",
    },
    [up("xxl")]: {
      margin: "20px 14px",
    },
  },
  [`& .${classes.InvoiceRecordBox}`]: {
    [up("xs")]: {
      marginBottom: "16px",
    },
    [up("sm")]: {
      marginBottom: "16px",
    },
    [up("md")]: {
      marginBottom: "16px",
    },
    [up("lg")]: {
      marginBottom: "16px",
    },
    [up("xl")]: {
      marginBottom: "16px",
    },
    [up("xxl")]: {
      marginBottom: "25px",
    },
  },
  [`& .${classes.InvoiceRecordTitle}`]: {
    color: "rgba(30, 30, 30, 0.60)",
    [up("xs")]: {
      paddingLeft: "10px",
    },
    [up("sm")]: {
      paddingLeft: "12px",
    },
    [up("md")]: {
      paddingLeft: "12px",
    },
    [up("lg")]: {
      paddingLeft: "16px",
    },
    [up("xl")]: {
      paddingLeft: "20px",
    },
    [up("xxl")]: {
      paddingLeft: "23px",
    },
  },
  [`& .${classes.Validatebtn}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#9F77EB",
    color: "white",
    ":hover": {
      background: "#9F77EB",
      color: "white",
    },
    [up("xs")]: {
      width: "210px",
      height: "35px",
    },
    [up("sm")]: {
      width: "256px",
      height: "40px",
    },
    [up("md")]: {
      width: "190px",
      height: "35px",
    },
    [up("lg")]: {
      width: "260px",
      height: "45px",
    },
    [up("xl")]: {
      width: "285px",
      height: "47px",
    },
    [up("xxl")]: {
      width: "376px",
      height: "54px",
    },
  },
  [`& .${classes.trashbtn}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(134, 134, 134, 0.20)",
    borderRadius:"5px",
    [up("xs")]: {
      width: "35px",
      height: "35px",
    },
    [up("sm")]: {
      width: "40px",
      height: "40px",
    },
    [up("md")]: {
      width: "35px",
      height: "35px",
    },
    [up("lg")]: {
      width: "45px",
      height: "45px",
    },
    [up("xl")]: {
      width: "47px",
      height: "47px",
    },
    [up("xxl")]: {
      width: "54px",
      height: "54px",
    },
  },
  [`& .${classes.CheckCircleIcon}`]: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    marginRight: "14px",
    // [up('xs')]:{
    //   width:"20px",
    //   height:"20px"
    // },
    // [up('sm')]:{
    //   width:"20px",
    //   height:"20px"
    // },
    // [up('md')]:{
    //   width:"20px",
    //   height:"20px"
    // },
    // [up('lg')]:{
    //   width:"20px",
    //   height:"20px"
    // },
    // [up('xl')]:{
    //   width:"20px",
    //   height:"20px"
    // },
    // [up('xxl')]:{
    //   width:"20px",
    //   height:"20px"
    // },
  },
}));

function Invoice() {
  // const [fieldCount, setFieldCount] = useState(2); // Initial field count is 2 (for the first two InvoiceRecord components)

  // const handleAddField = () => {
  //   // Increment the field count when the user clicks "Add More Fields"
  //   setFieldCount((prevCount) => prevCount + 1);
  //   console.log(fieldCount);
  // };

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
              variant="body2"
              sx={{
                cursor: "pointer",
                color: "#868686",
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
      <Root className={classes.root}>
        <Grid container columns={{ xs: 4, sm: 7, md: 12 }}>
          <Grid item xs={9}>
            <Box
              // className={`${classes.InvoicePdfMainBox} scrollableBox`}
              className={classes.InvoiceGridMainBox}
              sx={{
                border: "1px solid black",
                // overflow: "auto",
                // height: {
                //   xs: "70vh",
                //   sm: "70vh",
                //   md: "70vh",
                //   lg: "70vh",
                //   xl: "70vh",
                //   xxl: "70vh",
                // },
              }}
            >
              <Box
                // className={classes.InvoicePdfBox}
                sx={{
                  overflow: "auto",
                  border: "1px solid red",
                  mx: { xxl: 3, xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 },
                  my: { xxl: 3, xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 },
                  height: "100vh",
                }}
              >
                <div>Hello</div>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3} className={classes.InvoiceGrid}>
            <Box className={classes.InvoiceGridMainBox}>
              <Box
                className={classes.InvoiceGridBox}
                // sx={{height:"50vh", overflow: 'auto'}}
              >
                <Box className={classes.InvoiceRecordBox}>
                  <Typography
                    variant="body2"
                    className={classes.InvoiceRecordTitle}
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

                <Box className={classes.InvoiceRecordBox}>
                  <Typography
                    variant="body2"
                    className={classes.InvoiceRecordTitle}
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

                  {/* <AddField /> */}
                </Box>

                <Box className={classes.InvoiceRecordBox}>
                  <Typography
                    variant="body2"
                    className={classes.InvoiceRecordTitle}
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

                  {/* <AddField /> */}
                </Box>

                <Box
                  sx={{
                    mb: { xxl: 10.5, xl: 8, lg: 6, md: 4.1, sm: 6, xs: 6.5 },
                  }}
                >
                  <Typography
                    variant="body2"
                    className={classes.InvoiceRecordTitle}
                  >
                    Payment
                  </Typography>
                  <InvoiceRecord fieldName="Payment  Total" fieldData="9.460" />
                  <InvoiceRecord
                    fieldName="Payment Total Value"
                    fieldData="2.00"
                  />

                  {/* <AddField /> */}
                </Box>

                <Box>
                  <Grid container>
                    <Grid item xs={10.5}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button className={classes.Validatebtn}>
                          <Box
                            component="img"
                            src={checkCircle}
                            alt="check-circle"
                            className={classes.CheckCircleIcon}
                            // sx={{ marginRight: "14px" }}
                          />
                          {/* <img
                          src={checkCircle}
                          alt="check-circle"
                          style={{ marginRight: "14px" }}
                        /> */}
                          Validate Document
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={1.5} align="right">
                      <Box className={classes.trashbtn}>
                        <img src={trash} alt={"trash"} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Root>
    </>
  );
}

export default Invoice;
