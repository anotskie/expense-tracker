import ProfileHeader from './components/ProfileHeader'
import React, { useState } from 'react'

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
            <nav className="flex items-center justify-between flex-wrap bg-navy p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg
                        className="fill-current h-8 w-8 mr-2"
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg>
                    <span className="font-semibold text-xl tracking-tight">
                        Practice Tailwind
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Content 1
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Content 2
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                        >
                            Content 3
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                        >
                            Download
                        </a>
                    </div>
                </div>
            </nav>

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
            <div className="bg-barbie text-center">
                2nd section
                <div>
                    <nav className="flex items-center justify-between flex-wrap bg-pink-700 p-6">
                        <div className="flex items-center flex-shrink-0 text-white mr-6">
                            <svg
                                className="fill-current h-8 w-8 mr-2"
                                width="54"
                                height="54"
                                viewBox="0 0 54 54"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                            </svg>
                            <span className="font-semibold text-xl tracking-tight">
                                Practice Tailwind
                            </span>
                        </div>
                        <div className="block lg:hidden">
                            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                                <svg
                                    className="fill-current h-3 w-3"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <a
                                    href="#responsive-header"
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                                >
                                    Content 1
                                </a>
                                <a
                                    href="#responsive-header"
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                                >
                                    Content 2
                                </a>
                                <a
                                    href="#responsive-header"
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                >
                                    Content 3
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default App
