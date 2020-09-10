import React, {Component} from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'
import Image from './Image'

class Pokedex extends Component {
  render() {
    console.log(pokemons[0].averageWeight.value)
    return (
      <div>
        <h1> Pokedex </h1>
      {pokemons.map((pokemon) => {
        return (
          <div>
          < Pokemon
            name={pokemon.name}
            type={pokemon.type}
            averageWeight={pokemon.averageWeight}
          />
          <Image source={pokemon.image}/>
          </div>
        )
      })}
    </div>
    )
  }
}

export default Pokedex