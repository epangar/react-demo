export const Condicional =()=>{
    return (
        <div>
            <h4>Condicional</h4>

            <p>Múltiplos de 3 = Fizz</p>
            <p>Múltiplos de 5 = Buzz</p>
            <p>Múltiplos de 3 y 5 = FizzBuzz</p>
            <p>Otros = Número</p>
            <ul>

                {new Array(20).fill('').map((e,p)=>{let answer, color;                    
                    if((p+1)%15===0){
                        answer = "FizzBuzz"
                        color = 'red'
                    } else if((p+1)%3===0){
                        answer = "Fizz"
                        color = 'orange'
                    } else if((p+1)%5===0){
                        answer = "Buzz"
                        color = 'green'
                    } else {
                        answer = (p+1).toString()
                        color = 'blue'
                    }
                        return <li key={`${p+1+e}`} style={{ color: color }}>{answer}</li>
                    })
                }

            </ul>
        </div>
    )
} 

