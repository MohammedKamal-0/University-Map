"use client";
import React from 'react'
import Link from "next/link"
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiHospitalLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { CiParking1 } from "react-icons/ci";
import { IoIosRestaurant } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "@/app/Components/sildeUp/sliedUp.css"

export default function SliedUp() {

    const [isOpen, setIsOpen] = useState(false);

    var styles
    if (isOpen) {
        styles = 'flex'
    } else {
        styles = 'none'
    }


    return (
        <div>
            <div className='slideupContainer'>
                <ul className='slideup'>
                    <li>
                        
                         <Link href="/slide-up/bank"> <p onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </p></Link> 
                    <div
                className={`fixed top-0 left-0  w-full h-0  ${isOpen ? "block" : "hidden" }`}></div>
                     <div
                className={`fixed top-44  left-0 w-full  h-full bg-white z-50 duration-500 border-l-2 transition-margin-top ${isOpen ? "w-[300px]" : "w-0"
                    }`}
            >
                
                <button className='bg-transparent text-4xl mt-4 ml-2' onClick={() => { setIsOpen(false) }}>
                            <IoIosCloseCircleOutline />
                        </button>
                        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'><BiMoneyWithdraw className='ml-8 mr-4' /> <h1>Bank</h1> </h1>

                        <ul>
                            <li className='py-6 border-b-4 text-3xl'>first</li>
                            <li className='py-6 border-b-4 text-3xl'>first</li>
                            <li className='py-6 border-b-4 text-3xl'>first</li>
                            <li className='py-6 border-b-4 text-3xl'>first</li>
                        </ul>
            </div>
                    </li>






                    <li> <Link href="/slide-up/collage"> <p>  <FaBuildingColumns />  </p> </Link> </li>
                    <li> <Link href="/slide-up/hospital"><p>  <RiHospitalLine />  </p> </Link> </li>
                    <li> <Link href="/slide-up/others"><p>    <HiOutlineOfficeBuilding /></p></Link> </li>
                    <li> <Link href="/slide-up/park"><p>  <CiParking1 />  </p> </Link> </li>
                    <li> <Link href="/slide-up/restaurant"><p>  <IoIosRestaurant />  </p> </Link> </li>
                </ul>
            </div>
        </div>
    )
}
