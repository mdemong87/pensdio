import Accordian from "./Accordian";
import Container from "./Container";

const Expertise = () => {
    return (
        <section className="h-auto py-32">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Expertise In</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Our Services</h1>
                </div>
                <div>
                    <Accordian />
                </div>
            </Container >
        </section >
    )
}

export default Expertise;