
import ModalQuestions from "./ModalQuestions"
export default function Hero() {
    return (
            <div className="bg-red-800 w-full flex flex-col gap-2 p-2 items-center justify-center">
                <h1 className="text-center text-6xl font-bold">Punya Pertanyaan?</h1>
            <ModalQuestions />
        </div>
    )
    
}