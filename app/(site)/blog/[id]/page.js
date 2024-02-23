"use client"

import Container from "@/app/componnent/Container";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import posterProfile from "../../../../public/images/AboutUs/threetwo.png";
import getData from "../helper/getData";




const SingleBlog = () => {


    const [isloading, setisloading] = useState(false);
    const pathName = usePathname();
    const neededPath = pathName.split("/");
    const finalPath = neededPath[neededPath.length - 1];
    const [singleData, setsingleData] = useState({});


    async function fetchData() {
        setisloading(true);
        const singleBlogData = await getData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${finalPath}`);
        setsingleData(singleBlogData);
        setisloading(false);
    }

    useEffect(() => {
        fetchData();
    }, [finalPath])

    const discription = singleData?.data?.dis;
    const disArray = discription?.split(`\n`);

    return (
        <div className="sBg pt-24">
            <Container>
                <div className="py-14">
                    <h1 className="text-5xl font-semibold text-center text-gray-600 sFont">{
                        isloading ? "Loading..." : singleData?.data?.title
                    }</h1>
                    <div className="flex justify-center items-center mt-8">
                        <Image className="rounded-full w-20 p-3" src={posterProfile} alt="Poster-profile" />
                        <h4 className="font-semibold text-xl text-gray-500">Ahmed Zia Chowdhury</h4>
                    </div>

                    <div className="w-full">
                        <div className="w-full my-4">

                            {
                                isloading ? "Loading..." : <Image src={singleData?.data?.bigFile?.secure_url} alt="SingleBlog-image" width={1000} height={1000} />
                            }

                        </div>
                        <div className="pt-8 flex flex-col gap-5 text-lg">


                            {
                                isloading ? <p>Loading...</p> : disArray?.map((item, index) => {
                                    if (item != "") {
                                        return (
                                            <p key={index}>{item}</p>
                                        )
                                    }
                                })



                            }







                            {/* <p>
                                UI (User Interface) and UX (User Experience) design are pivotal pillars in crafting exceptional digital experiences that resonate with users, foster engagement, command authority, instil trust, and remain relevant.
                            </p>

                            <p>
                                UI Design: UI design centres on websites or applications visual elements and interactive components.Its primary goal is to fashion visually captivating, intuitive, and coherent interfaces. For instance, consider the sleek and minimalist layout of Apples iPhone interface or the userfriendly, streamlined structure of Airbnbs booking platform.
                            </p>

                            <p>
                                UX Design: Conversely, UX design is dedicated to refining the user journey when engaging with a product or service.This encompasses understanding user behaviour, conducting thorough research, and designing user flow to guarantee a seamless and gratifying encounter. A shining example of exemplary UX design resides in Googles search engine, a platform that efficiently delivers pertinent results, guiding users through their quest for information.
                            </p>

                            <p>
                                Harmonious Synergy: Harmoniously merging UI and UX design yields a holistic, enjoyable user experience, cultivating heightened engagement and fostering an atmosphere of trustworthiness.
                            </p>

                            <p>
                                Melding impactful visuals, instinctual navigation, concise content, and considerate user interactions, brands can assert their competence and cultivate trust with their intended audience.
                            </p>


                            <p>
                                A striking model of this synergy is LinkedIn, where the professional and polished UI and UX design empower users to network and showcase their expertise with unwavering assurance.
                            </p>

                            <p>
                                UI and UX design is integral in fabricating digital experiences that wield influence, hold significance, captivate interest, exude authority, and establish trust.
                            </p> */}

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingleBlog;