import { createContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();


export const AutProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
  
    const login = (email, password) => {
    console.log("login", {email, password});

    const loggedUser = {
        id: "123",
        email,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));
     
    if(password === "secret") {
       setUser(loggedUser);
      navigate("/")
     }
    };
  
    const logout = () => {
    console.log("logout")
    setUser(null);
    navigate("/login");
  };

    return (
        <AuthContext.Provider
          value={{authenticated: !!user, user, login, logout}}> 
          {children}
         </AuthContext.Provider>
    )
}