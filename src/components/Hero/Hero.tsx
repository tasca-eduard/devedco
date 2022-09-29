import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from "../ContactForm/ContactForm";
import Logo from "../Logo/Logo";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container container curved">
        <div className="content">
          <h1 id="home" className="intro">Welcome to
            <Logo />
          </h1>
          <p>Hi, fellow internet people. My name is Ed and I'm a mid Frontend Developer from Cluj-Napoca, Romania.</p>
          <br />
          <p>If you are interested in creating a personal website, web app or an e-commerce platform and you need a Frontend/UI Developer, then I am your guy. I have +2 years of experience in applying or maintaining client needs using various technologies. Here's my <a href="#portofolio">personal work <FontAwesomeIcon icon={faLaptopCode} /></a> and 	&nbsp; <a href="https://github.com/tasca-eduard" target="_blank" rel="noreferrer">Github <FontAwesomeIcon icon={faGithub} /></a>.</p>
          <br />
          <p>Complete the form on the side if you want to have an open discussion about your needs. If you don't want to share your informatio on a random guy's page, feel free to use your prefered email service.</p>
          <br />
          <small>Mind the timezone differences.</small>
        </div>
        <div className="widget-container">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}