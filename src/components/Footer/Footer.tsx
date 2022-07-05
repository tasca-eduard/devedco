import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container neutral">
        <span>© devedco 2022</span>
        <br />
        <span>Social:&nbsp;</span>
        <a href="https://www.linkedin.com/in/eduard-cristian-ta%C5%9Fc%C4%83-82330a211/" target="_blank" rel="noreferrer">LinkedIn <FontAwesomeIcon icon={faLinkedin} /> </a>
        &nbsp;
        <a href="https://github.com/tasca-eduard" target="_blank" rel="noreferrer">Github <FontAwesomeIcon icon={faGithub} /> </a>
        <br />
        <span>Contact: devedco@outlook.com</span>
      </div>
    </footer>
  )
}