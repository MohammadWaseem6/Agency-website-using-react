/* eslint-disable no-unused-vars */
import React from 'react'

function Header() {
    return (
        <section className="w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40">
            <h1 className='text-green-600 text-3xl font-bold uppercase '>My Agency</h1>
            <div className='hidden lg:flex justify-end items-center gap-2'>
                <ul className='flex justify-center items-center gap-2'>
                    <li> <a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white" href="http://localhost:5173/">Home</a> </li>
                    <li> <a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white" href="http://localhost:5173/">Services</a> </li>
                    <li> <a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white" href="http://localhost:5173/">Testimonial</a> </li>
                </ul>
                <ul className='flex justify-center items-center gap-2'>
                    <li> <a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white" href="http://localhost:5173/">Pricing</a> </li>
                    <li> <a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white" href="http://localhost:5173/">Contact</a> </li>
                    <button className=' bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>Sing In</button>
                </ul>
            </div>
        </section>
    )
}

export default Header
