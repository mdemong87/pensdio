import Link from "next/link";
import homelatestOne from "../../public/homelatestone.png";
import homelatestTwo from "../../public/homelatesttwo.png";
import Container from "./Container";
import HomeLatestWork from "./HomeLatestWorkCard";

const LatestWork = () => {
    return (
        <section className="h-auto pt-8 pb-20 sBg">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Find Our</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Latest Works</h1>
                </div>
                <div className="flex flex-col md:flex-row md:gap-8 mt-10">
                    <div className="w-full">
                        <HomeLatestWork iamgeSrc={homelatestOne} />
                    </div>
                    <div className="w-full mt-16">
                        <HomeLatestWork iamgeSrc={homelatestTwo} />
                    </div>
                </div>
                <div className="mt-10">
                    <Link className="border border-blue-900 py-3 px-5" href={"/work"}>View All Works</Link>
                </div>
            </Container >
        </section >
    )
}

export default LatestWork;