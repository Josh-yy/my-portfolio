import { useEffect, useRef, useState } from 'react';
import styles from './Loading.module.css'

function Loading(){

    const quote = useRef(null);
    const [wordHeight, setWordHeight] = useState(0);

    useEffect(() => {
        if (!quote.current) return;
        const spans = quote.current.children;
        const spansArray = Array.from(spans);
        
        spansArray.forEach((word, index) => {
            
            const wordRect = word.getBoundingClientRect();
            const wordHeight = wordRect.height;
            setWordHeight(wordHeight);

            
            
        });

        setInterval(() => {
                
            }, 500);
        
    }, []);
    

    return(
        <>
        <div ref={quote} className={styles.quote}>
            <div className={styles.words}>
                <span className={styles.word}>Building</span> 
                <span className={styles.word}>Today,</span> 
                <span className={styles.word}>For</span>
                <span className={styles.word}>Tomorrow’s </span> 
                <span className={styles.word}>Possibilities.</span>
            </div>
        </div>
        <div className={styles.overlay}>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
            <div className={styles.bar} ></div>
        </div>
        </>
    );
}

export default Loading