"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";

interface AttractionProps {
  attraction: {
    title: string;
    description: string;
    distance: string;
    image: string;
  };
}

const AttractionCard = ({ attraction }: AttractionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48">
        <Image
          src={attraction.image}
          alt={attraction.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{attraction.description}</p>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-2 text-primary" />
          <span>{attraction.distance}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AttractionCard;