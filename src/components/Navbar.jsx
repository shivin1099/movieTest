import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './navbar_assets/logo.png';
import logoMobile from './navbar_assets/logoMobile.png';
import openCloseMenu from './navbar_assets/menuopenclose.png';
import searchIcon from './navbar_assets/searchIcon.png';
import arrowDown from './navbar_assets/arrowdownprofile.png';

const Navbar = () => {
  const [isLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchMobOpen, setSearchMobOpen] = useState(false);
  let searchBarRef = useRef();
  let dropDownRef = useRef();
  const [DDMobOpen, setDDMobOpen] = useState(false);

  const displaySearchDesktop = () => {
    const SBD = document.querySelector('.search-bar-desktop');
    SBD.classList.remove('md:hidden');
    SBD.classList.add('md:block');
    const SIID = document.querySelector('.search-icon-desktop');
    SIID.classList.add('md:hidden');
    const CSD = document.querySelector('.close-search-icon-desktop');
    CSD.classList.add('md:block');
    CSD.classList.remove('md:hidden');
  };

  useEffect(() => {
    console.log("navbar mounted");
    const navItems = document.querySelectorAll('nav ul li p');
    navItems.forEach(item => {
      item.classList.add('hover:text-p-white');
    });
  }, []);

  return (
    <>
      <header
        className={`align-center flex flex-col md:h-[70px] md:flex-row  ${
          DDMobOpen && !isLoggedIn ? 'mb-28' : searchMobOpen ? 'mb-11' : 'mb-0'
        }
        ${
          DDMobOpen && isLoggedIn ? 'mb-48' : searchMobOpen ? 'mb-12' : 'mb-0'
        }`}
      >
        <section className="align-center z-50 flex justify-between px-2 pl-4 md:mx-auto md:my-0 md:w-[950px]">
          <Link className="block self-center md:hidden" to="/">
            <img
              src={logoMobile}
              width={60}
              height={42}
              className="block md:hidden"
              alt="letterboxd mobile logo"
            />
          </Link>
          <Link className="hidden self-center md:block " to="/">
            <h6 className="text-white text-[50px]">Logo</h6>
          </Link>
          <div className="flex items-center">
            <nav className="z-[1000] mt-4 flex flex-col self-start">
              <ul className="z-[1000] hidden  md:flex">
                {isLoggedIn ? (
                  <li>
                    {showDropdown ? (
                      <DropdownDesktop
                        arrowDown={arrowDown}
                        setShowDropdown={setShowDropdown}
                      />
                    ) : (
                      <UserNavbar
                        arrowDown={arrowDown}
                        setShowDropdown={setShowDropdown}
                      />
                    )}
                  </li>
                ) : showLogin ? (
                  <SignInAll />
                ) : (
                  <>
                    <li className="ml-4 items-center self-center pt-2">
                      <p className="sans-serif ml-4 text-xs font-bold uppercase tracking-widest text-sh-grey hover:cursor-pointer hover:text-white">
                        SIGN IN
                      </p>
                    </li>
                  </>
                )}
                <li className="ml-4 items-center self-center pt-2">
                  <p className="sans-serif ml-4 text-xs font-bold uppercase tracking-widest text-sh-grey hover:cursor-pointer hover:text-white">
                    FILMS
                  </p>
                </li>
                <li className="ml-4 items-center self-center pt-2">
                  <p className="sans-serif ml-4 text-xs font-bold uppercase tracking-widest text-sh-grey hover:cursor-pointer hover:text-white">
                    TV SHOWS
                  </p>
                </li>
                <li className="ml-4 items-center self-center pt-2">
                  <p className="sans-serif ml-4 text-xs font-bold uppercase tracking-widest text-sh-grey hover:cursor-pointer hover:text-white">
                    REVIEWS
                  </p>
                </li>
                <li className="ml-4 items-center self-center pt-2">
                  <p className="sans-serif ml-4 text-xs font-bold uppercase tracking-widest text-sh-grey hover:cursor-pointer hover:text-white">
                    WHAT TO WATCH
                  </p>
                </li>
              </ul>
            </nav>
            <div className="ml-[16px] search-bar-desktop hidden md:flex items-center bg-white border border-gray-300 rounded-[10px] p-2 h-[35px] w-[20%]" style={{backgroundColor:'hsla(0, 0%, 100%, .25)'}}>
              <input
                type="text"
                className="flex-grow p-2 w-full"
                placeholder="Search..."
              />
              <img
                src={searchIcon}
                width={20}
                height={20}
                alt="search icon"
                className="ml-2"
              />
            </div>
            <div ref={dropDownRef}>
              <img
                className="md:hidden"
                src={openCloseMenu}
                width={40}
                height={40}
                alt="open and close navbar dropdown menu on mobile"
              />
            </div>
            <div ref={searchBarRef}>
              <img
                className="search-icon-mobile md:hidden"
                src={searchIcon}
                width={40}
                height={40}
                alt="search icon"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

const navItems = document.querySelectorAll('nav ul li p');
navItems.forEach(item => {
  item.classList.add('hover:text-p-white');
});

export default Navbar;
