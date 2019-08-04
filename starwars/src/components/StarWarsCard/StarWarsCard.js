import React from 'react'
import Planet from '../Planet'
import Films from './../Films'
import {CharacterCard} from './StarWarsCardStyles'
import PhotoButton from './PhotoButton';


function StarWarsCard(props) {
  // console.log('card props', props)
  return (
    <CharacterCard>    
      <div className='card-details-container'>
        <div className='character-header-container'>
          <h2>{props.person.name}</h2>
        </div>
        <div className='card-details'>
          <Planet planet={props.person.homeworld}/>
          <p><span className='attribute'>Gender: </span>{props.person.gender}</p>
          <p><span className='attribute'>Height: </span>{props.person.height}</p>
          <p><span className='attribute'>Hair color: </span>{props.person.hair_color}</p>
          {/* <Films film={props.person.films}/> */}
        </div>
        <div className='photo-button'>
          <PhotoButton name={props.person.name}/>
        </div>
      </div>
    </CharacterCard>
  )
}

export default StarWarsCard
