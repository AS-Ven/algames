'use client'

import HomeButton from "../buttons/home";
import { usePathname } from "next/navigation";
import ProfileButton from "../buttons/profile";

const Menu = () => {

    const url = usePathname()


    if (url == "/")
        return (
            <nav className="flex justify-end px-4">
                <ProfileButton/>
            </nav>
        );
    else 
        return (
            <nav className="flex justify-between px-4">
                <HomeButton/>
                <ProfileButton/>
            </nav>
        );
}

export default Menu