'use client'
import TextReviewCard from "@/app/componnent/TextReviewCard";
import { useState } from "react";
import leftfive from "../../public/images/ClientReview/leftfive.png";
import leftfour from "../../public/images/ClientReview/leftfour.png";
import leftone from "../../public/images/ClientReview/leftone.png";
import leftsix from "../../public/images/ClientReview/leftsix.png";
import leftthree from "../../public/images/ClientReview/leftthree.png";
import lefttwo from "../../public/images/ClientReview/lefttwo.png";
import middlefive from "../../public/images/ClientReview/middlefive.png";
import middlefour from "../../public/images/ClientReview/middlefour.png";
import middleone from "../../public/images/ClientReview/middleone.png";
import middlesix from "../../public/images/ClientReview/middlesix.png";
import middlethree from "../../public/images/ClientReview/middlethree.png";
import middletwo from "../../public/images/ClientReview/middletwo.png";
import righteight from "../../public/images/ClientReview/righteight.png";
import rightfive from "../../public/images/ClientReview/rightfive.png";
import rightfour from "../../public/images/ClientReview/rightfour.png";
import rightone from "../../public/images/ClientReview/rightone.png";
import rightseven from "../../public/images/ClientReview/rightseven.png";
import rightsix from "../../public/images/ClientReview/rightsix.png";
import rightthree from "../../public/images/ClientReview/rightthree.png";
import righttwo from "../../public/images/ClientReview/righttwo.png";


