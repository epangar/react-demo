import { useState } from "react"
import { GraficoRechart } from "./GraficoRechart"
import { GraficoRechartSelector } from "./GraficoRechartSelector"
import {data} from './datapoint';
import {type DataPoint} from './datapoint';




export const RechartScreen =()=>{

    const [dataState, setDataState] = useState<DataPoint[]>(data)

    const handleDataChange = (name:string, newValue:number) =>{
        const newData : DataPoint[] = dataState.map(element =>{            
            if(element.name === name){
                return {  
                    name: element.name, 
                    uv: newValue
                }
            } else {
                return element;
            }
        })

        setDataState(newData)
    }

    const onDataChange =(name:string, newValue:number)=>{
        handleDataChange(name, newValue)
    }

    const obtainValue = (option:string):number=>{
        const foundElement = dataState.find(element => element.name === option)
        return foundElement ? foundElement.uv : 0;
    }


    return (
        <section>
            <GraficoRechart input={dataState}/>
            <GraficoRechartSelector obtainValue={obtainValue}changeData={onDataChange}/>

        </section>
    )
}
