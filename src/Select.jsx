import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Box } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const classes={
//   selectbtn:'selectbtn'
// }

// const Root = styled('div')(({ theme }) => ({
//   [`&.${classes.selectbtn}`]: {
//     background:"yellow"
//   }
//   }))

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
        fullWidth
        sx={{
          width: {
            xxl: "9.47vw",
            xl: "12.5vw",
            lg: "13vw",
            md: "14vw",
            sm: "15vw",
            xs: "29vw",
          },
          height: {
            xxl: "5vh",
            xl: "5.78vh",
            lg: "7vh",
            md: "6vh",
            sm: "3vh",
            xs: "4vh",
          },
        }}
      >
         <Box  display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center">
        <InputLabel
          id="demo-simple-select-helper-label"
          // shrink={false}
          sx={{
            // textAlign: 'center',
            // transform: 'translateX(50%) ', 
            // display: "flex",
            // alignItems: "center",
            // ml: { xl: 1.5, lg: 1.2, md: 1 },
            // position: 'absolute',
            // top: '-6px',
            // lineHeight: { xl: 1.5, lg: 1.5, md: 1.2, sm: 1, xs: 1 },
            // lineHeight:1,
            // bottom:{sm:"16px"},
            // top:{sm:"-8.5px", xs:"-10.5px", md:"-4.7px", lg:"-1px",xl:"0px"}
            top: {
              xxl: "23.6px",
              xl: "23.6px",
              lg: "19px",
              md: "16px",
              sm: "12px",
              xs: "-10px",
            },
            // position:"relative"
          }}
        >
          {props.label}
          {/* {role} */}
        </InputLabel>
        </Box>
        <Select
          disabled={props.label === "Admin" ? isDisabled : null}
          // labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          IconComponent={KeyboardArrowDownIcon}
          value={role}
          // label={props.label}
          // label={role}
          onChange={handleChange}
          sx={{
            my: { xxl: 3, xl: 2.9, lg: 2.75, md: 2.5, sm: 2.5 },
            mb: { xs: 1.3 },
            //   borderRadius: "5px",
            // border: "1px solid rgba(0, 0, 0, 0.20)",
            width: {
              xxl: "9.47vw",
              xl: "12.5vw",
              lg: "13vw",
              md: "14vw",
              sm: "15vw",
              xs: "29vw",
            },
            height: {
              xxl: "5vh",
              xl: "5.78vh",
              lg: "7vh",
              md: "6vh",
              sm: "3vh",
              xs: "4vh",
            },
            // pl: { xl: 1.5, lg: 1.2, md: 1 },
            color: "rgba(43, 43, 43, 0.80)",
            // position:"relative"
          }}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="member">Members</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default SelectButton;
