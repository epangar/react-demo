import { useReducer } from "react";


interface action {
    type: string
}

interface isOn {
    on: boolean;
}

export const UseReducerComponent =()=>{

    

    const reducer =(state: isOn, action: action)=>{
    
        switch(action.type){
            case 'toggle':
                return {
                    on: !state.on
                }
            default:
                throw new Error('Acción desconocida');
        }
    }

    const [buttonState, setButtonState] = useReducer( reducer, {on: false})

    const handleClick =(input: action)=>{
        setButtonState(input)
    }
    
    return (
        <>
        
            <h4>useReducer</h4>

            <p>Estado: {buttonState.on ? 'ON' : 'OFF'}</p>

            <button onClick={()=>handleClick({type:'toggle'})}>Change</button>

        </>
    )
}