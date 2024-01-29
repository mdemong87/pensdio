import Container from "@/app/componnent/Container";
import TextReviewCard from "@/app/componnent/TextReviewCard";
import VedioReviewCard from "@/app/componnent/VedioReviewCard";
import Image from "next/image";
import Link from "next/link";
import reviewHero from "../../../public/reviewHero.png";

const Review = () => {
    return (
        <div className="pt-20 footerBg">
            <Container>
                <div className="w-full lg:px-48 py-24">
                    <Image className="m-auto" src={reviewHero} alt="reviewHero-Image" />
                </div>

                <section className="h-auto w-full">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                        <VedioReviewCard />
                        <VedioReviewCard />
                        <VedioReviewCard />
                        <VedioReviewCard />
                    </div>
                </section>


                <section className="mt-20 lg:mt-36">
                    <div className="w-full">
                        <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our client's</h1>
                        <h1 className="text-4xl -mt-3 md:-mt-0 md:text-5xl font-bold pt-4 sFont text-gray-700">Experience</h1>
                        <p className="text-gray-500 w-full lg:w-2/4 text-md pt-4">
                            Insights into the Experiences Shared by Our Valued Clients, Reflecting Their Satisfaction and Success Stories with Our Services
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:-translate-y-48 pt-6 lg:pt-0">
                        <div className="w-full h-fit">
                            <TextReviewCard dis={"Writing about Pensdio is a pleasure because their designs are always excellent. I was impressed by their creativity, technical skill, colour selection, aesthetic sensibility, design acumen, and illustrations. Our clients have received graphics, newsletters, reports, invites, posters, displays, and brochures from them. Pensdio is always eager to learn new skills and can use the latest design software. Their clients are amazed by their knowledge, ability to meet deadlines, and high-quality work."} />
                            <TextReviewCard dis={"I've known Pensdio for a while. They made a great illustration, newsletter, report, invitation, poster, and display designer. Their design skills are fantastic. They skills allow them to realize others' ideas and their creativity and design knowledge. All of their work shows them design and graphic sensibility.I recommend them for such work."} />
                            <TextReviewCard dis={"Pensdio designs graphics and animation well. We're impressed with their work and will hire them for future projects. They simple to work with, reacts promptly, revises quickly, and values criticism. I endorse them for top-notch brand design."} />

                        </div>
                        <div className="w-full h-fit">
                            <TextReviewCard dis={"I am happy to write this recommendation for Pensdio. I found them as an organized and diligent professional. They have risen in their career fast, and with their level of professional dedication, I am sure they will remain at the top of the game.   Good luck for their future endeavours."} />
                            <TextReviewCard dis={"I always like writing about Pensdio because their designs are world-class. I was impressed by their talent, creativity, technical capabilities, colour choice, aesthetics, design, and illustrations.They expertise, ability to fulfil deadlines, and high-quality work have astonished our clients.Pensdio is the perfect graphic agency for any company because of their ingenuity and willingness to please. Best of luck to them."} />
                            <TextReviewCard dis={"I have been connected with Pensdio for over 2 years. Over the times they helped me with their amazing design skills to satisfy many of my clients. The best thing is they can quickly grab clients imagination, so my clients feel so happy having them. I wish their very success to long run. I recommend them to anyone without a question. Thank you."} />
                            <TextReviewCard dis={"Amazing job. Very happy with the final delivery. The work came out better than I anticipated. I also appreciate their quick turnaround time, speedy and accurate communication, and creative process"} />
                        </div>
                        <div className="w-full h-fit">
                            <TextReviewCard dis={"They were patient with my request as I had a very specific vision for the video I wanted them to create, and they took the time to fully understand my needs and offer suggestions on how to bring my ideas to life. Throughout the process, they were always prompt in responding to my messages and providing updates on the progress of the video. They were also very accommodating and willing to make revisions and changes as needed, which was greatly appreciated."} />
                            <TextReviewCard dis={"Using this company was last-minute, professional, and worthwhile. Pensdio worked hard to customise or branding to our specifications. They were patient and professional, making revisions as needed. Our logo is great, and I definitely suggest this company."} />
                            <TextReviewCard dis={"Pensdio went above and beyond with my project. I will definitely going to work with them again. I am so happy and satisfied with their great work, professionalism and communication. Thank you again"} />
                            <TextReviewCard dis={"It was an absolute pleasure working with them. So much communication made every adjustment I asked for and patience for the needed revisions over the course of the project. End result was beyond worth it and I will definitely be recommending and re-using for other projects!"} />
                            <TextReviewCard dis={"They were patient with my request as I had a very specific vision for the video I wanted them to create, and they took the time to fully understand my needs and offer suggestions on how to bring my ideas to life. Throughout the process, they were always prompt in responding to my messages and providing updates on the progress of the video. They were also very accommodating and willing to make revisions and changes as needed, which was greatly appreciated."} />

                        </div>
                    </div>

                    <div className="lg:-translate-y-72">
                        <Link className="border border-blue-900 py-3 px-5" href={"/review"}>View all reviws</Link>
                    </div>

                </section>

            </Container>
        </div>
    )
}

export default Review;