import React from 'react'
import Button from '../Button'

const Card = ({name, email, btn}) => {
  return (
        <div className="container">
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

            <div>
                <Button name={btn}/>
            </div>
        </div>
  )
}

export default Card
