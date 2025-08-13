import { isMock } from './env';
import { mockRooms, mockAvailability, Room, Availability } from './mockData';

// Implementación mock. En “real” llamarías a Prisma aquí.
export async function getRooms(): Promise<Room[]> {
  if (isMock) return mockRooms;
  throw new Error('DB no configurada. Activa MOCK_MODE o implementa Prisma.');
}

export async function getAvailability(): Promise<Availability[]> {
  if (isMock) return mockAvailability;
  throw new Error('DB no configurada. Activa MOCK_MODE o implementa Prisma.');
}
