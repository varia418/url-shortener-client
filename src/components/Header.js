/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Header() {
    const toggleMobileNav = () => {
        const mobileNav = document.getElementById("mobile-nav");
        mobileNav.classList.toggle("hidden");
    };

    return (
        <>
            <nav className="flex justify-between p-7">
                <img
                    src="logo.png"
                    width={150}
                    alt="logo"
                />

                <ul className="hidden md:flex gap-5 mr-5 ml-auto items-center">
                    <li>About</li>
                    <li>Company</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                </ul>

                <a href="#" className="hidden md:block rounded bg-red-100 text-red-500 font-medium py-2 px-3 hover:bg-red-200">
                    Contact Us
                </a>

                <button className="md:hidden" onClick={toggleMobileNav}>
                    <svg
                        className="block h-4 w-4"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-1-2"
                    >
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </nav>
            <div id="mobile-nav" className="hidden">
                <div
                    className="backdrop fixed inset-0 bg-gray-800 opacity-25"
                    onClick={toggleMobileNav}
                ></div>
                <sidebar className="md:hidden fixed flex flex-col justify-between inset-0 bg-white w-5/6 p-5">
                    <div className="flex justify-between mb-7">
                        <img
                            src="logo.png"
                            width={150}
                            alt="logo"
                        />
                        <button className="close-btn" onClick={toggleMobileNav}>
                            <svg
                                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-config-id="auto-svg-2-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <ul className="flex flex-col gap-5 mt-5 mb-auto">
                        <li>About</li>
                        <li>Company</li>
                        <li>Services</li>
                        <li>Testimonials</li>
                    </ul>

                    <a className="rounded bg-red-100 text-red-500 font-medium py-2 px-3 text-center">
                        Contact Us
                    </a>
                    <span className="mt-3 text-sm text-center text-gray-500">
                        @ 2023 All rights reserved.
                    </span>
                </sidebar>
            </div>
        </>
    );
}

export default Header;