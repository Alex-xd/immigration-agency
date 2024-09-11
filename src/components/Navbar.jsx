import React, { useState } from "react";
import "./Navbar.css";

const ArrowDown = () => <svg className="arrowdown" xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40"><polygon points="2.602 40 .5 37.898 18.398 20 .5 2.102 2.602 .001 22.602 20.001"></polygon></svg>;

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">Shorelight</a>
            </div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li className="dropdown" onClick={toggleDropdown}>
                    Study in the USA <ArrowDown />
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#usa-k12">USA K-12 School</a></li>
                            <li><a href="#usa-community-colleges">USA Community Colleges</a></li>
                            <li><a href="#usa-universities">USA Universities</a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={toggleDropdown}>
                    Study in Canada <ArrowDown />
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#canada-k12">Canada K-12 School</a></li>
                            <li><a href="#canada-colleges">Canada Colleges</a></li>
                            <li><a href="#canada-universities">Canada Universities</a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={toggleDropdown}>
                    Study in the UK <ArrowDown />
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#uk-language">UK Language School</a></li>
                            <li><a href="#uk-universities">UK Universities</a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={toggleDropdown}>
                    Study & Work in Japan <ArrowDown />
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#japan-language">Japanese Language School</a></li>
                            <li><a href="#japan-vocational">Japanese Vocational School</a></li>
                            <li><a href="#japan-universities">Japanese Universities</a></li>
                            <li><a href="#find-jobs-japan">Find Jobs in Japan</a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={toggleDropdown}>
                    Study in Australia <ArrowDown />
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#australia-universities">Australia Universities</a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={toggleDropdown}>
                    Application Services <ArrowDown />
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#free-services">Free Services</a></li>
                            <li><a href="#visa-services">Visa Services</a></li>
                            <li><a href="#premium-services">Premium Services</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="#recruitment-partners">Recruitment Partners</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;