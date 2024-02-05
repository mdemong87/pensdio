import Container from "@/app/componnent/Container";
import Image from "next/image";
import blogMotion from "../../../public/images/Blog/Blog Mid 04.png";
import motionProfileblog from "../../../public/motionProfileblog.png";
import HomeLatestArticalCard from "../../componnent/HomeLatestArticalCard";

import ArticleOne from "../../../public/images/Blog/blogone.png";
import Articlethree from "../../../public/images/Blog/blogthree.png";
import Articletwo from "../../../public/images/Blog/blogtwo.png";
import Articlefour from "../../../public/images/Blog/bottomfive.png";
import Articlesix from "../../../public/images/Blog/bottomseven.png";
import Articlefive from "../../../public/images/Blog/bottomsix.png";

const Blog = () => {
    return (
        <div className="pt-36 pb-20 sBg">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont">
                        Fresh Article
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 md:w-2/4 pt-4">Latest publication featuring insights, trends, and valuable information for your reading pleasure and knowledge enrichment</p>
                </div>

                <div className="flex flex-col md:flex-row md:gap-8 mt-10 pb-14">
                    <HomeLatestArticalCard image={ArticleOne} tophead={'Marketing'} head={'Email Marketing for Business Owners: 5 Tips and Examples for Success'} min={'6 min'} />

                    <HomeLatestArticalCard image={Articletwo} tophead={'UX Design'} head={'Enhancing User Experience: The Design Behind Seamless Interactions'} min={'8 min'} />

                    <HomeLatestArticalCard image={Articlethree} tophead={'Video Marketing'} head={'The Benefits of Promotional Videos for Your Business'} min={'10 min'} />

                </div>
            </Container>
            <div className="h-auto bg-white">
                <Container>
                    <div className="flex flex-col gap-4 md:gap-0 md:flex-row py-10">
                        <div className="w-full">
                            <div className="pb-5">
                                <h4 className="text-xl font-light text-gray-500 pb-3">Branding</h4>
                                <h3 className="text-xl font-semibold text-gray-700 pb-5">Essential Insights for Effective Branding <br />Strategies</h3>
                                <span className="text-gray-500">10 min</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center">
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
                                <div className="-translate-x-7">
                                    <h2 className="text-5xl text-gray-700">+2K</h2>
                                </div>
                            </div>
                            <p className="pt-5 text-gray-500">People Engage by Reading <br /> the Post</p>
                        </div>
                        <div className="w-full">
                            <Image src={blogMotion} alt="Blog-Motion_iamge" />
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="flex flex-col md:flex-row md:gap-8 pt-8 mt-10">

                    <HomeLatestArticalCard image={Articlefour} tophead={'Graphic Design'} head={'Top 10 Graphic & Motion Design Marketing Benefits for Business Owners'} min={'10 min'} />

                    <HomeLatestArticalCard image={Articlefive} tophead={'Branding'} head={'Branding Benefits Fueling Business Growth and Success '} min={'10 min'} />

                    <HomeLatestArticalCard image={Articlesix} tophead={'Motion Design'} head={'The Secret Power of Advertising Slogans'} min={'9 min'} />

                </div>

            </Container>
        </div>
    )
}


export default Blog;