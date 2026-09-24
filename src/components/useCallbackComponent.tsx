import { memo, useCallback, useState } from "react";

type ChildProps = { onAdd: (n:number) => void}

const ChildButton = memo( function ChildButton ({onAdd}:ChildProps){
    console.log("ChildButton se renderiza");
    return <button onClick={()=>onAdd(1)}> +1 (hijo)</button>
})


export const UseCallbackComponent =()=>{

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('tomato')


    // Guardamos "la receta" para sumar: misma identidad mientras no cambien deps.
    const add = useCallback((n: number)=>{
        setCount( c => c + n)// forma funcional: no depende de "count"
    }, []) // sin dependencias: estable

    return (
        <>
            <h4>UseCallBack</h4>
            <h3 style={{color}}> Clicks: {count}</h3>

            <ChildButton onAdd={add}/>

            <button onClick={()=> setColor(c => c === 'tomato' ? 'skyblue' : 'tomato')}>
                Cambiar color
            </button>
        </>
    )
}