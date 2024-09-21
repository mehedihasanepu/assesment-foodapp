
import Image from "next/image";
import getStartedImg from "../../public/assets/image/Simplification.png";

import { Miniver } from 'next/font/google';

const miniver = Miniver({
    subsets: ['latin'],
    weight: ['400',],
});
export default function GetStartAndAboutUs() {
    return (
        <div className="flex justify-center items-center">
            {/* Get Start and About Us Section  */}
            <div className="max-w-screen-2xl w-full px-44 mt-[100px]">

            <div className="flex justify-between lg:flex-row flex-col  items-center gap-[120px] pb-[90px]">
                {/* PIZZA DELIVERY  */}
                <div className="lg:w-1/2 w-8/12 flex flex-col gap-4">

                    <div>
                        <p className="text-[#A52A2A] text-lg font-semibold">PIZZA DELIVERY</p>
                        <h2 className="text-[55px] font-semibold">Get Started Today!</h2>
                    </div>
                    <div className="w-2/5 h-[5px] bg-[#A52A2A]"></div>
                    <div className="flex flex-col gap-4">
                        <h5 className="text-[26px] font-semibold">Everything you need to build an amazing food restaurant responsive website.</h5>
                        <p className="text-[17px] ">Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.</p>
                    </div>

                    {/* card */}

                    <div className="flex justify-center items-center gap-7">
                        <div className="flex flex-col gap-5 ">
                            <div className="w-[100px] h-[100px]"><Image src={getStartedImg} alt="pizza" /></div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold">Food Order</p>
                                <p >Food is the necessity of life. It provides nutrition, sustenance growth to human body.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <div className="w-[100px] h-[100px]"><Image src={getStartedImg} alt="pizza" /></div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold">Food Order</p>
                                <p >Food is the necessity of life. It provides nutrition, sustenance growth to human body.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About us */}
                <div className=" lg:w-1/2 w-8/12 flex flex-col justify-center gap-8 mb-16">
                    <div className="flex gap-2 items-end">
                        <p className={`${miniver.className} text-[18px] text-[#A52A2A]`}>About us</p>
                        <div className="w-[34px] h-[1px] bg-[#A52A2A] mb-2" />
                    </div>
                    <h1 className="text-[44px] font-bold leading-[50px]">Food is an important part Of a balanced Diet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

                    <div>
                        <div className="flex gap-[13px] items-center">
                            <button className="btn rounded-md bg-[#880808] hover:bg-[#A52A2A] text-white w-[190px] h-[55px] text-[18px] font-bold">Show more</button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#880808] w-[60px] h-[60px] hover:fill-[#195A00]" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" /></svg>
                            </div>
                            <p className="text-[18px] font-bold">Watch video </p>
                        </div>
                    </div>
                </div>


            </div>
            </div>
        </div>
    );
}