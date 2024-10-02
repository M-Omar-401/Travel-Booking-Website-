import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Switch from "react-router-dom";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";
import BookNow from "./Components/Forms/BookNow";
import Details from "./Components/Forms/Details";
import Gallery from "./Components/Gallery/Gallery";
export default function App() {
  return (
    <div>
      {/* <Details/> */}
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/Home' element={<Home />} />
            <Route  path='/Main'element={<Main />} />
            <Route  path='/Footer' element={<Footer />} />
            <Route  path='/Login' element={<Login />} />
            <Route  path='/SignUp' element={<SignUp />} />
            <Route  path='/BookNow' element={<BookNow />} />
            <Route  path='/Details' element={<Details />} />
            <Route  path='/Gallery' element={<Gallery />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

// const App = () => {
//   return (
//     <div>
//     <h2>Hello World</h2>
//     <Login/>

//     </div>
//   );
// }

// export default App;
