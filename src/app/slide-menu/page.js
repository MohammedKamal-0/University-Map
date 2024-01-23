import Link from "next/link"
import { GoInfo } from "react-icons/go";
import { MdOutlineEventNote } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import styles from './slidebar.module.css'
export default function Home() {
    return (
     <>
  
  <h1>heelo from slide menu</h1>
  <ul className={styles.slidebar}>
   <li> <Link href="/slide-menu/news"> <p><MdOutlineEventNote /></p> <h3>News & Events</h3> </Link> </li>
   <li> <Link href="/slide-menu/about"> <p><GoInfo /></p>  <h3>about</h3> </Link> </li>
   <li> <Link href="/slide-menu/language"><p><GrLanguage /></p> <h3>language</h3> </Link> </li>
   <li> <Link href="/slide-menu/contact-us"><p><BiMailSend /></p> <h3>Contact-Us</h3> </Link> </li>
  </ul>
  
     </>
     
    )
  }
  