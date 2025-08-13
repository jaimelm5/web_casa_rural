import RoomsClient from '@/components/rooms-client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home as HomeIcon, Users, Utensils, Wifi, Coffee, MapPin } from "lucide-react";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import GalleryPreview from "@/components/gallery-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <section className="container-section bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Bienvenidos a nuestra Casa Rural</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Descubre el encanto y la tranquilidad de nuestra casa rural en Toledo, donde la tradición se une con el confort para ofrecerte una experiencia única.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://i.pinimg.com/originals/05/68/c5/0568c5ef0fef048566d225edb9e18a97.jpg"
              alt="Casa Rural en Toledo" 
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Un refugio con historia</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Nuestra casa rural combina la arquitectura tradicional toledana con todas las comodidades modernas. Construida con piedra y madera, conserva el encanto rústico mientras ofrece un espacio acogedor y confortable para tu estancia.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Rodeada de naturaleza y con vistas panorámicas a los Montes de Toledo, es el lugar perfecto para desconectar de la rutina y disfrutar de la tranquilidad del campo.
            </p>
            <div className="pt-4">
              <Link href="/galeria" className="btn-primary flex items-center gap-2 w-fit">
                Ver galería <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection />

      <RoomsClient />
      
      <GalleryPreview />
      
      <section className="container-section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Descubre Toledo</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Explora la Ciudad de las Tres Culturas y sus alrededores desde nuestra casa rural
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-2xl font-semibold">Ubicación privilegiada</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Nuestra casa rural está situada a poca distancia del centro histórico de Toledo, declarado Patrimonio de la Humanidad por la UNESCO. Disfruta de la tranquilidad del campo sin renunciar a la riqueza cultural de la ciudad.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Desde aquí podrás visitar fácilmente la Catedral, el Alcázar, las sinagogas históricas y perderte por las estrechas calles medievales que tanto inspiraron a El Greco.
            </p>
            <div className="pt-4">
              <Link href="/ubicacion" className="btn-primary flex items-center gap-2 w-fit">
                Ver ubicación <MapPin className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg"
              alt="Toledo histórico" 
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <section className="container-section bg-primary/10 dark:bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para disfrutar de una experiencia única?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Reserva ahora y vive momentos inolvidables en nuestra casa rural en Toledo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/disponibilidad" className="btn-primary">
              Consultar disponibilidad
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
