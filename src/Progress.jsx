import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material";

function Progress() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 1366, // Medium devices (tablets)
        lg: 1440, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },
  });

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    // height: 14,
    // width:325,
    borderRadius: 7,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[300],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 7,
      //   backgroundColor: theme.palette.mode === 'light' ? '#9F77EB' : '#D9D9D9',
      backgroundColor: "#9F77EB",
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <BorderLinearProgress
        variant="determinate"
        value={85}
        sx={{
          width: { xl: 325, lg: 285, md: 265, sm: 210, xs: 180 },
          height: { xl: 14, lg: 13, md: 12, sm: 10, xs: 8 },
        }}
      />
    </ThemeProvider>
  );
}

export default Progress;
