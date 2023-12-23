import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrapper/Sidebar";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ handleActive }) => {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      // Clicked outside the Sidebar, so close it
      handleActive();
    }
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleClickOutside]);

  return (
    <Wrapper>
      <aside className="scale-up-hor-right" ref={sidebarRef}>
        <div className="container-center">
          <div className="nav-links">
            <NavLink to="/" exact className="nav-link" onClick={handleActive}>
              Home
            </NavLink>
            <NavLink to="/rules" className="nav-link" onClick={handleActive}>
              Rules
            </NavLink>
            <NavLink to="/terms" className="nav-link" onClick={handleActive}>
              Terms
            </NavLink>
            <NavLink to="/privacy" className="nav-link" onClick={handleActive}>
              Privacy and Policy
            </NavLink>
            <NavLink to="/payment" className="nav-link" onClick={handleActive}>
              Payment Policy
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={handleActive}>
              Contact us
            </NavLink>
            <button className={handleActive ? "cancel " : " scale-out-right"} onClick={handleActive}>
              <FaTimes color="black" />
            </button>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
