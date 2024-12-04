import LabelButton from "./Buttons/ModalLabelBtn"
import PrimaryButton from "./Buttons/PrimaryButton"
import TopicsDropdown from "./TopicsDropdown"
import Textarea from "./TextArea"


export default function ModalQuestions() {
    return (
        <>
            {/* The button to open modal */}
            <LabelButton 
                label="MULAI BERTANYA!" 
                htmlFor="my_modal_6"  
                className="btn w-1/2" 
            />
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal" role="dialog">
                    <div className="flex flex-col gap-2 modal-box">
                        <div className="flex  justify-between items-center">
                            <h3 className="text-lg font-bold">Ajukan pertanyaan mu !</h3>
                            <LabelButton 
                                src="https://img.icons8.com/?size=100&id=71200&format=png&color=FFFFFF"
                                htmlFor="my_modal_6"
                                className="btn btn-sm btn-circle" 
                            />
                        </div>
                        <Textarea 
                            placeholder="Tulisl perntanyaanmu (simple & jelas lebih cepat terjawab)"
                        
                        />
                        <TopicsDropdown/>
                        <PrimaryButton 
                            label="Ajukan"
                            // onClick={}
                            className="btn btn-md"
                        />
                    </div>
                    </div>

            {/* Put this part before </body> tag */}
        </>
    )
    
}