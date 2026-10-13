import {useRef} from 'react'

export const UseRefComponent =()=>{
    const contadorRef = useRef(0);

    const handleIncrementar =()=>{
        contadorRef.current++;
        console.log(`Contador: ${contadorRef.current}`);
    }

    return (
        <div>
            <p>Abre la consola para ver el contador</p>
            <button onClick={handleIncrementar}>Incrementar</button>
        </div>
    )
}