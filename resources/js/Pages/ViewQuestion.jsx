import React from 'react';
import Navbar from '@/partials/Navbar';
import Footer from '@/partials/Footer';

export default function ViewQuestion({ question }) {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center items-center lg:mt-[40px] mt-[20px] w-full mb-[30px]'>
                <div className='card  flex flex-col bg-white lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl lg:w-[80%] w-full h-[380px]'>
                    <div className='mt-[20px] flex items-center space-x-6 lg:ml-[40px] ml-[10px] '> 
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className='lg:w-20 lg:h-20 w-14 h-14 rounded-full '></img>
                        <div className='flex flex-col lg:space-y-2 '>
                            <p className='font-bold text-sm lg:text-lg'>Username</p>
                            <div className='flex lg:gap-5 gap-2 items-center'>
                                <p className='lg:text-sm text-xs'>Kategori Matkul</p>
                                <p className='lg:text-sm text-xs'>Waktu Bertanya</p>
                            </div>
                        </div>
                    </div>
                    <h1 className='font-bold lg:text-2xl text-xl text-center lg:mt-[90px] mt-[40px] h-[90px]'>Apa it Statistika</h1>
                    <button className='border-2 lg:py-2 lg:px-4 px-10 py-3 flex lg:w-[15%] w-[50%] justify-center mt-[30px] lg:ml-[40px] ml-[10px] text-xs bg-secondary text-white rounded-lg'>Lihat Jawaban</button>
                </div>
                <div className='bg-white lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:w-[80%] w-full lg:mt-[20px] h-[150px] flex justify-center items-center rounded-xl'>
                    <p className='font-bold text-xl'>Jawaban Anda</p>
                </div>

                <div className='flex flex-col lg:w-[80%] w-full mt-[20px]'>
                    <h1 className='font-bold text-3xl mt-[50px] ml-[10px] lg:ml-0'>Jawaban</h1>
                    <div className='card  flex flex-col bg-white lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl w-full h-[380px] mt-[20px] lg:mt-[40px]'>
                        <div className='mt-[20px] flex items-center space-x-6 lg:ml-[40px] ml-[10px] '> 
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                className='lg:w-20 lg:h-20 w-14 h-14 rounded-full'></img>
                            <div className='flex flex-col lg:space-y-2'>
                                <p className='font-bold text-sm lg:text-lg'>Username</p>
                                <div className='flex lg:gap-5 gap-2 items-center '>
                                    <p className='lg:text-sm text-xs'>Total Like</p>
                                    <p className='lg:text-sm text-xs'>Waktu Bertanya</p>
                                </div>
                            </div>
                        </div>
                        <h1 className='font-bold text-2xl text-center mt-[90px] h-[90px]'>Jawaban</h1>
                        <div className='flex lg:ml-[40px] ml-[10px] gap-5 items-center mt-[40px]'>
                            <img alt='star image' className='text-xs lg:w-14 lg:h-14 w-10 h-10 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"></img>
                            <p className='lg:text-sm text-xs'>Total Like</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:w-[80%] w-full'>
                    {/* <h1 className='font-bold text-3xl mt-[50px]'>Jawaban</h1> */}
                    <div className='card  flex flex-col bg-white lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl w-full h-[380px] mt-[20px] lg:mt-[40px]'>
                        <div className='mt-[20px] flex items-center space-x-6 lg:ml-[40px] ml-[10px] '> 
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                className='lg:w-20 lg:h-20 w-14 h-14 rounded-full'></img>
                            <div className='flex flex-col lg:space-y-2'>
                                <p className='font-bold text-sm lg:text-lg'>Username</p>
                                <div className='flex lg:gap-5 gap-2 items-center '>
                                    <p className='lg:text-sm text-xs'>Total Like</p>
                                    <p className='lg:text-sm text-xs'>Waktu Bertanya</p>
                                </div>
                            </div>
                        </div>
                        <h1 className='font-bold text-2xl text-center mt-[90px] h-[90px]'>Jawaban</h1>
                        <div className='flex lg:ml-[40px] ml-[10px] gap-5 items-center mt-[40px]'>
                            <img alt='star image' className='text-xs lg:w-14 lg:h-14 w-10 h-10 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"></img>
                            <p className='lg:text-sm text-xs'>Total Like</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:w-[80%] w-full'>
                    {/* <h1 className='font-bold text-3xl mt-[50px]'>Jawaban</h1> */}
                    <div className='card  flex flex-col bg-white lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl w-full h-[380px] mt-[20px] lg:mt-[40px]'>
                        <div className='mt-[20px] flex items-center space-x-6 lg:ml-[40px] ml-[10px] '> 
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                className='lg:w-20 lg:h-20 w-14 h-14 rounded-full'></img>
                            <div className='flex flex-col lg:space-y-2'>
                                <p className='font-bold text-sm lg:text-lg'>Username</p>
                                <div className='flex lg:gap-5 gap-2 items-center '>
                                    <p className='lg:text-sm text-xs'>Total Like</p>
                                    <p className='lg:text-sm text-xs'>Waktu Bertanya</p>
                                </div>
                            </div>
                        </div>
                        <h1 className='font-bold text-2xl text-center mt-[90px] h-[90px]'>Jawaban</h1>
                        <div className='flex lg:ml-[40px] ml-[10px] gap-5 items-center mt-[40px]'>
                            <img alt='star image' className='text-xs lg:w-14 lg:h-14 w-10 h-10 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"></img>
                            <p className='lg:text-sm text-xs'>Total Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};