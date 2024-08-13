import gsap from "gsap";
import { useRef } from 'react';
import { useEffect } from 'react';
import './Line.css'

const Line = () => {
    const gsapRef = useRef();
    const initialPath = "M 10 100 Q 550 100 990 100";
    const finalPath = "M 10 100 Q 550 100 990 100";

    function moveUp(dets) {
        const path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 900 100`;
        gsap.to(gsapRef.current, {
            duration: 0.5, 
            attr: { d: path },
            ease: "power3.out",
    
        });
    };

    function moveDown() {
        gsap.to(gsapRef.current, {
            duration: 0.5, 
            attr: { d: finalPath },
            ease: "elastic.out(1, 0.3)",
        });
    };

    useEffect(() => {
        gsap.set(gsapRef.current, { attr: { d: initialPath } });
    }, []);

    return (
        <div id="lineRound" className='bg-black h-full sm:flex '>
            <svg 
                id="line" 
                onMouseMove={moveUp} 
                onMouseLeave={moveDown} 
                className="sm:flex m-20 w-full h-40 bg-transparent"
                >
                <path ref={gsapRef} fill="transparent" stroke="white" strokeWidth="2" />
            </svg>
        </div>
    );
}

export default Line;






