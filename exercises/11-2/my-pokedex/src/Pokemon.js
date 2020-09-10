import React, {Component} from 'react'
 

class Pokemon extends Component {
  render() {
    const { name, type , averageWeight:{value, measurementUnit}, image} = this.props
    return (
      <div>
      {`${name} ${type} ${value} ${measurementUnit}`}
      </div>
    )

      

  }
}

export default Pokemon