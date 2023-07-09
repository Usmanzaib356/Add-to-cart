import React, { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    const [cards,setCards] = useState([])
    const [cartsItem,setCartsItem] = useState([])
    console.log(cartsItem)

    useEffect(() => {
      
      const storedCarts = localStorage.getItem("carts");
      if (storedCarts) {
        setCartsItem(JSON.parse(storedCarts));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("carts", JSON.stringify(cartsItem));
    }, [cartsItem]);

  return (
    <AuthContext.Provider value={{cards,setCards,cartsItem,setCartsItem}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 