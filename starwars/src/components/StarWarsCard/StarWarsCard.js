import React from 'react'
import Planet from '../Planet'
import Films from './../Films'
import {CharacterCard} from './StarWarsCardStyles'


function StarWarsCard(props) {
  // console.log('card props', props)
  return (
    <CharacterCard>
      <h2>{props.person.name}</h2>
      <div className='card-details'>
        <Planet planet={props.person.homeworld}/>
        <p><span className='attribute'>Gender: </span>{props.person.gender}</p>
        <p><span className='attribute'>Height: </span>{props.person.height}</p>
        <p><span className='attribute'>Hair color: </span>{props.person.hair_color}</p>
        {/* <Films film={props.person.films}/> */}
      </div>
    </CharacterCard>
  )
}

export default StarWarsCard
