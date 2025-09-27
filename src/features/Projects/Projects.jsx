import styles from './Projects.module.css'
import { Link } from "react-router-dom";
import projects from "../../data/project";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { useEffect, useRef, useState } from 'react'

function Projects(){

    return(
        <>

        <div className={styles.container}>
            {projects.map((p, index) => (
                <div id={p.id} key={p.id} className={styles.projectContainer}>
                <div className={styles.detailsContainer}>
                    <h2>Project {index + 1}</h2>
                    <h1>{p.title}</h1>
                    <p>{p.description}</p>

                    <div className={styles.techStack}>
                    {p.tech.map((t) => (
                        <p key={t}>{t}</p>
                    ))}
                    </div>

                    <div className={styles.actionContainer}>
                    {p.github && (
                        <a href={p.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className={styles.fontIcon} />
                        </a>
                    )}
                    {p.live && (
                        <a href={p.live} target="_blank">
                         <FontAwesomeIcon icon={faLink} className={styles.fontIcon}/>
                        </a>
                    )}
                    {p.documentation && (
                        <Link to={`project/${p.id}`}>
                        <PrimaryButton text="View in Details" />
                        </Link>
                    )}
                    </div>
                </div>

                <div className="imageContainer">
                    <img src={p.image} alt={p.title} />
                </div>
                </div>
            ))}

        </div>
        </>
    );
}

export default Projects