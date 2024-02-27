import Container from "@/app/componnent/Container";
import PriceingCard from "@/app/componnent/PriceingCard";

const Contact = () => {
    return (
        <main className="py-20 sBg">
            <Container>
                <section className="mt-16 lg:mt-20">
                    <div className="w-full">
                        <h1 className="text-4xl w-full lg:w-[70%] md:text-5xl font-bold sFont text-gray-600">Choose the best plan and enjoy it with our support</h1>
                    </div>

                    <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 pt-14 mt-0">


                        <PriceingCard featured={[
                            "Social media management (2 platforms)",
                            "Basic SEO optimization",
                            "Monthly analytics report",
                            "2 blog posts per month",
                            "Email marketing (1 campaign/mo)",
                            "Basic graphic design (2 images/mo)",
                            "24/7 customer support",
                            "Customer Package (as per your need)"
                        ]} servise="Digital Marketing" tag="Basic" price="500" />

                        <PriceingCard featured={[
                            "Social media management (3 platforms)",
                            "Advanced SEO optimization",
                            "Monthly analytics report with insights",
                            "4 blog posts per month",
                            "Email marketing (2 campaigns/mo)",
                            "Advanced graphic design (4 images/mo)",
                            "24/7 customer support with priority response",
                            "Customer Package (as per your need)"
                        ]} servise="Digital Marketing" tag="Premium" price="1000" />


                        <PriceingCard featured={[
                            "Logo Designing (Initial Design 2 Revisions)",
                            "Color Palette, Font Pairings, Icons & Illustrations",
                            "Marketing Collateral",
                            "Mini Brand Guide",
                            "Social Media Design 10 Projects/mo",
                            "Motion Graphics 03 Projects/mo",
                            "3D Designs/ Print Collateral Designs",
                            "Customer Package (as per your need)"
                        ]} servise="Graphic Designing" tag="Basic" price="1500" />

                        <PriceingCard featured={[
                            "All from basic package",
                            "Pitch Decks & Presentation Designs",
                            "Infographics & Data Visualizations",
                            "Brochures, eBooks & Whitepapers Digital or Print Ads",
                            "3D Product Visualization 03 Projects/mo",
                            "Customer Package (as per your need)"
                        ]} servise="Graphic Designing" tag="Premium" price="2500" />

                        <PriceingCard featured={[
                            "5-7 page website",
                            "Responsive design for mobile and tablet",
                            "Basic SEO optimization",
                            "Contact form integration",
                            "Social media integration",
                            "Basic website analytics setup",
                            "1-month post-launch support"
                        ]} servise="Web Development" tag="Basic" price="1500" />

                        <PriceingCard featured={[
                            "10-15 page website",
                            "Responsive design for mobile and tablet",
                            "Advanced SEO optimization",
                            "Contact form integration with advanced features",
                            "Social media integration with advanced features",
                            "E-commerce functionality (up to 50 products)",
                            "3 months of post-launch support"
                        ]} servise="Web Development" tag="Premium" price="3000" />



                    </section>

                    <section id="para">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-20">
                            <div className="w-full px-4 py-5">
                                <h1 className="text-4xl w-full md:text-5xl font-bold sFont text-gray-600">Need Experts?</h1>
                                <h1 className="text-4xl w-full md:text-5xl font-bold sFont text-gray-600">We're here to</h1>
                                <h1 className="text-4xl w-full md:text-5xl font-bold sFont text-gray-600">Assist</h1>
                                <p className="text-xl pFont text-gray-500 pt-8">
                                    Skilled team ready to assist. Let's discuss your needs and craft a tailored solution together
                                </p>
                            </div>
                            <div className="w-full bg-gray-50 px-4 py-5 rounded-md">


                                <div>
                                    <input className="border-b-2 border-gray-500 bg-gray-50 focus:outline-0 py-2 w-full placeholder:text-gray-700" type="text" placeholder="Your name" />
                                    <p className="text-[13px] text-gray-500 pt-1">Required Field, Please Fill.</p>
                                </div>



                                <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                                    <div className="w-full">
                                        <input className="border-b-2 border-gray-500 bg-gray-50 focus:outline-0 py-2 w-full placeholder:text-gray-700" type="email" placeholder="Your Eamil" />
                                        <p className="text-[13px] text-gray-500 pt-1">Required Field, Please Fill.</p>
                                    </div>
                                    <div className="w-full">
                                        <input className="border-b-2 border-gray-500 bg-gray-50 focus:outline-0 py-2 w-full placeholder:text-gray-700" type="text" placeholder="Your Phone Number" />
                                        <p className="text-[13px] text-gray-500 pt-1">Required Field, Please Fill.</p>
                                    </div>
                                </div>


                                <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                                    <div className="w-full">
                                        <input className="border-b-2 border-gray-500 bg-gray-50 focus:outline-0 py-2 w-full placeholder:text-gray-700" type="text" placeholder="Your Project/Company Name" />
                                        <p className="text-[13px] text-gray-500 pt-1">Required Field, Please Fill.</p>
                                    </div>
                                    <div className="w-full">
                                        <input className="border-b-2 border-gray-500 bg-gray-50 focus:outline-0 py-2 w-full placeholder:text-gray-700" type="text" placeholder="How did you hear about us" />
                                        <p className="text-[13px] text-gray-500 pt-1">Required Field, Please Fill.</p>
                                    </div>
                                </div>




                                <div className="mt-8">
                                    <input className="border-b-2 border-gray-500 bg-gray-50 focus:outline-0 py-2 w-full placeholder:text-gray-700" type="text" placeholder="Share Your Project Specifics with us" />
                                    <p className="text-[13px] text-gray-500 pt-1">Required Field, Please Fill.</p>
                                </div>


                                <div className="mt-9 border-2 border-gray-500 py-2 px-5 pFont rounded-md w-fit font-semibold cursor-pointer transition-all hover:bg-gray-900 hover:text-white">
                                    Submit Your Inquiry
                                </div>


                            </div>
                        </div>
                    </section>

                </section>

            </Container>
        </main>
    )
}

export default Contact;