import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHotel,
    faPersonHiking,
    faSpa,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import acco from '../assets/acco.jpg'
import trekking from '../assets/trekking.jpg'
import spa from '../assets/spa.jpg'


function Services() {
    const items = [
        {
            title: "Accommodation",
            desc: "Comfortable rooms with scenic views.",
            icon: faHotel,
            img: acco,
        },
        {
            title: "Adventure Activities",
            desc: "Enjoy trekking, boating, and more.",
            icon: faPersonHiking,
            img: trekking,

        },
        {
            title: "Wellness & Spa",
            desc: "Relax with premium spa treatments.",
            icon: faSpa,
            img: spa,

        },
    ];


    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-slate-800 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h2>

                {/* Cards Container */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.8 }}
                            className="group bg-white p-6 rounded-xl shadow transition-all duration-300 text-center cursor-pointer transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:bg-emerald-50"
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="text-4xl text-emerald-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-emerald-700"
                            />
                            <img src={item.img} alt={item.title} className="mx-auto mb-3 w-full h-36 object-cover rounded-md transition-transform duration-300 group-hover:scale-105" style={{borderRadius:'10%'}} />
                            <h3 className="text-lg font-semibold mb-2 text-slate-700">
                                {item.title}
                            </h3>

                            <p className="text-sm text-slate-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Services



