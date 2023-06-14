import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4">
                        About Me
                    </p>
                </div>

                <p className="text-xl mt-20">
                    This is my About me page where I talk about my accomplishments and about my love for my dog
                </p>

                <br />

                <p className="text-xl">
                    I will love my dog until the end of time. His name is Toast and he is the roastiest toast to post on the coast to boast the most.
                </p>
            </div>
        </div>
    )
}

export default About