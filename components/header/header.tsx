import Ranking from "../matching-marks/rank/ranking";
import Profile from "../profile/profile";
import Menu from "./menu";

const Header = async () => {

    return (
        <header className="absolute w-screen top-4">
            <Menu/>
            <div className="flex justify-center items-center">
                <Profile/>
                <Ranking/>
            </div>
        </header>
    );
}
 
export default Header;