import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About Me",
        },
        {
            id: 3,
            link: "Portfolio",
        },
        {
            id: 4,
            link: "Contact"
        },

    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                {/* MY NAME IN LEFTHAND CORNER */}
                <h1 className="text-5xl font-signature ml-2">
                    Alexander Leo Liu
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    // Nav Bar sections
                    <li key={id}
                        className="px-4 cursor-pointer font-medium hover:scale-110 duration-200">
                        {/* <Link to= {links} smooth duration{500}> */}
                        {link}
                        {/* </Link> */}
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
                {nav ? <FaBars size={30} /> : <FaBars size={30} />}
            </div>


            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-black">
                    {links.map(({ id, link }) => (
                        <li key={id}
                            className="px-4 cursor-pointer font-medium hover:scale-110 duration-200">
                            {link}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )

}

export default NavBar;