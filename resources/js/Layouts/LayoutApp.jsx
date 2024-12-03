import { Children } from "react";

export default function LayoutApp({ children }) {
    return(
        <div className="flex flex-col justify-between min-h-screen">
            {children}
        </div>
    )
}