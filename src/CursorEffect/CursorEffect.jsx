import styles from './CursorEffect.module.css'
import { useEffect, useRef, useState } from 'react';

function CursorEffect(){
    const [xCoordinate, setXCoordinate] = useState(0);
    const [yCoordinate, setYCoordinate] = useState(0);
    const circleRef = useRef(null);

    useEffect(() => {
        function handleMouseMove(e) {
        setXCoordinate(e.clientX);
        setYCoordinate(e.clientY);
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.style.top = `${yCoordinate - 320}px`;
            circleRef.current.style.left = `${xCoordinate - 320}px`;
        }
    }, [xCoordinate, yCoordinate]);


    return(
        <>
        <div ref={circleRef} className='circle'></div>
        </>

    );
}

export default CursorEffect