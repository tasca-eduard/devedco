import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import ActiveLink from "../Link/ActiveLink";
import Logo from "../Logo/Logo";

export default function Header() {
  //const
  const HIDE_SCROLL_BUFFER = 100;

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
  }, [y]);

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
            <ul className="nav-list hide-desktop">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => print()}
                >
                  <span>
                    <i className="fa-solid fa-file-lines"></i>
                    Resume
                  </span>
                </button>
              </li>
            </ul>
            <ul className="menu desktop">
              <li className="nav-item">
                <ActiveLink
                  href="#portofolio"
                  hash={hash}
                  setHash={setHash}
                  className="nav-link"
                >
                  <span>
                    <i className="fa-solid fa-list"></i>
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
                    <i className="fa-solid fa-screwdriver-wrench"></i>
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
                    <i className="fa-solid fa-user"></i>
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
                    <i className="fa-solid fa-at"></i>
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
                    <i className="fa-solid fa-file-lines"></i>
                    Resume
                  </span>
                </button>
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
              <i className="fa-solid fa-list"></i>
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
              <i className="fa-solid fa-screwdriver-wrench"></i>
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
              <i className="fa-solid fa-user"></i>
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
              <i className="fa-solid fa-at"></i>
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
              <i className="fa-solid fa-file-lines"></i>
              Resume
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
}