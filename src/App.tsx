import ProfileHeader from './components/ProfileHeader'

const App = () => {
    return (
        <div className="h-screen w-full bg-barbie flex space-x-6">
            {/* side bar */}
            <div className="bg-navy w-1/6 h-full gap-4">
                <ProfileHeader
                    imgPath="/pak.PNG"
                    name="Tarubs"
                />
                <ProfileHeader
                    imgPath="/pak.PNG"
                    name="Tarubs"
                />
                <ProfileHeader
                    imgPath="/pak.PNG"
                    name="Tarubs"
                />
            </div>
            {/* content */}
            <div className="text-5xl text-maroon ">Title</div>
        </div>
    )
}

export default App
