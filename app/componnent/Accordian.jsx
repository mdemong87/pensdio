import AccordianItem from "./AccordianItem";
import Container from "./Container";


const Accordian = () => {

    return (
        <div className="mt-5">
            <Container>
                <AccordianItem num={'.01/'} heading={"Branding Design"} dis={"The brand's vision is crucial for establishing a coherent message and effectively engaging with the target audience. This is the place where we determine your identity, aspirations, and methods for conveying your narrative."} disTwo={["90-min Strategy Call", "Vision & Purpose", "Positioning", "Messaging", "Content Pillars", "Target Audience", "Core Values", "Brand Roadmap", "Personality & Voice", "Messaging"]} />

                <AccordianItem num={'.02/'} heading={"Graphic Design"} dis={"Graphic design conveys concepts visually. These images can be a business logo or website or brochure page layouts.  We know graphic design is your brand's quiet ambassador. The visual language tells your tale. Starting with a deep grasp of your brand, beliefs, and desired emotions, our graphic design process is immersive. We believe great graphic design is about developing a visual language that resonates with your audience, not just gorgeous images."} disTwo={["Logo Design", "Marketing Collateral", "Large format layout", "Packaging", "Event Theme Design", "Branded merchandise", "White label presentations", "Mock-ups", "Visual Communication"]} />

                <AccordianItem num={'.03/'} heading={"Motion Graphic"} dis={"We humanize tech. We defend end-user interests. Innovative thoughts from us. We turn dreams, aims, and unclear ideas into creative, clear answers. Our team has decades of creative problem-solving, communication, and innovation experience. We make negatives positive and boost positives. We design, refine, observe, and redesign. We earn millions for our partners. Though small, we are strong and have no flaws. A small, experienced, and motivated team can adapt, refine, and complete tasks quickly with tactical and strategic brilliance."} disTwo={["Corporate Videos", "Brand & Product Videos", "3D Product Video", "Explainer Videos", "Documentaries", "Commercials / Advertising", "Live Action Video", "Social Media Videos", "Short Form Content"]} />

                <AccordianItem num={'.04/'} heading={"UX & UI (Product Design)"} dis={"The UI/UX team creates user interfaces for mobile apps and web products that enhance conversion rates, save maintenance expenses, and establish a cohesive user experience. Our agency use a range of techniques, including competitive analysis and interactive prototypes, to create user interfaces that are both interesting and easy to use. Our product design, which is easy to use and understand, enables firms to reach measurable business objectives by creating output that engages the customer and distinguishes them from their competitors."} disTwo={["Discovery", "UX/UI Audit", "User interface structure", "UI Kit based on atomic design principles", "Visual interface & interactions", "High-fidelity clickable prototypes", "Product design for Web & App"]} />

                <AccordianItem num={'.05/'} heading={"Development"} dis={"As an experienced website development firm, we understand the significance of the latest technologies to give a competitive edge to clients in the market. We deploy evolving technologies to build innovative web solutions ensuring rich feature-based functionalities."} disTwo={["Web development", "Portfolio website", " E-commerce website", "LMS website", "Marketing Collateral", "AdAffiliate marketing website", "Blog website", "Agency website"]} />

                <AccordianItem num={'.06/'} heading={"Social Media Advertising"} dis={"We continue to be a group of enthusiastic individuals with a strong creative drive, constantly prepared to take on the next obstacle. We have achieved global recognition for our exceptional invention and outstanding leadership. Driven by our enthusiasm for social causes, we have transformed into a multifaceted agency that goes beyond social media marketing. We surpass mere posts by engaging in data-driven campaigns that engage your specific audience, stimulate lead generation, and enhance brand recognition."} disTwo={["Social media Management", "Web Analytics", "SEO", "Google ADs", "Facebook Ads", "Lead Generation", "Content Production ", "Email Management", "Others"]} />

            </Container>

        </div>

    )
}

export default Accordian;