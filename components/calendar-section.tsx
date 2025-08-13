"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale";
import { format, addDays, isSameMonth, isSameDay, isWithinInterval } from "date-fns";
import { CalendarDays, Info } from "lucide-react";
import { DateRange } from "react-day-picker";

const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(undefined);

  // Example booked dates (in a real app, these would come from the database)
  const bookedDates = [
    { startDate: new Date(2023, 6, 10), endDate: new Date(2023, 6, 15) },
    { startDate: new Date(2023, 6, 20), endDate: new Date(2023, 6, 25) },
    { startDate: new Date(2023, 7, 5), endDate: new Date(2023, 7, 10) },
    { startDate: new Date(2023, 7, 15), endDate: new Date(2023, 7, 20) },
  ];

  // Function to check if a date is booked
  const isDateBooked = (date: Date) => {
    return bookedDates.some((booking) =>
      isWithinInterval(date, {
        start: booking.startDate,
        end: booking.endDate,
      })
    );
  };

  // Function to get the price for a date (example implementation)
  const getPriceForDate = (date: Date) => {
    const month = date.getMonth();
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    
    // Summer months (June, July, August)
    if (month >= 5 && month <= 7) {
      return isWeekend ? 280 : 250;
    }
    
    // Spring/Fall months (April, May, September, October)
    if (month >= 3 && month <= 4 || month >= 8 && month <= 9) {
      return isWeekend ? 220 : 180;
    }
    
    // Winter months and other months
    return isWeekend ? 180 : 150;
  };

  // Custom day rendering
  const renderDay = (day: Date) => {
    const isBooked = isDateBooked(day);
    const price = getPriceForDate(day);
    
    return (
      <div className="relative h-full w-full p-2">
        <div className="text-center">
          {format(day, "d")}
          {!isBooked && (
            <div className="text-xs mt-1 font-medium text-primary">
              {price}€
            </div>
          )}
        </div>
        {isBooked && (
          <div className="absolute inset-0 bg-red-100 dark:bg-red-900/20 rounded-md opacity-50 pointer-events-none">
            <div className="flex items-center justify-center h-full">
              <span className="text-xs text-red-600 dark:text-red-400 font-medium">Ocupado</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="container-section bg-white dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Calendario de disponibilidad</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
          Consulta las fechas disponibles y los precios por noche
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-center mb-6">
            <CalendarDays className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-xl font-semibold">Selecciona tus fechas</h3>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <Calendar
                mode="range"
                selected={selectedRange}
                onSelect={(range) => setSelectedRange(range)}
                locale={es}
                month={currentDate}
                onMonthChange={setCurrentDate}
                className="rounded-md border border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-900"
                disabled={[
                  { before: new Date() },
                  (date) => isDateBooked(date),
                ]}
              />
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-white dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 p-6">
                <h4 className="text-lg font-semibold mb-4">Resumen de tu selección</h4>
                
                {selectedRange?.from ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Fecha de entrada:</p>
                      <p className="font-medium">{selectedRange.from ? format(selectedRange.from, "PPP", { locale: es }) : "No seleccionada"}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Fecha de salida:</p>
                      <p className="font-medium">{selectedRange.to ? format(selectedRange.to, "PPP", { locale: es }) : "No seleccionada"}</p>
                    </div>
                    
                    {selectedRange.from && selectedRange.to && (
                      <>
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">Duración de la estancia:</p>
                          <p className="font-medium">
                            {Math.ceil((selectedRange.to.getTime() - selectedRange.from.getTime()) / (1000 * 60 * 60 * 24))} noches
                          </p>
                        </div>
                        
                        <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-md">
                          <p className="text-sm font-medium">Para confirmar precio y disponibilidad, por favor utiliza el formulario de reserva que encontrarás más abajo.</p>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="flex items-start space-x-3 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Selecciona tus fechas de entrada y salida en el calendario para ver el resumen de tu estancia.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-100 dark:bg-red-900/50 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Fechas no disponibles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary/20 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Fechas seleccionadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;