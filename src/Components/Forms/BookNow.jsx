import { React, useEffect, useState } from "react";
import "./BookNow.css";
import pic from "./../../assets/p6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const BookNow = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    fatherName: "",
    Email: "",
    Phone: "",
    cnic: "",
    Date: "",
    Address: "",
    seats: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const submitData = async (event) => {
    event.preventDefault();
    const { fullName, fatherName, Email, Phone, cnic, Date, Address, seats } =
      userData;
    if (
      fullName &&
      fatherName &&
      Email &&
      Phone &&
      cnic &&
      Date &&
      Address &&
      seats
    ) {
      const res = fetch(
        "https://webproject-46693-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            fatherName,
            Email,
            Phone,
            cnic,
            Date,
            Address,
            seats,
          }),
        }
      );
      if (res) {
        setUserData({
          fullName: "",
          fatherName: "",
          Email: "",
          Phone: "",
          cnic: "",
          Date: "",
          Address: "",
          seats: "",
        });
        alert("Data Stores");
      } else {
        alert("error");
      }
    }
  };

  return (
    <div data-aos="fade-up" className="BookNowDiv">
      {/* <img className="img" src={pic} alt="" /> */}
      <div data-aos="fade-up" className="Bnd">
        <form method="POST">
          <h1 data-aos="fade-right">Book Your Journey</h1>
          <br></br>
          <label className="txt">Full Name:</label>
          <br></br>
          
          <input
            type="text"
            placeholder="Enter a Full  Name"
            name="fullName"
            value={userData.fullnName}
            onChange={postUserData}
            required
          />{" "}
          <br />
          <br></br>
          <label className="txt">Father Name:</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter a Father Name"
            name="fatherName"
            value={userData.fatherName}
            onChange={postUserData}
            required
          />{" "}
          <br />
          <br></br>
          <label className="txt">Email:</label>
          <br></br>
          <input
            type="email"
            placeholder="Enter a Email"
            name="Email"
            value={userData.Email}
            onChange={postUserData}
            required
          />{" "}
          <br />
          <br></br>
          <label className="txt">Phone No:</label>
          <br></br>
          <input
            type="tel"
            placeholder="Enter a phone No"
            name="Phone"
            value={userData.Phone}
            onChange={postUserData}
            required
          />{" "}
          <br />
          <br></br>
          <label className="txt">Cnic</label>
          <br></br>
          <input
            type="tel"
            placeholder="Enter a cnic number"
            name="cnic"
            value={userData.cnic}
            onChange={postUserData}
            required
          />
          <br />
          <br></br>
          <label className="txt">Date of issue</label>
          <br></br>
          <input
            type="date"
            placeholder="Enter a cnic data of issue:"
            name="Date"
            value={userData.Date}
            onChange={postUserData}
            required
            pattern="[0-9]{11}"
          />
          <br />
          <br></br>
          <label className="txt">Address</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter a Address:"
            name="Address"
            value={userData.Address}
            onChange={postUserData}
            required
          />
          <br />
          <br></br>
          <label className="txt">No of Seats</label>
          <br></br>
          <input
            type="number"
            placeholder="Enter a number of seats:"
            name="seats"
            value={userData.seats}
            onChange={postUserData}
            required
          />
          <br />
          <br></br>
          <input
            className="btn"
            type="submit"
            value="Book Now"
            onClick={submitData}
          />
        </form>
      </div>
    </div>
  );
};
export default BookNow;
