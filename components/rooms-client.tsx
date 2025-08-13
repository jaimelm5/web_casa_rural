'use client';

import { useEffect, useState } from 'react';

type Room = {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  images: string[];
};

export default function RoomsClient() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/rooms')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar habitaciones');
        return res.json();
      })
      .then(setRooms)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando habitaciones...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h2>Habitaciones</h2>
      {rooms.map((r) => (
        <article key={r.id} style={{ marginBottom: 16 }}>
          <h3>{r.name}</h3>
          <p>{r.description}</p>
          <p>{r.pricePerNight} €/noche · {r.maxGuests} huéspedes</p>
        </article>
      ))}
    </section>
  );
}
