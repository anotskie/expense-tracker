import React, { useState } from 'react'
import ProfileHeader from './components/ProfileHeader'
import Navbar from './components/Navbar'

const App = () => {
    const [count, setCount] = useState<number>(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    return (
        // nav bar
        <div>
            <div className="">
                <Navbar
                    menu={['Content 1', 'Content 2', 'Content 3']}
                    onMenuButton={(m) => {
                        console.log(m)
                    }}
                />
            </div>

            {/* first section */}
            <div className="h-screen w-full bg-gradient-to-r from-maroon to-magenta flex space-x-6">
                <div className="w-full">
                    <div className="text-5xl text-maroon bg-white h-16 text-center ">
                        Anot's First Website
                    </div>

                    <div className="text-3xl text-black text-center">
                        This is a test website, anything u see here is just a
                        test.
                    </div>
                    {/* column content */}
                    <div className="grid grid-cols-3 gap-4 mt-8 ">
                        {/* left */}
                        <div className="text-2xl text-barbie text-center bg-white ml-3">
                            text here is positioned to the left.
                        </div>
                        <div className="text-2xl text-black text-center">
                            you will see here on the bottom my picture, look.
                            <div className="flex justify-center mt-5 round">
                                <img
                                    className="rounded-full"
                                    src="/pak.PNG"
                                    alt="Centered Image"
                                />
                            </div>
                        </div>
                        {/* right */}
                        <div className="text-2xl text-barbie text-center bg-white mr-3">
                            while the text here is on the right.
                        </div>
                    </div>

                    <div className=" text-3xl text-center mt-10">
                        {' '}
                        This is a count button
                    </div>
                    <div className="text-center">
                        <button
                            onClick={incrementCount}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                        >
                            Button
                        </button>
                        <p className="text-3xl">Count: {count}</p>
                    </div>
                </div>
            </div>
            {/* second section */}
            
        </div>
    )
}

export default App
