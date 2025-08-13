export type Room = {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  images: string[];
};

export const mockRooms: Room[] = [
  {
    id: 'room-1',
    name: 'Suite Principal',
    description: 'Suite amplia con vistas al campo',
    pricePerNight: 120,
    maxGuests: 2,
    images: ['/images/room1-1.jpg', '/images/room1-2.jpg'],
  },
  {
    id: 'room-2',
    name: 'Habitación Familiar',
    description: 'Ideal para familias, cerca del jardín',
    pricePerNight: 150,
    maxGuests: 4,
    images: ['/images/room2-1.jpg', '/images/room2-2.jpg'],
  },
];

export type Availability = {
  date: string; // ISO yyyy-mm-dd
  available: boolean;
  price?: number;
};

export const mockAvailability: Availability[] = [
  { date: '2025-08-15', available: true, price: 120 },
  { date: '2025-08-16', available: false },
  { date: '2025-08-17', available: true, price: 130 },
];
