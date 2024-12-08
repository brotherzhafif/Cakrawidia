
export default function SortingDropdown() {
    return(
        <div className="flex w-full p-5 justify-start border-t-2 ">
            <select className="select  select-bordered w-1/3 rounded-full ">
                <option disabled selected>Who shot first?</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
        </div>
    )
}