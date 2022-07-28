import { faDroplet, faEraser, faMask, faMoon, faPeace, faSun, faSwatchbook, faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Settings() {
  return (
    <div className="select">
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
              <button className="btn">
                <FontAwesomeIcon icon={faEraser} />
                Default
              </button>
            </li>
            <li className="option">
              <button className="btn">
                <FontAwesomeIcon icon={faMoon} />
                Twilight
              </button>
            </li>
            <li className="option active">
              <button className="btn">
                <FontAwesomeIcon icon={faDroplet} />
                Dracula
              </button>
            </li>
          </ul>
        </li>
        <li className="category">
          <span className="name">Light</span>
          <ul className="list">
            <li className="option">
              <button className="btn">
                <FontAwesomeIcon icon={faEraser} />
                Default
              </button>
            </li>
            <li className="option">
              <button className="btn">
                <FontAwesomeIcon icon={faSun} />
                Sol
              </button>
            </li>
            <li className="option">
              <button className="btn">
                <FontAwesomeIcon icon={faWater} />
                Waterfall
              </button>
            </li>
          </ul>
        </li>
        <li className="category">
          <span className="name">Experimental</span>
          <ul className="list">
            <li className="option">
              <button className="btn">
                <FontAwesomeIcon icon={faMask} />
                Stealth
              </button>
            </li>
            <li className="option">
              <button className="btn">
                <FontAwesomeIcon icon={faWind} />
                Windy
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}