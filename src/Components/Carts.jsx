import React, { useEffect } from 'react'
import useAuth from "../hooks/useAuth"
function Carts() {
    const { cartsItem,setCartsItem } = useAuth()


    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setCartsItem(JSON.parse(storedCart));
        }
      }, []);

    return (
        <>
        <div>
             {cartsItem.map((item)=>{
                return(
                    <h1 className='text-center' key={item.id}>{item.name}</h1>
                )
             })}
        </div>
        </>
    )
}

export default Carts