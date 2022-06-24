import {useEffect, useState } from "react";
import ActiveLink from "../Link/ActiveLink";
import Logo from "../Logo/Logo";

export default function Header() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(location.hash || '#home');
  }, [])

  return (
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
          <ul className="nav-list top hide-desktop">
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
          <ul className="nav-list">
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
  )
}