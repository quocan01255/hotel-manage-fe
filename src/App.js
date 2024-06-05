import { Routes, Route, } from "react-router-dom";
import { Provider } from 'react-redux'
import './App.css';
import 'reset-css/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'font-awesome/css/font-awesome.css'
import VillaPage from './Pages/User/VillaPage';
import CulinaryPage from './Pages/User/CulinaryPage';
import HomePage from './Pages/User/HomePage';
import ExplorePage from './Pages/User/ExplorePage';
import GalleryPage from './Pages/User/GalleryPage';
import BookingPage from './Pages/User/BookingPage';
import LayoutUser from './Layout/LayoutUser'
import HistoryBookingPage from './Pages/User/HistoryBookingPage'
import Login from './Components/form_login/Login'
import Register from './Components/form_register/Register'
import HomeCart from './Pages/User/HomeCart';
import PayCard from './Components/User/PayCard'
import AdminPage from './Pages/Admin/AdminPage';
import SearchFormBooking from './Components/Admin/booking_manager/searchFormBooking';
import DetailPage from "./Pages/User/DetailPage";

import ManagerTypePage from "./Pages/Admin/ManagerTypePage";
import DashBoard from "./Components/Admin/DashBoard";
import RoomType from "./Components/Admin/room_manager/RoomType";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/history" element={<HistoryBookingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homecart" element={<HomeCart />} />
        <Route path="/paycard" element={<PayCard />} />
        <Route path="/history/:id" element={<DetailPage />} />
        {/*home  */}
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<HomePage />} />
          <Route path="/villapage" element={<VillaPage />} />
          <Route path="/culinarypage" element={<CulinaryPage />} />
          <Route path="/explorepage" element={<ExplorePage />} />
          <Route path="/gallerypage" element={<GalleryPage />} />
        </Route>
        {/* admin */}
        <Route path="/adminpage" element={<AdminPage />} >
          <Route path="ManagerBooking" element={<SearchFormBooking />} />
          <Route path="ManagerRoom/:typeId" element={<RoomType />} />
          <Route path="ManagerTypePage" element={<ManagerTypePage />} />
          <Route path="DashBoard" element={<DashBoard />} />
        </Route>
        <Route path="/bookingpage" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
