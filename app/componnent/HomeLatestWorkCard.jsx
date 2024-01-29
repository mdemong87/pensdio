import Image from "next/image";


const HomeLatestWork = ({ iamgeSrc }) => {
    return (
        <div className="w-full h-auto md:transition md:hover:scale-105 md:hover:shadow-xl z-1">
            <div>
                <Image className="w-full" src={iamgeSrc} alt="home-latest-card-image" />
            </div>
            <div className="px-5 bg-white">
                <div className="flex justify-between items-center pt-4">
                    <h1 className="text-2xl text-gray-500 font-bold">Brand Identity</h1>
                    <span className="text-gray-400">KANGARI STONES</span>
                </div>
                <div className="pb-6">
                    <h2 className="text-2xl text-gray-500 pt-10">Brand identity & Social media for Kangari</h2>
                    <p className="pt-4 text-gray-400">Kangari Stones is a renounced tile company in USA</p>
                </div>
            </div>
        </div>
    )
}

export default HomeLatestWork;