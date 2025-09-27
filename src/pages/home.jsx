import Section from "../components/Section/Section.jsx";
import Landing from "../features/Landing/Landing.jsx";
import AboutMe from "../features/AboutMe/AboutMe.jsx";
import Projects from "../features/Projects/Projects.jsx";
import Contact from "../features/Contact/Contact.jsx";
import Navigation from "../components/NavigationBar/Navigation.jsx";

function Home() {
  return (
    <main>
      
      <Navigation />

      <Section id="home">
        <Landing />
      </Section>

      <Section id="aboutme">
        <AboutMe />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

    </main>
  );
}

export default Home;
