"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/23/b9/33/23b9333c4e4dff9862b238e5b44dd4b3.jpg"
          alt="Casa Rural Toledo"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="brightness-[0.7]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Casa Rural en Toledo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Tu refugio perfecto en el corazón de España
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/disponibilidad"
              className="px-8 py-4 bg-primary text-white rounded-md shadow-lg hover:bg-primary-light transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Reservar ahora
            </Link>
            <Link
              href="/ubicacion"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-md shadow-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              Ver ubicación
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ height: ["0%", "30%", "0%"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;