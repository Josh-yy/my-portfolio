import { Children } from 'react';
import styles from './Section.module.css'


function Section({id, children}){
    return(
        <div id={id} className={styles.section}>
           {children}
        </div>

    );
}

export default Section