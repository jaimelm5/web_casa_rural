import Image from "next/image";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Galería - Casa Rural Toledo",
  description: "Explora nuestra galería de imágenes y descubre todos los rincones de nuestra casa rural en Toledo.",
};

const galleryImages = [
  {
    src: "https://i.pinimg.com/originals/05/68/c5/0568c5ef0fef048566d225edb9e18a97.jpg",
    alt: "Exterior de la casa rural",
    category: "Exterior"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/115379080.jpg?k=bd18ab11f114421b4b5d21949f631e69a505f156f45222a1876b36efae2a40ab&o=&hp=1",
    alt: "Casa con piscina",
    category: "Exterior"
  },
  {
    src: "https://i.pinimg.com/736x/01/b4/6b/01b46b6b36137d80925e52a6a24ca7e8.jpg",
    alt: "Arquitectura tradicional toledana",
    category: "Exterior"
  },
  {
    src: "https://thumbs.dreamstime.com/b/oropesa-spain-oropesa-de-toledo-rural-home-ceramic-facade-one-emblematic-buildings-spanish-town-71717246.jpg",
    alt: "Fachada con cerámica",
    category: "Exterior"
  },
  {
    src: "https://i.pinimg.com/736x/23/b9/33/23b9333c4e4dff9862b238e5b44dd4b3.jpg",
    alt: "Propiedad rural histórica",
    category: "Exterior"
  },
  {
    src: "https://i.pinimg.com/originals/d5/4b/8f/d54b8f11db8d13105ad6d0ac972fe311.jpg",
    alt: "Salón con vigas de madera",
    category: "Interior"
  },
  {
    src: "https://elrosaldelpozo.com/wp-content/uploads/2021/09/casa-rural-en-toledo-82.jpg",
    alt: "Cocina moderna rural",
    category: "Interior"
  },
  {
    src: "https://elrosaldelpozo.com/wp-content/uploads/2021/09/casa-rural-en-toledo-74.jpg",
    alt: "Dormitorio con paredes de piedra",
    category: "Interior"
  },
  {
    src: "https://www.tuscasasrurales.com/imagenes/galeria/15179_g1/15179.jpg",
    alt: "Comedor con elementos rústicos",
    category: "Interior"
  },
  {
    src: "https://elrosaldelpozo.com/wp-content/uploads/2021/09/casa-rural-en-toledo-1.jpg",
    alt: "Interior acogedor con chimenea",
    category: "Interior"
  }
];

export default function GaleriaPage() {
  // Group images by category
  const exteriorImages = galleryImages.filter(img => img.category === "Exterior");
  const interiorImages = galleryImages.filter(img => img.category === "Interior");

  return (
    <>
      <PageHeader
        title="Galería de Imágenes"
        description="Explora nuestra casa rural a través de estas fotografías"
        backgroundImage="https://i.pinimg.com/736x/23/b9/33/23b9333c4e4dff9862b238e5b44dd4b3.jpg"
      />

      <section className="container-section bg-white dark:bg-gray-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Exterior</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Descubre la belleza exterior de nuestra casa rural y sus alrededores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exteriorImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 w-full text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-section bg-gray-50 dark:bg-gray-800">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Interior</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Explora los acogedores espacios interiores de nuestra casa rural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiorImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 w-full text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}