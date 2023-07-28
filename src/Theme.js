import { createTheme } from "@mui/material";

const breakpoints = {
  values: {
    xs: 0, // Extra small devices (portrait phones)
    sm: 600, // Small devices (landscape phones)
    md: 900, // Medium devices (tablets)
    lg: 1200, // Large devices (desktops)
    xl: 1440, // Extra large devices (large desktops)
    xxl: 1700,
  },
};

export const { up } = createTheme({ breakpoints }).breakpoints;

export const theme = createTheme({
  breakpoints,
  typography: {
    body1: {
      fontFamily: "Heebo",
      fontWeight: 500,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "10px",
      },
      [up("sm")]: {
        fontSize: "11px",
      },
      [up("md")]: {
        fontSize: "11px",
      },
      [up("lg")]: {
        fontSize: "12px",
      },
      [up("xl")]: {
        fontSize: "14px",
      },
      [up("xxl")]: {
        fontSize: "16px",
      },
    },
    body2: {
      fontFamily: "Heebo",
      fontWeight: 400,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "10px",
      },
      [up("sm")]: {
        fontSize: "11px",
      },
      [up("md")]: {
        fontSize: "11px",
      },
      [up("lg")]: {
        fontSize: "12px",
      },
      [up("xl")]: {
        fontSize: "13px",
      },
      [up("xxl")]: {
        fontSize: "14px",
      },
    },
    subtitle1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "7px",
      },
      [up("sm")]: {
        fontSize: "7px",
      },
      [up("md")]: {
        fontSize: "9px",
      },
      [up("lg")]: {
        fontSize: "11px",
      },
      [up("xl")]: {
        fontSize: "13px",
      },
      [up("xxl")]: {
        fontSize: "15px",
      },
    },
    h4: {
      fontFamily: "Poppins",
      fontWeight: 600,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "15px",
      },
      [up("sm")]: {
        fontSize: "17px",
      },
      [up("md")]: {
        fontSize: "18px",
      },
      [up("lg")]: {
        fontSize: "20px",
      },
      [up("xl")]: {
        fontSize: "22px",
      },
      [up("xxl")]: {
        fontSize: "24px",
      },
    },
    h5: {
      fontFamily: "Heebo",
      fontWeight: 500,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "10px",
      },
      [up("sm")]: {
        fontSize: "11px",
      },
      [up("md")]: {
        fontSize: "12px",
      },
      [up("lg")]: {
        fontSize: "14px",
      },
      [up("xl")]: {
        fontSize: "16px",
      },
      [up("xxl")]: {
        fontSize: "18px",
      },
    },
  },

  components: {
    // MuiBox: {
    //   styleOverrides: {
    //     root: {
    //       scrollableBox: {
    //         background:"yellow",
    //         scrollbarWidth: 'thin',
    //         scrollbarColor: '#888 #f1f1f1',
    //         '&::-webkit-scrollbar': {
    //           width: '8px',
    //         },
    //         '&::-webkit-scrollbar-track': {
    //           background: '#f1f1f1',
    //         },
    //         '&::-webkit-scrollbar-thumb': {
    //           background: '#888',
    //           borderRadius: '4px',
    //         },
    //         '&::-webkit-scrollbar-thumb:hover': {
    //           background: '#555',
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiBox: {
    //     styleOverrides: {
    //       root: {
    //         background:"yellow",
    //         "&::-webkit-scrollbar": {
    //             width: "0.4em",
    //           },
    //           "&::-webkit-scrollbar-track": {
    //             background: "#D9D9D9",
    //             borderRadius: "5px",
    //           },
    //           "&::-webkit-scrollbar-thumb": {
    //             background: "#868686",
    //             borderRadius: "5px",
    //           },
    //       },
    //     },
    //   },
    // MuiFormControl: {
    //   styleOverrides: {
    //     root: {
    //       background:'yellow',
    //       size:'small'
    //     },
    //   },
    // },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#9F77EB",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          border: "1px solid rgba(0, 0, 0, 0.20)",
          position: "relative",
          // background: 'yellow',
          // width: '150px',
          // width:'13vw'
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          // height: "30vh",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
          "&::-webkit-scrollbar": {
            width: "0.4em",
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
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: "Heebo",
    //       fontWeight: 500,
    //       "&:hover": {
    //         backgroundColor: "rgba(30, 30, 30, 0.10)",
    //         // color: "#FFFFFF",
    //         color:"black"
    //       },
    //       "&.Mui-selected": {
    //         backgroundColor: "rgba(159, 119, 235, 0.28)",
    //         // color: "#FFFFFF",
    //         color:"black"
    //       },
    //       "&.Mui-selected:hover": {
    //         backgroundColor: "rgba(159, 119, 235, 0.28)",
    //         // color: "#FFFFFF",
    //         color:"black"
    //       },
    //     },
    //   },
    // },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Heebo",
          fontWeight: 400,
          letterSpacing: 0,
          display: "flex",
          textAlign: "center",
          [up("xs")]: {
            fontSize: "10px",
          },
          [up("sm")]: {
            fontSize: "11px",
          },
          [up("md")]: {
            fontSize: "12px",
          },
          [up("lg")]: {
            fontSize: "13px",
          },
          [up("xl")]: {
            fontSize: "15px",
          },
          [up("xxl")]: {
            fontSize: "16px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Heebo",
          fontWeight: 500,
          borderRadius: "5px",
          textTransform: "none",
          padding: 0,
          boxShadow: 0,
          letterSpacing: 0,
          [up("xs")]: {
            fontSize: "10px",
          },
          [up("sm")]: {
            fontSize: "11px",
          },
          [up("md")]: {
            fontSize: "11px",
          },
          [up("lg")]: {
            fontSize: "12px",
          },
          [up("xl")]: {
            fontSize: "14px",
          },
          [up("xxl")]: {
            fontSize: "16px",
          },
        },
      },
    },
  },
});
