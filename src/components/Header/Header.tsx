import {useEffect, useState } from "react";
import ActiveLink from "../Link/ActiveLink";

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
            <>
              <span className="immersed">dev</span>
              <span>ed</span>
              <span className="dim-text">co</span>
            </>
          </ActiveLink>
          <ul className="nav-list top hide-desktop">
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => print()}
              >
                Resume
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
                Projects
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink  
                href="#techs"
                hash={hash}
                setHash={setHash}
                className="nav-link"
              >
                Techs
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink  
                href="#about"
                hash={hash}
                setHash={setHash}
                className="nav-link"
              >
                About
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink  
                href="#contact"
                hash={hash}
                setHash={setHash}
                className="nav-link"
              >
                Contact
              </ActiveLink>
            </li>
            <li className="nav-item hide-mobile">
              <button 
                className="nav-link" 
                onClick={() => print()}
              >
                Resume
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}