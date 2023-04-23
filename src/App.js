import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/component/Login/Login'
import Register from './component/register/Register';
import Update from './component/update/Update';
function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/update" element={<Update/>} />

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
