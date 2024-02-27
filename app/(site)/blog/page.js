import Container from "@/app/componnent/Container";
import HomeLatestArticalCard from "../../componnent/HomeLatestArticalCard";
import getData from "./helper/getData";


export const revalidate = 10;



const Blog = async () => {

    const response = await getData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
    const blogdata = response.data;



    return (
        <div className="pt-36 pb-20 sBg">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont">
                        Fresh Article
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 md:w-2/4 pt-4">Latest publication featuring insights, trends, and valuable information for your reading pleasure and knowledge enrichment</p>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8 pt-12 pb-7 ">

                    {
                        blogdata?.map((singleBlog, index) => {
                            if (index < 3) {
                                return (
                                    <HomeLatestArticalCard key={index} href={`/blog/${singleBlog?._id}`} image={singleBlog?.file.secure_url} tophead={singleBlog?.tag} head={singleBlog?.title} min={singleBlog?.time} />
                                )
                            }
                        })
                    }


                </div>
            </Container>
            {/* <div className="h-auto bg-white">
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
            </div> */}

            <Container>
                <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8 pt-0">
                    {
                        blogdata?.map((singleBlog, index) => {
                            if (index >= 3 && index < 6) {
                                return (
                                    <HomeLatestArticalCard key={index} href={`/blog/${singleBlog?._id}`} image={singleBlog?.file.secure_url} tophead={singleBlog?.tag} head={singleBlog?.title} min={singleBlog?.time} />
                                )
                            }
                        })
                    }
                </div>

                <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8 pt-8 mt-0">
                    {
                        blogdata?.map((singleBlog, index) => {
                            if (index >= 6) {
                                return (
                                    <HomeLatestArticalCard key={index} href={`/blog/${singleBlog?._id}`} image={singleBlog?.file.secure_url} tophead={singleBlog?.tag} head={singleBlog?.title} min={singleBlog?.time} />
                                )
                            }
                        })
                    }
                </div>

            </Container>
        </div>
    )
}


export default Blog;