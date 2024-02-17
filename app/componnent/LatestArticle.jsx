import Link from "next/link";
import Container from "./Container";
import HomeLatestArticalCard from "./HomeLatestArticalCard";

import ArticleOne from "../../public/images/Home/blogOne.png";
import Articlethree from "../../public/images/Home/blogthree.png";
import Articletwo from "../../public/images/Home/blogtwo.png";

const LatestArticle = () => {
    return (
        <div className="h-auto pt-8 pb-20 sBg">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our Latest</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Article</h1>
                </div>
                <div className="flex flex-col md:flex-row md:gap-8 mt-10">

                    <HomeLatestArticalCard href={"/blog/1"} image={ArticleOne} tophead={'UI/UX Design'} head={'Crafting Engaging and User-centric Digital Experiences'} min={'10 min'} />
                    <HomeLatestArticalCard href={"/blog/2"} image={Articletwo} tophead={'Branding'} head={'Six Secret Powers of Effective Social Media Ad Design & Branding'} min={'9 min'} />
                    <HomeLatestArticalCard href={"/blog/3"} image={Articlethree} tophead={'Motion Design'} head={'Proven 7 Benefits of Motion Design for Business Owners 2023'} min={'10 min'} />

                </div>
                <div className="mt-10">
                    <Link className="border border-blue-900 py-3 px-5" href={"/blog"}>View All Articles</Link>
                </div>
            </Container >
        </div >
    )
}

export default LatestArticle;