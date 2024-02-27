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


    async function fetchData(id) {
        setisloading(true);
        const singleBlogData = await getData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${id}`);
        setsingleData(singleBlogData);
        setisloading(false);
    }

    useEffect(() => {
        fetchData(finalPath);
    }, [finalPath])

    const discription = singleData?.data?.dis;
    const disArray = discription?.split(`\n`);

    return (
        <div className="sBg pt-24">
            <Container>
                <div className="py-14">
                    <h1 className="text-3xl md:text-5xl font-semibold text-center text-gray-600 sFont">{
                        isloading ? "Loading..." : singleData?.data?.title
                    }</h1>
                    <div className="flex justify-center items-center mt-8">
                        <Image className="rounded-full w-20 p-3" src={posterProfile} alt="Poster-profile" />
                        <h4 className="font-semibold text-xl text-gray-500">Ahmed Zia Chowdhury</h4>
                    </div>

                    <div className="w-full">
                        <div className="w-full my-4 flex justify-center items-center">

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

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingleBlog;