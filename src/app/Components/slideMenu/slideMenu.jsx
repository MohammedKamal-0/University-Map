"use client";
import React from 'react'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import { MdOutlineEventNote } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import "@/app/Components/slideMenu/slideMenu.css"




export default function SlideMenu() {

    const [isOpen, setIsOpen] = useState(false);

    var styles
    if (isOpen) {
        styles = 'flex'
    } else {
        styles = 'none'
    }
    return (

        <div>
            <button className='bg-transparent text-4xl mt-4 ml-2' onClick={() => { setIsOpen(true) }}>
                <IoMenu />
            </button>
            {/* Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-800 z-40 duration-300 opacity-50 ${isOpen ? "block" : "hidden"
                    }`}
            // onClick={sideClick}
            ></div>
            {/* Side Menu */}
            <div
                className={`fixed top-0 right-0 h-full bg-white z-50 duration-500 border-l-2 transition-margin-right ${isOpen ? "w-[300px]" : "w-0"
                    }`}
            >
                <ul className='text-green-700 text-[160%]' >
                    <li >
                        <button className='bg-transparent text-4xl mt-4 ml-2' onClick={() => { setIsOpen(false) }}>
                            <IoIosCloseCircleOutline />
                        </button>
                    </li>
                    <li> <Link href="/slide-menu/news" className='flex items-center cursor-pointer gap-2 ' > <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-8 ml-2'><MdOutlineEventNote /></h1>  <h1 className='mt-8'>News & Events</h1> </Link> </li>
                    <li> <Link href="/slide-menu/about" className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-4 ml-2'> <GoInfo /> </h1>   <h1 className='mt-4'>about</h1> </Link> </li>
                    <li> <Link href="/slide-menu/language" className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-4 ml-2'><GrLanguage/> </h1>   <h1 className='mt-4'>language</h1></Link> </li>
                    <li> <Link href="/slide-menu/language" className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-4 ml-2'><BiMailSend /> </h1>   <h1 className='mt-4'>ontact-Us</h1></Link> </li>
                    
                </ul>
            </div>
        </div>
    )
}
