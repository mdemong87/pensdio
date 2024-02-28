"use client"

import { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Container from "./Container";

const Transforming = () => {


    const [isShow, setisShow] = useState(false);



    return (
        <section className="transformingBg relative">
            <Container>
                <div className="h-full flex flex-col justify-center items-center py-20">
                    <h1 className="text-white text-4xl md:text-6xl text-center sFont">Transforming Your Business Strategy Redefine Experiences</h1>
                    <div className="flex items-center gap-3 mt-10">
                        <div onClick={() => setisShow(true)} className="pBg cursor-pointer p-3 rounded-full flex items-center justify-center">
                            <IoPlayOutline className="text-4xl text-white" />
                        </div>
                        <span className="text-white font-semibold text-lg">Our Showreel</span>
                    </div>
                </div>
            </Container>


            {
                isShow && <div className="absolute top-0 w-full h-full p-5 md:p-20">
                    <div className="h-full rounded-lg">
                        <div onClick={() => setisShow(false)} className="absolute top-5 right-5 md:top-20 md:right-20 pBg p-2 rounded-full rounded-lg cursor-pointer z-10">
                            <RxCross1 className="text-xl text-white" />
                        </div>
                        <div className="h-full z-1">
                            <video className="w-full h-full rounded-lg" controls={true} autoPlay={true}>
                                <source src={"https://res.cloudinary.com/dyffuhups/video/upload/v1709110461/Main_Comp_1_edjxzx.mp4"} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default Transforming;