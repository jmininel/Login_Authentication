import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPages";

const AppRoutes = () => {
    return (
        <BrowserRouter>
          <Routes>
             <Route path="/login" element={<LoginPage/>}/>
             <Route path="/" element={<HomePage/>}/>
          </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes;