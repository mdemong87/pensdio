import Image from "next/image";
import { FaPlay, FaStar } from "react-icons/fa";
import VedioReviewImage from "../../public/VedioReviewImage.png";

const VedioReviewCard = () => {
    return (
        <div className="bg-white w-full rounded-sm">
            <div className="relative w-full">
                <Image className="w-full" src={VedioReviewImage} alt="VedioReviewImage" />
                <div className="absolute top-0 h-full flex items-center w-full justify-center">
                    <div className="rounded-full h-14 w-14 vedioBtnBg flex items-center justify-center border border-white cursor-pointer">
                        <FaPlay className="text-gray-200 text-xl" />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex gap-2 items-center">
                    <div className="flex items-center">
                        <span className="text-gray-700 text-2xl">5/</span>
                        <span className="text-gray-400 text-lg">5</span>
                    </div>
                    <FaStar className="text-2xl text-yellow-500" />
                </div>
                <div className="mt-3">
                    <h2 className="text-gray-500 text-xl font-semibold">Laura Walker</h2>
                    <span className="text-gray-400 text-md">CEO of Altech</span>
                </div>
            </div>
        </div>
    )

}

export default VedioReviewCard;