import Link from "next/link";
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaTiktok, FaVimeoV } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Container from "./Container";

const Footer = () => {
    return (
        <footer className="footerBg">
            <Container>
                <div className="py-20">
                    <div>
                        <div className="mb-5">
                            <p className="text-xl text-gray-500">We&apos;re here to solve your problem!</p>
                            <h1 className="text-3xl md:text-5xl py-4 font-light sFont text-gray-600">pensdio21@gmail.com</h1>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-cetner gap-5 py-5 pFont">
                            <div className="w-full">
                                <p className="text-2xl pt-3 text-gray-600">Your trusted partner for<br /> global design innovation <br />solutions</p>
                            </div>
                            <div className="w-[60%]">
                                <h3 className="text-2xl py-3 text-gray-600">Follow us</h3>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-4 items-center">
                                        <FaLinkedinIn className="text-lg text-gray-500" />
                                        <FaFacebookF className="text-lg text-gray-500" />
                                        <FaInstagram className="text-lg text-gray-500" />
                                        <FaXTwitter className="text-lg text-gray-500" />
                                    </div>
                                    <div className="flex gap-4 items-center mt-3">
                                        <FaTiktok className="text-lg text-gray-500" />
                                        <FaBehance className="text-lg text-gray-500" />
                                        <FaVimeoV className="text-lg text-gray-500" />
                                        <FaDribbble className="text-lg text-gray-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[70%]">
                                <h3 className="text-2xl text-gray-600 py-3">Resources</h3>
                                <ul className="text-gray-500">
                                    <li>Case studies</li>
                                    <li>Reports</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <h3 className="text-2xl py-3 text-gray-600">Digital Turbo Edition</h3>
                                <p className="text-gray-500">Receive the latest updates and changes</p>
                                <div className="mt-3 flex w-full">
                                    <div>
                                        <input className="p-2 border-2 border-blue-900" type="email" placeholder="Subcribe with your Email" />
                                    </div>
                                    <div>
                                        <button className="pBg text-white text-lg px-5 py-2 border-none">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="pBg text-white">
                <Container>
                    <div className="flex items-center flex-wrap justify-center text-center md:justify-start py-4">
                        <p>2023 PENSDIO | Privacy Policy | </p>
                        <Link className="pl-2" href={'https://emonhossen.xyz'}>Developed by Md Emon Hossen</Link>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;