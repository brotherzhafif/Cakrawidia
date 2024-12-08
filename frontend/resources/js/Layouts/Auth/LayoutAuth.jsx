import { children } from "react";

export default function LayoutAuth({ children, title, description }) {
    return (
        <div className="flex flex-col gap-5 w-full items-center justify-start  min-h-screen">
            <div className="flex flex-col mt-3 items-center justify-center gap-2"> 
                <h1 className="font-bold text-4xl">{title}</h1>
                <p className="font-medium">{description}</p>
            </div>
            {children}
        </div>
    )
}