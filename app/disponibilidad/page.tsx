import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import BookingForm from "@/components/booking-form";
import PricingSection from "@/components/pricing-section";
import CalendarSection from "@/components/calendar-section";

export const metadata: Metadata = {
  title: "Disponibilidad y Precios - Casa Rural Toledo",
  description: "Consulta la disponibilidad y los precios de nuestra casa rural en Toledo. Reserva ahora para disfrutar de una estancia inolvidable.",
};

export default function DisponibilidadPage() {
  return (
    <>
      <PageHeader
        title="Disponibilidad y Precios"
        description="Consulta nuestro calendario y reserva tu estancia"
        backgroundImage="https://cf.bstatic.com/xdata/images/hotel/max1024x768/115379080.jpg?k=bd18ab11f114421b4b5d21949f631e69a505f156f45222a1876b36efae2a40ab&o=&hp=1"
      />

      <CalendarSection />
      
      <PricingSection />
      
      <section className="container-section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Solicita tu reserva</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
              Completa el formulario y nos pondremos en contacto contigo para confirmar la disponibilidad y el precio
            </p>
          </div>
          
          <BookingForm />
          
          <div className="mt-12 p-6 bg-primary/10 dark:bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Información importante</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>La reserva se confirmará una vez recibido el pago del 30% del importe total.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>El resto del importe se abonará a la llegada.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Se solicitará una fianza de 200€ que será devuelta al finalizar la estancia.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hora de entrada: a partir de las 16:00h. Hora de salida: antes de las 12:00h.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}