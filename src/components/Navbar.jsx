import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import Wrapper from "../assets/wrapper/Navbar";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import Sidebar from "./Sidebar";
import { FaChevronDown } from "react-icons/fa";
import Legal from "./Legal";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLegal, setIsOpenLegal] = useState(false);
  const history = useHistory();
  const legalRef = useRef(null);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = (sectionId) => {
    history.push('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleClickOutside = (event) => {
    if (legalRef.current && !legalRef.current.contains(event.target)) {
      setIsOpenLegal(false);
    }
  };

  useEffect(() => {
    if (isLegal) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isLegal]);

  return (
    <Wrapper>
      <nav>
        <div className="nav">
          <div className='nav-center '>
            <Link to='/'>
              <img src={logo} alt='logo' title="Logo" loading="lazy"/>
            </Link>
            <div className='nav-links '>
              <NavLink to='/' exact className='nav-link' onClick={() => handleLinkClick('home')}>
                Home
              </NavLink>
              <a href="#features2" className='nav-link' onClick={() => handleLinkClick('features1')}>
                Features
              </a>
              <a href="#about" className='nav-link' onClick={() => handleLinkClick('about')}>
                How it works
              </a>
              <NavLink to="/contact" className='nav-link'>
                Contact us
              </NavLink>
              <div className="legals" onClick={() => setIsOpenLegal(!isLegal)}>
                <div className="legal" ref={legalRef}>
                  <p className='nav-link'>
                    Legal
                  </p>
                  <FaChevronDown className="icon" />
                </div>
                {isLegal && <Legal />}
              </div>
              <NavLink to='/download' className='nav-link'>
                <button type='button' className='button'>
                  Download App
                </button>
              </NavLink>
            </div>
            <button className='menu' onClick={handleActive}>
              {" "}
              <HiOutlineMenuAlt2 color='white' />
            </button>
          </div>
        </div>
      </nav>
      {isActive && <Sidebar handleActive={handleActive} />}
    </Wrapper>
  );
};

export default Navbar;
