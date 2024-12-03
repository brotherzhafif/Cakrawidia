
import Button from "./Button"
export default function ModalQuestions() {
    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="mt-5 btn w-1/2 bg-secondary hover:bg-secondary/80 text-primary">Mulai bertanya</label>
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
        </>
    )
    
}