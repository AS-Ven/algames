'use client'

import { useState } from "react";
import Connection from "../forms/connection";
import { User } from "lucide-react";

const Profile = () => {

    const [active, setActive] = useState(false)

    const handleShowForm = () => {
        setActive(!active)
    }

    return (
        <div className="absolute flex flex-col justify-center items-center">
            <button onClick={handleShowForm} className="border-2 p-1 rounded-full"><User/></button>

            <div className={`${active ? "" : "hidden"} flex justify-center items-center`}>
                <Connection/>
            </div>
        </div>
    );
}
 
export default Profile;