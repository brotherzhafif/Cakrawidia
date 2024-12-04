import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import dayjs from "dayjs";
import "dayjs/locale/id";  
import relativeTime from "dayjs/plugin/relativeTime";
import PrimaryButton from "./Buttons/PrimaryButton";
import SortingDropdown from "./SortingDropdown";
dayjs.extend(relativeTime);

const QuestionsListCard = () => {
    const [answers, setAnswers] = useState([]);
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(15); // Tambahkan state untuk jumlah item yang ditampilkan

    useEffect(() => {
        dayjs.locale('id'); 
        const fetchAnswers = axios.get("api/answers");
        const fetchTopics = axios.get("api/topics");
        const fetchQuestions = axios.get("api/questions");

        Promise.all([fetchAnswers, fetchTopics, fetchQuestions])
            .then(([answersRes, topicsRes, questionsRes]) => {
                const answersData = answersRes.data;
                const topicsData = topicsRes.data;
                const questionsData = questionsRes.data;

                const enrichedAnswers = answersData.map((answer) => {
                    const topic = topicsData.find((t) => t.id === answer.question.topic_id);
                    const question = questionsData.find((q) => q.id === answer.question.id);

                    return {
                        ...answer,
                        topic_name: topic ? topic.name : "Unknown",
                        question_created_at: question ? question.created_at : "Unknown",
                    };
                });

                setAnswers(enrichedAnswers);
                setTopics(topicsData);
                setQuestions(questionsData);
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setLoading(false));
    }, []);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 10); // Tambah 10 item setiap klik
    };

    if (loading) {
        return (
            <div className="animate-pulse bg-slate-500 col-span-6 h-screen flex justify-center items-center ">
                <p>Loading...</p>
            </div>
        );
    }
    return (
        <div className=" rounded-xl col-span-12 md:col-span-6 flex flex-col justify-center border border-secondary items-center ">
            <Hero />
            <SortingDropdown />
            {answers.slice(0, visibleCount).map((answer) => (
                <div key={answer.id} className="w-full flex flex-col justify-between border-b-2 min-h-[200px] gap-4  p-5">
                    <div className="flex gap-2 items-center">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
                            </div>
                        </div>
                        <a href="#" className="font-bold text-sm hover:underline">{answer.topic_name}</a>
                        <p className="font-bold text-sm">
                            {dayjs(answer.question_created_at).fromNow()}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href="#" className="font-normal text-xl hover:underline">{answer.question.title}  </a>
                    </div>
                    <div className="flex w-full justify-end">
                        <PrimaryButton
                            // onClick={}
                            label="Jawab"
                            className="btn btn-xs bg-transparent text-secondary"
                        >
                        </PrimaryButton>
                    </div>
                </div>
            ))}

            {visibleCount < answers.length && ( // Tampilkan tombol hanya jika masih ada item yang belum ditampilkan
                <div className="flex justify-center items-center p-5">
                    <PrimaryButton
                        onClick={loadMore}
                        label="Lihat semua"
                        className="btn btn-xs bg-transparent text-secondary"
                    >
                    </PrimaryButton>
                </div>
            )}
        </div>
    );
};

export default QuestionsListCard;
