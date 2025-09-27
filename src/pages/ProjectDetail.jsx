import { useParams } from "react-router-dom";
import Section from "../components/Section/Section.jsx";
import projects from "../data/project.js";
import styles from './ProjectDetail.module.css'
import PrimaryButton from '../components/PrimaryButton/PrimaryButton.jsx'
import { Link } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) return <h2>Project not found</h2>;

  return (
    <main>
      <Section>
        
        <div className={styles.container}>
          <Link to={`/#${project.id}`}>
            <PrimaryButton text="Back" />
          </Link>
          <div>
            <h1 className={styles.header}>{project.title}</h1>
          </div>
          <div>
            <p>
              {project.tech.map((t, index) => (
                `${t}${index < project.tech.length - 1 ? " | " : ""}` 
              ))}
            </p>
          </div>
          <div className={styles.subHeading}>
            <h1>Project Goal</h1>
            <p>
              {project.projectGoal}
            </p>
          </div>
          <div>
            <h1>Note worthy functionlities</h1>
            {project.functionality.map((f, index) => (
              <div key={f.name} className={styles.functionContainer}>
                {f.image.map((i, index) => (
                  <img src={i} alt={f.name} />
                ))}
                <h3>{f.name}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

export default ProjectDetail;
