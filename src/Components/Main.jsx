import React from 'react'
import Heading from './Heading'
import Cards from './Cards'

function Main() {
    return (
        <>
            <section className='bg-slate-950 '>
                <div className='pt-5 text-white h-100 flex justify-center text-center flex-col gap-y-20'>
                    <Heading></Heading>
                    <Cards></Cards>
                </div>
            </section>
        </>
    )
}

export default Main