import React, {Component} from 'react'
 

class Pokemon extends Component {
  render() {
    const { name, type , averageWeight:{value, measurementUnit}} = this.props
    return (
      <div>
      <div>
      {`${name} ${type} ${value} ${measurementUnit}`}
      </div>
      </div>
    )

      

  }
}

export default Pokemon