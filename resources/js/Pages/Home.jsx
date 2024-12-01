import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Button from "../Components/Button.jsx";

export default function Home() {
    return (
        <>
        <Head title="Home" />
        <div data-theme="light" className="flex flex-col min-h-screen justify-between">
        <Navbar />
            <div className=" flex flex-col gap-2 h-screen items-center justify-center">
                <h1 className="
                text-center
                text-6xl 
                font-bold
                ">Dari bertanya Menjadi mahir tanya jawa</h1>
                {/* The button to open modal */}
                <label htmlFor="my_modal_6" className="mt-5 btn w-1/2">Mulai bertanya</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="flex  justify-between items-center">
                        <h3 className="text-lg font-bold">Ajukan pertanyaan mu !</h3>
                        <label htmlFor="my_modal_6" className="btn btn-circle rounded-full font-bold">X</label>

                    </div>
                    <textarea name="" id="" className="textarea textarea-bordered resize-none   min-h-[200px]  w-full mt-5">
                    </textarea>

                    <div className="flex flex-col w-full mt-2 justify-center">
                        <select className="select bordered border-zinc-950 w-full max-w-xs">
                            <option disabled selected className="border">Kategori</option>
                            <option>Home</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    <Button text="Mulai Bertanya" size="lg" color="secondary" htmlFor="my_modal_6" />
                    </div>
                    <div className="modal-action">
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-screen justify-center items-center gap-5">
                <div className=" items-center flex flex-col bg-slate-500 w-full p-4 h-[50%] gap-5">
                    <div className="w-full">
                        <div className="flex flex-row gap-9 mt-[20px] items-center">
                            <img src="/assets/img/profile_user.jpeg" className="rounded-full w-16"></img>
                            <ul className="flex flex-row gap-5">
                                <li className="  h-8 text-sl rounded-[5px]  font-bold flex flex-row gap-2">
                                    <span>awokawok</span>
                                    <span>.</span>
                                    <span>16 Menit Yang lalau</span>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="mt-10 justify-center items-center">
                            <h1 className="font-bold text-5xl">Apa Penyebab Kematian</h1>
                        </div>
                        {/* <Button /> */}
                    </div>
                </div>
                <div className="div 2">

                </div>
            </div>
        <Footer />
        </div>
        </>
    );
}