const TextReviewWrper = () => {


    const [isshowReview, setisshowReview] = useState(false);

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:-translate-y-48 pt-6 lg:pt-0">
                <div className="w-full h-fit">
                    <TextReviewCard dis={"Writing about Pensdio is a pleasure because their designs are always excellent. I was impressed by their creativity, technical skill, colour selection, aesthetic sensibility, design acumen, and illustrations. Our clients have received graphics, newsletters, reports, invites, posters, displays, and brochures from them. Pensdio is always eager to learn new skills and can use the latest design software. Their clients are amazed by their knowledge, ability to meet deadlines, and high-quality work."} clientProfile={leftone} name={"Dr. Achi Bekomson"} position={"Psychological Counsellor | Mental Health Wing"} />
                    <TextReviewCard dis={"I've known Pensdio for a while. They made a great illustration, newsletter, report, invitation, poster, and display designer. Their design skills are fantastic. They skills allow them to realize others' ideas and their creativity and design knowledge. All of their work shows them design and graphic sensibility.I recommend them for such work."} clientProfile={lefttwo} name={"Hammad Siddiqui"} position={"LinkedIn Consultant and Coach"} />
                    <TextReviewCard dis={"Pensdio designs graphics and animation well. We're impressed with their work and will hire them for future projects. They simple to work with, reacts promptly, revises quickly, and values criticism. I endorse them for top-notch brand design."} clientProfile={leftthree} name={"Laura Walker"} position={"Web Designer, Aequor Healthcare"} />
                    {
                        isshowReview && (
                            <>
                                <TextReviewCard dis={"I have always liked writing about Pensdio because their designs are world-class. Their talent, creativity, technical capabilities, color choice, aesthetics, design, and illustrations impressed me.Their ability to instantly capture clients' imaginations makes them pleased to have them.I will gladly recommend the most fantastic graphics stuff for them. For the best business impression, their work will amaze you."} clientProfile={leftfour} name={"Rania Kuraa"} position={"Digital Strategist & ConsultantCMO, Signal of The Woodlands"} />

                                <TextReviewCard dis={"I had a wonderful collaboration with Pensdio. They are very accommodating, professional, and meticulous. Thanks for the quick help, excellent work, and quick creation of the best designs I've had the opportunity to see."} clientProfile={leftfive} name={"Valerija Vulic"} position={"Travel Specialist and Social Media Manager, Savanti Travel."} />

                                <TextReviewCard dis={"Pensdio was a true professional. they took the time to understand our needs and address them. Changes were completed quickly and without question. I would recommend Pensdio and look forward to working with them again"} clientProfile={leftsix} name={"Khaleev Ginyard"} position={"General Manager at Slomin's, Inc."} />
                            </>
                        )
                    }

                </div>
                {/* frist division end from here */}

                {/* middle division start from here */}
                <div className="w-full h-fit">

                    <TextReviewCard dis={"This was a rush job and they came through soooo well, amazing. thank you so much for helping to make my dream come true. Will continue to work with you."} clientProfile={rightthree} name={"Shadi Abdelsalam"} position={"CPO I Co-Founder, Sketshare LTD"} />

                    <TextReviewCard dis={"It was an absolute pleasure working with them. So much communication made every adjustment I asked for and patience for the needed revisions over the course of the project. End result was beyond worth it and I will definitely be recommending and re-using for other projects!"} clientProfile={rightfour} name={"Levi Moscovici"} position={"MD, SPRK MUSIC"} />

                    <TextReviewCard dis={"I have been connected with Pensdio for over 2 years. Over the times they helped me with their amazing design skills to satisfy many of my clients. The best thing is they can quickly grab clients imagination, so my clients feel so happy having them. I wish their very success to long run. I recommend them to anyone without a question. Thank you."} clientProfile={middlethree} name={"Tarif Rashid Santo"} position={"System Administrator, Secret-IT"} />

                    <TextReviewCard dis={"Amazing job. Very happy with the final delivery. The work came out better than I anticipated. I also appreciate their quick turnaround time, speedy and accurate communication, and creative process"} clientProfile={middlefour} name={"CherRaye"} position={"Owner, Brownce App"} />

                    <TextReviewCard dis={"Perfect stuff!! Sent it to my project manager and his words were 'They killed it'!! Fantastic promo video and I am very happy with the outcome. Thank you."} clientProfile={middlesix} name={"GLINKOO"} position={"Up & Coming chat app"} />

                    {
                        isshowReview &&
                        <>
                            <TextReviewCard dis={"Excellent as always, these guys go above and beyond when it comes to working on gigs for their clientele. They remain patient and driven even when I'm being a stressful pain at times ha-ha! Quality, communication, passion, dedication, punctuality, this team possesses all traits. I recommend anyone to bring their work to these guys. I am super delighted."} clientProfile={middlefive} name={"Dallas Bond"} position={"COO, Advisory Cloud"} />


                            <TextReviewCard dis={"I always like writing about Pensdio because their designs are world-class. I was impressed by their talent, creativity, technical capabilities, colour choice, aesthetics, design, and illustrations.They expertise, ability to fulfil deadlines, and high-quality work have astonished our clients.Pensdio is the perfect graphic agency for any company because of their ingenuity and willingness to please. Best of luck to them."} clientProfile={middletwo} name={"Tawfiq Rahman"} position={"Lead design engineer of broadcast systems, broadcast Management Group,"} />

                            <TextReviewCard dis={"I have been connected with Pensdio for over 2 years. Over the times they helped me with their amazing design skills to satisfy many of my clients. The best thing is they can quickly grab clients imagination, so my clients feel so happy having them. I wish their very success to long run. I recommend them to anyone without a question. Thank you."} clientProfile={middlethree} name={"Tarif Rashid Santo"} position={"System Administrator, Secret-IT"} />

                            <TextReviewCard dis={"Amazing job. Very happy with the final delivery. The work came out better than I anticipated. I also appreciate their quick turnaround time, speedy and accurate communication, and creative process"} clientProfile={middlefour} name={"CherRaye"} position={"Owner, Brownce App"} />

                        </>
                    }
                </div>
                {/* middle division end from here */}

                {/* last division start from here */}
                <div className="w-full h-fit">
                    <TextReviewCard dis={"The absolute best in the business. No one better. Listened attentively to every single one of my instructions, executed it to perfection. 100% recommend. Pure quality."} clientProfile={rightone} name={"Jeevika Makani"} position={"Co-Founder & CEO at re-mint"} />

                    <TextReviewCard dis={"They were patient with my request as I had a very specific vision for the video, I wanted them to create, and they took the time to fully understand my needs and offer suggestions on how to bring my ideas to life. Throughout the process, they were always prompt in responding to my messages and providing updates on the progress of the video. They were also very accommodating and willing to make revisions and changes as needed, which was greatly appreciated."} clientProfile={righttwo} name={"Kenneth Mak"} position={"CEO, Founder, Shopmatey"} />


                    <TextReviewCard dis={"I am happy to write this recommendation for Pensdio. I found them as an organized and diligent professional. They have risen in their career fast, and with their level of professional dedication, I am sure they will remain at the top of the game. Good luck for their future endeavours."} clientProfile={middleone} name={"Jamiu Harleemarh"} position={"Social Media Manager, Islamic hotspot Africa"} />

                    <TextReviewCard dis={"I always like writing about Pensdio because their designs are world-class. I was impressed by their talent, creativity, technical capabilities, colour choice, aesthetics, design, and illustrations.They expertise, ability to fulfil deadlines, and high-quality work have astonished our clients.Pensdio is the perfect graphic agency for any company because of their ingenuity and willingness to please. Best of luck to them."} clientProfile={middletwo} name={"Tawfiq Rahman"} position={"Lead design engineer of broadcast systems, broadcast Management Group,"} />


                    <TextReviewCard dis={"Pensdio went above and beyond with my project. I will definitely be going to work with them again. I am so happy and satisfied with their great work, professionalism and communication. Thank you again."} clientProfile={rightfive} name={"Helga Nederhoed"} position={"Owner, Green Earth Products"} />
                    {
                        isshowReview &&
                        <>
                            <TextReviewCard dis={"Very good communication and quick implementation of a quality project. Thank you Pensdio."} clientProfile={rightsix} name={"Kenneth Chan"} position={"Founder and CEO, Tobi"} />

                            <TextReviewCard dis={"Using this company was last-minute, professional, and worthwhile. Pensdio worked hard to customize or branding to our specifications. They were patient and professional, making revisions as needed. Our logo is great, and I definitely suggest this company."} clientProfile={rightseven} name={"Kristy Atkinson"} position={"EMS, Advantage Solutions"} />

                            <TextReviewCard dis={"It was fun working with Pensdio. They understand the requirements quickly & and completely the design creatively. Bonus included. Thanks."} clientProfile={righteight} name={"Montazim Billah"} position={"AVP, Brac Bank"} />


                            <TextReviewCard dis={"This was a rush job and they came through soooo well, amazing. thank you so much for helping to make my dream come true. Will continue to work with you."} clientProfile={rightthree} name={"Shadi Abdelsalam"} position={"CPO I Co-Founder, Sketshare LTD"} />

                            <TextReviewCard dis={"It was an absolute pleasure working with them. So much communication made every adjustment I asked for and patience for the needed revisions over the course of the project. End result was beyond worth it and I will definitely be recommending and re-using for other projects!"} clientProfile={rightfour} name={"Levi Moscovici"} position={"MD, SPRK MUSIC"} />
                        </>
                    }

                </div>
            </div>

            <div className="lg:-translate-y-72">
                <button onClick={() => { setisshowReview(!isshowReview) }} className="border border-blue-900 py-3 px-5">{isshowReview ? "Close all reviws" : "View all reviws"}</button>
            </div>
        </>
    )
}

export default TextReviewWrper;