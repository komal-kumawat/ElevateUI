"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "../Icons/Github.svg"
import twitter from "../Icons/Twitter.svg"
const Navbar = () => {
    return (
        <div className="w-[99.7%] py-4  fixed top-0 backdrop-blur-sm  border-b-1 border-gray-800 z-[100] flex items-center px-20 justify-between ">
            <div className="flex justify-between gap-20">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={120} height={40} className="cursor-pointer" />
                </Link>
                <div className="flex justify-between items-center gap-8 text-sm text-gray-500  hidden md:flex font-bold transition-colors  duration-300">
                    <Link href="/">
                        <p className="hover:text-gray-200">Home</p>
                    </Link>
                    <Link href="/components">
                        <p className="hover:text-gray-200">
                            Components
                        </p>
                    </Link>
                    <Link href="/docs">
                        <p className="hover:text-gray-200">Docs</p>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-between text-gray-500 gap-8">
                <Link href="https://github.com/komal-kumawat/ComponentLibrary.git">
                    <Image src={github} width={37} alt="github" className=" hover:bg-gray-900 p-2 rounded-md transition-colors  duration-300" />
                </Link>
                <Link href="https://x.com/KomalKumawat112">
                    <Image src={twitter} width={35} alt="twitter" className=" hover:bg-gray-900 p-2 rounded-md transition-colors  duration-300" />
                </Link>
                
            </div>

        </div>
    );
};

export default Navbar;
