import Image from "next/image";
import Link from "next/link";
import aboutHero from "../../public/aboutHero.png";
import Container from "./Container";

const AboutHero = () => {
    return (
        <div className="pBg h-fit md:h-[65vh] pb-10 md:pb-0">
            <Container>
                <div className="h-full flex flex-col md:flex-row justify-center md:justify-between items-center">
                    <div className="w-3/4 mt-20 md:mt-0 z-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-white pb-4 sFont">Join A Fast-Growing Global Digital Consultancy Agency</h1>
                        <p className="text-gray-300 py-7">Join our vibrant global digital consultancy. Discover cutting-edge solutions and tap into unparalleled expertise for success in the dynamic and ever-evolving digital landscape. Let's collaborate for excellence and growth in your digital endeavor</p>
                        <Link href={'/contact'}>
                            <button className="bg-white font-semibold text-gray-600 px-4 py-2 rounded-sm">Let's Talk Us</button>
                        </Link>
                    </div>
                    <div className="w-1/4 hidden md:block h-full z-10">
                        <Image width={450} className="absolute h-3/4 right-0 top-0" src={aboutHero} alt="About-Hero-iamge" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutHero;