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
    
  }, []);

  return (
    <>
      <header
        className={`align-center flex flex-col md:h-[70px] md:flex-row ${
          isTransparentNav ? 'bg-transparent' : 'bg-h-blue'
        } ${
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
          <Link className="hidden self-center md:block" to="/">
            <img
              src={logo}
              width={265}
              max-height={25}
              className="hidden md:block"
              alt="letterboxd browser logo"
            />
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
                  <li
                    className="ml-4 items-center  self-center pt-2"
                    onClick={() => setShowLogin(true)}
                  >
                    <p className="sans-serif ml-4 text-xs font-bold uppercase tracking-widest text-sh-grey	hover:cursor-pointer hover:text-p-white">
                      {' '}
                      SIGN IN
                    </p>
                  </li>
                )}
                {/* ...existing code... */}
              </ul>
            </nav>
            <img
              className="search-icon-desktop hidden hover:cursor-pointer md:ml-4 md:block"
              src={searchIcon}
              width={30}
              height={30}
              alt="search icon"
              onClick={displaySearchDesktop}
            />
            <div className="search-bar-desktop hidden md:hidden">
              
            </div>
            <div ref={dropDownRef}>
              <img
                onClick={() => setDDMobOpen(!DDMobOpen)}
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
                onClick={() => {
                  setSearchMobOpen(!searchMobOpen);
                }}
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navbar;
