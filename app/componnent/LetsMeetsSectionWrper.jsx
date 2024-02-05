// import Swiper core and required modules
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import aboutdata from "../../public/data/about.json";
import three from "../../public/images/AboutUs/MahbuburRahman.png";
import one from "../../public/images/AboutUs/NahidHasan.png";
import two from "../../public/images/AboutUs/emonhossen.jpg";
import fiveone from "../../public/images/AboutUs/fiveone.png";
import fivetwo from "../../public/images/AboutUs/fivetwo.png";
import fourone from "../../public/images/AboutUs/fourone.png";
import sixone from "../../public/images/AboutUs/sixonw.png";
import sixtwo from "../../public/images/AboutUs/sixtwo.png";
import threeOne from "../../public/images/AboutUs/threeOne.png";
import threetwo from "../../public/images/AboutUs/threetwo.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import LetsMeetDivesion from "./LetsMeetDivision";

const LetsMeetSectionWrper = ({ counter }) => {


    const imageArray = [
        {
            photo: [one, two],
        }, {
            photo: [three],
        }, {
            photo: [threeOne, threetwo],
        }, {
            photo: [fourone],
        }, {
            photo: [fiveone, fivetwo],
        }, {
            photo: [sixone, sixtwo],
        }
    ];


    const data = aboutdata[counter];



    return (
        <div className="w-full">

            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                slidesPerView={1}
                className='w-full md:w-[600px]'
            >

                {
                    data.teamMember.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <LetsMeetDivesion itemData={item} length={data.teamMember.length} index={index} photo={imageArray[counter].photo[index]} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default LetsMeetSectionWrper;