import {useState} from 'react'
import Footer from "./footer.jsx";
import {motion, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';
function contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true}); // `once: true` pour que l'animation ne se déclenche qu'une seule fois

    const hoverAnimation = {
        scale: 1.05,
        transition: {type: "spring", stiffness: 300}
    };

    return (
        <div id="contact" className="flex flex-col pt-24 h-screen gap-20">
            <motion.span
                ref={ref}
                initial={{opacity: 0, x: -100}}
                animate={isInView ? {opacity: 1, x: 0} : {}}
                transition={{duration: 1}}
                className="text-6xl sm:text-8xl md:text-9xl font-semibold">Contact</motion.span>
            <div className="flex flex-col items-end gap-4 h-full justify-between">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 100}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 1}}
                    className={"flex flex-col gap-10 w-full md:w-2/3"}>
                    <motion.a whileHover={hoverAnimation} href={"mailto:antoine.sidot08@gmail.com"} target={"_blank"} className={"text-xl sm:text-3xl lg:text-4xl underline"}>antoine.sidot08@gmail.com</motion.a>
                    <motion.a whileHover={hoverAnimation} href={"tel:+41763890379"} target={"_blank"} className={"text-xl sm:text-3xl lg:text-4xl underline"}>+41 76 389 03 79</motion.a>
                </motion.div>
                <Footer/>
            </div>
        </div>
    )
}

export default contact
