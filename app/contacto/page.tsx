import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto - Casa Rural Toledo",
  description: "Ponte en contacto con nosotros para cualquier consulta sobre nuestra casa rural en Toledo.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="Estamos encantados de atenderte"
        backgroundImage="https://i.pinimg.com/originals/05/68/c5/0568c5ef0fef048566d225edb9e18a97.jpg"
      />

      <section className="container-section bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Información de contacto</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Si tienes alguna pregunta sobre nuestra casa rural, disponibilidad o precios, no dudes en contactarnos. Estaremos encantados de ayudarte.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Teléfono</h3>
                  <p className="text-gray-600 dark:text-gray-400">+34 600 000 000</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">info@casaruraltoledo.es</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dirección</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Camino de la Sierra, s/n<br />
                    45001 Toledo, España
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Horario de atención</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lunes a Domingo: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">¿Prefieres visitarnos?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Si quieres conocer la casa antes de reservar, podemos concertar una visita. Contáctanos para acordar día y hora.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Completa el formulario y te responderemos lo antes posible.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      <section className="container-section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Respuestas a las dudas más comunes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">¿Cuál es la política de cancelación?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Si cancelas con más de 30 días de antelación, se te devolverá el 100% del importe (excepto gastos de gestión). Entre 15 y 30 días, el 50%. Con menos de 15 días, no hay devolución.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">¿Se admiten mascotas?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sí, admitimos mascotas con un suplemento de 30€ por estancia. Por favor, infórmanos con antelación si vas a venir con tu mascota.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">¿Hay que pagar fianza?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sí, solicitamos una fianza de 200€ que se devolverá íntegramente al finalizar la estancia, siempre que no haya desperfectos.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">¿Qué incluye el precio?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              El precio incluye alojamiento, ropa de cama, toallas, agua, luz, calefacción y limpieza final. No incluye servicio de limpieza diario ni desayuno, que pueden contratarse aparte.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}