import React from "react";
import "../static/Footer.css";
import githubPic from "../images/hollow-cut-github.svg";
import linkedInPic from "../images/hollow-cut-linkedin.svg";

function Footer() {
  return (
    <div className="container footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
        <div className="col-md-4 d-flex align-items-center">
          <span className="footerName">
            Built with ReactJS and Django. Deployed on
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              href="https://github.com/BuckinghamAJ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Github"
                src={githubPic}
                className="roundLinkLogo img-fluid"
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://github.com/BuckinghamAJ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="LinkedIn"
                src={linkedInPic}
                className="roundLinkLogo img-fluid"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
