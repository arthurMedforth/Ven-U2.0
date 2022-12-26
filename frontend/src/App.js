import "./App.css";
import {useState} from 'react';
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import MyAccount from "./Pages/MyAccount.jsx";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import AddNewVenue from "./Pages/AddNewVenue";
import VenueSummary from "./Pages/VenueSummary";
import { Routes, Route } from "react-router-dom";

function App() {

  const [token, setToken] = useState();

  return (
    <div className="App">
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"></link> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script> */}
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/MyAccount" element={<MyAccount token={token}/>} />
        <Route path="/Login" element={<Login setToken={setToken}/>} />
        <Route path="/Register" element={<Register setToken={setToken}/>} />
        <Route path="/AddNewVenue" element={<AddNewVenue token={token}/>} />
        <Route path="/Venue/:id" element={<VenueSummary/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
