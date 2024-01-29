// import Swiper core and required modules
import { A11y, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import LetsMeetDivesion from "./LetsMeetDivision";

const LetsMeetSectionWrper = () => {
    return (
        <div className="w-full">

            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                slidesPerView={1}
                className='w-full md:w-[600px]'
            >
                <SwiperSlide>
                    <LetsMeetDivesion />
                </SwiperSlide>
                <SwiperSlide>
                    <LetsMeetDivesion />
                </SwiperSlide>
                <SwiperSlide>
                    <LetsMeetDivesion />
                </SwiperSlide>
                <SwiperSlide>
                    <LetsMeetDivesion />
                </SwiperSlide>
                <SwiperSlide>
                    <LetsMeetDivesion />
                </SwiperSlide>
                <SwiperSlide>
                    <LetsMeetDivesion />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default LetsMeetSectionWrper;