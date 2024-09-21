"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';
import Image from "next/image";
import breakfast1 from "../../public/assets/image/BREAKFAST1.png";
import breakfast2 from "../../public/assets/image/BREAKFAST2.png";
import breakfast3 from "../../public/assets/image/BREAKFAST3.png";
import breakfast4 from "../../public/assets/image/BREAKFAST4.png";

export default function Slider() {
    const [rotation, setRotation] = useState(0);
    const [bgColor, setBgColor] = useState("#880808"); // Default background color
    const [boxColor, setBoxColor] = useState("#A52A2A"); // Default color for the corner boxes

    // Function to rotate to a specific box and change background and box colors
    const rotateToBox = (boxNumber) => {
        const angle = (boxNumber - 1) * 90; // Each box is 90deg apart
        setRotation(angle);

        // Set the background and box colors based on the box number
        switch (boxNumber) {
            case 1:
                setBgColor("#880808"); // Default background color
                setBoxColor("#A52A2A"); // Default corner box color
                break;
            case 2:
                setBgColor("#0A4669");
                setBoxColor("#0A3659");
                break;
            case 3:
                setBgColor("#953553");
                setBoxColor("#A95C68");
                break;
            case 4:
                setBgColor("#006666");
                setBoxColor("#003333");
                break;
            default:
                setBgColor("#880808"); // Default background color
                setBoxColor("#ccc"); // Default corner box color
        }
    };

    return (
        <div>
            <div className="hero" style={{ backgroundColor: bgColor }}>
                {/* Top Left Box */}
                <div className="top-left-box" style={{ backgroundColor: boxColor }}></div>

                {/* Bottom Right Box */}
                <div className="bottom-right-box" style={{ backgroundColor: boxColor }}></div>

                {/* Slider Circle */}
                <div
                    className="slider-circle"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    <Swiper slidesPerView={1} centeredSlides={true}>
                        <SwiperSlide className="swiper-slide">
                            <Image src={breakfast1} alt="breakfast" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <Image src={breakfast2} alt="breakfast" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <Image src={breakfast3} alt="breakfast" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <Image src={breakfast4} alt="breakfast" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <h3 className="text-[32px] absolute z-20 top-[51px] left-[65px] text-white ">RESTAURANT</h3>
                </div>
                <div className="absolute z-20 top-[200px] left-[88px] text-white">
                    <h1 className="text-[90px]">BREAKFAST</h1>
                    <p className="text-[18px] font-semibold w-[800px]">Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet. Eating a healthy breakfast can improve concentration and performance, boost physical endurance, and lower cholesterol levels.</p>
                </div>

                <div className="absolute w-[600px] h-10 z-20 bottom-[120px] left-[88px] bg-white rounded-full flex flex-row items-center pl-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    <p className="pl-2 font-semibold">Search ....</p>
                </div>

                {/* Control Buttons */}
                <div className="control-buttons">
                    <button className={rotation === 0 ? "active" : ""} onClick={() => rotateToBox(1)}>
                        <Image src={breakfast1} alt="breakfast" />
                    </button>
                    <span className="active-bar"></span>
                    <button className={rotation === 90 ? "active" : ""} onClick={() => rotateToBox(2)}>
                        <Image src={breakfast2} alt="breakfast" />
                    </button>
                    <span className="active-bar"></span>
                    <button className={rotation === 180 ? "active" : ""} onClick={() => rotateToBox(3)}>
                        <Image src={breakfast3} alt="breakfast" />
                    </button>
                    <button className={rotation === 270 ? "active" : ""} onClick={() => rotateToBox(4)}>
                        <Image src={breakfast4} alt="breakfast" />
                    </button>
                </div>

            </div>
        </div>
    );
}
