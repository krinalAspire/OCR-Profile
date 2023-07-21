import './App.css';
import {ThemeProvider} from "@mui/material";
import { theme } from './Theme';
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
