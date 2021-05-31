import React, { useEffect } from "react";
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
            <a href="/" className="navbar-brand">
              <img src="/assets/header/logo-white.png" height="100" alt="CoolBrand" />
            </a>
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
                <a href="/about" className="nav-item nav-link active">
                  About
                </a>
                <a href="/portfolio" className="nav-item nav-link">
                  Portfolio
                </a>
                <a href="#" className="nav-item nav-link">
                Services <i className="	fa fa-angle-down"></i>
                <ul className="drop_menu">
                  <li><a href="/web">Web Development</a></li>
                  <li><a href="/graphic">Graphic Design</a></li>
                  <li><a href="/app">App Development</a></li>
                </ul>
                </a>
                <a href="/blogs" className="nav-item nav-link">
                Blog
                </a>
                <a href="/career" className="nav-item nav-link">
                  Career
                </a>
                <a href="/contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
             
             
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};


export default Header