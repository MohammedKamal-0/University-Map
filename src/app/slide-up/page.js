import Link from "next/link"
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiHospitalLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { CiParking1 } from "react-icons/ci";
import { IoIosRestaurant } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import styles from './slideup.module.css'


export default function Home() {
    return (
     <>
  
  <h1>slide up </h1>

  

  <ul className={styles.slidebar}>
   <li> <Link href="/slide-up/bank"> <p>  <BiMoneyWithdraw />  </p></Link> </li>
   <li> <Link href="/slide-up/collage"> <p>  <FaBuildingColumns />  </p> </Link> </li>
   <li> <Link href="/slide-up/hospital"><p>  <RiHospitalLine />  </p> </Link> </li>
   <li> <Link href="/slide-up/others"><p>    <HiOutlineOfficeBuilding /></p></Link> </li>
   <li> <Link href="/slide-up/park"><p>  <CiParking1 />  </p> </Link> </li>
   <li> <Link href="/slide-up/restaurant"><p>  <IoIosRestaurant />  </p> </Link> </li>
  </ul>
     </>
     
    )
  }
  