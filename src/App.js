import 'reset-css/reset.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import './App.css';
import Login from './components/form_login/Login';
import Register from './components/form_register/Register';

function App() {
  return (
    <Link to={`/login`}>Login</Link>
  );
}

export default App;
