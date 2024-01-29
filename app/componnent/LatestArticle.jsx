import Link from "next/link";
import Container from "./Container";
import HomeLatestArticalCard from "./HomeLatestArticalCard";

const LatestArticle = () => {
    return (
        <div className="h-auto pt-8 pb-20 sBg">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our Latest</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Article</h1>
                </div>
                <div className="flex flex-col md:flex-row md:gap-8 mt-10">
                    <HomeLatestArticalCard />
                    <HomeLatestArticalCard />
                    <HomeLatestArticalCard />
                </div>
                <div className="mt-10">
                    <Link className="border border-blue-900 py-3 px-5" href={"/"}>View All Works</Link>
                </div>
            </Container >
        </div >
    )
}

export default LatestArticle;