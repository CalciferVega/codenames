import React from 'react'

function Turn(props){
    return(
        <section className={`turn-team ${props.team}`}>
            <article>
                <h2>Turno</h2>
                <h3>{`Equipo ${props.team ==='red' ? ' Rojo': 'Azul' }`}</h3>
            </article>
        </section>
        
    )
} 

export default Turn;





