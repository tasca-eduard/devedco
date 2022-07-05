import type { NextPage } from 'next';
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';

const Home: NextPage = () => {
  //state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message
      })
    });
    
    const resObj = await res.json();

    setIsLoading(false);
    setMessage(resObj.message);
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="hero">
          <div className="hero-container container curved">
            <div className="content">
              <h1 id="home" className="intro">Welcome to
                <Logo />
              </h1>
              <p>Hi, fellow internet people. My name is Ed and I'm a mid Frontend Developer from Cluj-Napoca, Romania.</p>
              <br />
              <p>If you are interested in creating a personal website, web app or an e-commerce platform and you need a Frontend/UI Developer, then I am your guy. I have +2 years of experience in applying or maintaining client needs using various technologies. Here's <a href="#">my personal work</a> and <a href="#">Github</a>.</p>
              <br />
              <p>Complete the form on the side if you want to have an open discussion about your needs. If you don't want to share your informatio on a random guy's page, feel free to use your prefered email service.</p>
              <br />
              <small>Mind the timezone differences.</small>
            </div>
            <div className="widget-container">
              <form 
                onSubmit={submitMail} 
                className="form" 
                noValidate
              >
                <h2 id="contact">Let's chat</h2>
                <div className="field">
                  <label htmlFor="username" className="label">Name / Alias</label>
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                    className="input" 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Enter your name or alias" 
                  />
                </div>
                <div className="field">
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                    className="input" 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email" 
                  />
                </div>
                <div className="field">
                  <label htmlFor="message" className="label">Message</label>
                  <textarea 
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    className="input" 
                    name="message" 
                    id="message" 
                    cols={30} 
                    rows={2} 
                    placeholder="Enter your message"
                  >
                  </textarea>
                </div>
                <small>Data will be used only to communicate.</small>
                <br />
                <br />
                {
                  isLoading ? (
                    <button className="btn submit loader" disabled>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </button>
                  ) : (
                    <button className="btn submit">
                      Send
                    </button>
                  )
                }
                <br />
                <span>Use your prefered <a href="mailto:contact@devedco.com">email service</a>.</span>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 id="portofolio">Projects</h2>
          <p>Comming soon</p>
          <small>Maybe horizontal cards with two columns as components</small>
        </div>
        <div className="container">
          <h2 id="techs">Techs & tools</h2>
          <div className="grid">
            <div className="card">
              <div className="content">
                <h3>Frontend</h3>
                <br />
                <p>Depending on the size and complexity of the project, I use vanilla JavaScript, TypeScript, ReactJS, NextJS and even the oldie jQuery.</p>
                <br />
                <p>For design, I love using SCSS (<em>SASS</em>) to create reusable styles, dynamic themes and a clean structure.</p>
                <br />
                <small>I can give suggestions about better UX/UI as well as receive.</small>
              </div>
              <br />
            </div>
            <div className="card">
              <div className="content">
                <h3>Backend</h3>
                <br />
                <p>NodeJS with ExpressJS or NextJS with its great fullstack benefits like better SEO, UX and rendering methods.</p>
                <br />
                <p>I use SQL as the database language, PostgresSQL as the database management system and Prisma ORM to process data in a more intuitive and safe way.</p>
                <br />
                <small>NOTE: I prioritze being a frontend developer, but I can still offer support on the backend. (deployments, API endpoints, models)</small>
              </div>
              <br />
            </div>
            <div className="card">
              <div className="content">
                <h3>Misc</h3>
                <br />
                <p>For team management and keeping the tasks up to date I've used Jira, Trello, Teams and Slack.</p>
                <br />
                <p>For project management, I'm used to GitHub, GitLab, Bitbucket and Azure DevOps.</p>
                <br />
                <p>I have knowledge about Object Oriented Programming, SVGs, methodologies like BEM, SMACCS, and tools like Webpack, Gulp, NPM, Yarn</p>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <h2 id="about">How I work</h2>
            <p>
              I put strong emphasis on having a clear understanding in the client's needs before even starting. Of course, there might be some features that will be done or patched along the way, since you can always change your mind and want other behaviours.
            </p>
            <br />
            <p>
              Also, I might suggest prioritize a task over another because it might imply reusable code that the project would benefit on the long run.
            </p>
            <br />
            <p>
              I am used to having daily calls or written discussions about the progress. Feedback is the key to success if you ask me. I am a flexible person, I take notes, advice and responsibility as needed.</p>
            <br />
            <small>I am talking from experience when I say this, but a good project starts with good attitude.</small>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
