"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import LocaleSwitcher from "@/components/LocalSwitcher/local-switcher";
import Nav from "./Nav";
import { HiBars3 } from "react-icons/hi2";

const UserHeader = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage avatar dropdown

  // Toggle navbar visibility
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Toggle avatar dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header dir="ltr"
      className={`header left-0 top-0 z-40 flex w-full items-center  ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] py-3 lg:py-0 bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent shadow-sm dark:shadow-md py-2"
      }`}
    >
      <div className="container">
        <div className="relative -mx-2 flex items-center justify-between">
          {/* Logo */}
          <div className="w-[100px] md:w-[120px] lg:w-[150px] ">
            <Link href="/">Branding</Link>
          </div>

          {/* Nav component - controlled by navbarOpen */}
          <Nav navbarOpen={navbarOpen} navbarToggleHandler={navbarToggleHandler} />

          {/* Menu toggler, Locale Switch, Theme Toggler, and Admin Avatar */}
          <div className="flex items-center gap-4">
            <LocaleSwitcher />
            <ThemeToggler />
            <HiBars3 onClick={navbarToggleHandler} className="text-[33px] cursor-pointer lg:hidden" />

            {/* Admin Avatar */}
            <div className="hidden lg:block relative rounded-full cursor-pointer w-[30px] h-[30px] bg-red-700" onClick={toggleDropdown}>
              <span
                
                
                className=""
                 // Toggle dropdown on avatar click
              ></span>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg dark:bg-gray-700 dark:text-white">
                  <Link href="/profile">
                    <span className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Profile</span>
                  </Link>
                  <Link href="/signin">
                    <span className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign In</span>
                  </Link>
                  <Link href="/login">
                    <span className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Login</span>
                  </Link>
                  <Link href="/settings">
                    <span className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Settings</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
