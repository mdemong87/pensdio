import Link from "next/link";
import getData from "../(site)/blog/helper/getData";
// import ArticleOne from "../../public/images/Home/blogOne.png";
// import Articletwo from "../../public/images/Home/blogtwo.png";
import Container from "./Container";
import HomeLatestArticalCard from "./HomeLatestArticalCard";

const LatestArticle = async () => {


    const data = await getData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
    const mapingData = data?.data?.reverse();


    return (
        <div className="h-auto pt-8 pb-20 sBg">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our Latest</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Article</h1>
                </div>
                <div className="flex flex-col md:flex-row md:gap-8 mt-10">


                    {
                        mapingData?.map((item, index) => {
                            if (index < 3) {

                                return (
                                    <HomeLatestArticalCard href={`/blog/${item?._id}`} image={item?.file?.secure_url} tophead={item?.tag} head={item?.title} min={item?.time} />
                                )
                            }
                        })
                    }



                </div>
                <div className="mt-10">
                    <Link className="border border-blue-900 py-3 px-5" href={"/blog"}>View All Articles</Link>
                </div>
            </Container >
        </div >
    )
}

export default LatestArticle;