import React, { FC } from 'react'

type CardType = {
  label : string,
  title : string,
  picture : string,
}

const Card:FC<CardType> = ({ label, picture, title }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

export default Card