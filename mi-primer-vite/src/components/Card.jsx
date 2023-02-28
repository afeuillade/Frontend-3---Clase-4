//rafce da la funcion ya armada (React arrow function)
//rcc hace el extends
import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
        <h3>Titulo de la Card: Elemento n° {props.elemento}</h3>
    </div>
  )
}

export default Card