import { useCallback, useState, useMemo } from 'react';
import RickMortyAPICalls from '../api/apiCalls'
import { RickMortyLocation } from './RickMortyLocation';
import { RickMortyEpisode } from './RickMortyEpisode';
import { RickMortyCharacter } from './RickMortyCharacter';
import type { Episode, Character, FormData, Location } from '../types';

export const RickMortyHome =()=>{

    const API = useMemo(()=>new RickMortyAPICalls, []);
    //const [category, setCategory] = useState<string>('location')
    const [data, setData] = useState<Location[] | Episode[] | Character[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        episode: '',
        category: 'location',
        species: '',
        type: '',
        status: ''
    });



    const handleCall = useCallback(async (dataParams?: FormData) =>{
        console.log(dataParams)
        let data; 
         console.log(data)
        
        switch(formData.category){
            case 'location':
                data = await API.getLocations(dataParams);
                break
            case 'episode':
                data = await API.getEpisodes(dataParams);
                break
            case 'character':
                data = await API.getCharacters(dataParams);
                break
        }
        
        setData(data.results)
       
    }, [formData.category, API])


    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        handleCall(formData)
    }
    const handleFormChange = (e: {target: {name: string, value: string}}) =>{
        setFormData({...formData, 
            [e.target.name] :e.target.value
        })
    }

    // const dataInputHandling = (dataInput: FormData): FormData =>{
    //     console.log(dataInput)
    //     // handleCall( dataCharacter)
    //     return dataInput
    // }

    return (
        <div>
            <h2>Rick and Morty API</h2>

            <form style={{"border": "2px solid red", "display":"flex", "flexFlow":"column","maxWidth": "200px", "margin": "auto"}}>

                <select name="category" value={formData.category} onChange={handleFormChange}>
                    <option value={'location'}>Location</option>
                    <option value={'episode'}>Episodes</option>
                    <option value={'character'}>Characters</option>
                </select>

                <p>Name: <input name="name" onChange={handleFormChange} value={formData.name} type="text"></input></p>
                {formData.category === "character" && <p>Species: <input name="species" onChange={handleFormChange} value={formData.species}   type="text"></input></p>}
                {formData.category !== "episode" && <p>Type: <input name="type" onChange={handleFormChange} value={formData.type}   type="text"></input></p>}
                {formData.category === "episode" && <p>Episode code: <input name="episode" onChange={handleFormChange} value={formData.episode}   type="text"></input></p>}
                {formData.category === "character" &&
                <select name="status" onChange={handleFormChange} value={formData.status}  >
                    <option value={'alive'}>Alive</option>
                    <option value={'dead'}>Dead</option>
                    <option value={'unknown'}>Unknown</option>
                </select>}

                
                <button onClick={handleSubmit}>Call Api</button>

            </form>

            {(data !== undefined && data.length > 0) && 
             (formData.category === 'location' && <RickMortyLocation dataLocation={data as Location[]}/>) ||
             (formData.category === 'episode' && <RickMortyEpisode dataEpisode={data as Episode[]}/>  ) ||
             (formData.category === 'character' && <RickMortyCharacter dataCharacter={data as Character[]}/>) 
            }
                      
             
            

        </div>
    )
}