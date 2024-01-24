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




    // for bank button
    const [isOpen, setIsOpen] = useState(false);
    var styles
    if (isOpen) {
        styles = 'flex'
    } else {
        styles = 'none'
    }
    





    // for collage button
    const [isOpen1, setIsOpen1] = useState(false);
    var styles
    if (isOpen1) {
        styles = 'flex'
    } else {
        styles = 'none'
    }


    // for hospatial button
    const [isOpen2, setIsOpen2] = useState(false);
    var styles
    if (isOpen2) {
        styles = 'flex'
    } else {
        styles = 'none'
    }



// for others button
const [isOpen3, setIsOpen3] = useState(false);
var styles
if (isOpen3) {
    styles = 'flex'
} else {
    styles = 'none'
}



// for parks button
const [isOpen4, setIsOpen4] = useState(false);
var styles
if (isOpen4) {
    styles = 'flex'
} else {
    styles = 'none'
}



// for rect button
const [isOpen5, setIsOpen5] = useState(false);
var styles
if (isOpen5) {
    styles = 'flex'
} else {
    styles = 'none'
}


    return (
        <div>
            <div className='slideupContainer'>
                <ul className='flex flex-row gap-5  left-[5px] right-[5px]  mb-5 overflow-y-auto fixed bottom-0 w-full h-25'>
                    <li className='bg-green-700 rounded-[10px] ml-4 text-5xl  text-[#ffffff] p-2 mt-8 '>

                        {/* <Link href="/slide-up/bank"> <p onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </p></Link>  */}
                        <button onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </button>
                        <div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen ? "block" : "hidden"}`}>

                      <div className={`fixed left-0 right-0 bottom-0 w-full h-[600px]  bg-white duration-300 ${isOpen ? "h-full" : "h-0"}`} >
                                <button onClick={() => { setIsOpen(false) }} className="text-black">  <IoIosCloseCircleOutline  className='text-green-700'/> </button>

                                <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <BiMoneyWithdraw className='ml-8 mr-4' /> Bank </h1>

                                <ul>
                                       <li className='py-6 border-b-4 text-3xl'>first</li>
                                       <li className='py-6 border-b-4 text-3xl'>first</li>
                                       <li className='py-6 border-b-4 text-3xl'>first</li>
                                       <li className='py-6 border-b-4 text-3xl'>first</li>
                                   </ul>
                      </div> </div>
                    </li>



                    <li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>

{/* <Link href="/slide-up/bank"> <p onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </p></Link>  */}
<button onClick={() => { setIsOpen1(true) }}>  <FaBuildingColumns />  </button>
<div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen1 ? "block" : "hidden"}`}>

<div className={`fixed left-0 right-0 bottom-0 w-full h-[600px]  bg-white duration-300 ${isOpen1 ? "h-full" : "h-0"}`} >
        <button onClick={() => { setIsOpen1(false) }} className="text-black"> <IoIosCloseCircleOutline  className='text-green-700'/> </button>

        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <FaBuildingColumns className='ml-8 mr-4' /> collage </h1>

        <ul>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
           </ul>
</div> </div>
</li>





<li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>

{/* <Link href="/slide-up/bank"> <p onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </p></Link>  */}
<button onClick={() => { setIsOpen2(true) }}>  <RiHospitalLine />   </button>
<div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen2 ? "block" : "hidden"}`}>

<div className={`fixed left-0 right-0 bottom-0 w-full h-[600px]  bg-white duration-300 ${isOpen2 ? "h-full" : "h-0"}`} >
        <button onClick={() => { setIsOpen2(false) }} className="text-black">  <IoIosCloseCircleOutline  className='text-green-700'/> </button>

        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <RiHospitalLine className='ml-8 mr-4' /> Hospital </h1>

        <ul>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
           </ul>
</div> </div>
</li>



<li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>

{/* <Link href="/slide-up/bank"> <p onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </p></Link>  */}
<button onClick={() => { setIsOpen3(true) }}>  <HiOutlineOfficeBuilding />
  </button>
<div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen3 ? "block" : "hidden"}`}>

<div className={`fixed left-0 right-0 bottom-0 w-full h-[600px]  bg-white duration-300 ${isOpen3 ? "h-full" : "h-0"}`} >
        <button onClick={() => { setIsOpen3(false) }} className="text-black">  <IoIosCloseCircleOutline  className='text-green-700'/> </button>

        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <HiOutlineOfficeBuilding className='ml-8 mr-4' /> others </h1>

        <ul>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
           </ul>
</div> </div>
</li>






<li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>

{/* <Link href="/slide-up/bank"> <p onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </p></Link>  */}
<button onClick={() => { setIsOpen5(true) }}>   <CiParking1 />   </button>
<div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen5 ? "block" : "hidden"}`}>

<div className={`fixed left-0 right-0 bottom-0 w-full h-[600px]  bg-white duration-300 ${isOpen5 ? "h-full" : "h-0"}`} >
        <button onClick={() => { setIsOpen5(false) }} className="text-black">  <IoIosCloseCircleOutline  className='text-green-700'/> </button>

        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <CiParking1 className='ml-8 mr-4' /> collage </h1>

        <ul>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
           </ul>
</div> </div>
</li>




<li className='bg-green-700 rounded-[10px] text-5xl mr-4 text-[#ffffff] p-2 mt-8 '>

{/* <Link href="/slide-up/bank"> <p onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </p></Link>  */}
<button onClick={() => { setIsOpen4(true) }}>   <IoIosRestaurant />  </button>
<div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen4 ? "block" : "hidden"}`}>

<div className={`fixed left-0 right-0 bottom-0 w-full h-[600px]  bg-white duration-300 ${isOpen4 ? "h-full" : "h-0"}`} >
        <button onClick={() => { setIsOpen4(false) }} className="text-black">  <IoIosCloseCircleOutline  className='text-green-700'/> </button>

        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <IoIosRestaurant className='ml-8 mr-4' /> Restaurant </h1>

        <ul>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
           </ul>
</div> </div>
</li>




                </ul>
            </div>
        </div>
    )
}
