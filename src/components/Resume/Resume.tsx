import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Resume() {
  return (
    <div className="rich-text">
      <div className="head">
        <h2>Eduard-Cristian Tașcă</h2>
        <button
          className="btn"
          onClick={window.print}
        >
          <FontAwesomeIcon icon={regular.faFilePdf as IconProp} className="active" />
          Download
        </button>
      </div>
      <br />

      <h3>Contact</h3>
      <div className="card secondary">  
        <span>
          eduardcristiantasca@gmail.com
        </span>
        <br />
      </div>
      <br />

      <h3>About</h3>
      <div className="card secondary">
        <p>
          I'm a Frontend Developer and I create web pages and functionalities from scratch based on given designs (Figma, Zeplin, Photoshop, InVision) and business logic. Besides that, I maintain websites by fixing bugs, debugging, giving suggestions about better UX/UI (as well as receive).
          <br />
          <br />
          I'm part of the AGILE and SCRUM meetings with devs from different parts of the world - so teamwork and comprehension are part of my core process of finalizing a task.
          <br />
          <br />
          <small>For now, I'm mostly focused on Frontend Development, but in the future I'd like to leave traces on the Backend side too.</small>
        </p>
      </div>
      <br />
      <div>
        <h3>Work Experience</h3>
        <div className="card secondary">
          <span>Wavemyth - <strong>Frontend Developer</strong></span>
          <br />
          <small>2020 - Present | Cluj-Napoca, Romania</small>
          <br />
          <ul>
            <li>
              Lots of frontend and modarate backend contribution for a US company, focusing on creating an NFT Isometric strategy game on the WAX blockchain.
              <br />
              <ul>
                <li>
                  Created from scratch the codebase of a game UI in <strong>NextJS</strong> connected to the actual game developed using <strong>Phaser 3</strong>.
                </li>
                <li>
                  Researched Phaser so I can implement an efficient isometric strategy browser game in a single canvas.
                </li>
                <li>
                  Managed PSD and AI files in order to make them usable for the Phaser library.
                </li>
                <li>
                  Used <strong>SWR</strong> to preserve and invalidate the cache after various transaction on the blockchain.
                </li>
              </ul>
            </li>
            <li>
              I had a significant involvement on an internal project that helps evolving the company by centralizing the client and dev data for accounting and management.
              <br />
              <ul>
                <li>
                  Used relatively new tools like <strong>ReactJS and Typescript</strong> with a really good placed project structure / architecture.
                </li>
              </ul>
            </li>
            <li>
              Outsourcing for a large company - A web design, development, and digital marketing agency.
              <br />
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
            <span>Faculty of Mathematics and Informatics Babes-Bolyai University</span>
            <br />
            <small>2017 - 2020</small>
            <br />
            <small>Mathematics and Informatics | <strong>Bachelor's Degree</strong></small>
          </div>
          <div className="card secondary">
            <span>Titu Maiorescu National Collage Aiud</span>
            <br />
            <small>2013 - 2017</small>
            <br />
            <small>Mathematics and Informatics | <strong>High School Degree</strong></small>
          </div>
        </div>
      </div>
      <br />

      <h3>Skills</h3>
      <div className="grid medium">
        <div className="card secondary">
          <small>Frameworks / Environments</small>
          <br />
          <span>ReactJS, NextJS, NodeJS</span>
        </div>

        <div className="card secondary">
          <small>Programming / Markup Languages</small>
          <br />
          <span> Javascript / Typescript, PHP, Java, C#, HTML, CSS, SASS / SCSS, LESS</span>
        </div>

        <div className="card secondary">
          <small>Libraries</small>
          <br />
          <span>Phaser, React Leaflet / Leaflet, SWR, React CSSTransition, jQuery, React Bootstrap / Bootstrap, FontAwesome</span>
        </div>

        <div className="card secondary">
          <small>Misc</small>
          <br />
          <span>OOCSS, BEM, SMACCS, SVG, JSON, AJAX, Git, Github, Gitlab, Bitbucket, Jira, OOP, Responsive UI & UX</span>
        </div>
      </div>
      <div className="grid medium">
        <div className="card secondary">
          <small>Soft Skills</small>
          <br />
          <span>
            Teamwork,
            Analyze User Needs,
            Analytical Thinking,
            Testing,
            Critical Thinking,
            Document Application Process,
            Troubleshooting,
            Programming Experience,
            Mentoring and Helping Other Devs
          </span>
        </div>
      </div>
    </div>
  )
}