import React, {Component} from 'react'

class Image extends Component {
  render() {
  
    return <img src={this.props.source} alt='Gif animada de um pokemon' />
  }
}

export default Image