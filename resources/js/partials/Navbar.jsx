import { Link } from '@inertiajs/react';
import Logo from './Logo';
import LabelButton from '@/Components/Buttons/LabelBtn';
import Sidebar from './Sidebar';

export default function Navbar() {
    return (
        <div className="sticky shadow-md top-0 z-20 navbar bg-base-100">
            <div className="flex justify-between w-full gap-1">
                <Logo />
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <LabelButton
                htmlFor="my-drawer-4"
                src={"https://img.icons8.com/?size=100&id=83195&format=png&color=FFFFFF"}
                className='flex md:hidden btn btn-md btn-circle p-1'                
                >
                </LabelButton>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className= "menu shadow-md bg-white rounded-xl text-base-content min-h-full w-80 transition-all duration-1000 ease-in-out">
                        <Sidebar />
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
