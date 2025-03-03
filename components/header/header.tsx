import Profile from "../profile/profile";
import Menu from "./menu";

const Header = () => {

    return (
        <header className="absolute w-screen top-4">
            <Menu/>
            <div className="flex justify-center items-center">
                <Profile/>
            </div>
        </header>
    );
}
 
export default Header;