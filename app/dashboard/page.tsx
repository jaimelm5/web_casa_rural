import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Users, Home as HomeIcon, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard - Casa Rural Toledo",
  description: "Panel de administración para la casa rural en Toledo.",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/dashboard/bookings" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Reservas</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Gestiona las reservas y consulta el calendario de ocupación
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/dashboard/availability" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <HomeIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Disponibilidad</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Actualiza la disponibilidad y los precios por temporada
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/dashboard/guests" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Huéspedes</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Gestiona la información de los huéspedes y sus preferencias
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/dashboard/settings" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Configuración</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Ajusta la configuración de la web y las políticas de la casa
                </p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Próximas funcionalidades</h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            Estamos trabajando en la integración con Google Calendar para sincronizar automáticamente las reservas. Esta funcionalidad estará disponible próximamente.
          </p>
        </div>
      </div>
    </div>
  );
}