import Navbar from '@/partials/Navbar.jsx';
import Footer from '@/partials/Footer.jsx';

export default function Profile() {
    return (

        // Sudah Resposif semua 

        <div className='w-screen h-screen bg-primary overflow-x-hidden'>
            <Navbar />
            <div className='w-full mt-[50px] mb-20 justify-center items-center flex flex-col bg-primary'>
                {/* Judul Profie */}
                <h1 className='font-bold  text-4xl'>Profile Anda</h1> 

                {/* content */}
                <div className='mt-[40px] lg:w-[60%] h-[22rem] w-[90%] rounded-lg justify-center items-center flex flex-col bg-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

                    {/* Profile */}
                    <div className='flex gap-6 w-[90%] items-center '>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className='w-20 h-20 rounded-full'
                        ></img>
                        <h1 className='font-bold text-xl'>Nama kamu</h1>
                    </div>

                    {/* Kolom */}
                    <div className=' rounded-xl w-[90%] h-[8rem] flex justify-center items-center mt-[40px] bg-white shadow-[0_1px_7px_rgb(0,0,0,0.2)] '>
                        <div className='flex justify-between w-[90%] items-center'>
                            <div className=' w-full flex flex-col space-y-3 justify-center items-center'>
                                <div className=' w-full flex justify-center items-center h-[3rem] '>
                                    <h1 className='font-semibold text-gray-500 lg:text-2xl text-xl'>1212</h1>
                                </div>
                                <h1 className='font-bold text-sm lg:text-lg'>Jawaban</h1>
                            </div>
                            <div className='flex flex-col w-full space-y-3 justify-center items-center'>
                                <div className='border-l-2 w-full items-center justify-center flex h-[3rem]'>
                                    <h1 className='font-semibold text-gray-500 lg:text-2xl text-xl'>1212</h1>
                                </div>
                                <h1 className='font-bold text-sm lg:text-lg'>Pertanyaan</h1>
                            </div>
                            <div className='flex flex-col w-full space-y-3 justify-centee items-center'>
                                <div className='border-l-2 w-full flex justify-center items-center h-[3rem]'>
                                    <h1 className='font-semibold text-gray-500 lg:text-2xl text-xl'>1212</h1>
                                </div>
                                <h1 className='font-bold text-sm lg:text-lg'>Likes</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button edit dibawahnya kolom atas */}
                <div className='flex flex-col justify-center items-center mt-[40px]'>
                    <button className='btn btn-primary lg:px-36 px-[7rem] rounded-xl hover:bg-gray-500 border-none'>Edit Profile</button>
                </div>
                
                {/* kolom buat keterangan */}
                <div className=' flex flex-col mt-[40px] space-y-5 w-full lg:justify-center lg:items-center lg:gap-5  '>
                    <ul className='w-[70%] lg:flex-row flex flex-col ml-[25px] lg:ml-0 gap-5 lg:justify-center lg:items-center'>
                        {['Keterangan', 'Email@Webmail.com', 'Bergabung Pada: 20 November 2024'].map((item, index) => (
                            <li key={index} className='w-full rounded-xl flex  text-sm items-center lg:justify-center bg-white border border-gray-300 p-2 shadow-[0_1px_7px_rgb(0,0,0,0.2)]'>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}