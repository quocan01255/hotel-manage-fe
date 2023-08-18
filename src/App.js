import './App.css';
import './header-action'
import './Css/animate.css'
import './Css/animate.min.css'
import './Css/headerstyle.css'
import 'reset-css/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import './App.css';
import VillaPage from './Pages/User/VillaPage';
import CulinaryPage from './Pages/User/CulinaryPage';
import { Routes, Route, } from "react-router-dom";
import HomePage from './Pages/User/HomePage';
import ExplorePage from './Pages/User/ExplorePage';
import GalleryPage from './Pages/User/GalleryPage';
import BookingPage from './Pages/User/BookingPage';
import LayoutUser from './Layout/LayoutUser'
import HistoryBookingPage from './Pages/User/HistoryBookingPage'
import Login from './Components/form_login/Login'
import Register from './Components/form_register/Register'
import HomeCart from './Pages/User/HomeCard';
import PayCard from './Components/User/PayCard'
import { BookingProvider } from "./Components/User/BookingContext";

import store from './redux/store'
import { Provider } from 'react-redux'
import AdminPage from './Pages/Admin/AdminPage';
import SearchFormBooking from './Components/Admin/booking_manager/searchFormBooking';
import DeluxePool from './Components/Admin/room_manager/DeluxePoolRoom';
import DeluxeExecutive from './Components/Admin/room_manager/DeluxeExecutiveRoom';
import Deluxe from './Components/Admin/room_manager/DeluxeRoom';
import DeluxePlus from './Components/Admin/room_manager/DeluxePlusRoom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookingProvider>
          <Routes>

            <Route path="/bookingpage" element={<BookingPage />} />
            <Route path="/history" element={<HistoryBookingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homecart" element={<HomeCart />} />
            <Route path="/paycard" element={<PayCard />} />
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
              <Route path="ManagerRoomDeluxePool" element={<DeluxePool />} />
              <Route path="ManagerRoomDeluxeExecutive" element={<DeluxeExecutive />} />
              <Route path="ManagerRoomDeluxePlus" element={<DeluxePlus />} />
              <Route path="ManagerRoomDeluxe" element={<Deluxe />} />
            </Route>
          </Routes>
        </BookingProvider>


      </div>
    </Provider>
  );
}

export default App;
