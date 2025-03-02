import { CircleArrowLeft } from "lucide-react";
import Profile from "../buttons/profile";

const Menu = () => {
    return (
        <nav className="flex justify-between px-2">
            <CircleArrowLeft size={40} strokeWidth={1.75}/>
            <Profile/>
        </nav>
    );
}

export default Menu