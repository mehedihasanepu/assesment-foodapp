import Image from "next/image";
import whyPeopleChoose from "../../public/assets/image/Why-People-Choose.png"
import icon1 from "../../public/assets/icon/01.svg"
import icon2 from "../../public/assets/icon/02.svg"
import icon3 from "../../public/assets/icon/03.svg"
import { Nunito } from 'next/font/google';

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});



export default function ChooseUs() {
    return (
        <div className={nunito.className}>
            {/* Why People Choose us? */}
            <div className="max-w-screen-2xl w-full px-44">
            <div className="flex justify-between items-center gap-[80px] ">
                <div className="w-1/2">
                    <Image className="w-[560px] h-[510px]  rounded-[25px]" src={whyPeopleChoose} alt="whyPeopleChooseImg" />
                </div>
                <div className="w-1/2 flex flex-col gap-[34px]">
                    <h1 className="text-[47px] font-bold">Why People Choose us?</h1>
                    <div className="flex flex-col gap-[40px]">
                        {/* card-1 */}
                        <div className="flex items-center px-[17px] py-[15px] gap-6 rounded-[18px]" style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                            <div className="shrink-0 p-[20px] rounded-full" style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                                <Image className="w-[45px] h-[45px] " src={icon1} alt="icon1" />
                            </div>
                            <div>
                                <h3 className="text-[30px] font-semibold">Convenient and Reliable</h3>
                                <p className="text-[17px] text-gray-500">Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.</p>
                            </div>
                        </div>

                        {/* card-2 */}
                        <div className="flex items-center px-[17px] py-[15px] gap-6 rounded-[18px]" style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                            <div className="shrink-0 p-[20px] rounded-full" style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                                <Image className="w-[45px] h-[45px] " src={icon2} alt="icon2" />
                            </div>
                            <div>
                                <h3 className="text-[30px] font-semibold">Variety of Options</h3>
                                <p className="text-[17px] text-gray-500">From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.</p>
                            </div>
                        </div>

                        {/* card-3 */}
                        <div className="flex items-center px-[17px] py-[15px] gap-6 rounded-[18px]" style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                            <div className="shrink-0 p-[20px] rounded-full" style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                                <Image className="w-[45px] h-[45px] " src={icon3} alt="icon3" />
                            </div>
                            <div>
                                <h3 className="text-[30px] font-semibold">Eat Burger</h3>
                                <p className="text-[17px] text-gray-500">Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
}




