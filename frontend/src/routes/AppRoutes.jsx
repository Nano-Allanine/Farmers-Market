import  Home from "@/pages/Home"
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";

const AppRoutes = () => {
    const location = useLocation("");
  return (
    <div className="transition" element ={location.pathname} >
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
             <Route path="/dashboard" element={<Dashboard/>}/>
            
        </Routes>
    </div>
  )
}

export default AppRoutes