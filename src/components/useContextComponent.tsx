import { createContext, useContext } from "react"

const Theme = createContext('claro')

export const UseContextComponent = () => {


    return (
        <>  
        <Theme.Provider value="oscuro">
            <p>Padre. value oscuro</p>
            <Child/>
        </Theme.Provider>
        </>
    )
}

const Child = () =>{
    const childTema = useContext(Theme);
    return (
        <div className="use-context-child">
            <p>Child (al cargar usa tema claro)</p>
            Tema: {childTema}
        </div>
    )
}