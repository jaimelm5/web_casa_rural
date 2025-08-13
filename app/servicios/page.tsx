import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import ServiceCard from "@/components/service-card";
import { Bed, Utensils, Wifi, Coffee, Tv, Droplets, Mountain, Home as HomeIcon, Users, Wine, Bike, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios - Casa Rural Toledo",
  description: "Descubre todos los servicios y comodidades que ofrecemos en nuestra casa rural en Toledo.",
};

const services = [
  {
    icon: <HomeIcon className="h-10 w-10 text-primary" />,
    title: "Alojamiento",
    description: "Casa completa con 4 habitaciones dobles, 2 baños completos, amplio salón con chimenea, cocina equipada y terraza con vistas panorámicas."
  },
  {
    icon: <Bed className="h-10 w-10 text-primary" />,
    title: "Habitaciones",
    description: "Dormitorios confortables con camas de alta calidad, ropa de cama premium, armarios espaciosos y vistas al exterior."
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "Cocina equipada",
    description: "Cocina moderna con horno, vitrocerámica, microondas, nevera, lavavajillas, cafetera, tostadora y todos los utensilios necesarios."
  },
  {
    icon: <Wifi className="h-10 w-10 text-primary" />,
    title: "Conectividad",
    description: "Wi-Fi gratuito de alta velocidad en toda la casa, televisión por cable y buena cobertura móvil."
  },
  {
    icon: <Coffee className="h-10 w-10 text-primary" />,
    title: "Zonas comunes",
    description: "Amplio salón-comedor con chimenea, sofás confortables, mesa para 8 comensales y zona de lectura y juegos de mesa."
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Piscina privada",
    description: "Piscina exterior privada disponible de mayo a septiembre, con tumbonas y zona de sombra."
  }
];

const activities = [
  {
    icon: <Mountain className="h-10 w-10 text-primary" />,
    title: "Senderismo",
    description: "Rutas de senderismo por los Montes de Toledo con diferentes niveles de dificultad."
  },
  {
    icon: <Bike className="h-10 w-10 text-primary" />,
    title: "Ciclismo",
    description: "Rutas para bicicleta por caminos rurales y carreteras secundarias con poco tráfico."
  },
  {
    icon: <Wine className="h-10 w-10 text-primary" />,
    title: "Enoturismo",
    description: "Visitas a bodegas locales con degustación de vinos de la región de La Mancha."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Paseos a caballo",
    description: "Excursiones a caballo por el campo toledano, con guías experimentados."
  },
  {
    icon: <Trees className="h-10 w-10 text-primary" />,
    title: "Observación de aves",
    description: "La región es hogar de diversas especies de aves, ideal para los aficionados a la ornitología."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Visitas culturales",
    description: "Excursiones organizadas al casco histórico de Toledo y otros pueblos con encanto de la provincia."
  }
];

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        title="Servicios y Actividades"
        description="Todo lo que ofrecemos para hacer tu estancia inolvidable"
        backgroundImage="https://elrosaldelpozo.com/wp-content/uploads/2021/09/casa-rural-en-toledo-1.jpg"
      />

      <section className="container-section bg-white dark:bg-gray-900">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Disfruta de todas estas comodidades durante tu estancia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      <section className="container-section bg-gray-50 dark:bg-gray-800">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Actividades Recomendadas</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Experiencias que puedes disfrutar durante tu estancia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ServiceCard key={index} service={activity} />
          ))}
        </div>
      </section>

      <section className="container-section bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://elrosaldelpozo.com/wp-content/uploads/2021/09/casa-rural-en-toledo-82.jpg"
              alt="Cocina equipada" 
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Servicios adicionales</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Además de los servicios básicos, ofrecemos una serie de extras que puedes solicitar para hacer tu estancia aún más especial:
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Servicio de limpieza diaria (con coste adicional)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Cesta de bienvenida con productos locales</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Desayuno tradicional servido en la casa</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Organización de actividades y excursiones</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Cuna y trona para bebés (sin coste adicional)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Información turística personalizada</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/contacto" className="btn-primary">
                Solicitar información
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}