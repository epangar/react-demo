// Calendario.tsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface Evento {
  title: string;
  start: string;
}

const Calendario: React.FC = () => {
  const eventos: Evento[] = [
    { title: 'Evento 1', start: '2023-03-01' },
    { title: 'Evento 2', start: '2023-03-05' },

  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locale="es"
      events={eventos}
    />
  );
};

export default Calendario;
