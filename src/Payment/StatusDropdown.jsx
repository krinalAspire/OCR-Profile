import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import disc from "../images/disc.svg";
import AlertCircle from "../images/alert-circle.svg";
import CheckCircle from "../images/check-circle.svg";

function StatusDropdown() {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
    // console.log(event.target.value);
  };

  const MenuItemContent = ({Icon, Status}) => {
    return (
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <img src={Icon} alt="disc" />
        </Grid>
        <Grid item xs={10}>
            {Status}
        </Grid>
      </Grid>
    );
  };

  return (
    <FormControl fullWidth>
      <Select
        IconComponent={KeyboardArrowDownIcon}
        value={status}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        renderValue={(selected) => {
          if (!selected) {
            return <Typography>Select Status</Typography>;
          }
          return selected;
        }}
      >
        <MenuItem value="Pending">
            <MenuItemContent Icon={disc} Status="Pending" />
        </MenuItem>
        <MenuItem value="Failed"><MenuItemContent Icon={AlertCircle} Status="Failed" /></MenuItem>
        <MenuItem value="Done"><MenuItemContent Icon={CheckCircle} Status="Done" /></MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusDropdown;
