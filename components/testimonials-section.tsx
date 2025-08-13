"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    location: "Madrid",
    text: "Una experiencia maravillosa. La casa es preciosa, muy bien equipada y con unas vistas espectaculares. Los anfitriones son muy atentos y nos dieron recomendaciones excelentes para visitar la zona. Volveremos seguro.",
    rating: 5,
    image: "/images/testimonial-1.jpg"
  },
  {
    name: "Carlos Rodríguez",
    location: "Barcelona",
    text: "Pasamos un fin de semana inolvidable. La casa es muy acogedora, con todos los detalles cuidados. La ubicación es perfecta para desconectar y a la vez estar cerca de Toledo para visitar la ciudad. Muy recomendable.",
    rating: 5,
    image: "/images/testimonial-2.jpg"
  },
  {
    name: "Laura Martínez",
    location: "Valencia",
    text: "La casa rural superó nuestras expectativas. Limpia, espaciosa y con un jardín precioso donde los niños pudieron jugar. La piscina es un plus en verano. Los propietarios son encantadores y muy serviciales.",
    rating: 5,
    image: "/images/testimonial-3.jpg"
  }
];

const TestimonialsSection = () => {
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
        staggerChildren: 0.2
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
    <section className="container-section bg-white dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Lo que dicen nuestros huéspedes</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
          Experiencias reales de quienes han disfrutado de nuestra casa rural
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.text}"</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;