import {useState} from 'react'
import Header from "./components/header.jsx";
import Welcome from "./components/Welcome.jsx";
import Introduction from "./components/introduction.jsx";
import Works from "./components/works.jsx";
import {motion, useScroll, useSpring} from "framer-motion";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";

function App() {
    const {scrollYProgress} = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="font-body background-gradient text-white selection:bg-[#5c006c]">
            <div className={"flex gap-5 flex-col container"}>
                <motion.div className="left-0 progress-bar-y" style={{scaleY}}/>
                <motion.div className="right-0 progress-bar-y" style={{scaleY}}/>

                <Header/>
                <Welcome/>
                <Introduction/>
                <Works/>
                <About/>
                <Contact/>
            </div>
        </div>
    )
}

export default App
