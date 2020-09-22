import React, { Component } from 'react';

class RequestApi extends Component {
  constructor() {
    super();
    this.fetchDog = this.fetchDog.bind(this);
    this.renderDog = this.renderDog.bind(this);
    this.state = {
      dogObj: undefined,
      loading: true
    }  
  }

  async fetchDog() {
    this.setState(
      {loading: true},
      async() => {
        const requestApi = await fetch('https://dog.ceo/api/breeds/image/random')
        const requestObj = await requestApi.json();
        console.log(requestObj.message)
        this.setState({
          loading: false,
          dogObj: requestObj,
        })
      })
  }

  componentDidMount() {
    this.fetchDog()
  }

  renderDog() {
    const { dogObj, loading } = this.state
    return (
      <div>
      <img src={dogObj.message} />
      <button onClick={this.fetchDog}>Next Dog!</button>
    </div> 
    );
  }

  render() {
    const { dogObj , loading } = this.state
    const loadingElement = <h2>Loading...</h2>
    
      if (this.state.loading === true) return loadingElement;
      return (
        <div>
          {this.renderDog()}  
        </div>
      )
  }
}

export default RequestApi;
