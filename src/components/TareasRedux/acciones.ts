export const AGREGAR_TAREA = 'AGREGAR_TAREA';
export const ELIMINAR_TAREA = 'ELIMINAR_TAREA';
export const MARCAR_COMO_COMPLETADA = 'MARCAR_COMO_COMPLETADA';

export const agregarTarea = (titulo:string, descripcion:string) =>{
    return {
        type: AGREGAR_TAREA,
        titulo,
        descripcion
    }
}

export const eliminarTarea = (id: number) => {
  return {
    type: ELIMINAR_TAREA,
    id,
  };
};

export const marcarComoCompletada = (id: number) => {
  return {
    type: MARCAR_COMO_COMPLETADA,
    id,
  };
}; 