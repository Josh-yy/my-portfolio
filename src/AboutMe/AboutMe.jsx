import me from '../assets/hero.png'
import styles from './AboutMe.module.css'

function AboutMe(){
    return(
        <div className={styles.container}>
            <div className={styles.detailsContainer}>
                <p>
                    About me
                </p>
                <p>
                    Hi, I’m <strong>Mark Joshua Urbano</strong>, a recent BSIT graduate major in System Development from Central Luzon State University (CLSU)
                    . I enjoy building responsive and user-friendly
                    websites, with a focus on turning ideas into functional digital
                    experiences.
                </p>
                <p>
                    I’ve worked with technologies like <strong>PHP, Laravel, JavaScript,
                    HTML, CSS, MySQL</strong>, and frameworks such as Tailwind CSS and
                    Bootstrap.
                </p>   
                <p>
                    I’m passionate about problem-solving, continuous learning, and creating
                    software that helps people. When I’m not coding, I like exploring new
                    tools, watching anime, and finding inspiration for future projects.
                </p>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image}>
                    <img src={me} alt="hero image" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe