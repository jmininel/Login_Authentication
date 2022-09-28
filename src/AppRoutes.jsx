import { useContext } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPages";

import { AutProvider, AuthContext } from './contexts/auth';

const AppRoutes = () => {

  const Private = ({children}) => {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
      return <Navigate to="/login" />
    }
    return children;

   }
 
    return (
        <Router>
        <AutProvider> 
          <Routes>
             <Route path="/login" element={<LoginPage/>}/>
             <Route path="/" element={<Private><HomePage/></Private>}/>
             </Routes>
          </AutProvider> 
        </Router>
    )
}

export default AppRoutes;