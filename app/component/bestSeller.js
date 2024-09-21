import { Nunito } from 'next/font/google';
import Image from 'next/image';

import dish1 from "../../public/assets/image/Dishes-img(1).png"
import dish2 from "../../public/assets/image/Dishes-img(2).png"
import dish3 from "../../public/assets/image/Dishes-img(3).png"
import dish4 from "../../public/assets/image/Dishes-img(4).png"
import dish5 from "../../public/assets/image/Dishes-img(5).png"
import dish6 from "../../public/assets/image/Dishes-img(6).png"

import star from "../../public/assets/icon/Frame.svg"






const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});



export default function BestSeller() {
    return (
        <div className={nunito.className}>
            <div className="mt-[120px] flex flex-col items-center " >
                {/* heading */}
                <div className='flex flex-col gap-2 text-center'>
                    <h1 className="text-[55px] font-bold">Why People Choose us?</h1>
                    <p className='w-[850px] text-[25px] text-[#5C5C5C] leading-8'>Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing. </p>
                </div>

                {/* Dishes card */}
                <div className='grid grid-cols-3 gap-6'>
                    {/* card-1 */}
                    <div className='flex flex-col gap-4 pb-[48px] rounded-3xl mt-[64px] ' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <Image className="" src={dish2} alt="dish1" />
                        </div>
                        <div className='flex flex-row justify-between gap-2 px-5 mt-5'>
                            <h5 className='text-[30px] font-medium'>Breakfast Food</h5>
                            <button className='bg-[#F03328] px-[24px] py-[10px] rounded-full text-white font-semiboldz '>Buy Now</button>
                        </div>
                        <div className='flex flex-row justify-between mt-[10px] px-5'>
                            <div className='flex gap-1'>
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                            </div>
                            <div >
                                <h5 className='text-[33px] font-semibold'>$230</h5>
                            </div>
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className='flex flex-col gap-4 pb-[48px] rounded-3xl mt-[64px] ' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <Image className="" src={dish3} alt="dish1" />
                        </div>
                        <div className='flex flex-row justify-between gap-2 px-5 mt-5'>
                            <h5 className='text-[30px] font-medium'>Health Breakfast</h5>
                            <button className='bg-[#F03328] px-[24px] py-[10px] rounded-full text-white font-semiboldz '>Buy Now</button>
                        </div>
                        <div className='flex flex-row justify-between mt-[10px] px-5'>
                            <div className='flex gap-1'>
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                            </div>
                            <div >
                                <h5 className='text-[33px] font-semibold'>$230</h5>
                            </div>
                        </div>
                    </div>

                    {/* card-3 */}
                    <div className='flex flex-col gap-4 pb-[48px] rounded-3xl mt-[64px] ' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <Image className="" src={dish4} alt="dish1" />
                        </div>
                        <div className='flex flex-row justify-between gap-2 px-5 mt-5'>
                            <h5 className='text-[30px] font-medium'>Breakfast Food</h5>
                            <button className='bg-[#F03328] px-[24px] py-[10px] rounded-full text-white font-semiboldz '>Buy Now</button>
                        </div>
                        <div className='flex flex-row justify-between mt-[10px] px-5'>
                            <div className='flex gap-1'>
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                            </div>
                            <div >
                                <h5 className='text-[33px] font-semibold'>$230</h5>
                            </div>
                        </div>
                    </div>

                    {/* card-4 */}
                    <div className='flex flex-col gap-4 pb-[48px] rounded-3xl mt-[64px] ' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <Image className="" src={dish5} alt="dish1" />
                        </div>
                        <div className='flex flex-row justify-between gap-2 px-5 mt-5'>
                            <h5 className='text-[30px] font-medium'>Breakfast Food</h5>
                            <button className='bg-[#F03328] px-[24px] py-[10px] rounded-full text-white font-semiboldz '>Buy Now</button>
                        </div>
                        <div className='flex flex-row justify-between mt-[10px] px-5'>
                            <div className='flex gap-1'>
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                            </div>
                            <div >
                                <h5 className='text-[33px] font-semibold'>$230</h5>
                            </div>
                        </div>
                    </div>

                    {/* card-5 */}
                    <div className='flex flex-col gap-4 pb-[48px] rounded-3xl mt-[64px] ' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <Image className="" src={dish6} alt="dish1" />
                        </div>
                        <div className='flex flex-row justify-between gap-2 px-5 mt-5'>
                            <h5 className='text-[30px] font-medium'>Breakfast Food</h5>
                            <button className='bg-[#F03328] px-[24px] py-[10px] rounded-full text-white font-semiboldz '>Buy Now</button>
                        </div>
                        <div className='flex flex-row justify-between mt-[10px] px-5'>
                            <div className='flex gap-1'>
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                            </div>
                            <div >
                                <h5 className='text-[33px] font-semibold'>$230</h5>
                            </div>
                        </div>
                    </div>

                    {/* card-6 */}
                    <div className='flex flex-col gap-4 pb-[48px] rounded-3xl mt-[64px] ' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <Image className="" src={dish1} alt="dish1" />
                        </div>
                        <div className='flex flex-row justify-between gap-2 px-5 mt-5'>
                            <h5 className='text-[30px] font-medium'>Breakfast Food</h5>
                            <button className='bg-[#F03328] px-[24px] py-[10px] rounded-full text-white font-semiboldz '>Buy Now</button>
                        </div>
                        <div className='flex flex-row justify-between mt-[10px] px-5'>
                            <div className='flex gap-1'>
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                                <Image src={star} alt="star" />
                            </div>
                            <div >
                                <h5 className='text-[33px] font-semibold'>$230</h5>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}