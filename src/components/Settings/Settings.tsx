import { faDroplet, faEraser, faMask, faMoon, faPeace, faSun, faSwatchbook, faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ButtonSetting from "./ButtonSetting";

export default function Settings() {
  const [show, setShow] = useState(false);
  const optionsRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function toggleOptions() {
    setShow(prev => !prev);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        optionsRef.current && 
        !optionsRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

  return (
    <div className="settings">
      <button 
        className={[
          "trigger", 
          "nav-link", 
          "round",
          show ? "focus" : ""
        ].join(" ")}
        onClick={toggleOptions}
        ref={triggerRef}
      >
        <span>
          <FontAwesomeIcon icon={faSwatchbook} />
        </span>
      </button>

      <CSSTransition
        nodeRef={optionsRef}
        in={show}
        timeout={200}
        classNames="slide"
        unmountOnExit
      >
        <ul 
          className="options"
          ref={optionsRef}
        >
          <li className="category">
            <span className="name">Dark</span>
            <ul className="list">
              <li className="option">
                <ButtonSetting faIcon={faEraser} value="default-dark">
                  Default
                </ButtonSetting>
              </li>
              <li className="option">
                <ButtonSetting faIcon={faMoon} value="twilight">
                  Twilight
                </ButtonSetting>
              </li>
              <li className="option">
                <ButtonSetting faIcon={faDroplet} value="dracula">
                  Dracula
                </ButtonSetting>
              </li>
            </ul>
          </li>
          <li className="category">
            <span className="name">Light</span>
            <ul className="list">
              <li className="option">
                <ButtonSetting faIcon={faEraser} value="default-light">
                  Default
                </ButtonSetting>
              </li>
              <li className="option">
                <ButtonSetting faIcon={faSun} value="sol">
                  Sol
                </ButtonSetting>
              </li>
              <li className="option">
                <ButtonSetting faIcon={faWater} value="waterfall">
                  Waterfall
                </ButtonSetting>
              </li>
            </ul>
          </li>
          <li className="category">
            <span className="name">Experimental</span>
            <ul className="list">
              <li className="option">
                <ButtonSetting faIcon={faMask} value="stealth">
                  Stealth
                </ButtonSetting>
              </li>
              <li className="option">
                <ButtonSetting faIcon={faWind} value="windy">
                  Windy
                </ButtonSetting>
              </li>
            </ul>
          </li>
        </ul>
      </CSSTransition>
    </div>
  )
}