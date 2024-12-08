import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import { Head } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp";
import Layout3Grid from "@/Layouts/Layout3Grid";
import Navbar from "@/partials/Navbar";
import Footer from "@/partials/Footer";
import LabelButton from "@/Components/Buttons/LabelBtn";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";
dayjs.extend(relativeTime);

export default function ViewQuestion() {
    const { id } = usePage().props; // Ambil ID dari URL melalui Inertia props
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dayjs.locale("id");
        axios.get(`/api/questions/${id}`)
            .then((response) => {
                setQuestion(response.data); // Set data pertanyaan dari API
            })
            .catch((error) => {
                console.error("Error fetching question:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return  <div className="flex rounded-xl col-span-12 md:col-span-6 animate-pulse bg-gray-200 items-center justify-center h-screen">
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
    }
    
    if (!question) {
        return <div>Question not found.</div>;
    }

    return (
        <>
        <Head title={question.title} />
        <LayoutApp>
            <Navbar />
                <Layout3Grid>
                <div className=" col-span-12 md:col-span-8 flex flex-col gap-3 w-full p-1 min-h-screen">
                    {/* Informasi pengguna dan topik */}
                    <div className="border rounded-md border-secondary flex flex-col gap-4 p-4 items-start ">
                        <div className="flex w-full gap-1 items-center text-sm ">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Avatar"/>
                                </div>
                            </div>
                            <p className="font-semibold">{question.user?.username || "Anonim"}</p>
                            |
                            <p className="font-semibold">{question.topic?.name || "Tidak diketahui"}</p>
                            |
                            <p className="font-semibold">{dayjs(question.created_at).fromNow()}</p>
                        </div>
                        <h1 className="font-bold text-2xl  w-full ">{question.title} </h1>
                            <h1 className="text-lg">{question.content}</h1>
                        <div className=" w-full ">
                            <LabelButton
                            // htmlFor={}
                            label={"Tambahkan jawaban"}
                            className={"btn "}
                            >
                            </LabelButton>
                        </div>
                    </div>  




                    {/* Jawaban */}
                    <div className="flex flex-col  w-full border border-secondary   rounded-md">
                        <h2 className="text-3xl p-4 font-bold">Jawaban</h2>
                        {question.answers.length > 0 ? (
                            question.answers.map((answer) => (
                                <div key={answer.id} className="gap-2 flex flex-col p-4 border-t border-secondary  min-h-[100px] ">
                                    <div className="flex gap-1 font-semibold items-center justify-start ">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                                    alt="Avatar"/>
                                            </div>
                                        </div>
                                    <p className="text-sm ">{answer.user?.username || "Anonim"}</p>
                                    </div>
                                    <p className="w-full ">{answer.content}</p>

                                    <div className=" ">

                                    </div>
                                </div>
                            ))
                        ) :
                        // Tampilkan pesan jika tidak ada jawaban
                        (
                            <p className="p-4 flex justify-center items-center min-h-[200px]">Belum ada jawaban.</p>
                        )}
                    </div>
                </div>

                <div className=" border border-secondary flex-col  rounded-md   hidden md:flex col-span-4">
                    <div className="flex  border-secondary p-4 rounded-md  justify-start items-center  gap-2">
                        <div className="avatar">
                                <div className="w-28 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Avatar"/>
                                </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-sm">Nama users </p>
                            <p className="badge badge-warning">2222 poin</p>
                        </div>
                    </div>
                        <div className=" flex justify-center btn btn-outline cursor-pointer  items-center border-t border-secondary p-4">
                            Lihat pencapaian saya
                        </div>
                </div>
                </Layout3Grid>
            <Footer />
        </LayoutApp>
        
        </>
    );
}
