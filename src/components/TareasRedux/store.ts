
import { configureStore, type UnknownAction } from '@reduxjs/toolkit';
import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  MARCAR_COMO_COMPLETADA,
} from './acciones';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

interface Estado {
  tareas: Tarea[];
}

const estadoInicial: Estado = {
  tareas: [],
};

const reducer = (
  estado: Estado = estadoInicial,
  accion: UnknownAction
): Estado => {
  switch (accion.type) {
    case AGREGAR_TAREA: {
      if (
        typeof accion.titulo !== 'string' ||
        typeof accion.descripcion !== 'string'
      ) {
        return estado;
      }

      return {
        ...estado,
        tareas: [
          ...estado.tareas,
          {
            id: Date.now(),
            titulo: accion.titulo,
            descripcion: accion.descripcion,
            completada: false,
          },
        ],
      };
    }

    case ELIMINAR_TAREA: {
      if (typeof accion.id !== 'number') {
        return estado;
      }

      return {
        ...estado,
        tareas: estado.tareas.filter(
          (tarea) => tarea.id !== accion.id
        ),
      };
    }

    case MARCAR_COMO_COMPLETADA: {
      if (typeof accion.id !== 'number') {
        return estado;
      }

      return {
        ...estado,
        tareas: estado.tareas.map((tarea) =>
          tarea.id === accion.id
            ? { ...tarea, completada: true }
            : tarea
        ),
      };
    }

    default:
      return estado;
  }
};

export const store = configureStore({
  reducer: {
    tareas: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
