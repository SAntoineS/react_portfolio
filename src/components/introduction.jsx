import {motion, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';

function introduction() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true}); // `once: true` pour que l'animation ne se déclenche qu'une seule fois

    return (
        <div className={"flex items-center md:h-screen"}>
            <div className={"flex flex-col md:flex-row w-full h-full"}>
                <motion.img
                    ref={ref}
                    initial={{opacity: 0, x: -100}}
                    animate={isInView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 1}}
                    className={"h-1/3 md:h-auto md:w-1/3 md:pr-10 object-cover"} src={"../assets/_DSC4440.jpeg"} alt={""}/>
                <div className={"h-2/3 md:h-auto md:w-2/3 flex flex-col items-center justify-between"}>
                    <motion.span
                        ref={ref}
                        initial={{opacity: 0, y: -100}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 1}}
                        className={"uppercase text-2xl sm:text-3xl w-full"}>i'm antoine sidot</motion.span>
                    <motion.span
                        ref={ref}
                        initial={{opacity: 0, x: 100}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 1}}
                        className={"text-3xl sm:text-4xl lg:text-5xl"}>I'm a front-end web<br/>developer & designer<br/>based in Switzerland.</motion.span>
                    <motion.span
                        ref={ref}
                        initial={{opacity: 0, y: 100}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 1}}
                        className={"text-lg sm:text-xl text-justify"}>I am a very curious person who likes to discover new things and share them. I have a good analytical mind and I am autonomous in my work. I like new technologies and I am interested in them daily. I also ride my motorcycle to relax. Big fan of video games, I like to exchange and discuss this passion. I obtained my secondary school certificate VG option MITIC. I then did the pre-apprenticeship at the ETML computer science section. I finally obtained my CFC of computer scientist application development within the Kudelski Group.</motion.span>
                </div>
            </div>

        </div>
    )
}

export default introduction
