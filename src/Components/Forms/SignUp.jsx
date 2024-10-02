import { React, useEffect, Component, useState } from "react";
import "./signUp.css";
import Aos from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import pic from "./../../assets/p6.jpg";
// import pine from '../../assets/pine.mp4';
// class signUp extends Component {
// constructor() {
//   super();
//   this.state = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     Confirm_password: "",
//   };
//   this.changefirstName = this.changefirstName.bind(this);
//   this.changelastName = this.changelastName.bind(this);
//   this.changeEmail = this.changeEmail.bind(this);
//   this.changePhone = this.changePhone.bind(this);
//   this.changePassword = this.changePassword.bind(this);
//   this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
//   this.onSubmit = this.onSubmit.bind(this);
// }

// changefirstName(event) {
//   this.setState({
//     firstName: event.target.value,
//   });
// }

// changelastName(event) {
//   this.setState({
//     lastName: event.target.value,
//   });
// }

// changeEmail(event) {
//   this.setState({
//     email: event.target.value,
//   });
// }

// changePhone(event) {
//   this.setState({
//     phone: event.target.value,
//   });
// }

// changePassword(event) {
//   this.setState({
//     password: event.target.value,
//   });
// }

// changeConfirmPassword(event) {
//   this.setState({
//     Confirm_password: event.target.value,
//   });
// }
// onSubmit(event) {
//   event.preventDefault();
//   const registered = {
//     firstName: this.state.firstName,
//     lastName: this.state.lastName,
//     email: this.state.email,
//     phone: this.state.phone,
//     password: this.state.password,
//     Confirm_password: this.state.Confirm_password,
//   };
//   axios
//     .post("http://localhost:4000/app/signup", registered)
//     .then((response) => console.log(response.data));
//   this.setState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     Confirm_password: "",
//   });
// }

// render() {
const SignUp = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  Aos.init({ duration: 2000 });

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    Confirm_password: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phone, password, Confirm_password } =
      userData;
    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      password &&
      Confirm_password
    ) {
      const res = fetch(
        "https://webproject-46693-default-rtdb.firebaseio.com/SignUpDataRecord.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            password,
            Confirm_password,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          Confirm_password: "",
        });
        alert("Data Stores");
      } else {
        alert("error");
      }
    }
  };

  return (
    <div data-aos="fade-up" className="signUpDiv">
      {/* <img className="img" src={pic} alt="" /> */}
      <div data-aos="fade-up" className="signUp">
        <form method="POSST">
          <h1 data-aos="fade-right">Sign Up</h1>
          <br></br>
          <label className="txt">First Name:</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter a First Name"
            name="firstName"
            onChange={postUserData}
            value={userData.firstName}
          />
          <br />
          <br />
          <label className="txt">Last Name:</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter a Last Name"
            name="lastName"
            onChange={postUserData}
            value={userData.lastName}
          />
          <br />
          <br></br>
          <label className="txt">Email:</label>
          <br></br>
          <input
            type="email"
            placeholder="Enter a Email"
            name="email"
            onChange={postUserData}
            value={userData.email}
          />
          <br />
          <br></br>
          <label className="txt">Phone No:</label>
          <br></br>
          <input
            type="tel"
            placeholder="Enter a phone No"
            name="phone"
            onChange={postUserData}
            value={userData.phone}
          />
          <br />
          <br></br>
          <label className="txt">New Password:</label>
          <br></br>
          <input
            type="password"
            placeholder="Enter a Password"
            name="password"
            onChange={postUserData}
            value={userData.password}
          />{" "}
          <br />
          <br></br>
          <label className="txt">Confirm Password:</label>
          <br></br>
          <input
            type="password"
            placeholder="Confirm a Password"
            name="Confirm_password"
            onChange={postUserData}
            value={userData.Confirm_password}
          />
          <br />
          <br></br>
          <input className="btn" type="submit" value="signUp" onClick={submitData}/>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
