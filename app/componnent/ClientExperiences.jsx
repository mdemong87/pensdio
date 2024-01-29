import Link from "next/link";
import ClietItemWrper from "./ClientItemWrper";
import Container from "./Container";

const ClientExperiences = () => {
    return (
        <section className="h-auto py-20">
            <Container>
                <div className="h-full flex justify-between ">
                    <div className="h-full">
                        <h1 className="text-4xl md:text-5xl font-bold sFont text-gray-700">Our Client's</h1>
                        <h1 className="text-4xl md:text-5xl font-bold pt-4 sFont text-gray-700">Experiences</h1>
                    </div>
                    <div className="mt-10">
                        <Link className="border border-blue-900 py-3 px-5" href={"/review"}>View all reviws</Link>
                    </div>
                </div>


                <ClietItemWrper />
            </Container>
        </section>
    )
}
export default ClientExperiences;