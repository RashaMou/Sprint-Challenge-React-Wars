import React, {useState} from 'react';
import Planet from '../Planet'


function StarWarsCard(props) {
  // console.log('card props', props)
  return (
    <div>
      <h2>{props.person.name}</h2>
      <Planet planet={props.person.homeworld}/>
    </div>
  )
}

export default StarWarsCard;
