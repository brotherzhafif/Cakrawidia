import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import PrimaryButton from "./Buttons/PrimaryButton";
import Hero from "./Hero";

dayjs.extend(relativeTime);

const QuestionsListCard = ({ searchQuery }) => {
    const [answers, setAnswers] = useState([]);
    const [setTopics] = useState([]); // Use state for topics
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(15);

    useEffect(() => {
        dayjs.locale("id");
        const fetchAnswers = axios.get("api/questions"); // Updated API endpoint
        const fetchTopics = axios.get("api/topics"); // Assuming you still need topics data

        Promise.all([fetchAnswers, fetchTopics])
            .then(([answersRes, topicsRes]) => {
                const answersData = answersRes.data; // Get answers from API
                const topicsData = topicsRes.data; // Get topics from API

                // Enrich answers with topic names and user details
                const enrichedAnswers = answersData.map((answer) => {
                    const topic = topicsData.find((t) => t.id === answer.topic_id);
                    return {
                        ...answer,
                        topic_name: topic ? topic.name : "Unknown",
                        user_name: answer.user ? answer.user.username : "Unknown",
                    };
                });

                setAnswers(enrichedAnswers);
                setTopics(topicsData); // Store topics data in state (though it's not used directly)
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setLoading(false));
    }, []);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 10);
    };

    const filteredAnswers = answers.filter((answer) =>
        answer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        answer.topic_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        answer.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex rounded-xl col-span-12 md:col-span-6 animate-pulse bg-gray-200 items-center justify-center h-screen">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="rounded-xl col-span-12 md:col-span-6 flex flex-col justify-center border border-secondary items-center ">
            <Hero />
            {filteredAnswers.length > 0 ? (
                filteredAnswers.slice(0, visibleCount).map((answer) => (
                    <div key={answer.id} className="w-full flex flex-col justify-between border-t-2 border-b-2 min-h-[200px] gap-4 p-5">
                        <div className="flex gap-1 justify-start items-center">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Avatar"
                                    />
                                </div>
                            </div>
                            <a href="#" className="font-bold text-xs sm:text-sm hover:underline">
                                {answer.topic_name}
                            </a>
                            |
                            <p className="font-bold text-sm">
                                {dayjs(answer.created_at).fromNow()}
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="font-normal text-xl hover:underline">
                                {answer.title}
                            </a>
                        </div>
                        <div className="flex w-full justify-end">
                            <PrimaryButton
                                label="Jawab"
                                className="btn btn-xs bg-transparent text-secondary"
                            />
                        </div>
                    </div>
                ))
            ) : (
                <div className="flex min-h-44 flex-col justify-center items-center p-5">
                    <p className=" text-center text-lg">
                        Tidak ada hasil dari "<span className="font-bold">{searchQuery}</span>"
                    </p>
                </div>
            )}
            {visibleCount < filteredAnswers.length && (
                <div className="flex justify-center items-center p-5">
                    <PrimaryButton
                        onClick={loadMore}
                        label="Lihat semua"
                        className="btn btn-xs bg-transparent text-secondary"
                    />
                </div>
            )}
        </div>
    );
};

export default QuestionsListCard;
