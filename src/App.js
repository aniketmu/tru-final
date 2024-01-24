import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import './App.css';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>

  );
}

export default App;
