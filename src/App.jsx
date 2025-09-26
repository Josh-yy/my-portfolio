import Navigation from './NavigationBar/Navigation.jsx'
import CursorEffect from './CursorEffect/CursorEffect.jsx'
import Section from './Section/Section.jsx'
import Landing from './Landing/Landing.jsx'
import Loading from './Loading/Loading.jsx'
import AboutMe from './AboutMe/AboutMe.jsx'
import Projects from './Projects/Projects.jsx'
import Contact from './Contact/Contact.jsx'
import Footer from './Footer/Footer.jsx'
import Modal from './Modal/Modal.jsx'
import './index.css'



function App() {

  return (
    <>
      <main>
        <Loading></Loading>
        <Modal></Modal>
        <CursorEffect></CursorEffect>

        <Navigation/>

        <Section id="home">
          <Landing />
        </Section>

        <Section  id="aboutme">
          <AboutMe />
        </Section>

        <Section  id="projects">
          <Projects />
        </Section>

        <Section  id="contact">
          <Contact/>
        </Section>
        <Footer/>
      </main>
      
    </>
  )
}

export default App
