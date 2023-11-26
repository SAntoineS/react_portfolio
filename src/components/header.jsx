import {useState} from 'react'
import {motion, useCycle, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';
import MenuToggle from "./menuToggle.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function header() {
    const hoverAnimation = {
        scale: 1.05,
        transition: {type: "spring", stiffness: 300}
    };
    const menuVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: "-100%", opacity: 0 }
    };
    const ref = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);

    return (
        <motion.header
            ref={ref}
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className={"fixed top-0 left-0 alignFull"}>
            <div className={"mx-1 px-8 sm:container flex justify-between py-3 backdrop-blur-md z-20"}>
                <motion.a whileHover={hoverAnimation} href={"/"} className={"flex items-center font-bold gap-1 select-none"}>
                    <img className={"h-16 invert"} src={"../assets/01.png"} alt={"Logo"}/>
                    <span className="text-5xl">onwen</span>
                </motion.a>
                <div className={"hidden md:flex items-center text-xl gap-8"}>
                    <motion.a href={"#home"} whileHover={hoverAnimation} className="">Home</motion.a>
                    <motion.a href={"#works"} whileHover={hoverAnimation} className="">Works</motion.a>
                    <motion.a href={"#about"} whileHover={hoverAnimation} className="">About</motion.a>
                    <motion.a href={"#contact"} whileHover={hoverAnimation} className="">Contact</motion.a>
                </div>
                <div className="flex md:hidden items-center text-4xl">
                    <FontAwesomeIcon className="cursor-pointer" icon={["far", "plus"]} onClick={toggleMenu} />

                    <motion.div
                        initial="closed"
                        animate={menuOpen ? "open" : "closed"}
                        variants={menuVariants}
                        transition={{ duration: 0.5 }}
                        className={`fixed top-0 left-0 w-full h-screen bg-black text-white alignFull`}>
                        <div className={"flex flex-col h-full container py-3"}>
                            <div className={"flex items-center justify-between"}>
                                <a href={"/"} className={"flex items-center font-bold gap-1 select-none"}>
                                    <img className={"h-16 invert"} src={"../assets/01.png"} alt={"Logo"}/>
                                    <span className="text-5xl">onwen</span>
                                </a>
                                <button onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={["far", "times"]} />
                                </button>
                            </div>
                            <div className={"flex flex-col h-full justify-center text-6xl gap-8"}>
                                <a href={"#home"} onClick={toggleMenu} className="">Home</a>
                                <a href={"#works"} onClick={toggleMenu} className="">Works</a>
                                <a href={"#about"} onClick={toggleMenu} className="">About</a>
                                <a href={"#contact"} onClick={toggleMenu} className="">Contact</a>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>

        </motion.header>
    )
}

export default header
