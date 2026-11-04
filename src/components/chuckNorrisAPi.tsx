import { useState } from "react";

export const ChuckNorrisApi = ()=>{

    const URL = 'https://api.chucknorris.io/jokes/random';
    const [joke, setJoke] = useState<string>('');

    const handleSetJoke = (input:string) => {
        setJoke(input)
    }

    const callAPI = async () =>{
        try {
            const response = await fetch(URL);

            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }   
            const result = await response.json();
            const finalJoke = result.value;
            handleSetJoke(finalJoke);
        } catch (error){
            console.log(error)
        }
    }


    return (
        <div>
            <button onClick={callAPI}>Call API</button>

            
            <p>{joke.length === 0 ? '' : 'Current joke:'}</p>
            <p>{joke}</p>

        </div>
    )
}