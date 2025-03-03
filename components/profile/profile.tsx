import { getCookie } from "@/utils/dataControllers/cookie";
import ProfileForm from "./profile-form";
import { readUser } from "@/utils/dataControllers/dbControllers/usersController";
import ProfileInfo from "./profile-info";

const Profile = async () => {

    const cookie = await getCookie('user')
    const user = await readUser(cookie ? parseInt(cookie) : 0)

    if (user)
        return <ProfileInfo user={user}/>
    else
        return <ProfileForm/>
}

export default Profile;