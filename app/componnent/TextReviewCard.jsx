import Image from "next/image";
import vactor1 from "../../public/Vector1.png";
import vactor2 from "../../public/Vector2.png";
import clientProfile from "../../public/clientProfile.png";

const TextReviewCard = ({ dis }) => {
    return (
        <div className="bg-white rounded-sm w-full h-fit my-6">
            <div className="p-4">
                <div className="flex items-center gap-1">
                    <Image className="h-7 w-5" src={vactor1} alt="vector1-image" />
                    <Image className="h-7 w-5" src={vactor2} alt="vector2-image" />
                </div>
                <div className="py-7">
                    <p className="text-gray-400 text-lg">
                        {dis}
                    </p>
                </div>
                <div className="pt-5 flex items-center gap-4">
                    <div>
                        <Image className="h-14 w-14" src={clientProfile} alt="clientProfile" />
                    </div>
                    <div>
                        <h3 className="text-gray-500 text-lg font-semibold">Laura Walker</h3>
                        <span className="text-sm text-gray-400"> Web Designer, Aequor Healthcare</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextReviewCard;