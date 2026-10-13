import { useLocation } from 'react-router-dom';

export const UseLocationComponent =()=>{

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    
    return (
        <div>
            <h4>UseLocation</h4>

            <p>{location.pathname}</p>
                
            <ul>
                {Array.from(params.entries()).map(([key, value]) => (
                <li key={key}>
                    <strong>{key}</strong>: {value}
                </li>
                ))}
            </ul>
            
        </div>
    )
}