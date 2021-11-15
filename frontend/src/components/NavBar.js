import React from "react";
import "../static/NavBar.css";

function NavBar({ scrollToExperience, isScrolling }) {
  return (
    <nav className="navbar navbar-dark sticky-top navbar-expand-sm">
      <div className="container-fluid">
        <a className="navbar-brand">Adam Buckingham</a>
        <div className="navbar-collapse" id="navbarID">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a class="nav-link" onClick={() => scrollToExperience()}>
                Experience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
