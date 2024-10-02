import { React, useEffect } from "react";
import "./login.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
export default function Login() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let validate=(e)=>{
  
      if(document.getElementById('mailbox').value=="Umar@gmail.com" && document.getElementById('passwordbox').value=="umar")
      {
        alert('welcome umar')
      }
      else
      {
        alert("Invalid login")
      }

  }

  return (
    <>
      <div data-aos="fade-up" className="signUpDiv">
        <div data-aos="fade-up" className="signUp">
          
            <h1 data-aos="fade-left">Login Up</h1>
            <br></br>
            <label className="txt">Email:</label>
            <br></br>
            <input id="mailbox" type="email" placeholder="Enter a Email" /> <br />
            <br></br>
            <label className="txt"> Password:</label>
            <br></br>
            <input id="passwordbox" type="password" placeholder="Enter a Password" /> <br />
            <br></br>
            <input className="btn" type="submit" onClick={validate} value="Login" />
            <br></br>
            <br></br>
            <p>
              if you have no account click on:<br></br>
              <NavLink to="/SignUp">Register Now </NavLink>
            </p>
          
        </div>
      </div>
    </>
  );
}
