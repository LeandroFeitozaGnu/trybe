import React, {Component} from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'
import Image from './Image'
import PropTypes from 'prop-types'

class Pokedex extends Component {
  render() {
    console.log(pokemons[0].averageWeight.value)
    return (
      
      <div className='content'>
         <h1> Pokedex </h1>
      {pokemons.map((pokemon, index) => {
        return (
         
          <div className={'pokemon'+index}>
            <br />
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