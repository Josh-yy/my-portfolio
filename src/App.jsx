import Navigation from './NavigationBar/Navigation.jsx'
import CursorEffect from './CursorEffect/CursorEffect.jsx'
import Section from './Section/Section.jsx'
import Landing from './Landing/Landing.jsx'
import AboutMe from './AboutMe/AboutMe.jsx'
import Projects from './Projects/Projects.jsx'
import './index.css'

function App() {

  return (
    <>
      <main>
        <CursorEffect></CursorEffect>

        <Navigation></Navigation>

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
          <div>
            <p>©</p>
          </div>
        </Section>
      </main>
      
    </>
  )
}

export default App
