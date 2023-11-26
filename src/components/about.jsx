import {useState} from 'react'
import {motion, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';
function about() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true}); // `once: true` pour que l'animation ne se déclenche qu'une seule fois

    return (
        <div id="about" className="flex flex-col pt-24 gap-20">
            <motion.span
                ref={ref}
                initial={{opacity: 0, x: -100}}
                animate={isInView ? {opacity: 1, x: 0} : {}}
                transition={{duration: 1}}
                className="text-6xl sm:text-8xl md:text-9xl font-semibold">About</motion.span>
            <motion.div
                ref={ref}
                initial={{opacity: 0, x: 100}}
                animate={isInView ? {opacity: 1, x: 0} : {}}
                transition={{duration: 1}}
                className="flex flex-col items-end gap-4">
                <div className={"flex flex-col gap-10 w-full md:w-2/3"}>
                    <span className={"text-3xl sm:text-4xl"}>I'm a front-end web<br/>developer & designer<br/>based in Switzerland.</span>
                    <span className={"text-lg sm:text-xl"}>I am a very curious person who likes to discover new things and share them. I have a good analytical mind and I am autonomous in my work. I like new technologies and I am interested in them daily. I also ride my motorcycle to relax. Big fan of video games, I like to exchange and discuss this passion. I obtained my secondary school certificate VG option MITIC. I then did the pre-apprenticeship at the ETML computer science section. I finally obtained my CFC of computer scientist application development within the Kudelski Group.</span>
                    <span className={"text-xl sm:text-2xl uppercase pb-2 border-b-2"}>expertise</span>
                    <div className={"flex flex-col text-lg sm:text-xl uppercase"}>
                        <span>front-end development</span>
                        <span>interaction design</span>
                        <span>ux / ui design</span>
                    </div>
                    <span className={"text-xl sm:text-2xl uppercase pb-2 border-b-2"}>Formation</span>
                    <div className={"flex items-end justify-between text-lg sm:text-xl"}>
                        <div className={"flex flex-col"}>
                            <span className={"text-sm sm:text-base"}>Apprentissage</span>
                            <span>Informaticien Développement d'applications</span>
                        </div>
                        <span className={"text-sm sm:text-base"}>2018 - 2022</span>
                    </div>
                    <div className={"flex items-end justify-between text-xl"}>
                        <div className={"flex flex-col"}>
                            <span className={"text-sm sm:text-base"}>CDD</span>
                            <span>Encadrant préapprentissage à l'ETML</span>
                        </div>
                        <span className={"text-sm sm:text-base"}>2022 - 2023</span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default about
