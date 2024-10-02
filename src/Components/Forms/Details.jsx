import {React,useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Details.css";
import Aos from "aos";
import "aos/dist/aos.css";
import BookNow from "./BookNow";
const Details = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div fade-up="fade-up"className="df">
      <div data-aos="fade-up" className="heading">
        <h2 fade-aos="fade-up"> Details</h2>
      </div>
      <div  className="Details">
        <div data-aos="fade-left" className="pic1"></div>
        <div data-aos="fade-left" className="pic2"></div>
        <div data-aos="fade-left" className="pic3"></div>
      </div>
      <div data-aos="fade-up" className="txt1">
        <div className="facilities">
          <h2 fade-aos="left">Facilities</h2>
          <ul>
            <li fade-aos="fade-up" >Food</li>
            <li fade-aos="fade-up" >photography</li>
            <li fade-aos="fade-up" >Accumudation</li>
            <li fade-aos="fade-up" >Transport</li>
          </ul>
        </div>
        <div data-aos="fade-up" className="description">
          <h2 fade-aos="left">Trip Description</h2>
          <p fade-aos="fade-up">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, ex adipisci. Praesentium ipsum aut facere ab nemo
            necessitatibus, molestias minus omnis possimus nesciunt, incidunt
            voluptates inventore, sequi laborum. Deserunt dolores impedit ut id
            cupiditate veniam, dolorem architecto quod obcaecati totam qui?
            Fuga, rem sunt aliquid commodi natus veniam tempora expedita.
          </p>
        </div>
        <div data-aos="fade-up"  className="rules">
          <h2 fade-aos="left">Trip Rules</h2>
          <ul>
            <li>
              <p fade-aos="fade-up">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                sed corporis, repellat voluptate, nisi maiores, odio ipsum et
                assumenda architecto debitis. Nisi qui natus quidem esse
                voluptatem sunt veritatis dolorum.
              </p>
            </li>
            <li>
              <p fade-aos="fade-up">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                sed corporis, repellat voluptate, nisi maiores, odio ipsum et
                assumenda architecto debitis. Nisi qui natus quidem esse
                voluptatem sunt veritatis dolorum.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="btnBook">
        <button>
          <NavLink to ="/BookNow">Book Now</NavLink>
        </button>
      </div>
      </div>
    </>
  );
};
export default Details;
