import { IoPlayOutline } from "react-icons/io5";
import Container from "./Container";

const Transforming = () => {
    return (
        <section className="transformingBg">
            <Container>
                <div className="h-full flex flex-col justify-center items-center py-20">
                    <h1 className="text-white text-4xl md:text-6xl text-center sFont">Transforming Your Business Strategy Redefine Experiences</h1>
                    <div className="flex items-center gap-3 mt-10">
                        <div className="pBg cursor-pointer p-3 rounded-full flex items-center justify-center">
                            <IoPlayOutline className="text-4xl text-white" />
                        </div>
                        <span className="text-white font-semibold text-lg">Our Showreel</span>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Transforming;