'use client'

import { CircleUser } from "lucide-react";
import { useConnection } from "@/utils/hooks/useConnection";

const ProfileButton = () => {

    const setConnection = useConnection((state) => state.setConnection)

    const handleShowForm = () => {
        setConnection()
    }

    return (
        <button onClick={handleShowForm}><CircleUser size={40} strokeWidth={1.75}/></button>
    );
}
 
export default ProfileButton;