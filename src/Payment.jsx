import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  Typography,
  ListItemText,
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import filter from "./images/filter.svg";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import download from "./images/download.svg";
import "./Payment.css";
import { PaymentData } from "./rowData";
import NavPayment from "./NavPayment";

function Payment() {
  const [rowData, setrowData] = useState(PaymentData);

  const [organization, setOrganization] = useState([]);

  const handleChange = (event) => {
    //   const organization = Array.isArray(event.target.value) ? event.target.value : [event.target.value];
    // setOrganization(organization);
    const selectedOrganizations = Array.isArray(event.target.value)
      ? event.target.value
      : [event.target.value];
    setOrganization(selectedOrganizations);
    // console.log(organization);
    // console.log(rowData && rowData.filter((item)=>item.Organization.includes(organization)));

    // console.log(
    //   rowData &&
    //     rowData.filter((item) =>
    //       selectedOrganizations.includes(item.Organization)
    //     )
    // );
  };

  //   const filteredRowData = rowData && rowData.filter((item) =>
  //   organization.includes(item.Organization)
  // );

  const filteredRowData =
    organization.length > 0
      ? rowData.filter((item) => organization.includes(item.Organization))
      : rowData;

  const DataCount = filteredRowData.length;
  // console.log("rawdata", filteredRowData.length);

  // console.log("Filterdata", filteredRowData);

  // const options = [
  //   { value: "Aspire Softserv Private Limited", label: "Aspire Softserv Private Limited" },
  //   { value: "Simmoms Infotech Private Limited", label: "Simmoms Infotech Private Limited" },
  //   { value: "Surekha Infotech Private Limited", label: "Surekha Infotech Private Limited" },
  //   // Other options
  // ];

  const options = Array.from(
    new Set(rowData.map((item) => item.Organization))
  ).map((organization) => ({
    value: organization,
    label: organization,
  }));

  // const CustomFont = {
  //   xl: 16,
  //   lg: 15,
  //   md: 13,
  //   sm: 10,
  //   xs: 10,
  // };

  const Customicons = {
    sortAscending: '<i class="fa fa-arrow-up"/><i class="fa fa-arrow-down"/>',
    sortDescending: '<i class="fa fa-arrow-down"/><i class="fa fa-arrow-up "/>',
  };

  const handleInvoice = () => {
    const handleClicked = () => {
      alert(`It's Working!!`);
    };

    return (
      <Grid>
        <Grid container alignItems="center" justifyContent="flex-start">
          <Grid item xs={3}>
            {" "}
            <img
              src={download}
              alt="download"
              style={{ marginRight: "8px", marginTop: "9px" }}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{
                color: "#9F77EB",
                cursor: "pointer",
                fontFamily: "Heebo",
                fontWeight: "500",
                fontSize: "16px",
              }}
              onClick={() => handleClicked()}
            >
              Download Invoice
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const [columnDefs] = useState([
    {
      field: "Payment Invoice",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      minWidth: 400,
      cellStyle: { fontSize: "16px", fontFamily: "Heebo", fontWeight: 500 },
    },
    {
      field: "Organization",
      minWidth: 350,
      cellStyle: { fontSize: "16px", fontFamily: "Heebo", fontWeight: 500 },
    },
    {
      field: "Amount",
      minWidth: 95,
      cellStyle: { fontSize: "16px", fontFamily: "Heebo", fontWeight: 500 },
    },
    {
      field: "Date",
      minWidth: 110,
      cellStyle: { fontSize: "16px", fontFamily: "Heebo", fontWeight: 500 },
    },
    {
      field: "Status",
      minWidth: 100,
      cellStyle: { fontSize: "16px", fontFamily: "Heebo", fontWeight: 500 },
    },
    {
      field: " ",
      minWidth: 200,
      cellStyle: { fontSize: "16px", fontFamily: "Heebo", fontWeight: 500 },
      sortable: false,
      cellRenderer: handleInvoice,
    },
  ]);

  const defaultColDef = {
    sortable: true,
    flex: 1,
    // minWidth: 100,
  };

  const gridOptions = {
    rowHeight: 50,
  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <NavPayment />
        <Box
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.20)",
            borderRadius: "5px",
            height: "auto",
            width: "auto",
          }}
          my={{ xl: 4, lg: 3.5, md: 2.5, sm: 2, xs: 1.5 }}
          mx={{ xl: 5, lg: 4, md: 3, sm: 2, xs: 2 }}
        >
          <Box
            my={{ xl: 4, lg: 3.5, md: 3, sm: 2.5, xs: 2 }}
            mx={{ xl: 3.5, lg: 3, md: 2.5, sm: 2, xs: 1.5 }}
          >
            <Typography
            variant="h4"
              sx={{
                marginBottom: 0.7,
              }}
            >
              Payment History({DataCount})
            </Typography>
            <Grid>
              <Grid container columns={{ xs: 4, sm: 12 }} mb={2}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                  variant="body1" 
                  >
                    See history of your payment plan invoice
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: {
                          xl: "147px",
                          lg: "137px",
                          md: "130px",
                          sm: "101px",
                          xs: "100px",
                        },
                        height: {
                          xl: "50px",
                          lg: "45px",
                          md: "40px",
                          sm: "35px",
                          xs: "25px",
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
                      <AddIcon
                        sx={{
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
                          marginBottom: { sm: "2.5px", xs: "2px" },
                          marginTop: { md: "1.4px", xl: "2.5px" },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                      Add Payment
                    </Button>
                    
                    <FormControl
                      fullWidth
                      sx={{
                        width: {
                          xl: "271px",
                          lg: "207px",
                          md: "199px",
                          sm: "154px",
                          xs: "150px",
                        },
                        height: {
                          xl: "50px",
                          lg: "45px",
                          md: "40px",
                          sm: "35px",
                          xs: "25px",
                        },
                        marginLeft: "10px",
                      }}
                    >
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          // fontSize: CustomFont,
                          top: {
                            xl: "-2px",
                            lg: "-4px",
                            md: "-5px",
                            sm: "-6px",
                            xs: "-10px",
                          },
                          // marginLeft:{xl:2}
                        }}
                      >
                        {/* <img src={filter} alt="filter" style={{ marginRight:'6px'}}  className="filter-icon" /> */}
                        <Box
                          component="img"
                          src={filter}
                          alt="Filter Icon"
                          sx={{
                            width: {
                              xl: "19px",
                              lg: "18px",
                              md: "17px",
                              sm: "13px",
                              xs: "12px",
                            },
                            height: {
                              xl: "19px",
                              lg: "18px",
                              md: "17px",
                              sm: "13px",
                              xs: "12px",
                            },
                            marginRight: {
                              xl: "10px",
                              lg: "8px",
                              md: "7px",
                              sm: "6px",
                              xs: "6px",
                            },
                            display: "flex",
                            alignItems: "center",
                          }}
                        />
                        Filter by organiztion
                      </InputLabel>
                      <Select
                        multiple
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={organization}
                        label={organization}
                        onChange={handleChange}
                        IconComponent={KeyboardArrowDownIcon}
                        // renderValue={(selected) => selected.join(", ")}
                        renderValue={(selected) => selected}
                        sx={{
                          width: {
                            xl: "271px",
                            lg: "207px",
                            md: "199px",
                            sm: "154px",
                            xs: "150px",
                          },
                          height: {
                            xl: "50px",
                            lg: "45px",
                            md: "40px",
                            sm: "35px",
                            xs: "25px",
                          },
                          "& .MuiSelect-icon": {
                            // fill: 'red',
                            width: {
                              xl: "25px",
                              lg: "22px",
                              md: "20px",
                              sm: "18px",
                              xs: "18px",
                            },
                            height: {
                              xl: "25px",
                              lg: "22px",
                              md: "20px",
                              sm: "18px",
                              xs: "18px",
                            },
                            top: {
                              xl: "13px",
                              lg: "11px",
                              md: "10px",
                              sm: "7px",
                              xs: "3px",
                            },
                            /* Add other CSS properties or modifications here */
                          },
                          // top: {
                          //   xl: "-12px",
                          //   lg: "-10px",
                          //   md: "-8px",
                          //   sm: "-6px",
                          // },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option.value}
                            value={option.value}
                          >
                            <Checkbox
                              checked={organization.includes(option.value)}
                            />
                            <ListItemText
                              primary={option.label}
                            />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Box
              className="ag-theme-alpine"
              //  custom-scrollbar
              sx={{
                height: {
                  xl: "55vh",
                  lg: "55vh",
                  md: "47vh",
                  sm: "53vh",
                  xs: "63vh",
                },
                // height: "46vh",
                width: "auto",
                // width:{xl:"auto", lg:"auto", md:"auto", sm:"auto", xs:"auto"},
                fontSize: "16px",
                fontFamily: "Heebo",
                fontWeight: 500,
              }}
              my={{ xl: 1, lg: 0.8, md: 0.7, sm: 0.6, xs: 2 }}
            >
              <AgGridReact
                // rowData={rowData}
                // rowData={rowData && rowData.filter((item)=>item.Organization.includes(organization))}
                rowData={filteredRowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                icons={Customicons}
                gridOptions={gridOptions}
                className=" ag-root-wrapper"
              ></AgGridReact>
            </Box>
          </Box>
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
}

export default Payment;
