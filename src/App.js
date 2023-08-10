import './App.css';
import './header-action'
import './Css/animate.css'
import './Css/animate.min.css'
import './Css/style.css'
import 'reset-css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';
import VillaPage from './Pages/User/VillaPage';
import CulinaryPage from './Pages/User/CulinaryPage';
import {
  Routes, Route,
} from "react-router-dom";
import HomePage from './Pages/User/HomePage';
import ExplorePage from './Pages/User/ExplorePage';
import GalleryPage from './Pages/User/GalleryPage';
import BookingPage from './Pages/User/BookingPage';
import LayoutUser from './Layout/LayoutUser'
import HistoryBookingPage from './Pages/User/HistoryBookingPage'
import Login from './Components/form_login/Login'
import Register from './Components/form_register/Register'
import LayoutAdmin from './Layout/LayoutAdmin'
import ListBookPage from './Pages/Admin/ListBookPage'
import TaiKhoanPage from './Pages/Admin/TaiKhoanPage';
import HomeCart from './Pages/User/HomeCard';
import PayCard  from './Components/User/PayCard'
import { BookingProvider } from "./Components/User/BookingContext";
function App() {
  return (
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
        <Route path="/admin/" element={<LayoutAdmin />} >
          <Route index element={<ListBookPage />} />
          <Route path="listbook" element={<ListBookPage />} />
          <Route path="taikhoan" element={<TaiKhoanPage />} />

        </Route>

      </Routes>
      </BookingProvider>


    </div>
  );
}

export default App;
