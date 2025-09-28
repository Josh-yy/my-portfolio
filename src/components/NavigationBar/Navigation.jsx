import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import IconButton from '../IconButton/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "auto";
        }

        return () => {
            document.documentElement.style.overflow = "auto";
        };
    }, [isOpen]);

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navLogo}>
        <span className={styles.josh}>josh.urbz</span>
      </div>

      <div className={styles.navLinks}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <PrimaryButton text="Resume"/>
        <IconButton onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} className={styles.icon}/>
        </IconButton>
      </div>

      {isOpen && (
        <div className={styles.sidebar}>
          <ul>
            <li>
              <IconButton onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faXmark} className={styles.icon}/>
              </IconButton>
            </li>
            <li><a onClick={() => setIsOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#aboutme">About</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
          </ul>
          <PrimaryButton text="Resume" />
        </div>
      )}
    </nav>
  );
}

export default Navigation;
