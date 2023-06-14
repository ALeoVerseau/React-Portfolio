import React from 'react'

const ContactMe = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4">
                        Contact Me
                    </p>
                </div>

                <p className="text-xl mt-20">
                    This is where you can contact me!
                </p>

                <br />

                <li className="text-xl">
                    GitHub: AleoVerseau
                </li>
                <li className='text-xl'>
                    Email: aleoliu96@gmail.com
                </li>
            </div>
        </div>
    )
}

export default ContactMe