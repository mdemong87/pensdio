import Image from "next/image";
import artical from "../../public/artical1.png";


const HomeLatestArticalCard = () => {
    return (
        <div className="w-full bg-gray-50 h-auto md:transition md:hover:scale-105 md:hover:shadow-xl my-4">
            <div>
                <Image className="w-full" src={artical} alt="artical-one-image" />
            </div>
            <div className="p-4">
                <h3 className="text-xl text-gray-600">UI/UX Design</h3>
                <h1 className="text-2xl text-gray-700 py-4">Crafting Engaging and User-centric Digital Experiences</h1>
                <div className="flex gap-3 items-center text-gray-400">
                    <span>January 21, 2024</span>
                    <span>-</span>
                    <span> 24 Comments</span>
                </div>
            </div>
        </div>
    )
}

export default HomeLatestArticalCard;