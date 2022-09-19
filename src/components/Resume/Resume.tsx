import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Resume() {
  return (
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
  )
}