import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useSwiper } from 'swiper/react';


const LetsMeetSection = ({ itemData, index, length, photo }) => {

    const swiper = useSwiper();

    return (
        <div className="m-8 flex flex-col">
            <div>
                <Image className="w-full" src={photo} alt="Team-profile-Photo" />
            </div>
            <div className="h-fit w-full md:w-[80%] bg-white md:-translate-x-8 md:-translate-y-20 p-5">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="w-full">
                        <h2 className="text-3xl sFont pb-2">{itemData?.name}</h2>
                        <span className="text-gray-400 text-xl">{itemData?.position}</span>
                        <div className="flex items-center gap-4 py-5 pb-6">
                            <h2 className="text-6xl text-gray-500 sFont">{itemData?.expericence}</h2>
                            <h2 className="text-gray-400 text-xl">Years<br /> Experience</h2>
                        </div>
                        <span className="text-gray-500 pFont">
                            <span className="text-2xl font-semibold">
                                {index + 1} /
                            </span>
                            <span className="text-lg"> {length}</span>
                        </span>
                    </div>
                    <div className="w-full sm:w-[240px] justify-end flex items-end">
                        <div className="flex items-center gap-7">
                            <div onClick={() => swiper.slidePrev()} className={`w-12 h-12 rounded-full border flex items-center justify-center cursor-pointer ${index + 1 == 1 ? "border-gray-300" : "border-blue-900"}`}>
                                <HiArrowLongLeft />
                            </div>
                            <div onClick={() => swiper.slideNext()} className={`w-12 h-12 rounded-full border flex items-center justify-center cursor-pointer ${index + 1 == length ? "border-gray-300" : "border-blue-900"}`}>
                                <HiArrowLongRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsMeetSection;