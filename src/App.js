import './App.css';
import './header-action'
import './css/animate.css'
import './css/animate.min.css'
import './css/headerstyle.css'
import 'reset-css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import './App.css';
import VillaPage from './pages/user/VillaPage';
import CulinaryPage from './pages/user/CulinaryPage';
import {
  Routes, Route,
} from "react-router-dom";
import HomePage from './pages/user/HomePage';
import ExplorePage from './pages/user/ExplorePage';
import GalleryPage from './pages/user/GalleryPage';
import BookingPage from './pages/user/BookingPage';
import LayoutUser from './Layout/LayoutUser'
import HistoryBookingPage from './pages/user/HistoryBookingPage'
import Login from './components/form_login/Login'
import Register from './components/form_register/Register'
import LayoutAdmin from './Layout/LayoutAdmin'
import ListBookPage from './pages/admin/ListBookPage'
import TaiKhoanPage from './pages/admin/TaiKhoanPage';
import HomeCart from './pages/user/HomeCard';
import PayCard from './components/user/PayCard'
import { BookingProvider } from "./components/user/BookingContext";

import store from './redux/store'
import { Provider } from 'react-redux'
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
            <Route path="/admin/" element={<LayoutAdmin />} >
              <Route index element={<ListBookPage />} />
              <Route path="listbook" element={<ListBookPage />} />
              <Route path="taikhoan" element={<TaiKhoanPage />} />

            </Route>

          </Routes>
        </BookingProvider>


      </div>
    </Provider>
  );
}

export default App;
