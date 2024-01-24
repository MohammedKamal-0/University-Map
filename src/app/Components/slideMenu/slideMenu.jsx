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


    const [isOpen1, setIsOpen1] = useState(false);

    var styles
    if (isOpen1) {
        styles = 'flex'
    } else {
        styles = 'none'
    }



    const [isOpen2, setIsOpen2] = useState(false);

    var styles
    if (isOpen2) {
        styles = 'flex'
    } else {
        styles = 'none'
    }



    const [isOpen3, setIsOpen3] = useState(false);

    var styles
    if (isOpen3) {
        styles = 'flex'
    } else {
        styles = 'none'
    }


    const [isOpen4, setIsOpen4] = useState(false);

    var styles
    if (isOpen4) {
        styles = 'flex'
    } else {
        styles = 'none'
    }


    return (

        <div >
            <button className='bg-transparent text-5xl mt-4 ml-2 text-white' onClick={() => { setIsOpen(true) }}>
                <IoMenu />
            </button>
      
            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-800 z-40 duration-300 opacity-50 ${isOpen ? "block" : "hidden" }`}  ></div>
            <div
                className={`fixed top-0 right-0 h-full bg-white z-50 duration-500 border-l-2 transition-margin-right ${isOpen ? "w-[300px]" : "w-0"}`} >
                <ul className='text-green-700 text-[160%]' >
                    <li >
                        <button className='bg-transparent text-4xl mt-4 ml-2' onClick={() => { setIsOpen(false) }}>
                            <IoIosCloseCircleOutline />
                        </button>
                    </li>





                    <li> <botton  onClick={() => { setIsOpen1(true) }} className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-8 ml-2'><MdOutlineEventNote /></h1>  <h1 className='mt-8'>News & Events</h1> </botton>
                    
                    
                    <div className={`fixed left-0 right-0 bottom-0 w-full h-0  ${isOpen1 ? "block" : "hidden"}`}>
                    <div className={`fixed left-0 right-0 bottom-0 w-full h-full  bg-white duration-300 ${isOpen1 ? "h-full" : "h-0"}`} >
                                <button onClick={() => { setIsOpen1(false) }} className="text-black">  <IoIosCloseCircleOutline className='text-green-700' />  </button>
                                <h1 className='flex items-center cursor-pointer gap-2 text-4xl text-green-700 mb-8'> <MdOutlineEventNote className='ml-8 mr-4 text-5xl' /> News & Events </h1>

<ul>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
   </ul>
</div> </div>
 </li>




 <li> <botton  onClick={() => { setIsOpen4(true) }} className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-8 ml-2'><GoInfo /></h1>  <h1 className='mt-8'>About</h1> </botton>
                    
                    
                    <div className={`fixed left-0 right-0 bottom-0 w-full h-0  ${isOpen4 ? "block" : "hidden"}`}>
                    <div className={`fixed left-0 right-0 bottom-0 w-full h-full  bg-white duration-300 ${isOpen4 ? "h-full" : "h-0"}`} >
                                <button onClick={() => { setIsOpen4(false) }} className="text-black">  <IoIosCloseCircleOutline className='text-green-700' /> </button>
                                <h1 className='flex items-center cursor-pointer gap-2 text-4xl text-green-700 mb-8'> <GoInfo className='ml-8 mr-4 text-5xl' /> About </h1>

<ul>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
   </ul>
</div> </div>
 </li>
 
 
 
 
 
 <li> <botton  onClick={() => { setIsOpen2(true) }} className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-8 ml-2'><GrLanguage/></h1>  <h1 className='mt-8'>Language</h1> </botton>
                    
                    
                    <div className={`fixed left-0 right-0 bottom-0 w-full h-0  ${isOpen2 ? "block" : "hidden"}`}>
                    <div className={`fixed left-0 right-0 bottom-0 w-full h-full  bg-white duration-300 ${isOpen2 ? "h-full" : "h-0"}`} >
                                <button onClick={() => { setIsOpen2(false) }} className="text-black">  <IoIosCloseCircleOutline className='text-green-700' />  </button>
                                <h1 className='flex items-center cursor-pointer gap-2 text-4xl text-green-700 mb-8'> <GrLanguage className='ml-8 mr-4 text-5xl' /> Language </h1>

<ul>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
   </ul>
</div> </div>
 </li>
 
 
 
 
 <li> <botton  onClick={() => { setIsOpen3(true) }} className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-8 ml-2'><BiMailSend /></h1>  <h1 className='mt-8'>Contact Us</h1> </botton>
                    
                    
                    <div className={`fixed left-0 right-0 bottom-0 w-full h-0  ${isOpen3 ? "block" : "hidden"}`}>
                    <div className={`fixed left-0 right-0 bottom-0 w-full h-full  bg-white duration-300 ${isOpen3 ? "h-full" : "h-0"}`} >
                                <button onClick={() => { setIsOpen3(false) }} className="text-black">  <IoIosCloseCircleOutline className='text-green-700' /> </button>
                                <h1 className='flex items-center cursor-pointer gap-2 text-4xl text-green-700 mb-8'> <BiMailSend className='ml-8 mr-4 text-5xl' /> Contact Us </h1>

<ul>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
       <li className='py-6 border-b-4 text-3xl'>first</li>
   </ul>
</div> </div>
 </li>





                </ul>
            </div>
        </div>
    )
}
