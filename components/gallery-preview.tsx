"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "https://i.pinimg.com/originals/05/68/c5/0568c5ef0fef048566d225edb9e18a97.jpg",
    alt: "Exterior de la casa rural"
  },
  {
    src: "https://i.pinimg.com/originals/d5/4b/8f/d54b8f11db8d13105ad6d0ac972fe311.jpg",
    alt: "Salón con chimenea"
  },
  {
    src: "https://elrosaldelpozo.com/wp-content/uploads/2021/09/casa-rural-en-toledo-82.jpg",
    alt: "Cocina equipada"
  },
  {
    src: "https://elrosaldelpozo.com/wp-content/uploads/2021/09/casa-rural-en-toledo-74.jpg",
    alt: "Dormitorio principal"
  }
];

const GalleryPreview = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="container-section bg-white dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Nuestra Galería</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
          Un vistazo a lo que te espera en nuestra casa rural
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-10">
        <Link href="/galeria" className="btn-primary inline-flex items-center gap-2">
          Ver galería completa <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default GalleryPreview;