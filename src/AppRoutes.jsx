import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPages";

import { AutProvider } from './contexts/auth';

 

const AppRoutes = () => {
 
    return (
        <Router>
        <AutProvider> 
          <Routes>
             <Route path="/login" element={<LoginPage/>}/>
             <Route path="/" element={<HomePage/>}/>
             </Routes>
          </AutProvider> 
        </Router>
    )
}

export default AppRoutes;