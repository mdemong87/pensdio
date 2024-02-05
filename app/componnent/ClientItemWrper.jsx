"use client"

// import Swiper core and required modules
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import clientOne from "../../public/images/Home/clientOne.png";
import clientThree from "../../public/images/Home/clientThree.png";
import clientTwo from "../../public/images/Home/clientTwo.png";
import ClientItem from "./ClientItem";



const ClietItemWrper = () => {


    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            slidesPerView={1}
        >
            <SwiperSlide>
                <ClientItem clientProfile={clientOne} clientReview={"I would recommend Pensdio if you are looking for a creative mind. They can think, design, implement, and create the best value for his business. I have completed several projects with him. I am so glad that they met my project amidst his busy schedule. I wish him good luck and a prosperous future!"} name={"Hasan Hoque"} position={"Business Developer | Executive Virtual Assistant | Digital Marketing Expert"} index={'1'} />
            </SwiperSlide>
            <SwiperSlide>
                <ClientItem clientProfile={clientTwo} clientReview={"Writing about Pensdio is a pleasure because their designs are always excellent. I was impressed by their creativity, technical skill, color selection, aesthetic sensibility, design acumen, and illustrations. Our clients have received graphics, newsletters, reports, invites, posters, displays, and brochures from them. Pensdio is always eager to learn new skills and can use the latest design software. Their clients are amazed by their knowledge, ability to meet deadlines, and high-quality work."} name={"Dr. Achi Bekomson"} position={"Psychological Counsellor | Mental Health Wing"} index={'2'} />
            </SwiperSlide>
            <SwiperSlide>
                <ClientItem clientProfile={clientThree} clientReview={"I always like writing about Pensdio because their designs are world-class. I was impressed by their talent, creativity, technical capabilities, color choice, aesthetics, design, and illustrations.Their expertise, ability to fulfill deadlines, and high-quality work have astonished our clients.Pensdio is the perfect graphic agency for any company because of its ingenuity and willingness to please. Best of luck to them"} name={"Tawfiq Rahman"} position={"Lead design engineer of broadcast systems, broadcast Management Group,"} index={'3'} />
            </SwiperSlide>
        </Swiper>
    )
}

export default ClietItemWrper;