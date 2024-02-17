import Image from "next/image";
import Link from "next/link";


const HomeLatestArticalCard = ({ href, image, tophead, head, min }) => {


    return (
        <Link href={href} className="w-full bg-gray-50 h-auto md:transition md:hover:scale-105 md:hover:shadow-xl my-4">
            <div>
                <Image className="w-full" src={image} width={1000} height={1000} alt="artical-one-image" />
            </div>
            <div className="p-4">
                <h3 className="text-xl text-gray-600">{tophead}</h3>
                <h1 className="text-2xl text-gray-700 py-4">{head}</h1>
                <div className="text-gray-400">
                    <span>{`${min} min`}</span>
                </div>
            </div>
        </Link>
    )
}

export default HomeLatestArticalCard;