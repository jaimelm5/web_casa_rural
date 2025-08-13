import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Casa Rural Toledo</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Disfruta de una experiencia única en nuestra casa rural, donde la tradición y el confort se unen para ofrecerte una estancia inolvidable.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/ubicacion"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Ubicación
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/disponibilidad"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Disponibilidad
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  Toledo, Castilla-La Mancha, España
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+34600000000"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  +34 600 000 000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:info@casaruraltoledo.es"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  info@casaruraltoledo.es
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Casa Rural Toledo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;