
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import defaultPfp  from '../images/JPEGs/Small Favicon Black background.jpg'

interface Props {
    profileSrc: string | StaticImport;
    userName: string
}

const ProfileCard = ({profileSrc, userName}: Props) => <div className="hover:cursor-pointer flex items-center gap-2">

    <Image className="rounded-[50%]" height={35} src={profileSrc ? profileSrc : defaultPfp} alt={`${userName}'s profile picture`} />
    <span>{userName}</span>

</div>

export default ProfileCard;