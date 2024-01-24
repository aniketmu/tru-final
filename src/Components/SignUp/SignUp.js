import React, {useState} from 'react';
import "./SignUp.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({});
  const [emailError, setEmailError] = useState(""); // State for email error
  // const navigate = useNavigate();
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(""); // Reset email error

    try {
      const response = await fetch("https://c-project-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.status === 400) {
        setEmailError("Email is already in use. Please choose another email.");
      } else if (response.status === 200) {
        console.log("User created successfully:", data);
        setUser({});
        navigate("/");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className='body'>
    <div className="container">
        <div className='logo'>
        <img src={logo} style={{width: "40px", height: "40px"}} alt=''/>
        <h1>TruAD</h1>
        </div>
      <h1>Register Your Account</h1>
      <div className="social">
        <button>
          <i className="bx bxl-google"></i>
          Use Google
        </button>

        <button>
          <i className="bx bxl-apple"></i>
          Use Apple
        </button>
      </div>
      <div className="divider">
        <div className="line"></div>
        <p>Or</p>
        <div className="line"></div>
      </div>

      <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
        <div className="custom-input">
          <input placeholder="Enter your Name" name="name" onChange={(e) => handleChange(e)}/>
          <i class='bx bx-pencil'></i>
        </div>
        <label for="email">Email{emailError && (<span style={{color: "red", fontSize: "10px", marginLeft: "20px"}}>{emailError}</span>)}</label>
        <div className="custom-input">
          <input placeholder="Enter your Email" name="email" onChange={(e) => handleChange(e)}/>
          <i className="bx bx-at"></i>
        </div>
        <label for="password">Password</label>
        <div className="custom-input">
          <input placeholder="Enter your Password" name="password" type='password' onChange={(e) => handleChange(e)}/>
          <i className="bx bx-lock-alt"></i>
        </div>
        <button className="login" type='submit'>Sign Up</button>
        <div className="links">
          <a href="#" onClick={() => {navigate("/")}}>Already Have an Account? Login</a>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignUp