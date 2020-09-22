import React, { Component } from 'react';

class RequestApi extends Component {
  constructor() {
    super();
    this.fetchDog = this.fetchDog.bind(this);
    this.renderDog = this.renderDog.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
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

  saveLocalStorage() {
    localStorage.setItem('URL', this.state.dogObj.message)
  }

  renderDog() {
    const { dogObj, loading } = this.state
    return (
      <div>
      <img src={dogObj.message} />
      <button onClick={this.fetchDog}>Next Dog!</button>
      {this.saveLocalStorage()}
    </div> 
    );
    
  }

  render() {
    const { dogObj , loading } = this.state
    const loadingElement = <h2>Loading...</h2>
    const terrierElement = <p>Não renderiza, pois a raça é Terrier</p>
    
      if (this.state.loading === true)
        return loadingElement;
      else if (this.state.dogObj.message.includes('terrier'))
        return terrierElement;
      return (
        <div>
          {this.renderDog()}  
        </div>
      )
  }
}

export default RequestApi;

