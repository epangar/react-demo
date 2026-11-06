import type { Episode } from "../types"

export const RickMortyEpisode = ({dataEpisode}: {dataEpisode: Episode[]}) => {
    console.log(dataEpisode)
    return (
        <>
        {(dataEpisode && dataEpisode.length) > 0  &&
            <div>
                Rick morty Episode
                 <ul>
                 {dataEpisode.map((location) =>{
                    return (
                        <li style={{'border':'1px solid blue','listStyle': 'none'}}>
                            <p>Name: {location.name}</p>
                           
                            
                        </li>
                    )
                 })}
                 </ul>
            </div>}
        </>
    )
}