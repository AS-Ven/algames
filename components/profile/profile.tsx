import { getCookie } from "@/controllers/dataControllers/cookie";
import ProfileForm from "./profile-form";
import ProfileInfo from "./profile-info";
import { readUser } from "@/controllers/dbControllers/usersController";

const Profile = async () => {

    const cookie = await getCookie('user')
    const user = await readUser(cookie ? parseInt(cookie) : 0)

    if (user)
        return <ProfileInfo user={user}/>
    else
        return <ProfileForm/>
}

export default Profile;