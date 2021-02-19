import Burger from "components/icons/Burger";
import logo from "images/logo.jpg";
import { useState } from "react";

const Nav = () => {
    const [navClose, setNavClose] = useState(true);

    function closeNav() {
        setNavClose(true);
    }

    function openNav() {
        setNavClose(false);
    }

    return (
        <>
            {!navClose && (
                <div
                    onClick={closeNav}
                    style={{ zIndex: "999" }}
                    className="bg-black bg-opacity-75 h-full fixed w-full top-0 left-0 z-50"
                ></div>
            )}
            <div className="flex flex-row justify-between items-center w-full max-w-6xl mx-auto px-10 py-6 lg:py-0">
                <img className="w-28 lg:w-44" src={logo} alt="logo" />

                <nav className="hidden lg:block">
                    <ul className="text-lg uppercase flex flex-row justify-center">
                        <li>
                            <a className="px-10" href="#" title="home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="px-10" href="#" title="staff">
                                Staff
                            </a>
                        </li>
                        <li>
                            <a className="px-10" href="#" title="services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="px-10" href="#" title="contact-us">
                                Contact-us
                            </a>
                        </li>
                    </ul>
                </nav>

                <a
                    className="uppercase py-3 px-5 rounded-lg text-light-red bg-gray-700"
                    href="#"
                    title="book now"
                >
                    Book Now
                </a>

                <button className="lg:hidden" onClick={openNav}>
                    <span className="bg-gray-600 w-12 h-1 block mb-1"></span>
                    <span className="bg-gray-600 w-12 h-1 block mb-1"></span>
                    <span className="bg-gray-600 w-12 h-1 block"></span>
                </button>
            </div>

            {!navClose && (
                <nav
                    className="lg:hidden fixed right-0 top-0 pt-5 pb-10 bg-gray-100 h-full"
                    style={{ zIndex: "1000" }}
                >
                    <button onClick={closeNav} className="px-10 mb-10 font-semibold">close</button>
                    <ul className="text-lg uppercase">
                        <li>
                            <a
                                className="transition-colors hover:bg-light-red px-10 block py-3"
                                href="#"
                                title="home"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="transition-colors hover:bg-light-red px-10 block py-3"
                                href="#"
                                title="staff"
                            >
                                Staff
                            </a>
                        </li>
                        <li>
                            <a
                                className="transition-colors hover:bg-light-red px-10 block py-3"
                                href="#"
                                title="services"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                className="transition-colors hover:bg-light-red px-10 block py-3"
                                href="#"
                                title="contact-us"
                            >
                                Contact-us
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Nav;
