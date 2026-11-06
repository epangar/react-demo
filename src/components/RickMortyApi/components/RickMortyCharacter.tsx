import type { Character } from "../types"

export const RickMortyCharacter = ({dataCharacter}: { dataCharacter: Character[]}) => {
    console.log(dataCharacter)
    return (

        <>
        {(dataCharacter && dataCharacter.length > 0)  && 
            <div>
                Rick morty Character

                <ul>
                 {dataCharacter.map((location) =>{
                    return (
                        <li style={{'border':'1px solid blue','listStyle': 'none'}}>
                            <p>Name: {location.name}</p>
                            <p>Species: {location.species}</p>
                            <p>Status: {location.status}</p>
                            
                        </li>
                    )
                 })}
                 </ul>
            </div>
        }
        </>
        
    )
}