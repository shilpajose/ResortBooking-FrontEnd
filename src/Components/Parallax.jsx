import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import g6 from "../assets/g6.jpg";
import g5 from "../assets/g5.webp";
import Bookings from "../Pages/Bookings";

function Parallax() {
    const { scrollY } = useScroll();

    // Parallax values
    const bgY = useTransform(scrollY, [0, 1000], [0, 200]);
    const bgScale = useTransform(scrollY, [0, 1000], [1, 1.08]);
    const mountainY = useTransform(scrollY, [0, 1000], [0, 400]);

    // Floating effect for text
    const floatY = useTransform(scrollY, [0, 1000], [0, -15]);

    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            {/* Background image */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${g6})`, y: bgY, scale: bgScale }}
            />

            {/* Overlay for cinematic effect */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none"></div>

            {/* Mountain layer */}
            <motion.div
                className="absolute inset-0 opacity-30 bg-no-repeat bg-center bg-cover pointer-events-none"
                style={{ backgroundImage: `url(${g5})`, y: mountainY }}
            />

            {/* Text content */}
            <motion.div
                style={{ y: floatY }}
                className="relative h-full flex flex-col items-center justify-center text-center px-6"
            >
                {/* Subtitle */}
                <motion.p
                    className="text-gray-200 tracking-widest text-lg mb-3 uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Be our guest
                </motion.p>

                {/* Heading with scale + fade */}
                <motion.h1
                    className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg mb-4"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    Green Valley Munnar
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="mt-4 text-gray-100 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    We welcome you to one of the finest resorts in Munnar to experience
                    the epitome of hospitality.
                </motion.p>
            </motion.div>
        </section>
    );
}

export default Parallax;
