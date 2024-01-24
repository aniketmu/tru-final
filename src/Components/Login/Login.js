'use client'
import React, {useState} from 'react';
import "./Login.css"
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({});
    const [emailError, setEmailError] = useState(""); // State for email error
    const [passwordError, setPasswordError] = useState(""); // State for password error
    const navigate = useNavigate()
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
  
    const handleChange = (e) => {
        if(e.target.value == "email"){
            setEmailError("");
        }else{
            setPasswordError("")
        }
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setEmailError(""); // Reset email error
      setPasswordError(""); // Reset password error
  
      try {
        const response = await fetch("https://c-project-backend.onrender.com/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
  
        if (response.status === 401) {
          setPasswordError("The password entered is not correct");
          console.log("The password entered is not correct")
        } else if (response.status === 404) {
          setEmailError("Email not found");
          console.log("Email not found")
        } else if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          navigate("/dashboard")
        }
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className='body-1'>
    <div className="container-1">
        <div className='logo'>
        <img src={logo} style={{width: "40px", height: "40px"}} alt=''/>
        <h1>TruAD</h1>
        </div>
      <h1>Login into your Account</h1>
      {/* <div className="social">
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
      </div> */}

      <form onSubmit={handleSubmit}>
        <label >Email{emailError && (<span style={{color: "red", fontSize: "10px", marginLeft: "20px"}}>{emailError}</span>)}</label>
        <div className="custom-input">
          <input placeholder="Enter your Email" name="email" onChange={(e) => handleChange(e)}/>
          <i className="bx bx-at"></i>
        </div>
        <label>Password{passwordError && (<span style={{color: "red", fontSize: "10px", marginLeft: "20px"}}>{passwordError}</span>)}</label>
        <div className="custom-input">
          <input placeholder="Enter your Password" name="password" type='password'onChange={(e) => handleChange(e)}/>
          <i className="bx bx-lock-alt"></i>
        </div>
        <button className="login" type='submit'>Login</button>
        <div className="links">
          <a href="#">Reset Your Password</a>
          <a href="#" onClick={() => navigate("/signup")}>Dont have an accout?</a>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login