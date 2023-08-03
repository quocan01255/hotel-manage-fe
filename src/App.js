import './App.css';
import './jquery'
import './Css/animate.css'
import './Css/animate.min.css'
import './Css/style.css'
import 'reset-css/reset.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';
import Login from './components/form_login/Login';
import Register from './components/form_register/Register';

import VillaPage from './Pages/User/VillaPage';
import Header from './Components/User/Header';
import CulinaryPage from './Pages/User/CulinaryPage';
import {
  Routes, Route,
} from "react-router-dom";
import HomePage from './Pages/User/HomePage';
import ExplorePage from './Pages/User/ExplorePage';
import Layout1 from './Pages/Admin/Layout';
import GalleryPage from './Pages/User/GalleryPage';
import Footers from './Components/User/Footers';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villapage" element={<VillaPage />} />
        <Route path="/culinarypage" element={<CulinaryPage />} />
        <Route path="/explorepage" element={<ExplorePage />} />
        <Route path="/gallerypage" element={<GalleryPage/>} />
      </Routes>
      
      <Footers/>
    </div>
  );
}

export default App;
