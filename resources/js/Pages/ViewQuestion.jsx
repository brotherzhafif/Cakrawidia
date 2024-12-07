import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import { Head } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp";
import Layout3Grid from "@/Layouts/Layout3Grid";
import Navbar from "@/partials/Navbar";
import Footer from "@/partials/Footer";

export default function ViewQuestion() {
    const { id } = usePage().props; // Ambil ID dari URL melalui Inertia props
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
        return <div>Loading...</div>;
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
                <div className="bg-red-500 col-span-12 flex flex-col gap-3 w-full min-h-screen">
                    {/* Informasi pengguna dan topik */}
                    <div className="bg-green-400 flex flex-col items-start p-4">
                        <div className="flex mt-2 gap-1 text-sm ">
                            <p className="font-semibold">{question.user?.username || "Anonim"}</p>
                            |
                            <p className="font-semibold">{question.topic?.name || "Tidak diketahui"}</p>
                        </div>
                        <h1 className="text-2xl font-bold">{question.title}</h1>
                    </div>
                    {/* Jawaban */}
                    <div className="bg-blue-200">
                        <h2 className="text-xl font-semibold">Jawaban</h2>
                        {question.answers.length > 0 ? (
                            question.answers.map((answer) => (
                                <div key={answer.id} className="mt-4 p-4 bg-gray-100 rounded">
                                    <p>{answer.content}</p>
                                    <p className="text-sm text-gray-500">
                                        Ditulis oleh {answer.user?.username || "Anonim"}
                                    </p>
                                </div>
                            ))
                        ) :
                        // Tampilkan pesan jika tidak ada jawaban
                        (
                            <p className="mt-4 text-gray-700">Belum ada jawaban.</p>
                        )}
                    </div>
                </div>
                </Layout3Grid>
            <Footer />
        </LayoutApp>
        
        </>
    );
}
