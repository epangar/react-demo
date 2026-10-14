
import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';
import { store } from './store';

import {
  agregarTarea,
  eliminarTarea,
  marcarComoCompletada,
} from './acciones';

import { Tarea } from './Tarea';

// Componente que utiliza Redux
const ListaTareas = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tareas = useSelector(
    (state: RootState) => state.tareas.tareas
  );

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleAgregarTarea = (
    evento: React.FormEvent<HTMLFormElement>
  ) => {
    evento.preventDefault();

    if (!titulo.trim() || !descripcion.trim()) {
      return;
    }

    dispatch(agregarTarea(titulo.trim(), descripcion.trim()));

    setTitulo('');
    setDescripcion('');
  };

  return (
    <section>
      <h1>Lista de tareas</h1>

      <form onSubmit={handleAgregarTarea}>
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(evento) => setDescripcion(evento.target.value)}
            required
          />
        </div>

        <button type="submit">Agregar tarea</button>
      </form>

      <div>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={(id) => dispatch(eliminarTarea(id))}
            marcarComoCompletada={(id) =>
              dispatch(marcarComoCompletada(id))
            }
          />
        ))}
      </div>
    </section>
  );
};

// Componente que proporciona el store de Redux
export const ListaTareasRedux = () => {
  return (
    <Provider store={store}>
      <ListaTareas />
    </Provider>
  );
};

export default ListaTareasRedux;
