'use client'

import Profile from "../buttons/profile";
import HomeButton from "../buttons/home";
import { usePathname } from "next/navigation";

const Menu = () => {

    const url = usePathname()


    if (url == "/")
        return (
            <nav className="flex justify-end px-2">
                <Profile/>
            </nav>
        );
    else 
        return (
            <nav className="flex justify-between px-2">
                <HomeButton/>
                <Profile/>
            </nav>
        );
}

export default Menu