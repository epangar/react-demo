import { useState, useEffect } from "react"


export const UseEffectComponent =()=>{

    type Color = "" | "Rojo" | "Azul" | "Verde" | "Amarillo"

    const [currentColor, setCurrentColor] = useState<Color>('');
    const [dateChanged, setDateChanged] = useState<string>(new Date().toDateString())

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDateChanged(new Date().toLocaleString());
    }, [currentColor]);

    const handleColor = (event: { target: { value: string; }; }) => {
        setCurrentColor(event.target.value as Color);
    }
    return (
        <>
            <h4>UseEffect</h4>

            <p>Último cambio: {dateChanged.toLocaleString()}</p>

            <select onChange={handleColor} value={currentColor}>
                <option value={"Rojo"}>Rojo</option>
                <option value={"Verde"}>Verde</option>
                <option value={"Amarillo"}>Amarillo</option>
                <option value={"Azul"}>Azul</option>
            </select>
        </>
    )
}