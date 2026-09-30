import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';  
 
interface Evento {
  title: string;
  start: string;
}

export const CalendarComponent = () => {
  const eventos: Evento[] = [
    { title: 'Evento 1', start: '2026-07-01' },
    { title: 'Evento 2', start: '2026-07-05' },

  ];

  return (
    <FullCalendar
    plugins={[dayGridPlugin]} 
      initialView='dayGridMonth'
      weekends={true}
      locale='es'
      events={eventos}
    />
  );
};
