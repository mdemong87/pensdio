import Image from "next/image";
import Link from "next/link";


const HomeLatestWork = ({ href, iamgeSrc, topheadLeft, topheadRight, head, dis }) => {
    return (
        <div className="md:transition md:hover:scale-105 md:hover:shadow-xl z-1">
            <Link href={href} target="blank" className="w-full h-auto">
                <div>
                    <Image className="w-full" src={iamgeSrc} alt="home-latest-card-image" />
                </div>
                <div className="px-5 bg-white">
                    <div className="flex justify-between items-center pt-4">
                        <h1 className="text-3xl text-gray-500">{topheadLeft}</h1>
                        <span className="text-gray-400">{topheadRight}</span>
                    </div>
                    <div className="pb-6">
                        <h2 className="text-2xl text-gray-500 pt-10">{head}</h2>
                        <p className="pt-4 text-gray-400">{dis}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HomeLatestWork;