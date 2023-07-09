import axios from 'axios'
import React, { useEffect } from 'react'
import useAuth from "../hooks/useAuth"
import Card from './Card'
function Shop() {
    
    const { cards, setCards} = useAuth()

        

    // aoixs

    useEffect(() => {
        const url = "https://api.coingecko.com/api/v3/coins/"
        axios.get(url).then((res) => {
            setCards(res.data)
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <div className='flex justify-center  w-full' >
                <div className='text-center justify-center w-100 flex gap-10 flex-wrap'>
 
                 {cards.map((item)=>{
                    return(
                        <Card products={item} key={item.id}  />
                    )
                 })}                 

                </div>
            </div>


        </>
    )
}

export default Shop