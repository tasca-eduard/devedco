import { faDroplet, faEraser, faMask, faMoon, faPeace, faSun, faSwatchbook, faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonSetting from "./ButtonSetting";

export default function Settings() {
  return (
    <div className="settings">
      <button className="trigger nav-link round">
        <span>
          <FontAwesomeIcon icon={faSwatchbook} />
        </span>
      </button>
      <ul className="options">
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
    </div>
  )
}