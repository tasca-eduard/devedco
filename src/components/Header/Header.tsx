import { useCallback, useEffect, useRef, useState } from "react";
import ActiveLink from "../Link/ActiveLink";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faList,
  faFileLines,
  faScrewdriverWrench,
  faUser,
  faAt} from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import Settings from "../Settings/Settings";
import Offcanvas from "../Offcanvas/Offcanvas";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Header() {
  //state
  const [hash, setHash] = useState('');
  const [y, setY] = useState(0);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  //refs
  const uiRef = useRef<HTMLDivElement>(null);

  //effects
  useEffect(() => {
    setHash(location.hash || '#home');
  }, [])

  const handleNavigation = useCallback(e => {
    const window = e.currentTarget;

    if (y > window.scrollY) {
      //scrolling up
      uiRef.current?.classList.remove("hide-ui")
    } else if (y < window.scrollY) {
      //scrolling down
      uiRef.current?.classList.add("hide-ui");
    }

    // if(window.scrollY) {
    //   uiRef.current?.classList.add("logo-slide");
    // } else {
    //   uiRef.current?.classList.remove("logo-slide");
    // }

    setY(window.scrollY);
  }, [y, hash]);

  const toggleOffcanvas = () => {
    setShowOffcanvas(prev => !prev);
  }

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="ui" ref={uiRef}>
      <header className="header">
        <div className="header-container container neutral">
          <nav className="nav">
            <ActiveLink
              href="#home"
              hash={hash}
              setHash={setHash}
              className="logo"
            >
              <Logo />
            </ActiveLink>
            <div className="nav-item hide-desktop">
              <button
                className="nav-link"
                onClick={toggleOffcanvas}
              >
                <span>
                  <FontAwesomeIcon icon={faFileLines} />
                  Resume
                </span>
              </button>
            </div>
            <ul className="menu desktop">
              <li className="nav-item">
                <ActiveLink
                  href="#portofolio"
                  hash={hash}
                  setHash={setHash}
                  className="nav-link"
                >
                  <span>
                    <FontAwesomeIcon icon={faList} />
                    Projects
                  </span>
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink
                  href="#techs"
                  hash={hash}
                  setHash={setHash}
                  className="nav-link"
                >
                  <span>
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                    Techs
                  </span>
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink
                  href="#about"
                  hash={hash}
                  setHash={setHash}
                  className="nav-link"
                >
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                    About
                  </span>
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink
                  href="#contact"
                  hash={hash}
                  setHash={setHash}
                  className="nav-link"
                >
                  <span>
                    <FontAwesomeIcon icon={faAt} />
                    Contact
                  </span>
                </ActiveLink>
              </li>
              <li className="nav-item hide-mobile">
                <button
                  className="nav-link"
                  onClick={toggleOffcanvas}
                >
                  <span>
                    <FontAwesomeIcon icon={faFileLines} />
                    Resume
                  </span>
                </button>
              </li>
              <li className="nav-item">
                <Settings />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <ul className="menu mobile">
        <li className="nav-item">
          <ActiveLink
            href="#portofolio"
            hash={hash}
            setHash={setHash}
            className="nav-link"
          >
            <span>
              <FontAwesomeIcon icon={faList} />
              Projects
            </span>
          </ActiveLink>
        </li>
        <li className="nav-item">
          <ActiveLink
            href="#techs"
            hash={hash}
            setHash={setHash}
            className="nav-link"
          >
            <span>
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              Techs
            </span>
          </ActiveLink>
        </li>
        <li className="nav-item">
          <ActiveLink
            href="#about"
            hash={hash}
            setHash={setHash}
            className="nav-link"
          >
            <span>
              <FontAwesomeIcon icon={faUser} />
              About
            </span>
          </ActiveLink>
        </li>
        <li className="nav-item">
          <ActiveLink
            href="#contact"
            hash={hash}
            setHash={setHash}
            className="nav-link"
          >
            <span>
              <FontAwesomeIcon icon={faAt} />
              Contact
            </span>
          </ActiveLink>
        </li>
        <li className="nav-item center">
          <Settings />
        </li>
      </ul>
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
      >
        <>
          <div className="head">
            <h2>Resume</h2>
            <button 
              className="btn"
              onClick={window.print}
            >
              <FontAwesomeIcon icon={regular.faFilePdf as IconProp} className="active" />
              Download 
            </button>
          </div>
          <br />
          <h3>Eduard-Cristian Tașcă</h3>
          <span>
            +40 735 097 089 | 
            eduardcristiantasca@gmail.com
          </span>
          <br />
          <span>
            Cluj-Napoca, Romania
          </span>
          <br />
          <br />
          <h3>About</h3>
          <p>
            Currently I am working as a Frontend Developer at webwavers where I create web pages and functionalities from scratch based on given designs (Figma, Zeplin, Photoshop, InVision) and business logic. Besides that, I maintain websites by fixing bugs, debugging, give suggestions about better UX/UI (as well as receive).
            <br />
            I'm part of the AGILE and SCRUM meetings with devs from different parts of the world - so teamwork and comprehension are part of my core process of finalizing a task.
            <br />
            For now, I'm mostly focused on Frontend Development, but in the future I'd like to leave traces on the Backend side too.
          </p>
          <br />
          <h3>Skills</h3>
          <h4>Frameworks / Environments</h4>
          <span>ReactJS, NextJS, NodeJS</span>
          <br />
          <br />
          <h4>Programming / Markup Languages</h4>
          <span> Javascript / Typescript, HTML, CSS, SASS / SCSS, LESS</span>
          <br />
          <br />
          <h4>Libraries</h4>
          <span>Phaser, Leaflet, jQuery, React Bootstrap / Bootstrap, FontAwesome</span>
          <br />
          <br />
          <h4>Misc</h4>
          <span>OOCSS, BEM, SMACCS, SVG, JSON, AJAX, Git, Github, Gitlab, Bitbucket, Jira, Azure DevOps, NPM, GulpJS, Object-Oriented Programming (OOP), Responsive Web Design, User Experience (UX)</span>
        </>
      </Offcanvas>
    </div>
  )
}