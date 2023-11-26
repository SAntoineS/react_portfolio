import {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';
function footer() {
    const hoverAnimation = {
        scale: 1.05,
        transition: {type: "spring", stiffness: 300}
    };

    return (
        <div className={"flex justify-between w-full md:w-2/3 pb-5 text-lg sm:text-xl"}>
            <div className={"flex items-center gap-8"}>
                <motion.a whileHover={hoverAnimation} href={"https://instagram.com/antoine.xrz"} target={"_blank"} className={"border-b-2"}>Instagram</motion.a>
                <motion.a whileHover={hoverAnimation} href={"https://www.linkedin.com/in/antoine-sidot-767695226/"} target={"_blank"} className={""}>Linkedin</motion.a>
            </div>
            <div className={"flex items-center gap-2"}>
                <FontAwesomeIcon icon="fa-regular fa-copyright"/>
                <span>{new Date().getFullYear()}</span>
            </div>
        </div>
    )
}

export default footer
