import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Resume() {
  return (
    <div className="rich-text">
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
      <div className="card secondary">
        <span>
          +40 735 097 089 |
          eduardcristiantasca@gmail.com
        </span>
        <br />
        <span>
          Cluj-Napoca, Romania
        </span>
      </div>
      <br />

      <h3>About</h3>
      <div className="card secondary">
        <p>
          Currently I am working as a Frontend Developer at webwavers where I create web pages and functionalities from scratch based on given designs (Figma, Zeplin, Photoshop, InVision) and business logic. Besides that, I maintain websites by fixing bugs, debugging, give suggestions about better UX/UI (as well as receive).
          <br />
          I'm part of the AGILE and SCRUM meetings with devs from different parts of the world - so teamwork and comprehension are part of my core process of finalizing a task.
          <br />
          <small>For now, I'm mostly focused on Frontend Development, but in the future I'd like to leave traces on the Backend side too.</small>
        </p>
      </div>
      <br />
      <div>
        <h3>Work Experience</h3>
        <div className="card secondary">
          <small>2020 - Present | Cluj-Napoca, Romania</small>
          <br />
          <span>Webwavers</span>
          <br />
          <small>Frontend Developer</small>
          <ul>
            <li>
              Lots of frontend contribution for a US company, focusing on creating an NFT Isometric strategy game.
              <br />
              <small>Group of people pasionated of Web3, Crypto and NFTs</small>
              <ul>
                <li>
                  Created from scratch the codebase of a game UI in <strong>NextJS</strong> connected to the actual game developed using <strong>Phaser 3</strong>.
                </li>
                <li>
                  Used <strong>SWR</strong> to preserve cache and revalidating it after various transaction on the blockchain.
                </li>
              </ul>
            </li>
            <li>
              I had a significant involvement on an internal project that helps managing and further evolving the company.
              <br />
              <small>Webwavers' inovation - glad to be part of it</small>
              <ul>
                <li>
                  Used relatively new tools like <strong>ReactJS and Typescript</strong> with a really good placed project structure / architecture.
                </li>
              </ul>
            </li>
            <li>
              Outsourcing for a large company located primarly in US with relatively new locations in EU.
              <br />
              <small>A web design, development, and digital marketing agency.</small>
              <ul>
                <li>Worked on medium and large size projects using <strong>jQuery, Javascript, Nunjucks, Handlebars</strong>.</li>
                <li>Focused on legacy E-Comerce websites that had to be maintained, but also added new features, pages and portals with new and impoved functional and business logic.</li>
              </ul>
            </li>
          </ul>
          <br />
        </div>
      </div>

      <br />
      <div>
        <h3>Education</h3>
        <div className="grid medium">
          <div className="card secondary">
            <small>2017 - 2020 | Cluj-Napoca, Romania</small>
            <br />
            <span>Faculty of Mathematics and Informatics Babes-Bolyai University</span>
            <br />
            <small>Mathematics and Informatics | <strong>Bachelor's Degree</strong></small>
          </div>
          <div className="card secondary">
            <small>2013 - 2017 | Aiud, Romania</small>
            <br />
            <span>Titu Maiorescu National Collage Aiud</span>
            <br />
            <small>Mathematics and Informatics | <strong>High School Degree</strong></small>
          </div>
        </div>
      </div>
      <br />

      <h3>Skills</h3>
      <div className="grid medium">
        <div>
          <div className="card secondary">
            <small>Frameworks / Environments</small>
            <br />
            <span>ReactJS, NextJS, NodeJS</span>
          </div>
        </div>

        <div>
          <div className="card secondary">
            <small>Programming / Markup Languages</small>
            <br />
            <span> Javascript / Typescript, HTML, CSS, SASS / SCSS, LESS</span>
          </div>
        </div>

        <div>
          <div className="card secondary">
            <small>Libraries</small>
            <br />
            <span>Phaser, React Leaflet / Leaflet, SWR, React CSSTransition, jQuery, React Bootstrap / Bootstrap, FontAwesome</span>
          </div>
        </div>

        <div>
          <div className="card secondary">
            <small>Misc</small>
            <br />
            <span>OOCSS, BEM, SMACCS, SVG, JSON, AJAX, Git, Github, Gitlab, Bitbucket, Jira, Azure DevOps, NPM, GulpJS, Object-Oriented Programming (OOP), Responsive Web Design, User Experience (UX)</span>
          </div>
        </div>
      </div>
    </div>
  )
}