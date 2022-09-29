import type { NextPage } from 'next';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Portofolio from '../components/Portofolio/Portofolio';
import Techs from '../components/Techs/Techs';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div id="page">
        <main className="main">
          <Hero />
          <Portofolio />
          <Techs />
          <About />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
