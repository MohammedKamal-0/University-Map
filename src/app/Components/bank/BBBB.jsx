"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoArrowBackSharp } from "react-icons/io5";
import "@/app/Components/sildeUp/sliedUp.css"
import Link from 'next/link';

export default function BBBB() {


    const [isOpen, setIsOpen] = useState(false);
    var styles
    if (isOpen) {
        styles = 'flex'
    } else {
        styles = 'none'
    }

    const [isOpen7, setIsOpen7] = useState(false);
    var styles
    if (isOpen7) {
        styles = 'flex'
    } else {
        styles = 'none'
    }


    return (
        <div>




            <button onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />   </button>
            <div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen ? "block" : "hidden"}`}>

                <div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen ? "h-300" : "h-0"}`} >
                    <button onClick={() => { setIsOpen(false) }} className="text-black">  <IoIosCloseCircleOutline className='text-green-700' /> </button>

                    <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <BiMoneyWithdraw className='ml-8 mr-4' /> Bank </h1>

                    <ul>
                        <li className='border-b-4'>  <button onClick={() => { setIsOpen7(true) }} className='py-6  text-3xl text-green-900'>first</button>
                            <div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen7 ? "block" : "hidden"}`}>
                                <div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen7 ? "h-300" : "h-0"}`} >
                                    <button onClick={() => { setIsOpen7(false) }} className="text-black">  <IoArrowBackSharp className='text-green-700' /> </button>



                                    <dev className='flex items-center mx-2 '>
                                        <h1 className='flex items-center cursor-pointer gap-2 text-3xl px-2 text-green-700 mb-8'> <BiMoneyWithdraw className='ml-2 mr-4 text-6xl' /> name of this bank </h1>
                                        <a href='#'><button className='text-white px-2 py-2 text-[28px] bg-green-700 rounded-[8px] mb-6'>OPEN</button></a>
                                   </dev>
                                        
                                        <hr className='mt-6'></hr>
                                        <div>
                                                  
                                                  {/* for image */}

                                        </div>


                                        <div>

                                                 {/* for buttins */}

                                        </div>


                                   
                                </div> </div>

                        </li>
                    </ul>
                </div> </div>

        </div>
    )
}
