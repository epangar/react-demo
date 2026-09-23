import { useState } from "react"

export const UseStateComponent = () => {

    const [counter, setCounter] = useState<number>(0)

    const handleClick = (value: number) => {
        setCounter((prevCounter) => prevCounter + value)
    }

    return (
        <div>
            <h4>UseState</h4>

            <p> Current value: {counter}</p>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(-1)}>-1</button>
        </div>
    )
}