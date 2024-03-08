import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between py-5 bg-gray-200 px-10">
            <h1 className="text-gray-700 text-2xl">
                <Link prefetch={false}  href='/'>
                    To Do
                </Link>
            </h1>
            <Link className="text-gray-700 text-2xl" href='/add'>+</Link>
        </header>
    )
}

export default Header;