import styles from './Projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import AnimeTracker from '../assets/anime_tracker/AnimeTracker.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import CompareSite from '../assets/CompareSite.png'
import ITAMS from '../assets/ITAMS.png'
import CMS from '../assets/CMS.png'
import TOR from '../assets/TOR.jpg'
import { useEffect, useRef, useState } from 'react'

function Projects(){

    return(
        <>

        <div className={styles.container}>
            <div className={styles.projectContainer}>
                <div className={styles.detailsContainer}>
                    <h2>Project #1</h2>
                    <h1>Anime Tracker</h1>
                    <p>
                    Developed a PHP web app inspired by MyAnimeList with an anime database and tracking lists. 
                    Integrated the MAL API to display real-time data on top airing, upcoming, and popular anime.
                    </p>
                    <div className={styles.techStack}>
                        <p>PHP</p>
                        <p>JavaScript (Jquery)</p>
                        <p>MySQL</p>
                        <p>MyAnimeList (MAL) API</p>
                    </div>
                    <div className={styles.actionContainer}>
                        <a href="https://github.com/Josh-yy/AnimeTracker" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className={styles.fontIcon} />
                        </a>
                        <PrimaryButton href="#projects" text="Learn more"></PrimaryButton>
                    </div>
                </div>

                <div className='imageContainer'>
                    <img src={AnimeTracker} alt="anime tracker image"/>
                </div>
            </div>

            <div className={styles.projectContainer}>
                <div className={styles.detailsContainer}>
                    <h2>Project #2</h2>
                    <h1>Rocket Comparison System</h1>
                    <p>
                    Developed a PHP web app inspired by MyAnimeList with an anime database and tracking lists. 
                    Integrated the MAL API to display real-time data on top airing, upcoming, and popular anime.
                    </p>
                    <div className={styles.techStack}>
                        <p>NUXT</p>
                        <p>Vue 3</p>
                        <p>Vuetify</p>
                        <p>TypeScript</p>
                        <p>GraphQL (Space X Api)</p>
                    </div>
                    <div className={styles.actionContainer}>
                        <a href="https://github.com/Josh-yy/NuxtExam" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className={styles.fontIcon} />
                        </a>
                        <a href=" https://nuxt-exam-gamma.vercel.app/" target='_blank'>
                            <FontAwesomeIcon icon={faLink} className={styles.fontIcon}/>
                        </a>
                        <PrimaryButton href="#projects" text="Learn more"></PrimaryButton>
                    </div>
                </div>

                <div className='imageContainer'>
                    <img src={CompareSite} alt="Rocket Comparison Site image"/>
                </div>
            </div>

            <div className={styles.projectContainer}>

                <div className='imageContainer'>
                    <img src={ITAMS} alt="Asset management system image" />
                </div>

                <div className={styles.detailsContainer}>
                    <h2>Project #3</h2>
                    <h1>Asset Management System</h1>
                    <p>
                        Replaced a Google Sheets-based asset tracking process with a web-based management system. Implemented QR code
                        tagging for hardware/software assets, enabling faster updates and accurate reporting.                    
                        </p>
                    <div className={styles.techStack}>
                        <p>PHP</p>    
                        <p>JavaScript</p>
                        <p>MySQL</p>
                    </div>
                    <div className={styles.actionContainer}>
                        <PrimaryButton href="#projects" text="Learn more"></PrimaryButton>
                    </div>
                </div>
            
            </div>

            <div className={styles.projectContainer}>

                <div className={styles.detailsContainer}>
                    <h2>Project #4</h2>
                    <h1>Content Management System</h1>
                    <p>
                        Developed a CMS that allows users to create, manage, and publish website content without coding. Provided an intuitive
                        interface for both technical and non-technical users                  
                        </p>
                    <div className={styles.techStack}>
                        <p>PHP</p>    
                        <p>JavaScript</p>
                        <p>MySQL</p>
                    </div>
                    <div className={styles.actionContainer}>
                        <a href="https://github.com/Josh-yy/CMS" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className={styles.fontIcon} />
                        </a>
                        <PrimaryButton href="#projects" text="Learn more"></PrimaryButton>
                    </div>
                </div>

                <div className='imageContainer'>
                    <img src={CMS} alt="Content management system image" />
                </div>

            </div>

            <div className={styles.projectContainer}>

                <div className='imageContainer'>
                    <img src={TOR} alt="Automated TOR system image" />
                </div>

                <div className={styles.detailsContainer}>
                    <h2>Project #5</h2>
                    <h1>Automated Transcript of Records System</h1>
                    <p>
                        Built a web system to automate TOR preparation, review, approval, and printing. Included modules for student
                        management, grade handling, and record verification. 
                        </p>
                    <div className={styles.techStack}>
                        <p>Laravel</p>    
                        <p>JavaScript</p>
                        <p>MySQL</p>
                    </div>
                    <div className={styles.actionContainer}>
                        <PrimaryButton href="#projects" text="Learn more"></PrimaryButton>
                    </div>
                </div>

            </div>

        </div>
        </>
    );
}

export default Projects