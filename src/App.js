import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Profile from './Profile';
import NewProfile from './NewProfile';
import NavPayment from './NavPayment';
// import Aggrid from './Aggrid';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/profile" element={<Nav/>}/>
        <Route path='/' element={<NavPayment />} />
        {/* <Route path='/' element={<Scroll/>} /> */}
        {/* <Route path='/' element={<Profile/>} /> */}
         {/* <Route path="/" element={<NewProfile />}/> */}
      </Routes> 

      {/* <Aggrid /> */}
    </>
  );
}

export default App;
