import React from "react";
import { motion } from "framer-motion";
import Banner2 from "../assets/Banner2.webp";
import Bookings from "../Pages/Bookings";

function Hero() {
    return (
        <section
            id="home"
            className="relative h-[85vh] w-full bg-cover bg-center flex items-center justify-center text-center px-4 overflow-hidden"
            style={{
                backgroundImage: `url(${Banner2})`,
            }}
        >
            {/* Background Slow Zoom Animation */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Banner2})` }}
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: 10, ease: "easeOut" }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Motion */}
            <motion.div
                className="relative text-white max-w-xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Welcome to Green Valley Resort
                </motion.h1>

                <motion.p
                    className="text-sm sm:text-lg mb-6 opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    Relax • Refresh • Reconnect
                </motion.p>
            </motion.div>
        </section>
    );
}

export default Hero