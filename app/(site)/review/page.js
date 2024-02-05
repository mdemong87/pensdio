import Container from "@/app/componnent/Container";
import TextReviewWrper from "@/app/componnent/TextReviewWrper";
import VedioReviewCard from "@/app/componnent/VedioReviewCard";
import Image from "next/image";
import reviewHero from "../../../public/reviewHero.png";

import vedioClientone from "../../../public/images/ClientReview/vedioClientone.png";

const Review = () => {
    return (
        <div className="pt-20 footerBg">
            <Container>
                <div className="w-full lg:px-48 py-24">
                    <Image className="m-auto" src={reviewHero} alt="reviewHero-Image" />
                </div>

                <section className="h-auto w-full">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                        <VedioReviewCard VedioReviewImage={vedioClientone} point={"5"} name={"Emily Knapp"} position={"CMO of Aequor Healthcare"} />
                        <VedioReviewCard VedioReviewImage={vedioClientone} point={"5"} name={"Emily Knapp"} position={"CMO of Aequor Healthcare"} />
                        <VedioReviewCard VedioReviewImage={vedioClientone} point={"5"} name={"Emily Knapp"} position={"CMO of Aequor Healthcare"} />
                        <VedioReviewCard VedioReviewImage={vedioClientone} point={"5"} name={"Emily Knapp"} position={"CMO of Aequor Healthcare"} />

                    </div>
                </section>


                <section className="mt-20 lg:mt-36">
                    <div className="w-full">
                        <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our client &apos;s</h1>
                        <h1 className="text-4xl -mt-3 md:-mt-0 md:text-5xl font-bold pt-4 sFont text-gray-700">Experience</h1>
                        <p className="text-gray-500 w-full lg:w-2/4 text-md pt-4">
                            Insights into the Experiences Shared by Our Valued Clients, Reflecting Their Satisfaction and Success Stories with Our Services
                        </p>
                    </div>
                    <TextReviewWrper />

                </section>

            </Container>
        </div>
    )
}

export default Review;