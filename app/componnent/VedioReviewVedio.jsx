import { RxCross1 } from "react-icons/rx";

function VedioReviewVedio({ src, setisShow }) {
    return (
        <div className="absolute top-0 left-0 mt-32 flex items-center justify-center w-full bg-red-900">

            <div className="w-[80%] md:w-[550px] h-[450px] top-24 flex items-center justify-center rounded-lg fixed z-10 bg-gray-500">
                <div onClick={() => { setisShow(false) }} className="absolute top-0 right-0 pBg p-2 rounded-full cursor-pointer">
                    <RxCross1 className="text-xl text-white" />
                </div>
                <div>
                    <video className="w-full h-full" controls={true} autoPlay={true}>
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default VedioReviewVedio;