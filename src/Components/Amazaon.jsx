import React from 'react'
import Heading from './Heading'
import Shop from './Shop'
function Amazaon() {
  return (
    <>
     <section className='bg-slate-950 '>
                <div className='pt-5 text-white h-100 flex justify-center text-center flex-col gap-y-20 max-w-screen-xl mx-auto  ' >
                    <Heading></Heading>
                    <Shop></Shop>
                </div>
            </section>
    </>
  )
}

export default Amazaon