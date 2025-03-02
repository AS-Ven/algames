'use client'

import { useState } from "react";
import SignIn from "../forms/sign-in";
import LogIn from "../forms/log-in";

const Profile = () => {

    const [active, setActive] = useState(true)
    const [login, setLogin] = useState(false)

    const handleShowForm = () => {
        setActive(!active)
    }

    const handleChangeForm = () => {
        setLogin(!login)
    }

    return (
        <div className="flex justify-center items-center">
            <button onClick={handleShowForm} className="border-4 px-2 rounded-full">P</button>

            <div className={`${active ? "" : "hidden"} absolute top-1/3`}>
                <div
                    className={`${login ? "hidden" : ""} bg-slate-600 text-black`}
                    >
                    <SignIn/>
                </div>
                <div
                    className={`${login ? "" : "hidden"} bg-slate-600 text-black`}
                    >
                    <LogIn/>
                </div>
                <button onClick={handleChangeForm}>{login ? "Sign In" : "Log In"}</button>
            </div>
        </div>
    );
}
 
export default Profile;