import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography, ListItemText } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
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
import { styled } from "@mui/material/styles";
import { up } from "./Theme";
import ArrowUp from "./images/arrow-up.svg";

const classes = {
  root: "root",
  btn: "btn",
  addIcon: "addIcon",
  filterIcon: "filterIcon",
};

const Root = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    border: "1px solid rgba(0, 0, 0, 0.20)",
    borderRadius: "5px",
    [up("xs")]: {
      margin: "20px 23px",
    },
    [up("sm")]: {
      margin: "32px 32px",
    },
    [up("md")]: {
      margin: "25px 27px",
    },
    [up("lg")]: {
      margin: "30px 32px",
    },
    [up("xl")]: {
      margin: "32px 32px",
    },
    [up("xxl")]: {
      margin: "32px 40px",
    },
  },
  [`& .${classes.btn}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#9F77EB",
    color: "white",
    marginRight:"1vh",
    ":hover": {
      background: "#9F77EB",
      color: "white",
    },
    [up("xs")]: {
      width: "114px",
      height: "32.25px",
      // padding:"7.9px 8px"
    },
    [up("sm")]: {
      width: "128px",
      height: "35.3px",
      // padding:"7.9px 19px"
    },
    [up("md")]: {
      width: "134px",
      height: "35.9px",
      // padding:"8px 10px"
    },
    [up("lg")]: {
      width: "145px",
      height: "35px",
      // padding:"8px 12px"
    },
    [up("xl")]: {
      width: "175px",
      height: "39px",
      // padding:"7px 15px"
    },
    [up("xxl")]: {
      width: "190px",
      height: "41px",
      // padding:"6.5px 16px"
    },
  },
  [`& .${classes.addIcon}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [up("xs")]: {
      width: "14px",
      height: "14px",
    },
    [up("sm")]: {
      width: "15px",
      height: "15px",
    },
    [up("md")]: {
      width: "16px",
      height: "16px",
    },
    [up("lg")]: {
      width: "17px",
      height: "17px",
    },
    [up("xl")]: {
      width: "19px",
      height: "19px",
    },
    [up("xxl")]: {
      width: "20px",
      height: "20px",
    },
  },
  [`& .${classes.filterIcon}`]: {
    display: "flex",
    alignItems: "center",
    [up("xs")]: {
      width: "12px",
      height: "12px",
      marginRight: "6px",
    },
    [up("sm")]: {
      width: "13px",
      height: "13px",
      marginRight: "6px",
    },
    [up("md")]: {
      width: "17px",
      height: "17px",
      marginRight: "7px",
    },
    [up("lg")]: {
      width: "18px",
      height: "18px",
      marginRight: "8px",
    },
    [up("xl")]: {
      width: "18px",
      height: "21px",
      marginRight: "10px",
    },
    [up("xxl")]: {
      width: "18px",
      height: "21px",
      marginRight: "10px",
    },
  },
}));

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

  // const Customicons = {
  //   sortAscending: '<i class="fa fa-arrow-up"/><i class="fa fa-arrow-down"/>',
  //   sortDescending: '<i class="fa fa-arrow-down"/><i class="fa fa-arrow-up "/>',
  // };

  function responsiveHeader(params) {
    const value = params.displayName;
    const showArrow = params.displayName === 'Status';
    return (
      <>
        <Typography variant="body1" sx={{color:"#1E1E1E"}}>{value}</Typography>
      {showArrow ? null : <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>}
      </>
    );
  }

  const ResponsiveFontsize = (params) => {
    const value = params.value;
    return <Typography variant="body1" sx={{color:"rgba(0, 0, 0, 0.60)"}}>{value}</Typography>;
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
            <Box>
              <img
                src={download}
                alt="download"
                style={{ marginRight: "8px", marginTop: "9px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="body1"
              sx={{
                color: "#9F77EB",
                cursor: "pointer",
                // fontFamily: "Heebo",
                // fontWeight: "500",
                // fontSize: "16px !important",
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

  const FilterLabel = () => {
    return (
      <Box sx={{ display: "flex" }}>
        <Box
          component="img"
          src={filter}
          alt="Filter Icon"
          className={classes.filterIcon}
          />
        <Typography sx={{ color: "#868686" }} variant="body1">
          Filter by organiztion
        </Typography>
      </Box>
    );
  };

  const [columnDefs] = useState([
    {
      field: "Payment Invoice",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      minWidth: 395,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: "Organization",
      minWidth: 315,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: "Amount",
      minWidth: 65,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: "Date",
      minWidth: 90,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: "Status",
      minWidth: 70,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: " ",
      minWidth: 150,
      // sortable: false,
      cellRenderer: handleInvoice,
    },
  ]);

  const defaultColDef = {
    // sortable: true,
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
      <Root
        className={classes.root}
        // sx={{
        //   border: "1px solid rgba(0, 0, 0, 0.20)",
        //   borderRadius: "5px",
        //   // height: "auto",
          // width: "auto",
        // }}
        // my={{ xl: 4, lg: 3.5, md: 2.5, sm: 2, xs: 1.5 }}
        // mx={{ xl: 5, lg: 4, md: 3, sm: 2, xs: 2 }}
      >
        <Box
          m={{ xxl: 4, xl: 3.5, lg: 3, md: 2.5, sm: 2, xs: 2 }}
          // my={{xxl:4, xl: 3.5, lg: 3, md: 2.5, sm: 2, xs: 2 }}
          // mx={{xxl:4, xl: 3.5, lg: 3, md: 2.5, sm: 2, xs: 2 }}
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
                // sx={{
                // display: "flex",
                // alignItems: "flex-start",
                // justifyContent: "flex-start",
                // }}
              >
                <Typography variant="body1">
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
                <Box sx={{ display: "flex", alignItems: "center", mt:{xs:1} }}>
                  <Button
                    className={classes.btn}
                    // sx={{
                    // display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                    // width: {
                    //   xl: "147px",
                    //   lg: "137px",
                    //   md: "130px",
                    //   sm: "101px",
                    //   xs: "100px",
                    // },
                    // height: {
                    //   xl: "50px",
                    //   lg: "45px",
                    //   md: "40px",
                    //   sm: "35px",
                    //   xs: "25px",
                    // },
                    // background: "#9F77EB",
                    // color: "white",
                    //   my: { xl: 3, lg: 2.6, md: 2, sm: 1.5, xs: 1.3 },
                    // ":hover": {
                    //   bgcolor: "#9F77EB",
                    //   color: "white",
                    // },
                    // top: { xl: "-12px", lg: "-10px", md: "-8px", sm: "-6px" },
                    // }}
                  >
                    <AddIcon
                      className={classes.addIcon}
                      // sx={{
                      //   width: {
                      //     xl: "20px",
                      //     lg: "18px",
                      //     md: "17px",
                      //     sm: "14px",
                      //     xs: "14px",
                      //   },
                      //   height: {
                      //     xl: "20px",
                      //     lg: "18px",
                      //     md: "17px",
                      //     sm: "14px",
                      //     xs: "14px",
                      //   },
                      //   marginBottom: { sm: "2.5px", xs: "2px" },
                      //   marginTop: { md: "1.4px", xl: "2.5px" },
                      //   display: "flex",
                      //   alignItems: "center",
                      //   justifyContent: "center",
                      // }}
                    />
                    Add Payment Detail
                  </Button>

                  <Box
                    sx={{
                      width: {
                        xxl: "14.11vw",
                        xl: "16vw",
                        lg: "17vw",
                        md: "18vw",
                        sm: "24vw",
                        xs: "42vw",
                      },
                    }}
                  >
                    <FormControl
                      fullWidth
                      size="small"
                    >
                      <Select
                        multiple
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={organization}
                        onChange={handleChange}
                        displayEmpty
                        IconComponent={KeyboardArrowDownIcon}
                        // renderValue={(selected) => selected.join(", ")}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return (
                              <FilterLabel />
                            );
                          }
                          return selected.join(", ");
                          // return selected;
                        }}
                        // renderValue={(selected) => selected}
                      >
                        {options.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            <Checkbox
                              checked={organization.includes(option.value)}
                            />
                            <ListItemText primary={option.label} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Box
            className="ag-theme-alpine"
            //  custom-scrollbar
            sx={{
              height: {
                xxl: "55vh",
                xl: "53vh",
                lg: "41.5vh",
                md: "47vh",
                sm: "53vh",
                xs: "60vh",
              },
              // height: "46vh",
              // width: "auto",
              // width:{xl:"auto", lg:"auto", md:"auto", sm:"auto", xs:"auto"},
              // fontSize: "16px",
              // fontFamily: "Heebo",
              // fontWeight: 500,
            }}
            // my={{ xl: 1, lg: 0.8, md: 0.7, sm: 0.6, xs: 2 }}
          >
            <AgGridReact
              // rowData={rowData}
              // rowData={rowData && rowData.filter((item)=>item.Organization.includes(organization))}
              rowData={filteredRowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              // icons={Customicons}
              gridOptions={gridOptions}
              className=" ag-root-wrapper"
            ></AgGridReact>
          </Box>
        </Box>
      </Root>
      {/* </ThemeProvider> */}
    </>
  );
}

export default Payment;
