"use client";

import { useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceProps {
  service: {
    icon: ReactNode;
    title: string;
    description: string;
  };
}

const ServiceCard = ({ service }: ServiceProps) => {
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
      className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;