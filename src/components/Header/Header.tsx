import { useCallback, useEffect, useRef, useState } from "react";
import ActiveLink from "../Link/ActiveLink";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faList,
  faFileLines,
  faScrewdriverWrench,
  faUser,
  faAt, 
  faSwatchbook,
  faGear} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  //const
  const HIDE_SCROLL_BUFFER = 50;

  //state
  const [hash, setHash] = useState('');
  const [y, setY] = useState(0);

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
    } else if (y < window.scrollY - HIDE_SCROLL_BUFFER) {
      //scrolling down
      uiRef.current?.classList.add("hide-ui");
    }

    setY(window.scrollY);
  }, [y, hash]);

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
                onClick={() => print()}
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
                  onClick={() => print()}
                >
                  <span>
                    <FontAwesomeIcon icon={faFileLines} />
                    Resume
                  </span>
                </button>
              </li>
              <li className="nav-item">
                <div className="select">
                  <button className="trigger nav-link round">
                    <span>
                      <FontAwesomeIcon icon={faSwatchbook} />
                    </span>
                  </button>
                  <ul className="options">
                    <li className="option">
                      <button className="btn">Default</button>
                    </li>
                    <li className="option">
                      <button className="btn">Twilight</button>
                    </li>
                    <li className="option">
                      <button className="btn">Dracula</button>
                    </li>
                  </ul>
                </div>
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
      </ul>
    </div>
  )
}