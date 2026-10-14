
import type { Tarea as TareaType } from './store';

interface TareaProps {
  tarea: TareaType;
  eliminarTarea: (id: number) => void;
  marcarComoCompletada: (id: number) => void;
}

export const Tarea = ({
  tarea,
  eliminarTarea,
  marcarComoCompletada,
}: TareaProps) => {
  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>{tarea.descripcion}</p>

      <p>
        Estado: {tarea.completada ? 'Completada' : 'Pendiente'}
      </p>

      <button onClick={() => eliminarTarea(tarea.id)}>
        Eliminar
      </button>

      <button
        onClick={() => marcarComoCompletada(tarea.id)}
        disabled={tarea.completada}
      >
        Marcar como completada
      </button>
    </div>
  );
};
