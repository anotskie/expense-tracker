export type ProfileHeaderProps = {
    imgPath: string
    name: string
}

const ProfileHeader = (props: ProfileHeaderProps) => {
    return (
        <div className="w-full h-32 p-4">
            <div className="w-full h-full bg-white rounded-xl flex p-4">
                <img
                    className="rounded-full"
                    src={props.imgPath}
                    alt=""
                />
                <p className="italic text-navy my-auto m-5 text-3xl">
                    {props.name}
                </p>
            </div>
        </div>
    )
}

export default ProfileHeader
