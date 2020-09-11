import React, {Component} from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'
import Image from './Image'
import PropTypes from 'prop-types'

class Pokedex extends Component {
  render() {
    
    return (
      
      <div className='content'>
        <header><h1> Pokedex </h1></header> 
      {pokemons.map((pokemon, index) => {
        return (
         
          <div className={'pokemon'}>
            
          <div className='pokemon-card'>
          < Pokemon
            name={pokemon.name}
            type={pokemon.type}
            averageWeight={pokemon.averageWeight}
          />
          <Image source={pokemon.image} />
          </div>
          </div>
        )
      })}
    </div>
    )
  }
}

Pokedex.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.number,
  source: PropTypes.node
}

export default Pokedex