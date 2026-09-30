import { useEffect, useState } from 'react';
import Clock from 'react-clock';


const Reloj: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Clock value={date} />
    </div>
  );
};

export default Reloj;