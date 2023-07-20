import './App.css';
import { createTheme, ThemeProvider, createBreakpoints } from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Profile from './Profile';
import NewProfile from './NewProfile';
import NavPayment from './NavPayment';
import Pages from './Pages';
import Upload from './Upload';
import NavUpload from './NavUpload';
import Invoice from './Invoice';
import Payment from './Payment';
// import Aggrid from './Aggrid';


const breakpoints={
  values: {
       xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 900, // Medium devices (tablets)
        lg: 1200, // Large devices (desktops)
        xl: 1440, // Extra large devices (large desktops)
        xxl:1700
  },
}


// const breakpoints={
//   values: {
//         xs: 0, // Extra small devices (portrait phones)
//       sm: 600, // Small devices (landscape phones)
//       md: 1366, // Medium devices (tablets)
//       lg: 1440, // Large devices (desktops)
//       xl: 1920, // Extra large devices (large desktops)
//   },
// }

const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0, // Extra small devices (portrait phones)
  //     sm: 600, // Small devices (landscape phones)
  //     md: 1366, // Medium devices (tablets)
  //     lg: 1440, // Large devices (desktops)
  //     xl: 1920, // Extra large devices (large desktops)
  //   },
  //   breakpoints: {
  //     values: {
  //       xs: 0, // Extra small devices (portrait phones)
  //       sm: 600, // Small devices (landscape phones)
  //       md: 900, // Medium devices (tablets)
  //       lg: 1200, // Large devices (desktops)
  //       xl: 1440, // Extra large devices (large desktops)
  //       xxl:1700
  //     },
  // },

   breakpoints,
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
          "&::-webkit-scrollbar": {
            width: "0.4em",
            // borderRadius: "5px",
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

    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       "&.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
    //         fill: "red",
    //         width: "18px",
    //         height: "18px",
    //         /* Add other CSS properties or modifications here */
    //       },
    //     },
    //   },
    // },
  },
  typography: {
    body1: {
      [createTheme({ breakpoints }).breakpoints.up('xs')]: {
        fontSize: "10px",
      },
      [createTheme({ breakpoints }).breakpoints.up('sm')]: {
        fontSize: "11px",
      },
      [createTheme({ breakpoints }).breakpoints.up('md')]: {
        fontSize: "11px",
      },
      [createTheme({ breakpoints }).breakpoints.up('lg')]: {
        fontSize: "12px",
      },
      [createTheme({ breakpoints }).breakpoints.up('xl')]: {
        fontSize: "14px",
      },
      [createTheme({ breakpoints }).breakpoints.up('xxl')]: {
        fontSize: "16px",
      },
    },
    subtitle1: {
      [createTheme({ breakpoints }).breakpoints.up('xs')]: {
        fontSize: "10px",
      },
      [createTheme({ breakpoints }).breakpoints.up('sm')]: {
        fontSize: "11px",
      },
      [createTheme({ breakpoints }).breakpoints.up('md')]: {
        fontSize: "11px",
      },
      [createTheme({ breakpoints }).breakpoints.up('lg')]: {
        fontSize: "12px",
      },
      [createTheme({ breakpoints }).breakpoints.up('xl')]: {
        fontSize: "14px",
      },
      [createTheme({ breakpoints }).breakpoints.up('xxl')]: {
        fontSize: "15px",
      },
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <Pages /> */}
      <Routes>
        <Route path='/' element={<Pages/>}/>
        {/* <Route path="/profile" element={<Nav/>}/> */}
        {/* <Route path='/payment' element={<NavPayment />} /> */}
        <Route path='/payment' element={<Payment />} />
        <Route path='/upload' element={<NavUpload/>}/>
        {/* <Route path='/' element={<Scroll/>} /> */}
        {/* <Route path='/' element={<Profile/>} /> */}
         <Route path="/profile" element={<NewProfile />}/>
         <Route path='/invoice' element={<Invoice />} />
      </Routes> 
      </ThemeProvider>
      {/* <Aggrid /> */}
    </>
  );
}

export default App;
