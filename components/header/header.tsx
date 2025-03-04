'use server'

import { readRanking } from "@/utils/Controllers/dbControllers/matching-marksController";
import Ranking from "../matching-marks/rank/ranking";
import Profile from "../profile/profile";
import Menu from "./menu";
import { readUser } from "@/utils/Controllers/dbControllers/usersController";

const Header = async () => {

    const rank = await readRanking()
    if (!rank)
        return console.error('No rank');
    for (let i = 0; i < rank.length; i++) {
        const user = await readUser(rank[i].user_id)
        let name: string
        if (!user)
            name = 'Unknow'
        else
            name = user.name
        rank[i].name = name
    }

    return (
        <header className="absolute w-screen top-4">
            <Menu/>
            <div className="flex justify-center items-center">
                <Profile/>
                <Ranking ranking={rank}/>
            </div>
        </header>
    );
}
 
export default Header;