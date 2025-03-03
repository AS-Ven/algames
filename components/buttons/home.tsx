import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

const HomeButton = () => {
    return (
        <Link href={"/"}>
            <CircleArrowLeft size={40} strokeWidth={1.75}/>
        </Link>
    );
}
 
export default HomeButton;