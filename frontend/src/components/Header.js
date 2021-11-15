import profilePic from "../images/profilePic.jpeg";
import githubPic from "../images/hollow-cut-github.svg";
import linkedInPic from "../images/hollow-cut-linkedin.svg";
import "../static/Header.css";
import SummaryCarousel from "./SummaryCarousel";

function Header() {
  //Showcasing

  return (
    <div className="summary row">
      <div className="col-lg-3 col-sm-12 text-sm-center text-md-start">
        <img src={profilePic} alt="Adam Buckingham" className="roundPic" />
        <span className="nameAndEmail">
          <h1>Adam Buckingham</h1>
          <p>
            <a href="mailTo:AdamJBuckingham7@gmail.com">
              AdamJBuckingham7@gmail.com
            </a>
          </p>
        </span>
        <h4>System Software Engineer</h4>
        <div className="socialLinks">
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

          <a
            href="https://www.linkedin.com/in/adam-buckingham"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="LinkedIn"
              src={linkedInPic}
              className="roundLinkLogo img-fluid"
            />
          </a>
        </div>
      </div>
      <div className="col-lg-7 col-sm-12">
        <div className="container-sm">
          <SummaryCarousel />
        </div>
      </div>
    </div>
  );
}

export default Header;
