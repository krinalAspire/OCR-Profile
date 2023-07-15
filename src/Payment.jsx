import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  createTheme,
  Grid,
  ThemeProvider,
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
import download  from "./images/download.svg";
import "./Payment.css";
import { PaymentData } from "./rowData";

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

  const CustomFont = {
    xl: 16,
    lg: 15,
    md: 13,
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
    components: {
      MuiMenu: {
        styleOverrides: {
          paper: {
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            "&::-webkit-scrollbar": {
              width: "0.4em",
              borderRadius: "5px", 
            },
            "&::-webkit-scrollbar-track": {
              background: "#D9D9D9",
              borderRadius: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#868686",
              borderRadius: "5px",
            },
          }, 
        },
      },
    },
  });

  const Customicons = {
    sortAscending: '<i class="fa fa-arrow-up"/><i class="fa fa-arrow-down"/>',
    sortDescending: '<i class="fa fa-arrow-down"/><i class="fa fa-arrow-up "/>',
  };

  const handleInvoice = () => {
    const handleClicked = () => {
      alert(`It's Working!!`);
    };

    return (
       <Grid >
        <Grid container alignItems="center" justifyContent="flex-start">
          <Grid item xs={3} > <img src={download} alt="download" style={{marginRight: '8px',marginTop:'9px'}}/></Grid>
          <Grid item xs={3} ><Typography
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
      </Typography></Grid>
        </Grid>
       </Grid>
      
    );
  };

  const [columnDefs] = useState([
    {
      field: "Payment Invoice",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      minWidth:400,
      cellStyle: {fontSize:"16px", fontFamily: "Heebo", fontWeight: 500}
    },
    {
      field: "Organization",
      minWidth: 350,
      cellStyle: {fontSize:"16px", fontFamily: "Heebo", fontWeight: 500},
    },
    {
      field: "Amount",
      minWidth: 95,
      cellStyle: {fontSize:"16px", fontFamily: "Heebo", fontWeight: 500},
    },
    {
      field: "Date",
      minWidth: 110,
      cellStyle: {fontSize:"16px", fontFamily: "Heebo", fontWeight: 500},
    },
    {
      field: "Status",
      minWidth: 100,
      cellStyle: {fontSize:"16px", fontFamily: "Heebo", fontWeight: 500},
    },
    {
      field: " ",
      minWidth:200,
      cellStyle: {fontSize:"16px", fontFamily: "Heebo", fontWeight: 500},
      sortable:false,
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
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.20)",
            borderRadius:"5px",
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
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: { xl: 24, lg: 20, md: 18, sm: 16, xs: 14 },
                marginBottom:0.7
              }}
            >
              Payment History({DataCount})
            </Typography>
            <Grid>
              <Grid
                container
                columns={{ xs: 4, sm: 12 }}
                mb={2}
              >
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                  <Typography
                    sx={{ fontSize: CustomFont }}
                  >
                    See history of your payment plan invoice
                  </Typography>
                </Grid>
                
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Box  sx={{display: 'flex', alignItems: 'center'}}>
                  <Button
                    sx={{
                      textTransform: "none",
                      fontSize: CustomFont,
                      fontFamily: "Heebo",
                      fontWeight: "500",
                      borderRadius: "5px",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
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
                          xl: "18px",
                          lg: "17px",
                          md: "16px",
                          sm: "15px",
                          xs: "14px",
                        },
                        height: {
                          xl: "18px",
                          lg: "17px",
                          md: "16px",
                          sm: "15px",
                          xs: "14px",
                        },
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                      }}
                    />
                    Add Payment
                  </Button>
                    <FormControl fullWidth sx={{ 
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
                          marginLeft:"10px",
                          }}>

                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: CustomFont,
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
                         <img src={filter} alt="filter" style={{ marginRight:'6px'}}  />
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
                          fontSize: CustomFont,
                          
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
                            sx={{ fontSize: CustomFont}}
                          >
                            <Checkbox
                              checked={organization.includes(option.value)}
                            />
                            <ListItemText
                              primary={option.label}
                              sx={{ fontSize: CustomFont }}
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
              className="ag-theme-alpine custom-scrollbar"

              sx={{
                height:{xl:"55vh", lg:"55vh", md:"47vh", sm:"53vh", xs:"63vh"},
                // height: "46vh",
                width: "auto",
                // width:{xl:"auto", lg:"auto", md:"auto", sm:"auto", xs:"auto"},
                fontSize:"16px",
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
      </ThemeProvider>
    </>
  );
}

export default Payment;
