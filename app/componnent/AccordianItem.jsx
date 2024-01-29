'use client'

import { useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const AccordianItem = ({ heading, num, dis, disTwo }) => {

    const [isshow, setisShow] = useState(false);


    return (
        <div>
            <h2 className="w-full border px-6 py-4 rounded-md">
                <button onClick={() => setisShow(!isshow)} className="flex items-center justify-between w-full py-3">
                    <div className="flex items-center gap-4 text-left md:gap-6 cursor-pointer text-gray-600 font-semibold">
                        <span className="text-lg">{num}</span>
                        <h2 className="text-3xl">{heading}</h2>
                    </div>
                    <div className={`p-3 rounded-full ${isshow ? "pBg" : "bg-gray-200"}`}>
                        {
                            isshow ? <FaLongArrowAltUp className="sCl" /> : <FaLongArrowAltDown className="pCl" />
                        }
                    </div>
                </button>
            </h2>
            <div className={`${isshow ? "block" : "hidden"}`}>
                <div className="p-5 border border-b-0 border-gray-200">
                    <p className="mb-2 text-lg text-gray-500">{dis}</p>
                    <p className="pt-4 text-lg text-gray-500 flex items-center flex-wrap gap-x-6 gap-y-2">
                        {
                            disTwo?.map((item, index) => {
                                return (
                                    <span key={index} className="flex items-center gap-3">
                                        <span>
                                            &#x25CF;
                                        </span>
                                        {item}
                                    </span>
                                )
                            })
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AccordianItem;