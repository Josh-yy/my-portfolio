import styles from './Landing.module.css'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

function Landing(){
    return(
        <div className={styles.container}>
            <p>
                Hi, my name is
            </p>
            <h2 className={styles.heroName}>
                Mark Joshua Urbano
            </h2>
            <p>
                I build responsive and user-friendly websites with PHP, Laravel, 
                JavaScript, and modern front-end frameworks. Passionate about 
                crafting digital experiences that make an impact.
            </p>
            <div className={styles.buttons}>
                <a className={styles.primaryButton} href="#projects">View my work</a>
            </div>
        </div>
    );
}

export default Landing