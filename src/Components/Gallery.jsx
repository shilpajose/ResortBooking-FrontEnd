import React from 'react'
import { motion } from 'framer-motion'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpeg'
import g3 from '../assets/g3.webp'
import g4 from '../assets/g4.webp'
import g5 from '../assets/g5.webp'
import g6 from '../assets/g6.jpg'

function Gallery() {
    const images = [
        g1,
        g2,
        g3,
        g4,
        g5,
        g6,
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="gallery" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-slate-800 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Gallery
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-sm"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={img}
                                alt="Resort"
                                className="w-full h-52 object-cover transition duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Gallery