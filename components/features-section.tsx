"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wifi, Utensils, Users, Home as HomeIcon, Coffee, Tv, Droplets, Mountain } from "lucide-react";

const features = [
  {
    icon: <HomeIcon className="h-8 w-8 text-primary" />,
    title: "Arquitectura tradicional",
    description: "Construcción en piedra y madera con elementos rústicos auténticos."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Capacidad para 8 personas",
    description: "4 habitaciones dobles con camas confortables y ropa de calidad."
  },
  {
    icon: <Utensils className="h-8 w-8 text-primary" />,
    title: "Cocina equipada",
    description: "Electrodomésticos modernos y todos los utensilios necesarios."
  },
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: "Wi-Fi gratuito",
    description: "Conexión a internet de alta velocidad en toda la casa."
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: "Terraza y jardín",
    description: "Espacios exteriores para relajarse y disfrutar de las vistas."
  },
  {
    icon: <Tv className="h-8 w-8 text-primary" />,
    title: "Sala de estar",
    description: "Amplio espacio común con chimenea, TV y zona de lectura."
  },
  {
    icon: <Droplets className="h-8 w-8 text-primary" />,
    title: "Piscina privada",
    description: "Disfruta de un refrescante baño durante los meses de verano."
  },
  {
    icon: <Mountain className="h-8 w-8 text-primary" />,
    title: "Vistas panorámicas",
    description: "Impresionantes vistas a los Montes de Toledo y alrededores."
  }
];

const FeaturesSection = () => {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
    <section className="container-section bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Nuestras Comodidades</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
          Disfruta de todas estas características durante tu estancia
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;