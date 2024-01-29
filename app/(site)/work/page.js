import Container from "@/app/componnent/Container";
import Link from "next/link";
import homelatestTwo from "../../../public/homelatesttwo.png";
import HomeLatestWork from "../../componnent/HomeLatestWorkCard";

const Work = () => {
    return (
        <main className="h-auto pt-36 pb-20 sBg">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our work showcases</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Achievements</h1>
                </div>
                <div className="grid flex-col md:grid-cols-2 gap-8 mt-10">
                    <HomeLatestWork iamgeSrc={homelatestTwo} />
                    <HomeLatestWork iamgeSrc={homelatestTwo} />
                    <HomeLatestWork iamgeSrc={homelatestTwo} />
                    <HomeLatestWork iamgeSrc={homelatestTwo} />
                    <HomeLatestWork iamgeSrc={homelatestTwo} />
                    <HomeLatestWork iamgeSrc={homelatestTwo} />
                    <HomeLatestWork iamgeSrc={homelatestTwo} />
                    <HomeLatestWork iamgeSrc={homelatestTwo} />
                    <HomeLatestWork iamgeSrc={homelatestTwo} />

                </div>
                <div className="mt-10">
                    <Link className="border border-blue-900 py-3 px-5" href={"/work"}>View All Works</Link>
                </div>
            </Container >
        </main >
    )
}

export default Work;