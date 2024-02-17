import Container from "@/app/componnent/Container";
import Link from "next/link";
import workone from "../../../public/images/Home/workone.png";
import worktwo from "../../../public/images/Home/worktwo.png";
import workeight from "../../../public/images/Works/workeight.png";
import workfive from "../../../public/images/Works/workfive.png";
import workfour from "../../../public/images/Works/workfour.png";
import workseven from "../../../public/images/Works/workseven.png";
import worksix from "../../../public/images/Works/worksix.png";
import workthree from "../../../public/images/Works/workthree.png";
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

                    <HomeLatestWork href={"https://www.behance.net/gallery/25851945/Brand-identity-Social-media-for-Tiles-Company"} iamgeSrc={workone} topheadLeft={"Brand Identity"} topheadRight={"KANGARI STONES"} head={"Brand identity & Social media for Kangari"} dis={"Kangari Stones is a renounced tile company in USA"} />

                    <HomeLatestWork href={"https://www.behance.net/gallery/116341623/Doctra-app-Case-Study"} iamgeSrc={worktwo} topheadLeft={"Case Study"} topheadRight={"DOCTRA APP"} head={"Doctra app Case Study"} dis={"Doctra is a health app where you can book doctors appointments"} />

                    <HomeLatestWork href={"https://www.behance.net/gallery/186370787/Health-care-UXUI-Solution"} iamgeSrc={workthree} topheadLeft={"Case Study"} topheadRight={"50 CLASSICAL HOMEOPATHY TREATMENT"} head={"Homeopathy Treatment Case Study"} dis={"Utilize the homeopathy app to create a treatment plan"} />


                    <HomeLatestWork href={"https://www.behance.net/gallery/122916329/Brand-Identitydesign-for-Aja-Fit-with-case-study"} iamgeSrc={workfour} topheadLeft={"Identity Design"} topheadRight={"AJA FIT"} head={"Brand Identity design for Aja Fit"} dis={"Aja Fit is a tech business working to improve global health"} />


                    <HomeLatestWork href={"https://www.behance.net/gallery/134344685/Brand-identityWebsite-for-Software-Company"} iamgeSrc={worksix} topheadLeft={"Identity Design"} topheadRight={"SUBRA SYSTEM"} head={"Brand identity & Website for Subra System"} dis={"Subra System is a specialist provider of software solution"} />


                    <HomeLatestWork href={"https://www.behance.net/gallery/127836811/App-Landingpage-Digital-E-Wallet-Company"} iamgeSrc={workeight} topheadLeft={"UX & UI Design"} topheadRight={"APPTO"} head={"App Landing page Digital E-Wallet Company"} dis={"Appto is a easy fast & secure digital e-wallet"} />


                    <HomeLatestWork href={"https://www.behance.net/gallery/24973021/InternationalMedical-Events-BIT-Summit-2021"} iamgeSrc={workfive} topheadLeft={"Event Branding"} topheadRight={"BIT SUMMIT"} head={"International Event BIT Summit 2021"} dis={"Interventional Cardiologists for the Improvement Summit"} />


                    <HomeLatestWork href={"https://www.behance.net/gallery/186369971/CreativeEducation-Dashboard-UX-UIDesign-Solution"} iamgeSrc={workseven} topheadLeft={"UX & UI Design"} topheadRight={"EDUCARE"} head={"Education Dashboard UX & UI Design"} dis={"Educare is a leading educational technology SaaS solution"} />

                </div>
                <div className="mt-10">
                    <Link className="border border-blue-900 py-3 px-5" href={"https://www.behance.net/Pensdio"} target="blank" >View All Works</Link>
                </div>
            </Container >
        </main >
    )
}

export default Work;