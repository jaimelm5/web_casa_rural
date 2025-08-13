import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Navigation, Clock, Car, Train, Bus } from "lucide-react";
import PageHeader from "@/components/page-header";
import AttractionCard from "@/components/attraction-card";

export const metadata: Metadata = {
  title: "Ubicación - Casa Rural Toledo",
  description: "Descubre la ubicación privilegiada de nuestra casa rural en Toledo y los lugares de interés cercanos.",
};

const attractions = [
  {
    title: "Catedral de Toledo",
    description: "Una de las obras maestras del gótico español, con una impresionante colección de arte.",
    distance: "15 minutos en coche",
    image: "https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg"
  },
  {
    title: "Alcázar de Toledo",
    description: "Imponente fortaleza con influencias romanas, moriscas y renacentistas.",
    distance: "20 minutos en coche",
    image: "https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg"
  },
  {
    title: "Monasterio de San Juan de los Reyes",
    description: "Monasterio gótico del siglo XV con hermosos claustros.",
    distance: "15 minutos en coche",
    image: "https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg"
  },
  {
    title: "Sinagoga del Tránsito",
    description: "Ejemplo destacado de arquitectura sefardí con caligrafía árabe.",
    distance: "18 minutos en coche",
    image: "https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg"
  },
  {
    title: "Parque Nacional de Cabañeros",
    description: "A unos 70 km, ofrece bosque mediterráneo y vida silvestre.",
    distance: "1 hora en coche",
    image: "https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg"
  },
  {
    title: "Consuegra",
    description: "Famosa por sus molinos de viento y su castillo, a unos 60 km.",
    distance: "45 minutos en coche",
    image: "https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg"
  }
];

export default function UbicacionPage() {
  return (
    <>
      <PageHeader
        title="Ubicación"
        description="Descubre nuestra privilegiada ubicación en Toledo"
        backgroundImage="https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg"
      />

      <section className="container-section bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Nuestra Ubicación</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Nuestra casa rural está ubicada en un entorno privilegiado en la provincia de Toledo, a tan solo 15 minutos en coche del centro histórico de la ciudad. Rodeada de naturaleza y con vistas panorámicas a los Montes de Toledo, ofrece la combinación perfecta entre tranquilidad rural y acceso a la rica oferta cultural de la zona.
            </p>
            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Dirección</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Camino de la Sierra, s/n<br />
                    45001 Toledo, España
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Navigation className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Coordenadas GPS</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    39.8628° N, 4.0273° W
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Distancias</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>15 minutos al centro histórico de Toledo</li>
                    <li>1 hora al aeropuerto de Madrid-Barajas</li>
                    <li>1 hora a Madrid centro</li>
                    <li>30 minutos a Aranjuez</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* This would be replaced with an actual map in a production environment */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-center text-gray-600 dark:text-gray-400 p-4">
                Aquí se mostraría un mapa interactivo con la ubicación exacta de la casa rural.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-section bg-gray-50 dark:bg-gray-800">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Cómo llegar</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Varias opciones para llegar a nuestra casa rural
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Car className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">En coche</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Desde Madrid, toma la A-42 dirección Toledo. Sigue las indicaciones hacia el centro histórico y luego dirígete hacia la zona de La Bastida. Encontrarás señalización específica para nuestra casa rural.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Train className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">En tren</h3>
            <p className="text-gray-600 dark:text-gray-400">
              El tren de alta velocidad (AVE) conecta Madrid con Toledo en aproximadamente 30 minutos. Desde la estación de Toledo, puedes tomar un taxi o un autobús local hasta nuestra ubicación.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Bus className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">En autobús</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Hay servicios regulares de autobús desde Madrid (Estación Sur) hasta Toledo. El trayecto dura aproximadamente 1 hora. Desde la estación de autobuses de Toledo, puedes tomar un taxi hasta nuestra casa rural.
            </p>
          </div>
        </div>
      </section>

      <section className="container-section bg-white dark:bg-gray-900">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Lugares de interés cercanos</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Descubre los tesoros culturales e históricos que rodean nuestra casa rural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <AttractionCard key={index} attraction={attraction} />
          ))}
        </div>
      </section>
    </>
  );
}