import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Profile from './Profile';
import NewProfile from './NewProfile';
import NavPayment from './NavPayment';
import Pages from './Pages';
import Upload from './Upload';
import NavUpload from './NavUpload';
import Invoice from './Invoice';
// import Aggrid from './Aggrid';

function App() {
  return (
    <>
      {/* <Pages /> */}
      <Routes>
        <Route path='/' element={<Pages/>}/>
        {/* <Route path="/profile" element={<Nav/>}/> */}
        <Route path='/payment' element={<NavPayment />} />
        <Route path='/upload' element={<NavUpload/>}/>
        {/* <Route path='/' element={<Scroll/>} /> */}
        {/* <Route path='/' element={<Profile/>} /> */}
         <Route path="/profile" element={<NewProfile />}/>
         <Route path='/invoice' element={<Invoice />} />
      </Routes> 

      {/* <Aggrid /> */}
    </>
  );
}

export default App;
