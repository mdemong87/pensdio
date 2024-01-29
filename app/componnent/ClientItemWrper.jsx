"use client"

// import Swiper core and required modules
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import ClientItem from "./ClientItem";



const ClietItemWrper = () => {


    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            slidesPerView={1}
        >
            <SwiperSlide>
                <ClientItem />
            </SwiperSlide>
            <SwiperSlide>
                <ClientItem />
            </SwiperSlide>
            <SwiperSlide>
                <ClientItem />
            </SwiperSlide>
            <SwiperSlide>
                <ClientItem />
            </SwiperSlide>

        </Swiper>
    )
}

export default ClietItemWrper;