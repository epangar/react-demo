import { useState, type FormEvent } from "react"

type GraficoRechartSelectorProps = {
    changeData: (option: string, value: number) => void,
    obtainValue: (option: string) => number
}

export const GraficoRechartSelector=({changeData, obtainValue}: GraficoRechartSelectorProps)=>{

    const options =['A','B','C','D']

    const [currentOption, setCurrentOption] =useState<string>('A')
    const [currentValue, setCurrentValue] =useState<number>(2400)

    const handleChangeOption = (optionValue:string)=>{
        console.log("Cambiado la letra a ", optionValue)
        const value = obtainValue(optionValue);
        setCurrentOption(optionValue)
        setCurrentValue(value)
        
    }

    const handleChangeValue = (value:number)=>{
        setCurrentValue(value)
    }

    const handleSubmitForm=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        changeData(currentOption, currentValue)
    }
    

    return (
        <form onSubmit={handleSubmitForm}>
            <select 
                value={currentOption}
                onChange={ (event) => handleChangeOption(event.target.value)}>
                    {options.map((option, position)=> <option value={option} key={position}>{option}</option>)}
            </select>
            <input 
                type="number" 
                min={0} 
                max={2400} 
                value={currentValue}
                onChange={(event)=> handleChangeValue(parseInt(event.target.value))}></input>
            <button 
                type="submit">Update</button>
        </form>
        
    )
}