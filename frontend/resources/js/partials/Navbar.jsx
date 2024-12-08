
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Logo from './Logo';
import LabelButton from 'frontend/resources/js/Components/Buttons/LabelBtn';
import Sidebar from './Sidebar';
import SearchInput from 'frontend/resources/js/Components/SearchInput';

export default function Navbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className="sticky shadow-md top-0 z-20 navbar bg-base-100">
            <div className="flex justify-between w-full gap-1">
                <Logo />
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <LabelButton
                    htmlFor="my-drawer-4"
                    src="https://img.icons8.com/?size=100&id=83195&format=png&color=FFFFFF"
                    className='flex md:hidden btn btn-md btn-circle p-1'
                />
                <div className="drawer-side">
                    <LabelButton
                        htmlFor="my-drawer-4"
                        ariaLabel={"close sidebar"}
                        className='drawer-overlay rounded-none'>
                    </LabelButton>
                    <Sidebar />
                </div>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    className="input input-bordered rounded-full w-full"
                    value={searchQuery}
                    onChange={handleSearchChange}>
                </SearchInput>
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
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
