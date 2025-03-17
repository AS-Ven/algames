'use client'

import HomeButton from "./buttons/home";
import { usePathname } from "next/navigation";
import ProfileButton from "../profile/profile-btn";
import RankButton from "../scoreboard/rank-btn";

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
                <div className="flex gap-4">
                    <RankButton/>
                    <ProfileButton/>
                </div>
            </nav>
        );
}

export default Menu