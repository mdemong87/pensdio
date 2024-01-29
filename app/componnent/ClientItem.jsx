import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useSwiper } from 'swiper/react';
import vactor1 from "../../public/Vector1.png";
import vactor2 from "../../public/Vector2.png";
import clientProfile from "../../public/clientProfile.png";

const ClientItem = () => {

    const swiper = useSwiper();



    return (
        <div className="sBg p-5 mt-8 rounded-sm">
            <div className="flex items-center gap-1">
                <Image className="h-7 w-5" src={vactor1} alt="vector1-image" />
                <Image className="h-7 w-5" src={vactor2} alt="vector2-image" />
            </div>
            <div>
                <p className="py-8 text-xl text-gray-500">
                    I would recommend Pensdio if you are looking for a creative mind. They can think, design, implement, and create the best value for his business. I have completed several projects with him. I am so glad that they met my project amidst his busy  met my project amidst his busy schedule. I wish him good luck and a prosperous future!
                </p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div>
                        <Image src={clientProfile} alt="clientProfile" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-700">Hasan Hoque</h4>
                        <p className="text-sm font-light text-gray-500 pt-2">BUSINESS DEVELOPER | EXECUTIVE VIRTUAL ASSISTANT | DIGITAL MARKETING EXPERT</p>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <div onClick={() => swiper.slidePrev()} className="w-12 h-12 rounded-full border border-blue-900 flex items-center justify-center cursor-pointer">
                        <HiArrowLongLeft />
                    </div>
                    <div onClick={() => swiper.slideNext()} className="w-12 h-12 rounded-full border border-blue-900 flex items-center justify-center cursor-pointer">
                        <HiArrowLongRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientItem;