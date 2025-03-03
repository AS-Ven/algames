'use client'

import Profile from "../buttons/profile";
import HomeButton from "../buttons/home";
import { usePathname } from "next/navigation";

const Menu = () => {

    const url = usePathname()


    if (url == "/")
        return (
            <nav className="flex justify-end px-4">
                <Profile/>
            </nav>
        );
    else 
        return (
            <nav className="flex justify-between px-4">
                <HomeButton/>
                <Profile/>
            </nav>
        );
}

export default Menu