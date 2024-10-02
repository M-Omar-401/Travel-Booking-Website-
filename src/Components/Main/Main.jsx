import {React,useEffect} from 'react'
import './main.css';
import img from '../../assets/p1.jpg'
import img2 from '../../assets/p2.jpg'
import img3 from '../../assets/p3.jpg'
import img4 from '../../assets/p4.jpg'
import img5 from '../../assets/p5.jpg'
import img6 from '../../assets/p6.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import { NavLink } from 'react-router-dom';

import Aos from 'aos';
import "aos/dist/aos.css";

const Data=[
  {
    id:1,
    imgsrc:img,
    destTitle:'Naran Khagan',
    location:'Pakistan',
    grade:'CULTURAl RELAX',
    fees:'$90',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum at voluptatibus expedita quasi dignissimos ipsam dicta impedit eos magni'

  },
  {
    id:2,
    imgsrc:img2,
    destTitle:'Kashmir',
    location:'Pakistan',
    grade:'CULTURAl RELAX',
    fees:'$80',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum at voluptatibus expedita quasi dignissimos ipsam dicta impedit eos magni'

  },
  {
    id:3,
    imgsrc:img3,
    destTitle:'Kutily Bagh',
    location:'Pakistan',
    grade:'CULTURAl RELAX',
    fees:'$900',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum at voluptatibus expedita quasi dignissimos ipsam dicta impedit eos magni'

  },
  {
    id:4,
    imgsrc:img4,
    destTitle:'Sawat',
    location:'Pakistan',
    grade:'CULTURAl RELAX',
    fees:'$10',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum at voluptatibus expedita quasi dignissimos ipsam dicta impedit eos magni'

  },
  {
    id:5,
    imgsrc:img5,
    destTitle:'Sakardu',
    location:'Pakistan',
    grade:'CULTURAl RELAX',
    fees:'$80',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum at voluptatibus expedita quasi dignissimos ipsam dicta impedit eos magni'

  },
  {
    id:6,
    imgsrc:img6,
    destTitle:'Bora Bora',
    location:'New zealand',
    grade:'CULTURAl RELAX',
    fees:'$900',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum at voluptatibus expedita quasi dignissimos ipsam dicta impedit eos magni'

  },
]
  
const Main = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <div>
      <section className='main container section'>
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most Visited destinations
          </h3>
        </div>
        <div className="secContent grid">
          {
          Data.map(({ id,imgsrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id}
              data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle}/>
                </div>
                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}<small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>
                        {fees}
                      </h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      {description}
                    </p>
                  </div>
                  <button className='btn flex'>
                    <NavLink to="/Details">Details<HiOutlineClipboardCheck/></NavLink>
                  </button>
                  </div>
              </div>
            )
          })
        }
        </div>

      </section>
    </div>
  )
}

export default Main
