import logo from './logo.svg';
import './App.css';
import AppNavbar from './Componets/Navbar';
import Product from './Componets/Product';
import { Route, Router, Routes } from 'react-router-dom';
import Cart from './Componets/Cart';

function App() {

  return (
    <div >
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
