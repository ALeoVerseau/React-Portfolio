import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div name="home" className='h-screen'>
            <div className='max-w-screen-lg mx-auto flex flex-col items center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl'>
                        Welcome to my Portfolio!
                    </h2>

                    <p className='py-4 max-w-md'>
                        I am a fullstack developer in the making!
                    </p>

                    {/* <div>
                        <button className=' group w-fit px-6 py-3 my-2 flex item-center rounded-md cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home