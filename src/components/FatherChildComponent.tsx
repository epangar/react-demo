import { useState, type ChangeEvent } from "react"

export const Father =()=>{
    const [sendToChild, setSendToChild] = useState<string>('') 
    const [child, setChild] = useState<number>() 

    const handleSetSendToChild =(e:ChangeEvent<HTMLInputElement>)=>{
        setSendToChild(e.target.value)
    }

    const handleReceiveDataFromChild = (value:number) =>{
        setChild(value)
    }
    return (
        <div style={{border: '3px solid green'}}>
            <p>Father</p>

            <p>Fill this text to send it to Child: </p>
            <input onChange={handleSetSendToChild}></input>

            <p>Child value: {child}</p>

             
            <Child receiveFromFather={sendToChild} sendToFather={handleReceiveDataFromChild}/>
        </div>
    )
}

interface ChildCommunication {
    receiveFromFather: string; 
    sendToFather: (value: number) => void
}


export const Child =({receiveFromFather, sendToFather}: ChildCommunication)=>{
    const [childValue, setChildValue] = useState<number>(0) 
    
    const handleChildValue = () =>{
        setChildValue(childValue + 1)
        handleSendChildToFather(childValue)
    } 

    const handleSendChildToFather =(value:number)=>{
        sendToFather(value)
    }
    return (
        <div style={{border:'1px solid purple', maxWidth: '50%', margin:'auto'}}>
            <p>Child</p>

            <p>The Father's value is:  {receiveFromFather}</p>

            <button onClick={handleChildValue}>Send +1 to Father</button>
        </div>
    )
}

export const FatherChildComponent =()=>{
    return (
        <div>
            <h1>Father - Child comunication</h1>

            <Father/>
        </div>
    )
}