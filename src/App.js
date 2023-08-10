import './App.css';
import './header-action'
import './css/animate.css'
import './css/animate.min.css'
import './css/headerstyle.css'
import 'reset-css/reset.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';

import VillaPage from './pages/user/VillaPage';
import Header from './components/user/Header';
import CulinaryPage from './pages/user/CulinaryPage';
import {
  Routes, Route,
} from "react-router-dom";
import HomePage from './pages/user/HomePage';
import ExplorePage from './pages/user/ExplorePage';
import Layout1 from './pages/admin/Layout';
import GalleryPage from './pages/user/GalleryPage';
import Footers from './components/user/Footers';
import BookingPage from './pages/user/BookingPage';
import Login from './components/form_login/Login';
import Register from './components/form_register/Register';

import store from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/villapage" element={<VillaPage />} />
          <Route path="/culinarypage" element={<CulinaryPage />} />
          <Route path="/explorepage" element={<ExplorePage />} />
          <Route path="/gallerypage" element={<GalleryPage />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </div>
    </Provider>
  );
}

export default App;
