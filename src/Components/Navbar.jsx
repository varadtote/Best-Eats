import React, { memo, useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag,
} from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { BsFillSaveFill } from 'react-icons/bs';

const Navbar = memo(() => {
    const [nav, setnav] = useState(false);
    const [delivery, setdelivery] = useState(false);
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left Side  */}
            <div className="flex items-center gap-x-4">
                <div onClick={() => setnav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:4xl">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
                    <p
                        className={
                            delivery
                                ? 'bg-black text-white rounded-full p-2'
                                : 'p-2'
                        }
                        onClick={() => setdelivery(!delivery)}
                    >
                        Delivery
                    </p>
                    <p
                        className={
                            !delivery
                                ? 'bg-black text-white rounded-full p-2'
                                : 'p-2'
                        }
                        onClick={() => setdelivery(!delivery)}
                    >
                        Pickup
                    </p>
                </div>
            </div>
            {/* Search Input  */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
                <AiOutlineSearch size={20} />
                <input
                    className="bg-transparent p-2 w-full focus:outline-none "
                    type="text"
                    placeholder="Search Foods"
                />
            </div>
            {/* Cart  */}
            <button className=" bg-black text-white hidden sm:flex items-center gap-x-2 py-2 rounded-full">
                <BsCartFill size={20} /> Cart
            </button>
            {/* Mobile Menu  */}
            {/* Overlay  */}

            {nav && (
                <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
            )}

            {/* Side Drawer Menu */}
            <div
                className={
                    nav
                        ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
                        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
                }
            >
                <AiOutlineClose
                    onClick={() => setnav(!nav)}
                    size={30}
                    className="cursor-pointer absolute right-4 top-4"
                />
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex items-center gap-x-2 cursor-pointer  hover:bg-gray-200 rounded-full pl-5">
                            <TbTruckDelivery sixe={25} /> Orders
                        </li>
                        <li className="text-xl py-4 flex items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-full pl-5">
                            <MdFavorite sixe={25} /> Favourites
                        </li>
                        <li className="text-xl py-4 flex items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-full pl-5">
                            <FaWallet sixe={25} /> Wallet
                        </li>
                        <li className="text-xl py-4 flex items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-full pl-5">
                            <MdHelp sixe={25} /> Help
                        </li>
                        <li className="text-xl py-4 flex items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-full pl-5">
                            <AiFillTag sixe={25} /> Promotions
                        </li>
                        <li className="text-xl py-4 flex items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-full pl-5">
                            <BsFillSaveFill sixe={25} /> Best Ones
                        </li>
                        <li className="text-xl py-4 flex items-center gap-x-2 cursor-pointer hover:bg-gray-200 rounded-full pl-5">
                            <FaUserFriends sixe={25} /> Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
});

export default Navbar;
