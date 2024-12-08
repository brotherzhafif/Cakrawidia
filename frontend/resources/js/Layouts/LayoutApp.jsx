import { Children } from "react";
import ToolipBtn from "frontend/resources/js/Components/Buttons/ToolipBtn";

export default function LayoutApp({ children }) {
    return(
        <div className="flex flex-col justify-between min-h-screen">
            {children}  
        </div>
    )
}