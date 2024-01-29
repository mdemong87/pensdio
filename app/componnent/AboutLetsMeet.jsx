'use client'

import { useState } from "react";
import Container from "./Container";
import LetsMeetSectionWrper from "./LetsMeetsSectionWrper";



const AboutLetsMeet = () => {


    const [counter, setcounter] = useState(1);


    return (
        <div className="py-20 sBg">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Let's Meet With Our</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Dedicated Team</h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center md:items-start justify-between md:gap-5">
                    <div className="w-full">
                        <ul className="mt-12">
                            <li onClick={() => { setcounter(1) }} className={`w-full border-b-2 border-gray-300 px-6 py-4 rounded-md text-2xl flex items-center gap-5 cursor-pointer ${counter == 1 ? "text-gray-600 font-semibold" : "text-gray-400"}`}>
                                <span className="text-sm md:text-lg">.01/</span>
                                <h2 className="text-2xl md:text-3xl">Software engineer</h2>
                            </li>
                            <li onClick={() => { setcounter(2) }} className={`w-full border-b-2 border-gray-300 px-6 py-4 rounded-md text-2xl flex items-center gap-5 cursor-pointer ${counter == 2 ? "text-gray-600 font-semibold" : "text-gray-400"}`}>
                                <span className="text-sm md:text-lg">.02/</span>
                                <h2 className="text-2xl md:text-3xl">Brand strategy director</h2>
                            </li>
                            <li onClick={() => { setcounter(3) }} className={`w-full border-b-2 border-gray-300 px-6 py-4 rounded-md text-2xl flex items-center gap-5 cursor-pointer ${counter == 3 ? "text-gray-600 font-semibold" : "text-gray-400"}`}>
                                <span className="text-sm md:text-lg">.03/</span>
                                <h3 className="text-2xl md:text-3xl">Digital social marketer</h3>
                            </li>
                            <li onClick={() => { setcounter(4) }} className={`w-full border-b-2 border-gray-300 px-6 py-4 rounded-md text-2xl flex items-center gap-5 cursor-pointer ${counter == 4 ? "text-gray-600 font-semibold" : "text-gray-400"}`}>
                                <span className="text-sm md:text-lg">.04/</span>
                                <h3 className="text-2xl md:text-3xl">
                                    Graphic designer
                                </h3>
                            </li>
                            <li onClick={() => { setcounter(5) }} className={`w-full border-b-2 border-gray-300 px-6 py-4 rounded-md text-2xl flex items-center gap-5 cursor-pointer ${counter == 5 ? "text-gray-600 font-semibold" : "text-gray-400"}`}>
                                <span className="text-sm md:text-lg">.05/</span>
                                <h3 className="text-2xl md:text-3xl">Motion designer</h3>
                            </li>
                            <li onClick={() => { setcounter(6) }} className={`w-full border-b-2 border-gray-300 px-6 py-4 rounded-md text-2xl flex items-center gap-5 cursor-pointer ${counter == 6 ? "text-gray-600 font-semibold" : "text-gray-400"}`}>
                                <span className="text-sm md:text-lg">.06/</span>
                                <h3 className="text-2xl md:text-3xl">
                                    UX/UI (Product designer)
                                </h3>
                            </li>
                        </ul>
                    </div>

                    <LetsMeetSectionWrper />
                </div>
            </Container>
        </div>
    )
}

export default AboutLetsMeet;