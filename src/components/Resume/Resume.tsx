import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Resume() {
  return (
    <div className="rich-text">
      <div className="head">
        <div>
          <h2>Eduard-Cristian Tașcă</h2>
          <h3>Frontend Developer</h3>
        </div>
        <button
          className="btn"
          onClick={window.print}
        >
          <FontAwesomeIcon icon={regular.faFilePdf as IconProp} className="active" />
          Download
        </button>
      </div>
      <br />

      <h3>Details</h3>
      <div className="grid medium">
        <div className="card secondary">
          <strong>Email</strong>: 
          <br />
          eduardcristiantasca@gmail.com
        </div>
        <div className="card secondary">
          <strong>Phone</strong>: 
          <br />
          0735 097 089
        </div>
        <div className="card secondary">
          <strong>LinkedIn</strong>: 
          <br />
          linkedin.com/in/eduard-cristian-tasca
        </div>
      </div>
      <br />

      <h3>About</h3>
      <div className="card secondary">
        <p>
        I have been working as a frontend developer for 3 years now on different projects: some from scratch and others by maintaining and updating the current state of the websites. From portfolio, corporate or institution websites, to large big e-commerce websites with various partners, payment portals and app-like websites.
        <br />
        <br />
        I have worked from small to large sized teams by attending online meetings with everyone involved, updating the status of the tickets on management platforms and having calls with developers so we coordinate in the best manner possible. So teamwork and comprehension are part of my core process of finalizing a task.
        <br />
        <br />
        I have a good understanding of various coding standards and best practices. I try to be active and precise in the project as much as possible and give suggestions for a cleaner code, much easier to follow - as well as receive.
        </p>
      </div>
      <br />
      <div>
        <h3>Work Experience</h3>
        <div className="card secondary">
          <span><strong>Wavemyth</strong> - Frontend Developer</span>
          <br />
          <small>2020 - Present | Cluj-Napoca, Romania</small>
          <br />
          <br />
          <p>My time here consists in outsourcing, but also on internal projects. Besides my work, I was able to mentor and help other colleagues.</p>
          <ul>
            <li>
              Worked on a SAAS internal project soon to be in the MVP stage. The project consists in managing boards, tickets, members, preferences and board settings.
              <br />
              <ul>
                <li>
                  I have used <strong>React and Typescript</strong> in order to preserve a clean and understandable code.
                </li>
                <li>
                  Implemented the Drag and Drop functionality using the <strong>React Beautiful DND</strong> library since it has a lot of features out of the box.
                </li>
                <li>
                  We've tried to make the UI more intuitive and easier to follow in order to have a better UX than the already available platforms.
                </li>
              </ul>
            </li>
            <li>
              Lots of contributions for a US company, focused on creating an NFT Isometric Strategy Game on the WAX blockchain.
              <br />
              <ul>
                <li>
                  Created from scratch the game UI in <strong>NextJS</strong> connected to the actual game developed using <strong>Phaser 3</strong>.
                </li>
                <li>
                  Researched Phaser 3 so I can implement an efficient isometric strategy browser game.
                </li>
                <li>
                  Managed PSD and AI files in order to make them usable for the Phaser library.
                </li>
                <li>
                  Used <strong>SWR</strong> to preserve and invalidate the cache after various transactions on the blockchain.
                </li>
                <li>
                  Also created the Hub platform where the user can burn the unused NFTS in order to redeem other cards to use in the actual game, like land, buildings, workers and passports to travel between realms.  
                </li>
                <li>
                  Maintained the main marketing website in <strong>Wordpress</strong>. The purpose of this website was mostly presentational. Between presenting the story, gameplay and entities you could play with, the user could buy NFT packs.
                </li>
                <li>
                  I have been actively checking the community in order to extract the best suggestions for a better UI and UX, but also possibly bugs.
                </li>
              </ul>
            </li>
            <li>
              I had a significant involvement on an internal project that helps evolving the company by centralizing the client and dev data for accounting and management.
              <br />
              <ul>
                <li>
                  Used <strong>ReactJS and Typescript</strong> with a really good placed project structure / architecture.
                </li>
                <li>
                  Came up with ways to combine different <strong>REST API</strong> responses in order to create our own data structure that can easily be used to render the needed information.
                </li>
              </ul>
            </li>
            <li>
              Worked for a US Multinational Home Emergency Repairs and Improvements Business that had a vast project size.
              <br />
              <ul>
                <li>
                  I have been part of a large project based in US by being the only frontend developer besides the frontend lead that would mostly review my code and answer any eventual edge case issues. 
                </li>
                <li>
                  This project implied creating new, refreshing pages with more organized and modern design, even new functionalities and updating the old one for a better UX and business flow. Giving the fact that it is a large multinational business with several partners and different country portals, it expanded in multiple versions or different instances of the same platform. This project was ambitious and rewarding since it implied creating robust and scalable code with reusable frontend components. 
                </li>
                <li>
                  I worked with APIs that helped creating dynamic components and complex systems like a payment portal and other management pages for payment plans, documents and checkout journeys.
                </li>
              </ul>
            </li>
            <li>
              Redesign and reskin of an association that represend all U.S. investor-owned electric companies.
              <br />
              <ul>
                <li>
                  I was part of a relatively small team that recreated an old, non-responsive website by using the new designs and explored better ways of presenting the needed information to the user. 
                </li>
                <li>
                  After finishing implementing the new given designs, there were several pages that needed only a reskin to make them responsive based on my professional knowledge or ideas. 
                </li>
                <li>
                  The functionality parts, like the login systems basically remained the same backend wise, but I had to have multiple meetings with the backend developer to make them familiar with the new markup and I had some occasion when I needed to update the views and test them by myself.
                </li>
              </ul>
            </li>
          </ul>
          <br />
        </div>
      </div>

      <br />
      <div id="education">
        <h3>Education</h3>
        <div className="grid medium">
          <div className="card secondary">
            <span>Faculty of Mathematics and Informatics Babes-Bolyai University</span>
            <br />
            <small>2017 - 2020</small>
            <br />
            <small>
              <strong>Mathematics and Informatics</strong> | Bachelor's Degree</small>
          </div>
          <div className="card secondary">
            <span>Titu Maiorescu National Collage Aiud</span>
            <br />
            <small>2013 - 2017</small>
            <br />
            <small>
              <strong>Mathematics and Informatics</strong> | High School Degree</small>
          </div>
        </div>
      </div>
      <br />

      <h3>Skills</h3>
      <div className="grid medium">
        <div className="card secondary">
          <small>Frameworks & Environments</small>
          <br />
          <span>ReactJS, NextJS, NodeJS, VueJS, Angular</span>
        </div>

        <div className="card secondary">
          <small>Programming & Markup Languages</small>
          <br />
          <span> Javascript / Typescript, PHP, Java, HTML, CSS, SASS / SCSS, LESS</span>
        </div>

        <div className="card secondary">
          <small>Libraries</small>
          <br />
          <span>React Beautiful DND, Phaser 3, React Leaflet / Leaflet, SWR, React CSSTransition, jQuery, React Bootstrap / Bootstrap, FontAwesome, MaterialUI</span>
        </div>

        <div className="card secondary">
          <small>Misc</small>
          <br />
          <span>Wordpress, Sitecore, OOP, OOCSS, BEM, SMACCS, SVG, JSON, AJAX, Git, Github, Gitlab, Bitbucket, Jira, Responsive UI & UX, VS Code</span>
        </div>
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
            Mentoring and Helping Other Devs
          </span>
        </div>
        <div className="card secondary">
          <small>Languages</small>
          <br />
          English - Fluent
          <br />
          Romanian - Native
        </div>
      </div>
    </div>
  )
}