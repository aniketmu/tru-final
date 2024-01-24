import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import './App.css';
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/dashboard" element={<Dashboard />}/>
          <Route exact path="/signup" element={<SignUp />}/>
        </Routes>
      </Router>

  );
}

export default App;
