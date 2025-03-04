'use client'

import { CircleUser } from "lucide-react";
import { useProfile } from "@/utils/hooks/useProfile";

const ProfileButton = () => {

    const setProfile = useProfile((state) => state.setProfile)

    const handleShowForm = () => {
        setProfile()
    }

    return (
        <button onClick={handleShowForm}><CircleUser size={40} strokeWidth={1.75}/></button>
    );
}
 
export default ProfileButton;