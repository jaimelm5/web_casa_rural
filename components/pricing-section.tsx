"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Users, Clock } from "lucide-react";

const seasonalPrices = [
  {
    season: "Temporada Baja",
    period: "Enero, Febrero, Noviembre, Diciembre (excepto festivos)",
    weekday: 150,
    weekend: 180,
    week: 900
  },
  {
    season: "Temporada Media",
    period: "Marzo, Abril, Mayo, Octubre",
    weekday: 180,
    weekend: 220,
    week: 1100
  },
  {
    season: "Temporada Alta",
    period: "Junio, Septiembre, puentes y festivos",
    weekday: 220,
    weekend: 250,
    week: 1300
  },
  {
    season: "Temporada Premium",
    period: "Julio, Agosto, Semana Santa, Navidad y Fin de Año",
    weekday: 250,
    weekend: 280,
    week: 1500
  }
];

const PricingSection = () => {
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
    <section className="container-section bg-white dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Nuestros Precios</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
          Tarifas por temporada para la casa completa (capacidad máxima: 8 personas)
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Temporada</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Entre semana (noche)
                  </div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Fin de semana (noche)
                  </div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Semana completa
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {seasonalPrices.map((price, index) => (
                <motion.tr
                  key={index}
                  variants={itemVariants}
                  className={`border-b border-gray-200 dark:border-gray-700 ${
                    index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"
                  }`}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">{price.season}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{price.period}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-medium">{price.weekday}€</td>
                  <td className="px-6 py-4 text-center font-medium">{price.weekend}€</td>
                  <td className="px-6 py-4 text-center font-medium">{price.week}€</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Información adicional</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Estancia mínima: 2 noches (3 noches en temporada alta y festivos)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Los precios incluyen IVA, agua, luz, calefacción y limpieza final</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Fianza: 200€ (reembolsable al finalizar la estancia)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Hora de entrada: a partir de las 16:00h</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Hora de salida: antes de las 12:00h</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Mascotas: consultar disponibilidad (suplemento de 30€)</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;