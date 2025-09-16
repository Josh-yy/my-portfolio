import styles from './Navigation.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function Navigation(){
    return(
        <nav className={styles.navigationBar}>
            <div className={styles.navLogo}>
                <span className={styles.josh}>josh.urbz</span>
            </div>
            <div className={styles.navLinks}>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#aboutme">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <PrimaryButton href="#projects" text="Resume"></PrimaryButton>
            </div>
        </nav>
    );
}

export default Navigation