"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "../Icons/Github.svg"
const Navbar = () => {
    return (
        <div className="w-full py-4  fixed top-0 backdrop-blur-sm  border-b-1 border-gray-800 z-[100] flex items-center px-8 justify-between">
            <div className="flex justify-between gap-20">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={120} height={40} className="cursor-pointer" />
                </Link>
                <div className="flex justify-between items-center gap-8 text-sm text-gray-400  hidden md:flex">
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
            <div className="flex items-center justify-between">
                <Link href="https://github.com/komal-kumawat/ComponentLibrary.git">
                    <Image src={github} width={20} alt="github" />
                </Link>
            </div>

        </div>
    );
};

export default Navbar;
