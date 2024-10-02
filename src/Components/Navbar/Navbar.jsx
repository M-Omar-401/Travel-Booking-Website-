import {React ,useState} from "react";
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Navbar = () => {

    const [active, setActive]=useState('navBar');
    const showNav = ()=>{
        setActive('navBar activeNavbar');
    }
    const removeNav=()=>{
        setActive('navBar');
    }
  return (
    <section on className='navBar Section'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon"/>
              Cpl Travels
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navList grid">

            <li className="navItem">
              <NavLink  to ="/Home" className="navLink">
                Home
              </NavLink >
            </li>


            <li className="navItem">
              <NavLink  to="/Main" className="navLink">
                Next Plane/Services
              </NavLink >
            </li>

            <li className="navItem">
              <NavLink  to="/Gallery" className="navLink">
                Gallery
              </NavLink >
            </li>

            <li className="navItem">
              <NavLink  to="/Footer" className="navLink">
                Cotact Us
              </NavLink >
            </li>

            <button className="btn">
              <NavLink to="/Login">Login</NavLink>
            </button>

            <button className="btn">
              <NavLink to="/BookNow" >Book Now</NavLink>
            </button>
          </ul>
          <div onClick={ removeNav } className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div  onClick={ showNav } className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
