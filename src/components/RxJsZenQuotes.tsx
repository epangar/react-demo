
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Cita {
  quote: string;
  author: string;
}

export const RxjsZenQuotes = () => {
  const [cita, setCita] = useState<Cita | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const subscription = from(
      axios.get<Cita>('https://dummyjson.com/quotes/random')
    )
      .pipe(map((response) => response.data))
      .subscribe({
        next: data => setCita(data),
        error: err => {
          console.error(err);
          setError(true);
        }
      });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h1>Cita aleatoria</h1>

      {!cita && !error && <p>Cargando...</p>}

      {error && <p>No se pudo cargar la cita.</p>}

      {cita && (
        <>
          <blockquote>{cita.quote}</blockquote>
          <p>— {cita.author}</p>
        </>
      )}
    </div>
  );
};
