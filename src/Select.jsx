import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

function SelectButton(props) {
  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0, // Extra small devices (portrait phones)
  //       sm: 600, // Small devices (landscape phones)
  //       md: 1366, // Medium devices (tablets)
  //       lg: 1440, // Large devices (desktops)
  //       xl: 1920, // Extra large devices (large desktops)
  //     },
  //   },
  // });

  const isDisabled = true;

  const TitleFontsize = {
    xl: 16,
    lg: 15,
    md: 12,
    sm: 10,
    xs: 10,
  };

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
            fontSize: TitleFontsize,
            fontFamily: "Heebo",
            fontWeight: 400,
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
          disabled={props.label === "Admin" ? { isDisabled } : null}
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
            fontSize: TitleFontsize,
            fontFamily: "Heebo",
            fontWeight: 400,
            pl: { xl: 1.5, lg: 1.2, md: 1 },
            color:"rgba(43, 43, 43, 0.80)"
            // position:"relative"
          }}
        >
          {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
          <MenuItem
            value="admin"
            sx={{
              fontSize: TitleFontsize,
              fontFamily: "Heebo",
              fontWeight: 400,
            }}
          >
            Admin
          </MenuItem>
          <MenuItem
            value="member"
            sx={{
              fontSize: TitleFontsize,
              fontFamily: "Heebo",
              fontWeight: 400,
            }}
          >
            Members
          </MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      </>

  );
}

export default SelectButton;
