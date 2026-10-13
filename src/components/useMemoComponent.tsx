import { useMemo, useState } from "react"

export const UseMemoComponent = ()=>{
    console.log("Renderizando UseMemoComponent")
    

    const [counter, setCounter] = useState<number>(0)
    const [otroEstado, setOtroEstado] = useState<number>(0)


    const resultado = useMemo(()=>{
        //Simulamos un cálculo costoso
        let answer =0;
        console.log("useMemo ejecutado")
        for(let i = 0; i < 10000000; i++){
            answer = answer + 1;
        }
        return answer;
    }, []) // No depende de ninguna variable, solo se ejecuta una vez

    return (
        <div>
            <h4>UseMemo</h4>

            <p> Contador: {counter}</p>
            <p> Otro estado: {otroEstado}</p>
            <p> Resultado: {resultado}</p>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button><button onClick={() => setOtroEstado(otroEstado + 1)}>Incrementar otro estado</button>

        </div>
    )
  
}