"use client"

import Container from "@/app/componnent/Container";
import TextReviewWrper from "@/app/componnent/TextReviewWrper";
import VedioReviewCard from "@/app/componnent/VedioReviewCard";
import VedioReviewVedio from "@/app/componnent/VedioReviewVedio";
import Image from "next/image";
import { useState } from "react";
import vedioClientfour from "../../../public/images/ClientReview/vedioClientfour.png";
import vedioClientone from "../../../public/images/ClientReview/vedioClientone.png";
import vedioClientthree from "../../../public/images/ClientReview/vedioClientthree.png";
import vedioClienttwo from "../../../public/images/ClientReview/vedioClienttwo.png";
import reviewHero from "../../../public/reviewHero.png";

const Review = () => {



    const [isShow, setisShow] = useState(false);
    const [controler, setcontroler] = useState("1");

    return (
        <div className="pt-20 footerBg relative">
            <Container>
                <div className="w-full lg:px-48 py-24">
                    <Image className="m-auto" src={reviewHero} alt="reviewHero-Image" />
                </div>

                <section className=" w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 w-full">

                        <VedioReviewCard setisShow={setisShow} setcontroler={setcontroler} controlValue="1" VedioReviewImage={vedioClientone} point={"5"} name={"Emily Knapp"} position={"CCM, Aequor Healthcare, USA"} />

                        <VedioReviewCard setisShow={setisShow} setcontroler={setcontroler} controlValue="2" VedioReviewImage={vedioClienttwo} point={"5"} name={"Bryan Teape"} position={"Founder,  A-Spek Service, Canada"} />

                        <VedioReviewCard setisShow={setisShow} setcontroler={setcontroler} controlValue="3" VedioReviewImage={vedioClientthree} point={"5"} name={" Hammad Siddiqui"} position={"Founder, Canada Startup Association, Canada"} />

                        <VedioReviewCard setisShow={setisShow} setcontroler={setcontroler} controlValue="4" VedioReviewImage={vedioClientfour} point={"5"} name={"Imran Mahmud"} position={"Program Manager, BIT, Bangladesh"} />

                    </div>
                </section>

                {
                    isShow && <VedioReviewVedio setisShow={setisShow} src={controler == 1 ? "https://res.cloudinary.com/dyffuhups/video/upload/v1708856739/Emily_Knapp_01_oqcri6.mp4" : controler == 2 ? "https://res.cloudinary.com/dyffuhups/video/upload/v1708856926/Bryan_Teape_01_qlwlp2.mp4" : controler == 3 ? "https://res.cloudinary.com/dyffuhups/video/upload/v1708857068/202402232152_qhng5q.mp4" : "https://res.cloudinary.com/dyffuhups/video/upload/v1708857686/Imran_Mahmud_w30ntx.mp4"} />
                }

                <section className="mt-20 lg:mt-36">
                    <div className="w-full">
                        <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our client &apos;s</h1>
                        <h1 className="text-4xl -mt-3 md:-mt-0 md:text-5xl font-bold pt-4 sFont text-gray-700">Experience</h1>
                        <p className="text-gray-500 w-full lg:w-2/4 text-md pt-4">
                            Insights into the Experiences Shared by Our Valued Clients, Reflecting Their Satisfaction and Success Stories with Our Services
                        </p>
                    </div>
                    <TextReviewWrper />

                </section>

            </Container>
        </div>
    )
}

export default Review;