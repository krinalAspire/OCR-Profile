import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Box} from "@mui/material";
import Typography from "@mui/material/Typography";

function SelectButton(props) {
  const [role, setRole] = useState(props.label);
  // console.log(role);

  const isDisabled = true;

  const handleChange = (event) => {
    setRole(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <>
    <Box 
    sx={{    
      // width: {
      //       xxl: "9.47vw",
      //       xl: "12.5vw",
      //       lg: "13vw",
      //       md: "14vw",
      //       sm: "15vw",
      //       xs: "29vw",
      //     },
          // height: {
          //   xxl: "5vh",
          //   xl: "5.78vh",
          //   lg: "7vh",
          //   md: "6vh",
          //   sm: "3vh",
          //   xs: "4vh",
          // },
          my: { xxl: 3, xl: 2.9, lg: 2.75, md: 2.5, sm: 2.5 },
        mb: { xs: 1.3 },
      // width: '100%',
      // maxWidth: '13vw', // Set a max width to ensure responsiveness
      maxWidth:{
        xxl: "9.47vw",
        xl: "12.5vw",
        lg: "13vw",
        md: "14vw",
        sm: "15vw",
        xs: "29vw",
      },
      // margin: '27px 0',
          }}
          >
      <FormControl
        fullWidth
        size="small"
        >
        <Select
          disabled={role === "Admin" ? isDisabled : null}
          IconComponent={KeyboardArrowDownIcon}
          value={role}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            color: "rgba(43, 43, 43, 0.80)",
          }}
        >
          <MenuItem value={role}>
            <Typography>{role}</Typography>
          </MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="member">Members</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </>
  );
}

export default SelectButton;
