import React, {Component} from 'react'
import Pokemon from "./Pokemon"
import pokemons from './data'

class Image extends Component {
  render() {
  
    return <img src={this.props.source} />
  }
}

export default Image