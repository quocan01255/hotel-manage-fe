import './App.css';
import './header-action'
import './Css/animate.css'
import './Css/animate.min.css'
import './Css/style.css'
import 'reset-css/reset.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';

import VillaPage from './Pages/User/VillaPage';
import Header from './Components/User/Header';
import CulinaryPage from './Pages/User/CulinaryPage';
import {
  Routes, Route,
} from "react-router-dom";
import HomePage from './Pages/User/HomePage';
import ExplorePage from './Pages/User/ExplorePage';
import GalleryPage from './Pages/User/GalleryPage';
import Footers from './Components/User/Footers';
import BookingPage from './Pages/User/BookingPage';
import LayoutUser from  './Layout/LayoutUser'
import HistoryBookingPage from './Pages/User/HistoryBookingPage'
import Login from './Components/form_login/Login'
import Register from './Components/form_register/Register'
import LayoutAdmin from './Layout/LayoutAdmin'
import ListBookPage from './Pages/Admin/ListBookPage'
import TaiKhoanPage from './Pages/Admin/TaiKhoanPage';
function App() {
  return (
    <div className="App">
    
      <Routes>

      <Route path="/bookingpage" element={<BookingPage/>}/>
      <Route path="/history" element={<HistoryBookingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>


        <Route path="/" element={<LayoutUser/>}>
        <Route index element={<HomePage />} />
        <Route path="/villapage" element={<VillaPage />} />
        <Route path="/culinarypage" element={<CulinaryPage />} />
        <Route path="/explorepage" element={<ExplorePage />} />
        <Route path="/gallerypage" element={<GalleryPage/>} />
        </Route>

       
       



       
         {/* <Route path="/" element={<LayoutAdmin/>} >
          <Route index element={<ListBookPage/>} />
          <Route path="listbook" element={<ListBookPage/>} />
          <Route path="taikhoan" element={<TaiKhoanPage/>} />
         
          </Route>  */}
        
      </Routes>
      
    </div>
  );
}

export default App;
