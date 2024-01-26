"use client";
import React from 'react'
import "@/app/Components/sildeUp/sliedUp.css"
import Restaurant from '../restaurant/Restaurant';
import Park from '../park/park';
import Others from '../others/others';
import Hospital from '../hospital/Hospital';
import Collage from '../collage/collage';
import BBBB from '../bank/BBBB';



export default function SliedUp() {


    return (
        <div>
            <div>
                <ul className='flex flex-row gap-5  left-[5px] right-[5px]  mb-5 overflow-y-auto fixed bottom-0 w-full h-25'>


                   <li className='bg-green-700 rounded-[10px] text-5xl ml-2  text-[#ffffff] p-2 mt-8 '>
                        <BBBB></BBBB>
                    </li>



                    <li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>
                        <Collage></Collage>
                    </li>





                    <li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>
                        <Hospital></Hospital>
                    </li>



                    <li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>
                        <Others></Others>
                    </li>






                    <li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>
                        <Park></Park>
                    </li>




                    <li className='bg-green-700 rounded-[10px] text-5xl mr-4 text-[#ffffff] p-2 mt-8 '>
                        <Restaurant></Restaurant>

                    </li>




                </ul>
            </div>
        </div>
    )
}
