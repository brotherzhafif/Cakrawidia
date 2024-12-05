import React from "react";

const ViewAnswers = ({ answer }) => {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold">{answer.question.title}</h1>
            <p className="text-lg mt-3">{answer.question.content}</p>
            <h2 className="text-xl mt-5 font-semibold">Jawaban:</h2>
            <p className="mt-2">{answer.content}</p>
        </div>
    );
};

export default ViewAnswers;
