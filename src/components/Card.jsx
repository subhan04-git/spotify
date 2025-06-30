import React from 'react'

const Card = ({card}) => {
  return (
    <div className='card'>
        <img src={card.image} alt="" />
        <h2>{card.songName}</h2>
        <ul>
            {card.artist.map((ele,index)=>{
                return(
                    <li>{ele}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Card