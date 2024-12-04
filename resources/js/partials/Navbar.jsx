import { Link } from '@inertiajs/react';
import Logo from './Logo';
export default function Navbar() {
    return (
        <div className="sticky shadow-md top-0 z-20 navbar bg-base-100">
            <div className="flex justify-between w-full gap-7">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div>
                    {/* logo */}
                    <Logo />
                    <label htmlFor="my-drawer-4" className="btn btn-circle flex md:hidden hover:bg-secondary/80 bg-secondary ">
                        <input type="checkbox" className="hidden" /> {/* Corrected type */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width= "25"
                            height="25"
                            viewBox="0 0 50 50"
                        >
                            <path
                            d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
                            fill="white"
                            ></path>
                        </svg>
                        </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu shadow-md bg-white rounded-lg text-base-content min-h-full w-80 transition-all duration-1000 ease-in-out">
                        {/* Sidebar content here */}
                        <li><a>ISINYA APA?</a></li>
                        <li><a>ISINYA APA?</a></li>
                    </ul>
                </div>
                <input type="text" placeholder="Search" className="input input-bordered rounded-full w-full" />
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href={route('ProfileUser')} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
