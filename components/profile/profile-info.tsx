'use client'

import { logOut } from "@/utils/dataControllers/dbControllers/usersController";
import { useProfile } from "@/utils/hooks/useProfile";
import { Tuser } from "@/utils/type";

interface ProfileInfoProps {
    user: Tuser
}

const ProfileInfo = ({ user }: ProfileInfoProps) => {
    
    const profile = useProfile((state) => state.profile)
    

    return (
        <div className={`${profile ? '' : 'hidden'} absolute top-20 border-4 p-4 px-8 rounded-xl overflow-hidden backdrop-blur-lg gap-4 flex flex-col justify-center items-center`}>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl">{user.name}</h2>
                {user.title ? <h3 className="text-2xl italic">{user.title}</h3> : ''}
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl">Best Score : {user.matching_marks[0]}</p>
            </div>
            <button onClick={logOut} className="bg-gray-800 rounded-full px-2 py-1">Log out</button>
        </div>
    );
}
 
export default ProfileInfo;