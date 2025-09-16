import styles from './Landing.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function Landing(){
    return(
        <div className={styles.container}>
            <p>
                Hi, my name is
            </p>
            <p>
                Mark Joshua Urbano
            </p>
            <p>
                I build responsive and user-friendly websites with PHP, Laravel, 
                JavaScript, and modern front-end frameworks. Passionate about 
                crafting digital experiences that make an impact.
            </p>
            <div className={styles.buttons}>
                <PrimaryButton href="#projects" text="View My Work"></PrimaryButton>
            </div>
        </div>
    );
}

export default Landing