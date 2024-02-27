import Accordian from "./Accordian";
import Container from "./Container";

const Expertise = () => {
    return (
        <section className="h-auto py-28">
            <Container>
                <div className="h-full">
                    <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our Service</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Expertise</h1>
                </div>
                <div>
                    <Accordian />
                </div>
            </Container >
        </section >
    )
}

export default Expertise;