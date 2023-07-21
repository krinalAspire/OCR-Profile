import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

function SelectButton(props) {

  const isDisabled = true;

  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
    // console.log(event.target.value);
  };
  return (

      <>
      <FormControl
        sx={{
          my: { xl: 3, lg: 2.6, md: 2, sm: 1.5, xs: 1.3 },
          // minWidth: 120,
          borderRadius: "5px",
          border: "1px solid rgba(0, 0, 0, 0.20)",
        }}
      >
        <InputLabel
          id="demo-simple-select-helper-label"
          // shrink={false}
          sx={{
            ml: { xl: 1.5, lg: 1.2, md: 1 },
            // position: 'absolute',
          // top: '-6px',
            // lineHeight: { xl: 1.5, lg: 1.5, md: 1.2, sm: 1, xs: 1 },
            // lineHeight:1,
            // bottom:{sm:"16px"},
            top:{sm:"-8.5px", xs:"-10.5px", md:"-4.7px", lg:"-1px",xl:"0px"}
            // position:"relative"
          }}
        >
          {props.label}
          {/* {role} */}
        </InputLabel>
        <Select
          disabled={props.label === "Admin" ?  isDisabled  : null}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          IconComponent={KeyboardArrowDownIcon}
          value={role}
          // label={props.label}
          label={role}
          onChange={handleChange}
          sx={{
            width: {
              // xl: "204px",
              // lg: "196px",
              // md: "170px",
              // sm: "125px",
              // xs: "120px",
              xl: "182px",
              lg: "178px",
              md: "145px",
              sm: "110px",
              xs: "105px",
            },
            height: {
              // xl: "54px",
              // lg: "50px",
              // md: "44px",
              // sm: "34px",
              // height: "27px",
              xl: "54px",
              lg: "52px",
              md: "38px",
              sm: "27px",
              xs: "25px",
            },
            pl: { xl: 1.5, lg: 1.2, md: 1 },
            color:"rgba(43, 43, 43, 0.80)"
            // position:"relative"
          }}
        >
          <MenuItem
            value="admin"
          >
            Admin
          </MenuItem>
          <MenuItem
            value="member"
          >
            Members
          </MenuItem>
        </Select>
      </FormControl>
      </>

  );
}

export default SelectButton;
