import styles from './Projects.module.css'
import ChevronRight from '../ChevronRight.jsx';
import ChevronLeft from '../ChevronLeft.jsx';
import AnimeTracker from '../assets/AnimeTracker.png'
import ITAMS from '../assets/ITAMS.png'
import CMS from '../assets/CMS.png'
import TOR from '../assets/TOR.jpg'
import { useEffect, useRef, useState } from 'react'

function Projects(){

    const [xCoordinate, setXCoordinate] = useState(0);
    const [yCoordinate, setYCoordinate] = useState(0);
    const [IsVisible, setIsVisible] = useState(false);
    const chevronRightRef = useRef(null);
    const chevronLeftRef = useRef(null);

    const [imageWidth, setImageWidth] = useState(0);
    const [imageRight, setImageRight] = useState(0); 
    let enterTimeout = null;

    function handleMouseMove(e){
        setXCoordinate(e.clientX);
        setYCoordinate(e.clientY);
    }
    

    function handleMouseEnter(e){
        setIsVisible(true);
        e.currentTarget.style.cursor = "none";

        const container = e.currentTarget;
        
        function updateSize() {
            const rect = container.getBoundingClientRect();
            setImageWidth(rect.width);
            setImageRight(rect.right);
            container.removeEventListener("transitionend", updateSize);
        }

        container.addEventListener("transitionend", updateSize);
        
    }

    function handleMouseLeave(e){
        setIsVisible(false);
        e.currentTarget.style.cursor = "none";
    }
    

    useEffect(() => {
        
        window.addEventListener("mousemove", handleMouseMove)
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
        
    }, []);

    useEffect(() => {

        if ( IsVisible ){
            if((imageRight - (imageWidth/2)) < xCoordinate){
                chevronRightRef.current.style.visibility = "visible";
                chevronRightRef.current.style.opacity = "1";

                chevronLeftRef.current.style.visibility = "hidden";
                chevronLeftRef.current.style.opacity = "0";
                
            }else{
                chevronLeftRef.current.style.visibility = "visible";
                chevronLeftRef.current.style.opacity = "1";

                chevronRightRef.current.style.visibility = "hidden";
                chevronRightRef.current.style.opacity = "0";
            }
        }else{
            chevronLeftRef.current.style.visibility = "hidden";
            chevronLeftRef.current.style.opacity = "0";
            chevronRightRef.current.style.visibility = "hidden";
            chevronRightRef.current.style.opacity = "0";
        }

    }, [IsVisible, xCoordinate]);

    useEffect(() => {
        [chevronLeftRef.current, chevronRightRef.current].forEach(el => {
            if (!el){ return }
            el.style.top = yCoordinate - 26 + "px";
            el.style.left = xCoordinate - 26 + "px";
        });
    }, [xCoordinate, yCoordinate]);

    return(
        <>

        <div ref={chevronRightRef} className='next'>
           <ChevronRight></ChevronRight>
        </div>

        <div ref={chevronLeftRef} className='prev'>
           <ChevronLeft></ChevronLeft>
        </div>

        <div className={styles.container}>
            <div className={styles.projectContainer}>

                <div className={styles.detailsContainer}>
                    <h2>Project #1</h2>
                    <h1>Anime Tracker</h1>
                    <p>
                        Developed a PHP web app inspired by MyAnimeList with an anime database and tracking lists. Integrated the MAL API to
                        display real-time data on top airing, upcoming, and popular anime.
                    </p>
                    <div className={styles.techStack}>
                        <p>PHP</p>    
                        <p>JavaScript (Jquery)</p>
                        <p>MySQL</p>
                        <p>MyAnimeList (MAL) API</p>
                    </div>
                </div>

                <div className='imageContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={AnimeTracker} alt="Anime tracker image" />
                </div>
            </div>

            <div className={styles.projectContainer}>

                <div className='imageContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={ITAMS} alt="Asset management system image" />
                </div>

                <div className={styles.detailsContainer}>
                    <h2>Project #2</h2>
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
                </div>

            </div>

            <div className={styles.projectContainer}>

                <div className={styles.detailsContainer}>
                    <h2>Project #3</h2>
                    <h1>Content Management System</h1>
                    <p>
                        Developed a CMS that allows users to create, manage, and publish website content without coding. Provided an intuitive
                        interface for both technical and non-technical users                  
                        </p>
                    <div className={styles.techStack}>
                        <p>Laravel</p>    
                        <p>JavaScript</p>
                        <p>MySQL</p>
                    </div>
                </div>

                <div className='imageContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={CMS} alt="Content management system image" />
                </div>

            </div>

            <div className={styles.projectContainer}>

                <div className='imageContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={TOR} alt="Automated TOR system image" />
                </div>

                <div className={styles.detailsContainer}>
                    <h2>Project #4</h2>
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
                </div>

            </div>

        </div>
        </>
    );
}

export default Projects