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
import IconButton from "@mui/material/IconButton";
import { theme } from "../Theme";

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
        <Typography variant="subtitle1" className={classes.TypographyText}>
          Organization Name
        </Typography>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          // rows={1}
          variant="outlined"
          className={classes.TextField}
        />

        <Grid
          container
          // rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 4 }}
          className={classes.AddPaymentGridContainer}
        >
          <Grid item xs={4}>
            <Typography variant="subtitle1" className={classes.TypographyText}>
              Amount
            </Typography>
            <TextField fullWidth size="small" className={classes.TextField} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" className={classes.TypographyText}>
              Date
            </Typography>
            {/* <img src={calendar} alt="ghgjh"/> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <DatePicker
                  className={classes.TextField}
                  slotProps={{
                    textField: { size: "small" },
                    // tabs: {
                    //   dateIcon: <CalendarIcon/>,
                    //   timeIcon: <CalendarIcon/>,
                    // },
                    // actionBar: calendar,
                    // toolbar: calendar,
                    // openPickerIcon: <CalendarIcon/>
                    // keyboardPicker: {
                    //   keyboardIcon: <img src={calendar} alt="Calendar" />,
                    // },
                  }}
                  // renderInput={(props) => (
                  //   <div>
                  //     <input {...props} />
                  //     <IconButton edge="end" onClick={props.openPicker}>
                  //     <img src={calendar} alt="Calendar" />
                  //     </IconButton>
                  //   </div>
                  // )}
                  // inputFormat="MM/dd/yyyy"
                  // renderInput={(props) => (
                  //   <div>
                  //     <input {...props} />
                  //     <img src={calendar} alt="Calendar" />
                  //   </div>
                  // )}
                  // openPickerIcon={<img src={calendar} alt="Calendar" />}
                  // components={{openPickerIcon:calendar}}
                  // openPickerIcon={<img src={calendar} alt="Calendar" />}
                  // slots={{
                  //   openPickerIcon: <img src={calendar} alt="Calendar" />, // Use the SVG icon here
                  // }}
                />
              </DemoItem>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" className={classes.TypographyText}>
              Status
            </Typography>
            <StatusDropdown />
            {/* <Dropdown /> */}
          </Grid>
        </Grid>

        <Box className={classes.AddPaymentGridContainer}>
          <Typography variant="subtitle1" className={classes.TypographyText}>
            Upload Payment Invoice
          </Typography>
          <Box border={"1px solid rgba(0, 0, 0, 0.20)"} borderRadius="5px">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileSelect}
              fullWidth
            />
            <Box className={classes.BrowseFileBox}>
              <Button
                onClick={() => fileInputRef.current.click()}
                className={classes.BrowseFileButton}
              >
                Browse File
              </Button>

              <Typography
                variant="subtitle1"
                className={classes.SelectFileTypography}
                color={
                  selectedFile
                    ? theme.palette.color30.main
                    : theme.palette.color30.superlight
                }
              >
                {selectedFile ? selectedFile.name : "No File Selected"}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button className={classes.AddPaymentbtn}>Add Payment</Button>
      </CardContent>
    </Card>
  );
}

export default AddPayment;
