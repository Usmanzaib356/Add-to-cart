import React, { createContext, useState } from "react";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    const [cards,setCards] = useState([])
    const [cartsItem,setCartsItem] = useState([])



    
  



  return (
    <AuthContext.Provider value={{cards,setCards,cartsItem,setCartsItem}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 