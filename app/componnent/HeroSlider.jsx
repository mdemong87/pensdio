import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import one from "../../public/1.png";
import two from "../../public/2.png";
import three from "../../public/3.png";
import four from "../../public/4.png";
import five from "../../public/5.png";
import six from "../../public/6.png";
import heroSmallone from "../../public/heroSmall1.png";
import herosmalltwo from "../../public/herosmalltwo.png";
import motionProfileblog from "../../public/motionProfileblog.png";
import Container from "./Container";




const HeroSlider = () => {


    const heroLogoImage = [one, two, three, four, five, six];


    return (
        <section className="h-fit md:h-[100vh] w-full pb-10 md:pb-0 pBg">
            <Container>
                <div className="h-full w-full flex flex-col">
                    <div className="h-full flex-col-reverse flex flex-col md:flex-row md:items-center pt-12 md:pt-16">
                        <div className="w-full">
                            <h1 className="text-center md:text-left text-4xl md:text-6xl text-white font-bold sFont tracking-wider">Make Brands That Are Human-Centered And Compelling</h1>

                            <div className="mt-16 flex flex-col md:flex-row items-center  md:px-0">
                                <div className="w-full md:w-fit flex justify-center md:justify-start md:border-r-2 md:pr-1 md:-translate-x-4  border-white">
                                    <div className="translate-x-9 md:translate-x-0 flex flex-col">
                                        <div className="flex items-center mb-4">
                                            <div>
                                                <Image className="rounded-full w-16 md:w-20" src={heroSmallone} alt="Blog-motion-profile" />
                                            </div>
                                            <div className="-translate-x-9">
                                                <Image className="rounded-full w-16 md:w-20" src={herosmalltwo} alt="Blog-motion-profile" />
                                            </div>
                                            <div className="-translate-x-16">
                                                <Image className="rounded-full w-16 md:w-20" src={motionProfileblog} alt="Blog-motion-profile" />
                                            </div>
                                        </div>
                                        <Link className="underline text-gray-100 text-xl text-center w-full -translate-x-7" href={"/review"}>Video review</Link>
                                    </div>
                                </div>
                                <div className="pl-6 pt-5 md:pt-0 text-center md:text-left">
                                    <div className="flex items-center flex-col md:flex-row gap-0 md:gap-4 pb-4">
                                        <div className="flex flex-col items-center">
                                            <p className="text-lg sCl">
                                                Reviewed On
                                            </p>
                                            <div className="flex items-center gap-1">
                                                <FaRegStar className="text-5xl text-green-600" />
                                                <span className="text-3xl font-bold text-green-600">GrabStar</span>
                                            </div>
                                        </div>
                                        <div className="pl-2 flex flex-col items-center">
                                            <div className="flex items-center gap-1 pb-1">
                                                <FaStar className="text-xl text-yellow-400" />
                                                <FaStar className="text-xl text-yellow-400" />
                                                <FaStar className="text-xl text-yellow-400" />
                                                <FaStar className="text-xl text-yellow-400" />
                                                <FaStar className="text-xl text-yellow-400" />
                                            </div>
                                            <Link href={'/'} className="underline text-gray-200 text-lg">7.0 Reviews</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full flex md:hidden lg:flex items-center justify-center -translate-x-12 md:-translate-x-0">

                            <video className="" autoPlay={true} muted loop controls={false}>
                                <source src='https://res.cloudinary.com/dyffuhups/video/upload/v1707923806/Sequence_01_k3mpdf.mp4' type="video/mp4" />
                            </video>


                        </div>
                    </div>


                    <div className="hidden w-full h-[200px] lg:flex items-center justify-center 2xl:px-36">
                        {
                            heroLogoImage.map((item, index) => {
                                return (
                                    <div key={index} className="w-full">
                                        <Image width={100} height={100} src={item} alt="heroLogoImage" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default HeroSlider;