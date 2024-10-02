import { React } from "react";
import "./gallery.css";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p3.jpg";
import p3 from "../../assets/p2.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import p8 from "../../assets/p8.jpg";
import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/p10.jpg";
import p11 from "../../assets/p11.jpg";
import p12 from "../../assets/p12.jpg";
import p13 from "../../assets/p13.jpg";
import p14 from "../../assets/p14.jpg";
import p15 from "../../assets/p15.jpg";
import p16 from "../../assets/p16.jpg";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: p1,
    },
    {
      id: 2,
      imgSrc: p2,
    },
    {
      id: 3,
      imgSrc: p3,
    },
    {
      id: 4,
      imgSrc: p4,
    },
    {
      id: 5,
      imgSrc: p5,
    },
    {
      id: 6,
      imgSrc: p6,
    },
    {
      id: 7,
      imgSrc: p8,
    },
    {
      id: 8,
      imgSrc: p9,
    },
    {
      id: 9,
      imgSrc: p10,
    },
    {
      id: 10,
      imgSrc: p11,
    },
    {
      id: 11,
      imgSrc: p12,
    },
    {
      id: 12,
      imgSrc: p13,
    },
    {
      id: 13,
      imgSrc: p14,
    },
    {
      id: 14,
      imgSrc: p15,
    },
    {
      id: 15,
      imgSrc: p16,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        {/* <AiFillCloseCircle className="icon" onClick={()=>setModel(false)} /> */}
        <button className="svg" onClick={() => setModel(false)}>
          X
        </button>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Gallery;
