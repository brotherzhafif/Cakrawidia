export default function Navbar() {
    return (
        <div className="sticky shadow-md top-0 z-20 navbar bg-base-100">
            <div className="flex justify-between w-full gap-7">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                
                <div>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="btn btn-circle swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="hidden" />
                        {/* hamburger icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        {/* close icon */}
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                </div>

                {/* Drawer Side */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu shadow-md bg-white rounded-lg text-base-content min-h-full w-80 transition-all duration-1000 ease-in-out">
                        {/* Sidebar content here */}
                        <li><a>ISINYA APA?</a></li>
                        <li><a>ISINYA APA?</a></li>
                    </ul>
                </div>

                {/* Search Input */}
                <input type="text" placeholder="Search" className="input input-bordered rounded-full w-full" />

                {/* Profile Dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>

                    {/* Dropdown Profile */}
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
