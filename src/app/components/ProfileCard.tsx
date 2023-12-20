
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import defaultPfp  from '../images/JPEGs/Small Favicon Black background.jpg'

interface Props {
    profileSrc: string | StaticImport;
    userObj: any,
    authMethod: string
}

const ProfileCard = ({profileSrc, userObj, authMethod}: Props) => {console.log(authMethod); return  <div className="hover:cursor-pointer flex items-center gap-2">


    <Image className="rounded-[50%]" height={35} width={35} src={profileSrc ? profileSrc : defaultPfp} alt={`profile picture`} />
    {authMethod == 'google' && <span>{userObj.full_name}</span>}
    {authMethod == 'email' && <span>{`${userObj.firstName} ${userObj.lastName}`}</span>}

</div> }

export default ProfileCard;