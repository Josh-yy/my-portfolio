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
            <h6>
              {project.typeOfProject} <strong>·</strong> {`Completed — ${project.completed}`}
            </h6>
            <sub>
              {project.tech.map((t, index) => (
                `${t}${index < project.tech.length - 1 ? " | " : ""}` 
              ))}
            </sub>
          </div>
          <div className={styles.subHeading}>
            <h2>Project Goal</h2>
            <p>
              {project.projectGoal}
            </p>
          </div>
          <div>
            <h3>Note worthy functionlities</h3>
            {project.functionality.map((f, index) => (
              <div key={f.name} className={styles.functionContainer}>
                {f.image.map((i, index) => (
                  <img src={i} alt={f.name} />
                ))}
                <h4>{f.name}</h4>
                <p>{f.description}</p>
                {f.tools?.map((tool) =>
                  tool.name ? (
                    <a 
                      className={styles.toolLink}
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <sub>Plugin used: {tool.name}</sub>
                    </a>
                  ) : null
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

export default ProjectDetail;
