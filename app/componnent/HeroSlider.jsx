import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import one from "../../public/1.png";
import two from "../../public/2.png";
import three from "../../public/3.png";
import four from "../../public/4.png";
import five from "../../public/5.png";
import six from "../../public/6.png";
import heroImage from "../../public/hero.png";
import motionProfileblog from "../../public/motionProfileblog.png";
import Container from "./Container";


const HeroSlider = () => {


    const heroLogoImage = [one, two, three, four, five, six];


    return (
        <section className="h-[100vh] w-full pBg">
            <Container>
                <div className="h-full w-full flex flex-col">
                    <div className="h-full flex flex-col md:flex-row md:items-center pt-32 md:pt-16">
                        <div className="w-full">
                            <h1 className="text-center md:text-left text-4xl md:text-6xl text-white font-bold sFont">Make Brands That Are Human-Centered And Compelling.</h1>

                            <div className="mt-16 flex flex-col md:flex-row items-center  md:px-0">
                                <div className="w-full md:w-fit flex justify-center md:justify-start md:border-r-2 md:pr-4 border-white">
                                    <div className="translate-x-9 md:translate-x-0">
                                        <div className="flex items-center mb-4">
                                            <div>
                                                <Image className="rounded-full" src={motionProfileblog} alt="Blog-motion-profile" />
                                            </div>
                                            <div className="-translate-x-7">
                                                <Image className="rounded-full" src={motionProfileblog} alt="Blog-motion-profile" />
                                            </div>
                                            <div className="-translate-x-14">
                                                <Image className="rounded-full" src={motionProfileblog} alt="Blog-motion-profile" />
                                            </div>
                                        </div>
                                        <Link className="underline text-gray-100 text-xl" href={"/"}>Vedio review</Link>
                                    </div>
                                </div>
                                <div className="pl-4 pt-5 md:pt-0 text-center md:text-left">
                                    <div className="flex items-center flex-col md:flex-row gap-0 md:gap-4 pb-4">
                                        <div className="flex items-center gap-1">
                                            <FaRegStar className="text-xl text-green-600" />
                                            <span className="text-lg text-green-600">Grab Star</span>
                                        </div>
                                        <Link href={'/'} className="underline text-gray-200 text-sm">7.0 Review</Link>
                                    </div>
                                    <div>
                                        <p className="text-xl text-gray-200">8 Years Experience in delivering projects with client satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full hidden  md:flex items-center justify-center">
                            <Image src={heroImage} alt="hero-image" />
                        </div>
                    </div>
                    <div className="hidden w-full h-[200px] md:flex items-center justify-center md:px-40">
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