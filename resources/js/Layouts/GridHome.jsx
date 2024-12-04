

export default function GridHome({ children }) {
    return (
    <div className="grid grid-cols-12 grid-rows-1 gap-1 items-start justify-center p-2 ">
        {children}
    </div>
    );
}
