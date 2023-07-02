
import './App.css';
import Home from  './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup';
import MyOrders from './components/MyOrders'
import { CartProvider } from './components/ContextReducer';
import About  from  './components/About'
import { BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <CartProvider>
    <Router>
<div>
  <Routes>
    <Route exact path ="/" element={<Home/>}></Route>
    <Route exact path ="/login" element={<Login/>}></Route>
    <Route exact path ="/createuser" element={<Signup/>}></Route>
    <Route exact path ="/myOrder" element={<MyOrders/>}></Route>
    <Route exact path = "/about" element={<About></About>}></Route>
  </Routes>
</div>
    </Router>
    </CartProvider>

  );
}

export default App;
