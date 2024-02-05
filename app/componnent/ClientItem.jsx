import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useSwiper } from 'swiper/react';
import vactor1 from "../../public/Vector1.png";
import vactor2 from "../../public/Vector2.png";


const ClientItem = ({ clientProfile, clientReview, name, position, index }) => {

    const swiper = useSwiper();



    return (
        <div className="sBg p-5 mt-8 rounded-sm">
            <div className="flex items-center gap-1">
                <Image className="h-7 w-5" src={vactor1} alt="vector1-image" />
                <Image className="h-7 w-5" src={vactor2} alt="vector2-image" />
            </div>
            <div>
                <p className="py-8 text-xl text-gray-500">
                    {clientReview}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div>
                        <Image src={clientProfile} alt="clientProfile" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-700">{name}</h4>
                        <p className="text-sm font-light text-gray-500 pt-2">{position}</p>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <div onClick={() => swiper.slidePrev()} className={`w-12 h-12 rounded-full border flex items-center justify-center cursor-pointer ${index == 1 ? "border-gray-300" : "border-blue-900"}`}>
                        <HiArrowLongLeft />
                    </div>
                    <div onClick={() => swiper.slideNext()} className={`w-12 h-12 rounded-full border flex items-center justify-center cursor-pointer ${index == 3 ? "border-gray-300" : "border-blue-900"}`}>
                        <HiArrowLongRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientItem;