import Connection from "@/components/forms/connection";
import Menu from "./menu";

const Header = () => {

    return (
        <header className="absolute w-screen top-4">
            <Menu/>
            <div className="flex justify-center items-center">
                <Connection/>
            </div>
        </header>
    );
}
 
export default Header;