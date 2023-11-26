import {useState} from 'react'
import {motion, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';

function welcome() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true}); // `once: true` pour que l'animation ne se déclenche qu'une seule fois

    return (
        <div id={"home"} className={"flex items-end py-10 h-screen"}>
            <motion.div
                ref={ref}
                initial={{opacity: 0, x: -100}}
                animate={isInView ? {opacity: 1, x: 0} : {}}
                transition={{duration: 1}}
            >
                <span className={"text-6xl sm:text-8xl md:text-9xl font-semibold"}>Welcome.</span>
            </motion.div>
        </div>
    )
}

export default welcome
