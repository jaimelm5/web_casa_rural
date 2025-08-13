"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { DateRange } from "react-day-picker";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es obligatorio" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(9, { message: "Teléfono inválido" }),
  guests: z.number().min(1, { message: "Mínimo 1 huésped" }).max(8, { message: "Máximo 8 huéspedes" }),
  startDate: z.date({ required_error: "La fecha de entrada es obligatoria" }).optional(),
  endDate: z.date({ required_error: "La fecha de salida es obligatoria" }).optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guests: 2,
    },
  });
  
  // Update the form value when date range changes
  const onDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range);
    if (range?.from) {
      setValue("startDate", range.from);
    }
    if (range?.to) {
      setValue("endDate", range.to);
    }
  };
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form data:", data);
    
    toast.success("Solicitud enviada correctamente. Te contactaremos pronto para confirmar tu reserva.");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nombre completo *
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Teléfono *
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Número de huéspedes *
          </label>
          <select
            id="guests"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
              errors.guests ? "border-red-500" : "border-gray-300"
            }`}
            {...register("guests", { valueAsNumber: true })}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "persona" : "personas"}
              </option>
            ))}
          </select>
          {errors.guests && (
            <p className="mt-1 text-sm text-red-500">{errors.guests.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Fechas de estancia *
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                "w-full flex items-center justify-between px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700",
                !dateRange?.from && "text-gray-500",
                (errors.startDate || errors.endDate) && "border-red-500"
              )}
            >
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "PPP", { locale: es })} - {format(dateRange.to, "PPP", { locale: es })}
                  </>
                ) : (
                  format(dateRange.from, "PPP", { locale: es })
                )
              ) : (
                <span>Selecciona las fechas</span>
              )}
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={onDateRangeChange}
              locale={es}
              disabled={[{ before: new Date() }]}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {(errors.startDate || errors.endDate) && (
          <p className="mt-1 text-sm text-red-500">Debes seleccionar las fechas de entrada y salida</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
          {...register("message")}
          placeholder="Información adicional, peticiones especiales, etc."
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar reserva"
          )}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;