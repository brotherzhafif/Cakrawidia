

export default function Layout3Grid({ children }) {
    return (
    <div className="grid grid-cols-12 grid-rows-1 gap-5 items-start justify-center p-9 ">
        {children}
    </div>
    );
}