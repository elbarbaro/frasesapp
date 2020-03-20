import React from 'react';
import FormFrase from './FormFrase.js'
import TablaFrase from './TablaFrase.js'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {frases: []}
  }

  addFrase = (frase) => {
    this.setState({frases: [...this.state.frases, frase]})
  }

  sendFrases = () => {
    fetch('https://entyu88y85kul.x.pipedream.net', 
      {
        method: 'POST',
        body: JSON.stringify(this.state.frases),
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <FormFrase addFrase= { this.addFrase } sendFrases={ this.sendFrases }/>
        <TablaFrase frases={ this.state.frases }/>
      </div>
    );
  }
}

export default App;
