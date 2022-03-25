import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'

import './style.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow]=useState('false')
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
const handleToggle = () => {
    setShow(!show)
}
  return (

    <header className={navbarClasses.join(" ")}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <NavLink to="/" className="navbar-brand">   <img src="/assets/header/logo-white.png" height="100" alt="CoolBrand" /></NavLink>
        <button
          type="button"
          className="navbar-toggler ml-auto"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav ml-auto">
            <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
            {/* <NavLink activeClassName="active" to="/portfolio" className="nav-item nav-link ">Portfolio</NavLink> */}
            <li  onClick={handleToggle} className="nav-item nav-link mobile_dropdown">
              Services <i className="	fa fa-angle-down"></i>
              <ul className={show ? "drop_menu" : "drop_menu show"}>
                <li><NavLink activeClassName="active" to="/web">Web Development</NavLink></li>
                <li><NavLink activeClassName="active" to="/graphic">Graphic Design</NavLink></li>
                <li><NavLink activeClassName="active" to="/app">App Development</NavLink></li>
              </ul>
            </li>
            <li className="nav-item nav-link desktop_dropdown">
              Services <i className="	fa fa-angle-down"></i>
              <ul className= "drop_menu show">
              <li><NavLink activeClassName="active" to="/web">Web Development</NavLink></li>
                <li><NavLink activeClassName="active" to="/graphic">Graphic Design</NavLink></li>
                <li><NavLink activeClassName="active" to="/app">App Development</NavLink></li>
              </ul>
            </li>
            <NavLink activeClassName="active" to="/blogs" className="nav-item nav-link">  Blog</NavLink>
            <NavLink activeClassName="active" to="/career" className="nav-item nav-link">Career</NavLink>
            <NavLink activeClassName="active" to="/contact" className="nav-item nav-link">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>

  );
};


export default Header