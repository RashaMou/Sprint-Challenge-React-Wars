import React, { useState, useEffect } from 'react';

function StarWarsCard(props) {
  console.log('props', props)
  return (
    <div>
      <h2>{props.person.name}</h2>
      <p>{props.person.homeworld}</p>
    </div>
  )
}

export default StarWarsCard;

// {{props.card}.forEach((card, i) => {
//   return (
//   <h2 {card[i].name}/>
//   )
// })
// }