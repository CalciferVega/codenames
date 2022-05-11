import React from 'react'

function Score(props){
    return(
        <section className='scoreBoard'>
            <article className="scores redteam">
                <h3>Equipo Rojo</h3>
                <h4>{props.redscore}</h4>
            </article>
            <article className="scores blueteam">
                <h3>Equipo Azul</h3>
                <h4>{props.bluescore}</h4>
            </article>
        </section>
        
    )
} 

export default Score;





