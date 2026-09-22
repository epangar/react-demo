import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UseStateComponent } from "../components/useStateComponent";
import { Home } from "../components/Home";
// import type App from "../App";

const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/usestate" element ={<UseStateComponent/>}/>
                 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;