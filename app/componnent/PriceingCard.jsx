
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


const PriceingCard = ({ featured, servise, tag, price }) => {


    return (
        <div className="w-full bg-gray-50 h-auto rounded-md md:transition md:hover:scale-105 md:hover:shadow-xl">
            <div className="p-5">
                <div className="flex items-center gap-2">
                    <h3 className={`text-lg w-fit px-4 rounded-xl border-2 py-1 border-gray-500 text-gray-600 ${tag == "Premium" && "text-white bg-gray-700 border-0"}`}>{servise}</h3>
                    <span className="text-gray-500">
                        {tag}
                    </span>
                </div>
                <div className="flex items-end gap-1 mt-6 h-fit">
                    <h1 className="text-2xl h-fit py-0 font-bold text-gray-700 pb-1">${price}</h1>
                    <span className="text-gray-500">/Month</span>
                </div>


                <div className="flex items-end gap-1 mt-5">
                    <ul>

                        {
                            featured.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-2 py-1">
                                        <FaCircle className="text-gray-300 text-sm" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

                <Link href={"#para"} className="flex items-center justify-between mt-5 border-2 border-gray-500 py-2 px-4 rounded-md cursor-pointer">
                    <h4 className="">Book a Meeting</h4>
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
    )
}

export default PriceingCard;