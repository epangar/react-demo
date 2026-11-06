import type { Location } from "../types"

export const RickMortyLocation = ({dataLocation}:{dataLocation:Location[]}) => {
    
    console.log(dataLocation)
    return (
        <>
            {(dataLocation && dataLocation.length > 0) &&
            
            <div>
                Rick & Morty Locations
                 {/* <p>{JSON.stringify(dataLocation)}</p> */}
                 
                 <ul>
                 {dataLocation.map((location) =>{
                    return (
                        <li style={{'border':'1px solid blue','listStyle': 'none'}}>
                            <p>Name: {location.name}</p>
                            <p>Type: {location.type}</p>
                            {location.dimension !== 'unknown' && <p>{location.dimension}</p>}
                        </li>
                    )
                 })}
                 </ul>
            </div>
            }
        </>
    )
}