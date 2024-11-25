
// import './App.css';
import { Routes, Route } from 'react-router-dom'
//  import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Menu from "./Components/Menu";
import Payment from './Components/Payment';
import Contact from "./Components/Contact";
import Footer from './Components/Footer';
// import { Card } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;
