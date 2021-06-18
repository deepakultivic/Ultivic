import React, { useEffect } from "react";
import { Link } from 'react-router-dom'

import './style.css';

const  Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
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
 
  return (
    <div>
      <header className={navbarClasses.join(" ")}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link to="/" className="navbar-brand">   <img src="/assets/header/logo-white.png" height="100" alt="CoolBrand" /></Link>
          
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
                <Link to="/about" className="nav-item nav-link active">About</Link>
                <Link to="/portfolio" className="nav-item nav-link ">Portfolio</Link>
                <li  className="nav-item nav-link ">
                Services <i className="	fa fa-angle-down"></i>
                <ul className="drop_menu">
                  <li><Link to="/web">Web Development</Link></li>
                  <li><Link to="/graphic">Graphic Design</Link></li>
                  <li><Link to="/app">App Development</Link></li>
                </ul>
               </li>
               <Link to="/blogs" className="nav-item nav-link">  Blog</Link>
               <Link to="/career" className="nav-item nav-link">Career</Link>
               <Link to="/contact" className="nav-item nav-link">Contact</Link>
               
              </div>
             
             
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};


export default Header