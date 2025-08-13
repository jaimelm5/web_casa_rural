# Casa Rural Toledo - Website

Este proyecto es una página web para una casa rural ubicada en Toledo, España. La web está diseñada para mostrar visualmente las fotos de la casa, su localización, información de contacto y un calendario de disponibilidad con precios.

## Características principales

- Diseño moderno y atractivo con modo claro/oscuro
- Galería de imágenes de la casa
- Información detallada sobre la ubicación y atracciones cercanas
- Listado de servicios y comodidades
- Calendario de disponibilidad con precios por temporada
- Formulario de contacto
- Formulario de reserva
- Base de datos para gestionar reservas y disponibilidad

## Tecnologías utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion para animaciones
- Prisma como ORM
- PostgreSQL como base de datos
- React Hook Form para formularios
- Zod para validación
- Date-fns para manejo de fechas

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd casa-rural-toledo
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la base de datos:
   - Crea un archivo `.env` en la raíz del proyecto
   - Añade la URL de conexión a tu base de datos PostgreSQL:
   ```
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/casarural"
   ```

4. Ejecuta las migraciones de Prisma:
```bash
npx prisma migrate dev
```

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

- `/app`: Páginas y rutas de la aplicación
- `/components`: Componentes reutilizables
- `/prisma`: Esquema de la base de datos y migraciones
- `/lib`: Utilidades y funciones auxiliares
- `/public`: Archivos estáticos

## Despliegue

Para desplegar la aplicación en producción:

1. Construye la aplicación:
```bash
npm run build
```

2. Inicia el servidor:
```bash
npm start
```

## Próximas funcionalidades

- Integración con Google Calendar para sincronización de reservas
- Panel de administración completo
- Sistema de reseñas de huéspedes
- Blog con artículos sobre la zona

## Licencia

Este proyecto está bajo la licencia MIT.