import {useState} from 'react';
import {motion, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';
function Works() {
    // Création d'un tableau de mandats
    const mandats = [
        {nom: "Moto Website", date: "2023", url: "https://github.com/SAntoineS/moto_website"},
        {nom: "Melodius", date: "2022 - 2023", url: "https://github.com/SAntoineS/melodius"},
        {nom: "App Food", date: "2022", url: "https://github.com/SAntoineS/app_food"},
        // Ajoutez d'autres mandats ici...
    ];

    const hoverAnimation = {
        scale: 1.05,
        transition: {type: "spring", stiffness: 300}
    };

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true}); // `once: true` pour que l'animation ne se déclenche qu'une seule fois


    return (
        <div id="works" className="flex flex-col pt-24 h-screen gap-20">
            <motion.span
                ref={ref}
                initial={{opacity: 0, x: -100}}
                animate={isInView ? {opacity: 1, x: 0} : {}}
                transition={{duration: 1}}
                className="text-6xl sm:text-8xl md:text-9xl font-semibold">Works</motion.span>
            <div className="flex flex-col items-end gap-4">
                {mandats.map((mandat, index) => (
                    <motion.div
                        ref={ref}
                        initial={{opacity: 0, y: 100}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 1}}
                        key={index} className="flex justify-between items-center border-t-2 w-full md:w-2/3 p-10">
                        <motion.a whileHover={hoverAnimation} href={mandat.url} target={"_blank"} className="text-4xl sm:text-5xl ">{mandat.nom}</motion.a>
                        <span className="text-lg sm:text-xl">{mandat.date}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Works;
