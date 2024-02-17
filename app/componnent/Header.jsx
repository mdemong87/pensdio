"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../public/logo.png";
import logoOne from "../../public/logoOne.png";
import Container from "./Container";


const Navber = () => {

    const pathName = usePathname();
    const [showNav, setshowNav] = useState(false);

    return (
        <header className={`${pathName == "/" || pathName == "/about" ? "pBg fixed top-0 w-full z-50" : "footerBg fixed top-0 w-full z-50"}`}>
            <Container>

                <div className="flex flex-col md:flex-row items-center md:justify-between p-4">
                    < div className="flex justify-between items-center w-full md:w-fit" >
                        {
                            pathName == "/" || pathName == "/about" ? (

                                <Image className="w-32" src={logo} alt="Logo" />
                            ) : (
                                <Image className="w-36" src={logoOne} alt="Logo" />
                            )
                        }

                        {
                            showNav ? <RxCross2 onClick={() => setshowNav(!showNav)} className={`text-3xl cursor-pointer md:hidden ${pathName == "/" || pathName == "/about" ? "text-white" : "pCl"}`} /> : <FaBars onClick={() => setshowNav(!showNav)} className={`text-2xl cursor-pointer md:hidden ${pathName == "/" || pathName == "/about" ? "text-white" : "pCl"}`} />
                        }
                    </div >


                    <nav className={`w-full md:flex md:justify-end transition-all ${showNav ? "block" : "hidden"}`}>





                        <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-lg">
                            <li onClick={() => { setshowNav(false) }}>
                                <Link href="/" className={`block py-2 px-3 rounded md:p-0 ${pathName == "/" || pathName == "/about" ? "text-white" : "pCl"} ${pathName == "/" && " underline decoration-2 underline-offset-4"}`}>Home</Link>
                            </li>
                            <li onClick={() => { setshowNav(false) }}>
                                <Link href="/work" className={`block py-2 px-3 rounded md:p-0 ${pathName == "/" || pathName == "/about" ? "text-white" : "pCl"} ${pathName == "/work" && " underline decoration-2 underline-offset-4"}`}>Works</Link>
                            </li>
                            <li onClick={() => { setshowNav(false) }}>
                                <Link href="/about" className={`block py-2 px-3 rounded md:p-0 ${pathName == "/" || pathName == "/about" ? "text-white" : "pCl"} ${pathName == "/about" && " underline decoration-2 underline-offset-4"}`}>About Us</Link>
                            </li>
                            <li onClick={() => { setshowNav(false) }}>
                                <Link href="/blog" className={`block py-2 px-3 rounded md:p-0 ${pathName == "/" || pathName == "/about" ? "text-white" : "pCl"} ${pathName == "/blog" && " underline decoration-2 underline-offset-4"}`}>Blogs</Link>
                            </li>
                            <li onClick={() => { setshowNav(false) }} className="md:hidden">
                                <Link href="/contact" className={`block py-2 px-3 rounded md:p-0 ${pathName == "/" || pathName == "/about" ? "text-white" : "pCl"} ${pathName == "/contact" && " underline decoration-2 underline-offset-4"}`}>Contact Us</Link>
                            </li>
                            <li onClick={() => { setshowNav(false) }} className={`hidden px-3 rounded-sm py-1 md:block ${pathName == "/" || pathName == "/about" ? "sBg" : "pBg"} ${pathName == "/contact" && " underline decoration-2 underline-offset-4"}`}>
                                <Link href="/contact" className={`block text-xl py-2 px-3 md:p-0 ${pathName == "/" || pathName == "/about" ? "text-gray-900" : "text-white"}`}>Contact Us</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </Container>
        </header>

    )
}


export default Navber;