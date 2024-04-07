import './App.css';
import {Route, Routes, useNavigate } from "react-router-dom";
import { TeamDetail } from './component/TeamDetails';
import Home from './component/Home';


function App() {
  

  return (
    <div className="w-screen min-h-screen">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/team/:id" element={<TeamDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
